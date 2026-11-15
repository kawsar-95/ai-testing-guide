# Research notes: What Is DevOps?

Page: `content/devops/what-is-devops.mdx`. Module: DevOps & Cloud. Date: 2026-11-15.

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): what DevOps is, its lifecycle and practices, the five DORA metrics, how a tester works in a DevOps team, and common mistakes. The reels after the text are another creator's videos and are not sources. Each fact in the text comes from the sources below. The first version of the page (2026-11-05) had the three sentences that open `## What it is`; they are still there.

`## Try it` is an exercise with invented data: the delivery map, the table of ten deployments, and the numbers worked out from it are the tutorial's own example, and the page says so. The definitions that the exercise applies are DORA's (S3). The DORA Quick Check link (`https://dora.dev/quickcheck/`) is the one that S3 links to; it answered 200 on 2026-11-15.

DORA is a research program led by a global team of researchers at Google (S7). The footer of every dora.dev page says that DORA is a program run by Google Cloud, but `scripts/devops_claimcheck.py` drops page footers, so the page cites the main text of S7. The dora.dev pages are licensed CC BY 4.0. The page quotes or paraphrases short passages and links each one.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | What is DevOps? (Amazon Web Services) | https://aws.amazon.com/devops/what-is-devops/ |
| S2 | What is DevOps? (Microsoft Learn) | https://learn.microsoft.com/en-us/devops/what-is-devops |
| S3 | DORA's software delivery performance metrics (DORA) | https://dora.dev/guides/dora-metrics/ |
| S4 | Capabilities: Test automation (DORA) | https://dora.dev/capabilities/test-automation/ |
| S5 | Capabilities: Test data management (DORA) | https://dora.dev/capabilities/test-data-management/ |
| S6 | Shift testing left with unit tests (Microsoft Learn) | https://learn.microsoft.com/en-us/devops/develop/shift-left-make-testing-fast-reliable |
| S7 | DORA's research program (DORA) | https://dora.dev/research/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity. | S1 | "DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity" |
| DevOps combines development (Dev) and operations (Ops) to unite people, process, and technology in application planning, development, delivery, and operations. | S2 | "DevOps combines development (Dev) and operations (Ops) to unite people, process, and technology in application planning, development, delivery, and operations" |
| DevOps enables coordination and collaboration between formerly siloed roles like development, IT operations, quality engineering, and security. | S2 | "DevOps enables coordination and collaboration between formerly siloed roles like development, IT operations, quality engineering, and security" |
| Under a DevOps model, development and operations teams are no longer siloed. | S1 | "Under a DevOps model, development and operations teams are no longer" |
| Sometimes the two teams are merged into a single team, whose engineers work across the entire application lifecycle, from development and test to deployment to operations. | S1 | "Sometimes, these two teams are merged into a single team where the engineers work across the entire application lifecycle, from development and test to deployment to operations" |
| In some DevOps models, quality assurance and security teams may also become more tightly integrated with development and operations, throughout the application lifecycle. | S1 | "In some DevOps models, quality assurance and security teams may also become more tightly integrated with development and operations and throughout the application lifecycle" |
| When security is the focus of everyone on a DevOps team, this is sometimes called DevSecOps. | S1 | "When security is the focus of everyone on a DevOps team, this is sometimes referred to as DevSecOps" |
| DORA is a research program, led by a global team of researchers at Google. | S7 | "The DORA research program and Core model are led by a global team of researchers at Google" |
| Traditionally: manual testing and code inspection. | S4 | "Traditionally, teams relied on manual testing and code inspection to verify systems" |
| Traditionally: in a separate phase after dev complete. | S4 | "These inspections and tests typically occurred in a separate phase after" |
| DORA recommends fast, reliable suites of automated tests, run in the continuous delivery pipeline. | S4 | "Create and curate fast, reliable suites of automated tests which are run as part of your continuous delivery pipelines" |
| Manual test activities such as exploratory testing run throughout the delivery process. | S4 | "Perform manual test activities such as exploratory testing, usability testing, and acceptance testing throughout the delivery process" |
| Traditionally, developers wait a long time after dev complete for feedback. | S4 | "developers have to wait a long time to get feedback on their changes" |
| With the recommended way, most of the developers' work is validated in minutes, instead of days or weeks. | S4 | "Developers have most of their work validated in a matter of minutes, instead of days or weeks" |
| "Tester" is a role, not necessarily a full-time job. | S4 | "is a role, not necessarily a full-time job" |
| DevOps influences the application lifecycle through its planning, development, delivery, and operations phases. | S2 | "DevOps influences the application lifecycle throughout its planning, development, delivery, and operations phases" |
| Each phase relies on the other phases, and the phases are not role-specific. | S2 | "Each phase relies on the other phases, and the phases aren't role-specific" |
| A DevOps culture involves all roles in each phase to some extent. | S2 | "A DevOps culture involves all roles in each phase to some extent" |
| Monitoring insights help the team mitigate issues in real time, and see how to improve the application in future development cycles. | S2 | "These insights help the team mitigate issues in real time and see how to improve the application in future development cycles" |
| Most DevOps practices are accomplished with proper tooling. | S1 | "Most of these practices are accomplished with proper tooling" |
| Frequent but small updates make each deployment less risky; the team can find the last deployment that caused an error. | S1 | "Frequent but small updates make each deployment less risky" |
| Frequent but small updates make each deployment less risky; the team can find the last deployment that caused an error. | S1 | "teams can identify the last deployment that caused the error" |
| Version control: managing code in versions, tracking revisions and change history, so that code is easy to review and recover. | S2 | "Version control is the practice of managing code in versions" |
| Version control: managing code in versions, tracking revisions and change history, so that code is easy to review and recover. | S2 | "tracking revisions and change history to make code easy to review and recover" |
| Continuous integration: developers regularly merge their changes into a central repository; automated builds and tests then run. | S1 | "Continuous integration is a software development practice where developers regularly merge their code changes into a central repository, after which automated builds and tests are run" |
| Continuous delivery: code changes are automatically built, tested, and prepared for a release to production. | S1 | "Continuous delivery is a software development practice where code changes are automatically built, tested, and prepared for a release to production" |
| Infrastructure as code: infrastructure is provisioned and managed with code and software development techniques, such as version control and continuous integration. | S1 | "Infrastructure as code is a practice in which infrastructure is provisioned and managed using code and software development techniques, such as version control and continuous integration" |
| Configuration management: managing the state of resources in a system, including servers, virtual machines, and databases. | S2 | "Configuration management refers to managing the state of resources in a system including servers, virtual machines, and databases" |
| Continuous monitoring: full, real-time visibility into the performance and health of the entire application stack. | S2 | "Continuous monitoring means having full, real-time visibility into the performance and health of the entire application stack" |
| DORA identified five software delivery performance metrics. | S3 | "DORA has identified five software delivery performance metrics" |
| Three measure throughput: how many changes can move through the system over a period of time. | S3 | "Throughput is a measure of how many changes can move through the system over a period of time" |
| Three measure throughput: how many changes can move through the system over a period of time. | S3 | "DORA uses three factors to measure software delivery throughput" |
| Two measure instability: how well the deployments go. | S3 | "Instability is a measure of how well the software deployments go" |
| Two measure instability: how well the deployments go. | S3 | "DORA uses two factors to measure software delivery instability" |
| Change lead time: the time for a change to go from committed to version control to deployed in production. | S3 | "The amount of time it takes for a change to go from committed to version control to deployed in production" |
| Deployment frequency: the number of deployments over a given period, or the time between deployments. | S3 | "The number of deployments over a given period or the time between deployments" |
| Failed deployment recovery time: the time to recover from a deployment that fails and requires immediate intervention. | S3 | "The time it takes to recover from a deployment that fails and requires immediate intervention" |
| Change fail rate: the ratio of deployments that require immediate intervention after the deployment, likely a rollback or a hotfix. | S3 | "The ratio of deployments that require immediate intervention following a deployment" |
| Change fail rate: the ratio of deployments that require immediate intervention after the deployment, likely a rollback or a hotfix. | S3 | "Likely resulting in a rollback of the changes or a" |
| Deployment rework rate: the ratio of deployments that are unplanned but happen as a result of an incident in production. | S3 | "The ratio of deployments that are unplanned but happen as a result of an incident in production" |
| DORA's research has repeatedly shown that speed and stability are not tradeoffs. | S3 | "research has repeatedly demonstrated that speed and stability are not tradeoffs" |
| Top performers do well across all five metrics, and low performers do poorly. | S3 | "Top performers do well across all five metrics, and low performers do poorly" |
| The metrics are best suited for measuring one application or service at a time. | S3 | "best suited for measuring one application or service at a time" |
| Mapping out the delivery process may help a team talk about its friction points. | S3 | "Have a conversation about the friction points in the delivery process" |
| Mapping out the delivery process may help a team talk about its friction points. | S3 | "Mapping out the delivery process may help facilitate this part of the process" |
| DORA suggests that the whole team commits to an improvement in the most significant constraint or bottleneck. | S3 | "Have the whole team commit to making an improvement in the most significant constraint or bottleneck" |
| A team can set a baseline with the DORA Quick Check, and later use it again to check its progress. | S3 | "current performance using the DORA Quick Check" |
| A team can set a baseline with the DORA Quick Check, and later use it again to check its progress. | S3 | "Use the DORA Quick Check, conversations, and team retrospectives to validate the progress" |
| The key to building quality into software is fast feedback on the impact of changes, throughout the software delivery lifecycle. | S4 | "The key to building quality into software is getting fast feedback on the impact of changes throughout the software delivery lifecycle" |
| DORA's research finds that teams do better when testers work alongside developers throughout development and delivery. | S4 | "research finds that teams do better when they" |
| DORA's research finds that teams do better when testers work alongside developers throughout development and delivery. | S4 | "Allow testers to work alongside developers throughout the software development and delivery process" |
| It is a good practice to pair testers with developers to create and evolve the suites of automated tests. | S4 | "a good practice to pair testers with developers to create and evolve the suites of automated tests" |
| Testers have a unique perspective on the system, because they understand how users interact with it. | S4 | "Testers have a unique perspective on the system because they understand how users interact with it" |
| Testers play an essential role in exploratory testing and usability testing, and help to curate the test suites. | S4 | "Testers also play an essential role performing exploratory testing and usability testing, as well as helping to curate test suites" |
| Developers should get feedback from automated tests in less than ten minutes, on workstations and from the CI system. | S4 | "Developers should be able to get feedback from automated tests in less than ten minutes both on local workstations and from the continuous integration system" |
| Faster unit tests run before slower acceptance tests, and both run before any manual testing. | S4 | "faster-running unit tests run before slower-running acceptance tests, and both are run before any manual testing" |
| The goal of shifting testing left is to move quality upstream, by doing testing tasks earlier in the pipeline. | S6 | "The goal for shifting testing left is to move quality upstream by performing testing tasks earlier in the pipeline" |
| A team can choose where in the DevOps process each test runs. | S6 | "Teams can select where in the DevOps process to run each test" |
| A test taxonomy classifies tests by their dependencies and the time they take to run. | S6 | "A DevOps test taxonomy classifies individual tests by their dependencies and the time they take to run" |
| L0, L1: unit tests, only the code in the assembly under test. | S6 | "L0 and L1 tests are unit tests, or tests that depend on code in the assembly under test and nothing else" |
| L2: functional tests that may also need other dependencies, like SQL or the file system. | S6 | "L2 are functional tests that might require the assembly plus other dependencies, like SQL or the file system" |
| L3: functional tests against testable service deployments. | S6 | "L3 functional tests run against testable service deployments" |
| L4: a restricted class of integration tests that run against production. | S6 | "L4 tests are a restricted class of integration tests that run against production" |
| Example rules: developers run L2 before they commit; a pull request fails if L3 fails; a deployment may be blocked if L4 fails. | S6 | "developers always run through L2 tests before committing, a pull request automatically fails if the L3 test run fails, and the deployment might be blocked if L4 tests fail" |
| When you find an error in an acceptance test or exploratory testing, add a unit test, so that it is caught faster, earlier, and cheaper next time. | S4 | "When you find an error in an acceptance test or during exploratory testing, add a unit test to make sure this error is caught faster, earlier, and cheaper next time" |
| All kinds of tests need test data, manual and automated. | S5 | "required by all kinds of tests throughout your test suite, including manual and automated tests" |
| Good test data lets you validate common or high-value user journeys, test edge cases, reproduce defects, and simulate errors. | S5 | "Good test data lets you validate common or high value user journeys, test for edge cases, reproduce defects, and simulate errors" |
| Successful teams follow three principles of test data. | S5 | "successful teams approach test data management with the following core principles" |
| Successful teams follow three principles of test data. | S5 | "Adequate test data is available to run full automated test suites" |
| Successful teams follow three principles of test data. | S5 | "Test data for automated test suites can be acquired on demand" |
| Successful teams follow three principles of test data. | S5 | "Test data does not limit or constrain the automated tests that teams can run" |
| Tests should be reliable: when they pass, you should be confident the software is releasable; a failure should indicate a real defect. | S4 | "Tests should be reliable: that is, when the tests pass we should be confident the software is releasable, and test failures should indicate a real defect" |
| In particular, don't tolerate flaky tests. | S4 | "In particular, don't tolerate flaky tests" |
| Ten reliable, fast, trustworthy tests are much better than hundreds that are hard to maintain and that nobody trusts. | S4 | "A test suite of ten tests that is reliable, fast, and trustworthy is much better than a test suite of hundreds of tests that is hard to maintain and that nobody trusts" |
| If a suite is expensive to maintain and unreliable, don't be afraid to prune it. | S4 | "If you have a test suite that is expensive to maintain and unreliable, don't be afraid to prune it down" |
| Manual regression testing is time-consuming and expensive, which makes it a bottleneck. | S4 | "Manual regression testing is time-consuming to execute and expensive to perform, which makes it a bottleneck in the process" |
| People are poor at repetitive tasks like manual regression tests. | S4 | "people are poor at repetitive tasks like manual regression tests" |
| Use the page object pattern to decouple your tests from the system under test. | S4 | "If every change to your UI causes multiple acceptance tests to fail, use the page object pattern to decouple your tests from the system under test" |
| Having the wrong proportion of unit and acceptance tests is a common pitfall. | S4 | "Having the wrong proportion of unit and acceptance tests" |
| A design goal of an automated test suite is to find errors as early as possible. | S4 | "A specific design goal of an automated test suite is to find errors as early as possible" |
| Copying production data introduces risk, because it might contain sensitive information. | S5 | "Copying production data introduces risk because it might contain sensitive information" |
| A full copy of the production database, instead of the relevant parts, is a common pitfall. | S5 | "The following pitfalls are common in test data management" |
| A full copy of the production database, instead of the relevant parts, is a common pitfall. | S5 | "Using a full copy of the production database, rather than identifying relevant or important portions" |
| A broad goal such as every application must deploy multiple times per day by year's end makes it more likely that teams game the metrics. | S3 | "Every application must deploy multiple times per day by year's end" |
| A broad goal such as every application must deploy multiple times per day by year's end makes it more likely that teams game the metrics. | S3 | "increases the likelihood that teams will try to game the metrics" |
| Comparing the metrics of a mobile app and a mainframe system can be misleading. | S3 | "Comparing metrics between vastly different applications (for example, a mobile app and a mainframe system) can be misleading" |
