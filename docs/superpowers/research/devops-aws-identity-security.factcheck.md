# Fact check: devops / aws-identity-security

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html; S2 https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html; S3 https://docs.aws.amazon.com/kms/latest/developerguide/overview.html; S4 https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / aws-identity-security (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "IAM users, roles, and policies, MFA, KMS, and Secrets Manager. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It is a topic list and a description of the page itself. It states no fact about a tool, product, command or number. |
| 1 | AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources | S1 | PASS | S1: "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources." |
| 2 | An IAM role is an IAM identity that you can create in your account that has specific permissions | S2 | PASS | S2: "An IAM role is an IAM identity that you can create in your account" and, in the terms list, "An IAM identity that you can create in your account that has specific permissions." |
| 3 | AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data | S3 | PASS | S3: "AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data." |
| 4 | AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles | S4 | PASS | S4: "helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles." |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / aws-identity-security (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "IAM and IAM roles, KMS, and Secrets Manager. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede names the topics and describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources | S1 | PASS | "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources" (the line breaks after "AWS" in the file). |
| 2 | An IAM role is an IAM identity that you can create in your account that has specific permissions | S2 | PASS | "An IAM identity that you can create in your account that has specific permissions." (S2 line 103). The intro says "An IAM role is an IAM identity that you can create in your account". |
| 3 | AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data | S3 | PASS | "AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data." (the line breaks after "create and"). |
| 4 | AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles | S4 | PASS | "AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / aws-identity-security (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "IAM and IAM roles, KMS, and Secrets Manager. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede lists the topics and describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources | S1 | PASS | "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources." (S1.txt lines 3-4; the sentence breaks across lines) |
| 2 | An IAM role is an IAM identity that you can create in your account that has specific permissions | S2 | PASS | "An IAM identity that you can create in your account that has specific permissions." (S2.txt line 103) |
| 3 | AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data | S3 | PASS | "AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data." (S3.txt lines 3-4) |
| 4 | AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles | S4 | PASS | "helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles." (S4.txt line 3) |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / aws-identity-security (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "IAM and IAM roles, KMS, and Secrets Manager. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line names the topics and describes the page itself. It states no fact about a tool, product, command or number. |
| 1 | AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources | S1 | PASS | S1: "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources." |
| 2 | An IAM role is an IAM identity that you can create in your account that has specific permissions | S2 | PASS | S2: "An IAM role is an IAM identity that you can create in your account that has specific permissions." |
| 3 | AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data | S3 | PASS | S3: "AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data." |
| 4 | AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles | S4 | PASS | S4: "Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles." |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 33 sources. Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-18)

# Fact check: devops / aws-identity-security (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | IAM identities, credentials, policies, KMS, Secrets Manager, practice run, read-along | none | N/A | Describes the page itself. |
| 2 | Lede | Page covers who may use AWS resources, IAM, KMS, Secrets Manager; run needs no AWS account | none | N/A | Describes the page and its own run. The links are to other pages of the site. |
| 3 | What it is | IAM is a web service that helps you securely control access to AWS resources | S1 | PASS | "web service that helps you securely control" |
| 4 | What it is | IAM controls who is authenticated (signed in) and authorized (has permissions) | S1 | PASS | "who is authenticated" |
| 5 | What it is | No charge to use IAM | S2 | PASS | "There is no charge to use IAM." |
| 6 | What it is | New account starts with one sign-in identity, the root user, with complete access | S1 | PASS | "you begin with one sign-in identity called the AWS account root user that has complete access to all AWS services and resources." |
| 7 | What it is | An IAM role is an IAM identity you can create in your account with specific permissions | S4 | PASS | "An IAM role is an IAM identity that you can create in your account" and "that has specific permissions." |
| 8 | What it is | A role is intended to be assumable by anyone who needs it | S4 | PASS | "intended to be assumable by anyone who needs it" |
| 9 | What it is | A role has no standard long-term credentials such as a password or access keys | S4 | PASS | "a role does not have standard long-term credentials such" |
| 10 | What it is | Assuming a role gives temporary security credentials for the role session | S4 | PASS | "temporary security credentials for your role session." |
| 11 | What it is | A policy is an object that defines permissions when associated with an identity or resource | S9 | PASS | "A policy is an object in AWS that, when associated with an identity or resource, defines their permissions." |
| 12 | What it is | AWS evaluates policies when an IAM principal makes a request | S9 | PASS | "AWS evaluates these policies when an IAM principal (user or role) makes a request." |
| 13 | What it is | Policy permissions decide allow or deny | S9 | PASS | "Permissions in the policies determine whether the request is allowed or denied." |
| 14 | What it is | AWS KMS is a managed service to create and control keys that encrypt and sign data | S17 | PASS | "AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data." |
| 15 | What it is | KMS keys are created, managed, used, deleted entirely within AWS KMS | S17 | PASS | "KMS keys are created, managed, used, and deleted entirely within AWS KMS." |
| 16 | What it is | KMS keys never leave the service unencrypted | S17 | PASS | "They never leave the service unencrypted." |
| 17 | What it is | Secrets Manager helps manage, retrieve, rotate credentials, tokens, keys, secrets | S24 | PASS | "helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles." |
| 18 | What it is | Replace hard-coded credentials with a runtime call | S24 | PASS | "You replace hard-coded credentials with a runtime call to the Secrets Manager service to retrieve credentials dynamically when you need them." |
| 19 | What it is | For AWS credentials AWS recommends IAM | S24 | PASS | "AWS credentials – We recommend AWS Identity and Access Management." |
| 20 | What it is | For encryption keys it recommends KMS | S24 | PASS | "Encryption keys – We recommend AWS Key Management Service." |
| 21 | How it works | Authentication matches sign-in credentials to a principal trusted by the account | S1 | PASS | "matching the sign-in credentials" |
| 22 | How it works | AWS strongly recommends not using the root user for everyday tasks | S1 | PASS | "We strongly recommend that you don't use the root user for everyday tasks." |
| 23 | How it works | Use root only for tasks needing root-level permissions | S7 | PASS | "Use the root user only to perform the tasks that require root-level permissions." |
| 24 | How it works | Cannot attach identity-based policies to root user | S9 | PASS | "You cannot attach identity-based policies to the root user" |
| 25 | How it works | MFA is enforced for root users by default | S7 | PASS | "While MFA is enforced for root users by default" |
| 26 | How it works | Adding it needs customer action at account creation or as prompted at sign-in | S7 | PASS | "it requires customer action to add MFA during the initial account creation or as prompted during sign-in." |
| 27 | How it works | MFA needs unique authentication from a supported mechanism in addition to sign-in credentials | S8 | PASS | "requires users to provide unique authentication from an AWS supported MFA mechanism in addition to their sign-in credentials" |
| 28 | How it works | Root user and IAM users can register up to eight MFA devices of any type | S8 | PASS | "Your AWS account root user and IAM users can register up to eight MFA devices of any type." |
| 29 | How it works | Only one MFA device is needed to sign in to the console or create a CLI session | S8 | PASS | "You only need one MFA device to sign in to the AWS Management Console or create a session through the AWS CLI." |
| 30 | How it works | AWS recommends phishing-resistant MFA such as passkeys and security keys | S8 | PASS | "We recommend that you use phishing-resistant MFA such as passkeys and security keys whenever possible." |
| 31 | How it works | Access keys are long-term credentials for an IAM user or root user | S6 | PASS | "Access keys are long-term credentials for an IAM user or the AWS account root user." |
| 32 | How it works | Must use access key ID and secret access key together | S6 | PASS | "You must use both the access key ID and secret access" |
| 33 | How it works | Secret access key can be retrieved only at creation | S6 | PASS | "The secret access key can be retrieved only at the time you create it." |
| 34 | How it works | Maximum of two access keys per user | S6 | PASS | "You can have a maximum of two access keys per user." |
| 35 | How it works | Best practice: use temporary credentials such as IAM roles instead of access keys | S6 | PASS | "As a best practice, use temporary security credentials (such as IAM roles) instead of creating long-term credentials like access keys." |
| 36 | How it works | Credentials in the shared credentials file are plaintext | S6 | PASS | "Access keys or credential information stored in the shared AWS credentials file are stored in plaintext." |
| 37 | How it works | Do NOT put keys in application files | S6 | PASS | "Do NOT put access keys or credential information" |
| 38 | How it works | Do NOT include files with keys in your project area | S6 | PASS | "Do NOT include files that contain access keys or" "credential information in your project area." |
| 39 | How it works | STS creates temporary credentials for trusted users | S5 | PASS | "You can use the AWS Security Token Service (AWS STS) to create and provide trusted users with temporary" |
| 40 | How it works | Temporary credentials are short-term | S5 | PASS | "Temporary security credentials are short-term, as the name implies." |
| 41 | How it works | Last from a few minutes to several hours | S5 | PASS | "They can be configured to last for anywhere from a few minutes to several hours." |
| 42 | How it works | After expiry AWS no longer recognizes them | S5 | PASS | "After the credentials expire, AWS no longer recognizes them" |
| 43 | How it works | Not stored with the user; generated dynamically | S5 | PASS | "not stored with the user but are generated dynamically and provided to the user when requested." |
| 44 | How it works | On EC2 or Lambda, AWS delivers the role's temporary credentials to the compute resource | S3 | PASS | "When you're building on an AWS compute service, such as Amazon EC2 or Lambda, AWS delivers the temporary credentials of an IAM role to that compute resource." |
| 45 | How it works | SDK applications discover and use these credentials | S3 | PASS | "Applications written using an AWS SDK will discover and use these temporary credentials" |
| 46 | How it works | At EC2 launch you specify a role to associate | S16 | PASS | "you specify an IAM role to associate with the instance." |
| 47 | How it works | Applications use role-supplied credentials to sign API requests | S16 | PASS | "can then use the role-supplied temporary credentials to sign API requests." |
| 48 | How it works | Only one role per EC2 instance at a time | S16 | PASS | "Only one role can be assigned to an Amazon EC2 instance at a time" |
| 49 | How it works | All applications on the instance share the role and permissions | S16 | PASS | "all applications on the instance share the same role and permissions." |
| 50 | How it works | IAM is eventually consistent | S1 | PASS | "eventually consistent" |
| 51 | How it works | Do not put IAM changes in critical, high-availability code paths | S1 | PASS | "critical, high-availability" |
| 52 | How it works | Verify changes have propagated before production depends on them | S1 | PASS | "propagated before" |
| 53 | How it works | Identity-based policies are JSON permissions documents for actions, resources, conditions | S9 | PASS | "Identity-based policies are JSON permissions policy documents that control what actions an identity (users, groups of users, and roles) can perform, on which resources, and under what conditions." |
| 54 | How it works | You attach managed and inline policies to IAM identities | S9 | PASS | "Identity-based policies can be further categorized:" Managed / Inline (lines 79-92) |
| 55 | How it works | Managed policies are standalone, attach to many users, groups, roles | S9 | PASS | "Standalone identity-based policies that you can attach to multiple users, groups, and roles" |
| 56 | How it works | Inline policies are added directly to one user, group, or role | S9 | PASS | "Policies that you add directly to a single user, group, or role." |
| 57 | How it works | Inline policies are deleted with the identity | S9 | PASS | "They are deleted when you delete the identity." |
| 58 | How it works | Resource-based policies are JSON documents attached to a resource such as an S3 bucket | S9 | PASS | "Resource-based policies are JSON policy documents that you attach to a resource such as an Amazon S3 bucket." |
| 59 | How it works | They grant a principal permission for actions on that resource | S9 | PASS | "grant the specified principal permission to perform specific actions on that resource" |
| 60 | How it works | Resource-based policies are inline | S9 | PASS | "policies are inline policies." |
| 61 | How it works | No managed resource-based policies | S9 | PASS | "There are no managed resource-based policies." |
| 62 | How it works | Trust policies define who can assume the role | S9 | PASS | "Trust policies define which principal entities (accounts, users, roles, and federated users) can assume the role." |
| 63 | How it works | Permissions boundary sets maximum permissions identity-based policy can grant to an entity | S9 | PASS | "you set the maximum permissions that an identity-based policy can grant to an IAM entity." |
| 64 | How it works | With a boundary, entity can do only actions both allow | S9 | PASS | "the entity can perform only the actions that are allowed by both its identity-based policies and its permissions boundaries." |
| 65 | How it works | Each statement has info about a single permission | S9 | PASS | "Each statement includes information about a single permission." |
| 66 | How it works | Multiple statements: logical OR | S9 | PASS | "If a policy includes multiple statements, AWS applies a logical OR across the statements" |
| 67 | How it works | Multiple policies: logical OR | S9 | PASS | "If multiple policies apply to a request, AWS applies a logical OR across all of those policies" |
| 68 | How it works | Effect is Allow or Deny | S9 | PASS | "Allow or Deny to indicate whether the policy allows or denies access." |
| 69 | How it works | Action is a list of actions allowed or denied | S9 | PASS | "Include a list of actions that the policy allows or denies." |
| 70 | How it works | Resource: permissions policy must specify a list of resources | S9 | PASS | "you must specify a list of resources to which the actions apply." |
| 71 | How it works | Principal required in a resource-based policy | S9 | PASS | "you must indicate the account, user, role, or AWS STS federated user principal" |
| 72 | How it works | Cannot include Principal in an identity-based policy | S9 | PASS | "you cannot include this element." |
| 73 | How it works | Condition gives the circumstances | S9 | PASS | "Specify the circumstances under which the policy grants permission." |
| 74 | How it works | Policies are expressed in JSON | S10 | PASS | "Policies are expressed in JSON." |
| 75 | How it works | Action names can include wildcards | S10 | PASS | "Action names can include wildcards." |
| 76 | How it works | AWS recommends version 2012-10-17 | S9 | PASS | "We recommend that you use the latest 2012-10-17 version." |
| 77 | How it works | Multiple permissions in one statement might not grant expected access | S9 | PASS | "try to define multiple permissions in a single statement, your policy might not grant the access that you expect." |
| 78 | How it works | Default: all requests implicitly denied except root | S12 | PASS | "By default, all requests are implicitly denied with the exception of the AWS account root user, which has full access." |
| 79 | How it works | Must be explicitly allowed | S12 | PASS | "Requests must be explicitly allowed by a policy or set of policies" |
| 80 | How it works | Explicit deny overrides explicit allow | S12 | PASS | "An explicit deny overrides an explicit allow." |
| 81 | How it works | AWS looks for an applicable Deny statement | S12 | PASS | "the enforcement code looks for a Deny statement that applies to the request." |
| 82 | How it works | This is called an explicit deny | S12 | PASS | "This is called an explicit deny." |
| 83 | How it works | One explicit deny gives final Deny | S12 | PASS | "If the enforcement code finds even one explicit deny that applies, the enforcement code returns a final decision of Deny." |
| 84 | How it works | No explicit deny: evaluation continues | S12 | PASS | "If there is no explicit deny, the enforcement code evaluation continues." |
| 85 | How it works | (Intro) Within one account both policy types count; evaluated for at least one Allow | S11 | PASS | "AWS evaluates all the permissions granted by the policies for at least one Allow within the same account." The intro sentence has no cite of its own; this cite covers it. |
| 86 | How it works | If one allows and other doesn't, still allowed | S11 | PASS | "allows the request and the other doesn't, the request is still allowed." |
| 87 | How it works | For most resources one explicit Allow in either is enough | S12 | PASS | "you only need an explicit Allow for the principal in either an identity-based policy or a resource-based policy" |
| 88 | How it works | Role trust policies and KMS key policies are exceptions | S12 | PASS | "IAM role trust policies and KMS key policies are exceptions to this logic" |
| 89 | How it works | Boundary not allowing action: implicit deny | S12 | PASS | "does not allow the requested action, then the request is implicitly denied" |
| 90 | How it works | Worked example: user Carlos and two policies | S11 | PASS | "Assume that Carlos has the user name carlossalazar" ... identity-based and bucket policy. |
| 91 | How it works | DenyS3Logs denies S3 buckets with `log` in name | S11 | PASS | "The DenyS3Logs statement denies Carlos access to any S3 bucket with log in its name." |
| 92 | How it works | Logs bucket: AWS first checks for Deny | S11 | PASS | "AWS first checks for a Deny statement that applies to the context of the request." |
| 93 | How it works | It finds one | S11 | PASS | "It finds one" |
| 94 | How it works | Carlos is denied | S11 | PASS | "Carlos is denied access." |
| 95 | How it works | Own bucket: checks Deny, finds none | S11 | PASS | "AWS checks for a Deny statement and does not find one." |
| 96 | How it works | Both policies allow | S11 | PASS | "Both the identity-based policy and the resource-based policy allow the request." |
| 97 | How it works | AWS allows the request | S11 | PASS | "Therefore, AWS allows the request." |
| 98 | How it works | If either explicitly denied, would be denied | S11 | PASS | "If either of them explicitly denied the statement, the request would have been denied." |
| 99 | How it works | Grant only permissions required for a task | S3 | PASS | "grant only the permissions required to perform a task." |
| 100 | How it works | Reduce permissions as use case matures | S3 | PASS | "As your use case matures, you can work to reduce the permissions" |
| 101 | How it works | AWS managed policies might not be least-privilege | S3 | PASS | "AWS managed policies might not grant least-privilege permissions for your specific use cases" |
| 102 | How it works | IAM provides last accessed information | S3 | PASS | "IAM provides last accessed" ... "longer need in your AWS account." |
| 103 | How it works | You can specify conditions for a statement | S3 | PASS | "You can specify conditions under which a policy statement is in effect." |
| 104 | How it works | Access Analyzer external analyzers identify resources shared externally | S15 | PASS | "external access analyzers help identify resources in your organization and accounts that are shared with an external entity." |
| 105 | How it works | It generates policies from CloudTrail activity | S15 | PASS | "generates IAM policies based on access activity in your AWS CloudTrail logs." |
| 106 | How it works | AWS examines created or edited policies for grammar | S14 | PASS | "automatically examines them to ensure that they comply with the IAM policy grammar." |
| 107 | How it works | Verifies ARNs, action names, condition keys | S14 | PASS | "verifies that your ARNs are formatted properly and action names and condition keys are correct." |
| 108 | How it works | Simulator tests identity-based, boundaries, SCPs, resource-based policies you provide | S13 | PASS | "you can test identity-based policies, IAM permissions boundaries, service control policies (SCPs), and resource-based policies that you provide." |
| 109 | How it works | Simulates evaluation with no real request | S13 | PASS | "without sending a real request to any AWS service." |
| 110 | How it works | Binary outcome per action and resource | S13 | PASS | "Each simulation returns a binary authorization outcome for every action and resource you test" |
| 111 | How it works | Custom mode: test policies you write or paste | S13 | PASS | "In Custom mode, you test one or more policies that you write or paste in." |
| 112 | How it works | Simulated on their own, not saved | S13 | PASS | "own and are not saved to your account." |
| 113 | How it works | Results can differ from live | S13 | PASS | "The policy simulator results can differ from your live AWS environment." |
| 114 | How it works | Recommends checking against live after testing | S13 | PASS | "We recommend that you check your policies against your live AWS environment after testing" |
| 115 | How it works | Protect your encryption key | S17 | PASS | "you need to protect your encryption key." |
| 116 | How it works | Protect its encryption key | S17 | PASS | "you need to protect its encryption key." |
| 117 | How it works | Must protect the highest level key, a root key | S17 | PASS | "Eventually, you must protect the highest level encryption key (known as a root key)" |
| 118 | How it works | Envelope encryption definition | S19 | PASS | "Envelope encryption is the practice of encrypting plaintext data with a data key, and then encrypting the data key under another key." |
| 119 | How it works | One key must remain in plaintext | S19 | PASS | "eventually, one key must remain in plaintext so you can decrypt the keys and your data." |
| 120 | How it works | Top-level plaintext KEK is the root key | S19 | PASS | "This top-level plaintext key encryption key is known as the root key." |
| 121 | How it works | To use a KMS key, you must call AWS KMS | S19 | PASS | "To use a KMS key, you must call AWS KMS." |
| 122 | How it works | Data keys are symmetric keys to encrypt data | S20 | PASS | "Data keys are symmetric keys you can use to encrypt data" |
| 123 | How it works | Data keys returned for use outside KMS | S20 | PASS | "data keys are returned to you for use outside of AWS KMS." |
| 124 | How it works | KMS returns optional plaintext key and encrypted copy | S20 | PASS | "it returns a plaintext data key for immediate use (optional) and an encrypted copy of the data key" |
| 125 | How it works | To decrypt, ask KMS to decrypt the encrypted data key first | S20 | PASS | "you first ask AWS KMS to decrypt the encrypted data key." |
| 126 | How it works | KMS does not store, manage, track data keys | S20 | PASS | "AWS KMS does not store, manage, or track your data keys" |
| 127 | How it works | `GenerateDataKey` creates a data key | S20 | PASS | "To create a data key, call the GenerateDataKey operation." |
| 128 | How it works | Re-encrypt only data keys instead of raw data | S19 | PASS | "you can re-encrypt only the data keys that protect the raw data." |
| 129 | How it works | KMS keys you create are customer managed keys | S18 | PASS | "The KMS keys that you create are customer managed keys." |
| 130 | How it works | Monthly cost for a customer managed key | S18 | PASS | "There is a monthly cost to have a customer managed key in your account." |
| 131 | How it works | Customer managed key: policies, enable/disable, rotate, schedule deletion | S18 | PASS | "establishing and maintaining their key policies, IAM policies, and grants, enabling and disabling them, rotating their cryptographic material" and "scheduling" (lines 101-104) |
| 132 | How it works | Cannot change, rotate, change policies, or schedule deletion of AWS managed keys | S18 | PASS | "you cannot change any properties of AWS managed keys, rotate them, change their key policies, or schedule them for deletion." |
| 133 | How it works | All AWS managed keys rotate every year | S18 | PASS | "All AWS managed keys are automatically rotated every year." |
| 134 | How it works | Default: automatic rotation makes new material every year | S21 | PASS | "By default, when you enable automatic key rotation for a KMS key, AWS KMS generates new cryptographic material for the KMS key every year." |
| 135 | How it works | On-demand rotation starts a rotation at once | S21 | PASS | "If you need to immediately initiate key material rotation, you can perform on-demand rotation" |
| 136 | How it works | Decrypt uses the key material used to encrypt | S21 | PASS | "AWS KMS uses the key material that was used to encrypt it." |
| 137 | How it works | Safe to use rotated key without code changes | S21 | PASS | "you can safely use a rotated KMS key in applications and AWS services without code changes." |
| 138 | How it works | Same logical resource | S21 | PASS | "The KMS key is the same logical resource, regardless of whether or how many times its" |
| 139 | How it works | Rotation has no effect on protected data | S21 | PASS | "Key rotation has no effect on the data that the KMS key protects." |
| 140 | How it works | Does not rotate data keys or re-encrypt data | S21 | PASS | "It does not rotate the data keys that the KMS key generated or re-encrypt any data" |
| 141 | How it works | Rotation won't mitigate a compromised data key | S21 | PASS | "Key rotation will not mitigate the effect of a compromised data" |
| 142 | How it works | Deleting a KMS key is destructive and dangerous | S22 | PASS | "Deleting an AWS KMS key is destructive and potentially dangerous." |
| 143 | How it works | Deletes material and metadata, irreversible | S22 | PASS | "It deletes the key material and all metadata associated with the KMS key and is irreversible." |
| 144 | How it works | After deletion cannot decrypt | S22 | PASS | "you can no longer decrypt the data that was encrypted under that KMS key" |
| 145 | How it works | Waiting period 7 – 30 days | S22 | PASS | "AWS KMS requires you to set a waiting period of 7 – 30 days." |
| 146 | How it works | Default is 30 days | S22 | PASS | "The default waiting period is 30" |
| 147 | How it works | Pending-deletion key unusable for crypto ops | S22 | PASS | "A KMS key pending deletion cannot be used in any cryptographic operations." |
| 148 | How it works | Cancel deletion before waiting period ends | S22 | PASS | "To recover the KMS key, you can cancel key deletion before the waiting period ends." |
| 149 | How it works | Consider disabling instead | S22 | PASS | "consider disabling the KMS key instead of deleting it." |
| 150 | How it works | No charge for customer managed keys scheduled for deletion | S23 | PASS | "There is no charge for customer managed KMS keys that you manage and are scheduled for deletion." |
| 151 | How it works | Secret can be password, credentials, OAuth token, other, stored encrypted | S25 | PASS | "A secret can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted" |
| 152 | How it works | Up to 65536 bytes | S25 | PASS | "You can store up to 65536 bytes in the secret." |
| 153 | How it works | Need SecretsManagerReadWrite permissions | S25 | PASS | "you need the permissions granted by the SecretsManagerReadWrite managed policy." |
| 154 | How it works | Encrypts at rest with keys you own in KMS | S27 | PASS | "encrypts secrets at rest using encryption keys that you own and store in AWS Key Management Service (AWS KMS)." |
| 155 | How it works | Retrieve: decrypts, sends over TLS | S27 | PASS | "decrypts the secret and transmits it securely over TLS to your local environment." |
| 156 | How it works | For most cases choose `aws/secretsmanager` | S25 | PASS | "For most cases, choose aws/secretsmanager to use the AWS managed key for Secrets Manager." |
| 157 | How it works | No cost for this key | S25 | PASS | "There is no cost for using this key." |
| 158 | How it works | Own KMS keys charged at KMS rate | S24 | PASS | "If you create your own KMS keys to encrypt your secrets, AWS charges you at the current AWS KMS rate." |
| 159 | How it works | Can configure automatic rotation schedule | S24 | PASS | "you can configure an automatic rotation schedule for your secrets." |
| 160 | How it works | Rotation no longer needs app updates | S24 | PASS | "rotating credentials no longer requires updating your applications and deploying changes to application clients." |
| 161 | How it works | As often as every four hours | S27 | PASS | "you can set up automatic rotation as often as every four hours." |
| 162 | How it works | Two strategies | S27 | PASS | "Secrets Manager offers two strategies for rotation: Single user and Alternating users." |
| 163 | How it works | Unchanged secrets more likely compromised | S27 | PASS | "If you don't change your secrets for a long period of time, the secrets become more likely to be compromised." |
| 164 | How it works | Rotation function charged at Lambda rate (except managed rotation) | S24 | PASS | "When you turn on automatic rotation (except managed rotation)" "you are charged for the rotation function at the current Lambda rate." |
| 165 | How it works | Secrets Manager does not delete immediately | S26 | PASS | "Secrets Manager does not immediately delete secrets." |
| 166 | How it works | Inaccessible at once; deletion after window of at least seven days | S26 | PASS | "immediately makes the secrets inaccessible and scheduled for deletion after a recovery window of a minimum of seven days." |
| 167 | How it works | Recover until window ends | S26 | PASS | "Until the recovery window ends, you can recover a secret you previously deleted." |
| 168 | How it works | No charge for marked secrets | S26 | PASS | "There is no charge for secrets that you have marked for deletion." |
| 169 | How it works | Can't directly delete a version | S26 | PASS | "You can't directly delete a version of a secret." |
| 170 | How it works | CloudWatch alarm for access attempts in window | S26 | PASS | "you can create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window." |
| 171 | How it works | Without a window you can't recover | S26 | PASS | "deletes a secret immediately without a recovery window. You can't recover this secret." |
| 172 | How it works | Pay only for what you use, no minimum or setup fees | S24 | PASS | "you pay only for what you use, with no minimum or setup fees." |
| 173 | How it works | Shells offer features that could compromise secrets | S27 | PASS | "Most command shells offer features that could compromise your secrets, such as logging and the ability to see the last entered command." |
| 174 | How it works | Use least privileged access in policy statements | S27 | PASS | "use the principle of least privileged access." |
| 175 | How it works | Cache secrets, update only when required | S27 | PASS | "cache your secrets and update them only when required" |
| 176 | Try it | Run record: date, versions, no AWS account, no AWS_ variable, no ~/.aws | none | N/A | Record of the page's own run. |
| 177 | Try it | `json.loads` deserializes a JSON document to a Python object | S32 | PASS | "deserialize s (a str, bytes or bytearray instance containing a JSON document) to a Python object" |
| 178 | Try it | First policy and bucket policy come from the single-account example | S11 | FAIL | The code is trimmed. `AllowS3ListRead` in S11 lists four actions: "s3:GetBucketLocation", "s3:GetAccountPublicAccessBlock", "s3:ListAccessPoints", "s3:ListAllMyBuckets". The page code keeps only two. Fix: say the policies are adapted from the example, with two actions left out. |
| 179 | Try it | Code and output of `policy_model.py` | none | N/A | The tutorial's own code, with output labelled as its run. The Sids, Effect, Principal, resources and the `*log*` pattern match S11. |
| 180 | Try it | Logs bucket: AWS first checks for Deny, finds one, Carlos is denied | S11 | PASS | "AWS first checks for a Deny statement" ... "It finds one" ... "Carlos is denied access." |
| 181 | Try it | Own bucket: both policies allow, AWS allows | S11 | PASS | "Both the identity-based policy and the resource-based policy allow the request. Therefore, AWS allows the request." |
| 182 | Try it | Another bucket: by default implicitly denied | S12 | PASS | "By default, all requests are implicitly denied" |
| 183 | Try it | Bucket policy: only `carlossalazar` can access the bucket | S11 | PASS | "This policy specifies that only the carlossalazar user can access the" |
| 184 | Try it | If one of two allows and other doesn't, still allowed | S11 | PASS | "allows the request and the other doesn't, the request is still allowed." |
| 185 | Try it | Explicit deny overrides explicit allow | S12 | PASS | "An explicit deny overrides an explicit allow." |
| 186 | Try it | Page says if either explicitly denied, it would be denied | S11 | PASS | "If either of them explicitly denied the statement, the request would have been denied." |
| 187 | Try it | Model matched the page for lines 1-2; other five reasoned by tutorial | none | N/A | Record of the page's own run and reasoning. |
| 188 | Try it | AWS evaluates all these policy types that apply | S12 | PASS | "evaluates all policies within the account that apply to the request. These include AWS Organizations SCPs and RCPs, resource-based policies, identity-based policies, IAM permissions boundaries, and session policies." |
| 189 | Try it | Model of the key hierarchy; follows envelope encryption (definition) | S19 | PASS | "Envelope encryption is the practice of encrypting plaintext data with a data key, and then encrypting the data key under another key." |
| 190 | Try it | KMS keys created, managed, used, deleted entirely within KMS | S17 | PASS | "KMS keys are created, managed, used, and deleted entirely within AWS KMS." |
| 191 | Try it | `openssl rand` makes random bytes with a CSPRNG | S31 | PASS | "generates num random bytes using a cryptographically secure pseudo random number generator (CSPRNG)." |
| 192 | Try it | `-hex` shows output as a hex string | S31 | PASS | "-hex Show the output as a hex string." |
| 193 | Try it | `-K` must be hex digits; with only the key, IV needed via `-iv` | S30 | PASS | "this must be represented as a string comprised only of hex digits. If only the key is specified, the IV must additionally specified using the -iv option." |
| 194 | Try it | `-d` decrypts | S30 | PASS | "-d Decrypt the input data." |
| 195 | Try it | The command lists AES in CBC mode | S30 | PASS | "A beginner is advised to just use a strong block cipher, such as AES, in CBC mode." The source advises it; the cipher list also has AES CBC. |
| 196 | Try it | No authenticated modes like CCM and GCM | S30 | PASS | "This command does not support authenticated encryption modes like CCM and GCM" |
| 197 | Try it | Own choice, model cannot detect changes, do not use for real data | none | N/A | The tutorial's own choice and advice. |
| 198 | Try it | `envelope.sh` and its output | none | N/A | The tutorial's own code and run output. The openssl flags match S30 and S31. |
| 199 | Try it | Line 1: AWS says you can safely store the encrypted data key alongside | S19 | PASS | "You can safely store the encrypted data key alongside the encrypted data." |
| 200 | Try it | Line 2: recipient decrypts the key, then the message | S19 | PASS | "by first decrypting the encrypted key and then decrypting the message." |
| 201 | Try it | Line 2: with KMS you first ask KMS to decrypt the data key | S20 | PASS | "you first ask AWS KMS to decrypt the encrypted data key." |
| 202 | Try it | Line 3: re-encrypt only the data keys | S19 | PASS | "you can re-encrypt only the data keys that protect the raw data." |
| 203 | Try it | Rotated key decrypt uses the material used to encrypt | S21 | PASS | "AWS KMS uses the key material that was used to encrypt it." |
| 204 | Try it | Key rotation does not re-encrypt any data | S21 | PASS | "re-encrypt any data protected by the KMS key." |
| 205 | Try it | Line 4: after deletion cannot decrypt | S22 | PASS | "you can no longer decrypt the data that was encrypted under that KMS key" |
| 206 | Try it | KMS requires waiting period 7 – 30 days | S22 | PASS | "waiting period of 7 – 30 days" |
| 207 | Try it | You can cancel before it ends | S22 | PASS | "you can cancel key deletion before the waiting period ends." |
| 208 | Try it | The three env vars: file locations and IMDS disabled | S29 | PASS | "Specifies the location of the file that the AWS CLI uses to store configuration profiles." / "...to store access keys." / "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 209 | Try it | `--generate-cli-skeleton` generates and displays a parameter template | S28 | PASS | "The --generate-cli-skeleton generates and displays a parameter template that you can customize and use as input on a command." |
| 210 | Try it | Commands and filter are the tutorial's own choice | none | N/A | The tutorial's own choice. |
| 211 | Try it | `AssumeRolePolicyDocument` is the trust policy of a role | none | FAIL | No cite, and no source in `pages/` says this. The page admits it matched by name only. Fix: delete it, or cite a source for it. |
| 212 | Try it | `SecretString` and `KmsKeyId` are the secret and the KMS key that encrypts it | none | FAIL | No cite. `SecretString` appears in no source. `KmsKeyId` appears once in S28, with no such meaning. Fix: delete it, or cite a source for it. |
| 213 | Try it | `PendingWindowInDays` is the waiting period | S33 | PASS | "kms:ScheduleKeyDeletionPendingWindowInDays condition key to further constrain the waiting period"; the example uses "--pending-window-in-days 10" and returns "PendingWindowInDays": 10. |
| 214 | Try it | Console asks for days between 7 and 30 | S33 | PASS | "For Waiting period (in days), enter a number of days between 7 and 30." |
| 215 | Try it | Step 4 cost: IAM, IAM Identity Center, STS at no additional charge | S1 | PASS | "offered at no additional charge" |
| 216 | Try it | Charged only when you access other AWS services | S1 | PASS | "charged only when you access" |
| 217 | Try it | Admin creates `Get-pics` service role and attaches it | S16 | PASS | "administrator creates the Get-pics service role and attaches the role to the Amazon EC2 instance." |
| 218 | Try it | Permissions policy gives read-only access to the S3 bucket | S16 | PASS | "The role includes a permissions policy that grants read-only access to the specified S3 bucket." |
| 219 | Try it | Trust policy lets EC2 assume the role | S16 | PASS | "It also includes a trust policy that allows the Amazon EC2 instance to assume" |
| 220 | Try it | Developer launches instance and assigns role | S16 | PASS | "A developer launches an Amazon EC2 instance and assigns the Get-pics role to" |
| 221 | Try it | Developer needs launch and pass-role permissions | S16 | PASS | "the developer must have permission to launch Amazon EC2 instances and permission to pass IAM roles." |
| 222 | Try it | Console manages instance profile | S16 | PASS | "If you use the IAM console, the instance profile is managed for you" |
| 223 | Try it | CLI/API: create profile and assign role as separate steps | S16 | PASS | "then you must create the instance profile and assign the role to it" |
| 224 | Try it | App gets credentials from instance metadata | S16 | PASS | "it obtains temporary security credentials from Amazon EC2 instance metadata" |
| 225 | Try it | Cached credentials refreshed hourly or 15 minutes before expiry | S16 | PASS | "it should get a refreshed set of credentials every hour, or at least 15 minutes before the current set expires." |
| 226 | Try it | Step 5 cost: pay only for use | S24 | PASS | "you pay only for what you use, with no minimum or setup fees." |
| 227 | Try it | Own KMS keys charged at KMS rate | S24 | PASS | "AWS charges you at the current AWS KMS rate." |
| 228 | Try it | Not deleted at once; window of at least seven days | S26 | PASS | "after a recovery window of a minimum of seven days." |
| 229 | Try it | No charge for marked secrets | S26 | PASS | "There is no charge for secrets that you have marked for deletion." |
| 230 | Try it | Open console, choose Store a new secret | S25 | PASS | "Choose Store a new secret." |
| 231 | Try it | Other type of secret for API keys, tokens, non-database credentials | S25 | PASS | "To store API keys, access tokens, credentials that aren't for databases, choose Other type of secret." |
| 232 | Try it | Key/value pairs or Plaintext tab, any format | S25 | PASS | "choose the Plaintext tab and enter the secret in any format." |
| 233 | Try it | Own advice: made-up value | none | N/A | The tutorial's own advice. |
| 234 | Try it | Encryption key: choose the KMS key used to encrypt | S25 | PASS | "choose the AWS KMS key that Secrets Manager uses to encrypt the secret value." |
| 235 | Try it | For most cases choose `aws/secretsmanager` | S25 | PASS | "For most cases, choose aws/secretsmanager" |
| 236 | Try it | Cleanup: choose secret, Actions, Delete secret | S26 | PASS | "choose Actions, and then choose Delete secret." |
| 237 | Try it | Waiting period days, Schedule deletion | S26 | PASS | "Waiting period, enter the number of days to wait before the deletion becomes permanent." and "Choose Schedule deletion." |
| 238 | Try it | Step 6 cost: monthly cost for customer managed key | S18 | PASS | "There is a monthly cost to have a customer managed key in your account." |
| 239 | Try it | No charge when scheduled for deletion | S23 | PASS | "There is no charge for customer managed KMS keys that you manage and are scheduled for deletion." |
| 240 | Try it | Cancelling gives charges as if never scheduled | S23 | PASS | "If you cancel the deletion during the waiting period, the customer managed KMS key will incur charges as though it was never scheduled for deletion." |
| 241 | Try it | Own advice: use a key made for the exercise | none | N/A | The tutorial's own advice. |
| 242 | Try it | Page warns deletion is destructive and dangerous | S33 | PASS | "Deleting a KMS key is destructive and potentially dangerous." |
| 243 | Try it | Choose Customer managed keys | S33 | PASS | "In the navigation pane, choose Customer managed keys." |
| 244 | Try it | Cannot schedule deletion of AWS managed or owned keys | S33 | PASS | "You cannot schedule the deletion of AWS managed keys or AWS owned keys." |
| 245 | Try it | Checkbox, Key actions, Schedule key deletion | S33 | PASS | "Choose the checkbox next to the KMS key that you want to delete." "Choose Key actions, Schedule key deletion." |
| 246 | Try it | Waiting period 7 to 30 | S33 | PASS | "enter a number of days between 7 and 30." |
| 247 | Try it | Confirm checkbox; keys immediately unusable | S33 | PASS | "Choose the check box next to I confirm that I want to schedule these keys for deletion. The keys will become immediately unusable for cryptographic operations." |
| 248 | Try it | CloudTrail entry on schedule and on actual deletion | S33 | PASS | "AWS KMS records an entry in your AWS CloudTrail log when you schedule deletion of the KMS key and when the KMS key is actually deleted." |
| 249 | Tester uses | A request is allowed only if a policy explicitly allows it | S12 | PASS | "Requests must be explicitly allowed by a policy or set of policies" |
| 250 | Tester uses | Explicit deny overrides explicit allow | S12 | PASS | "An explicit deny overrides an explicit allow." |
| 251 | Tester uses | In one account an Allow in either policy type is enough for most resources | S12 | PASS | "For most resources, you only need an explicit Allow for the principal in either an identity-based policy or a resource-based policy" |
| 252 | Tester uses | Simulator shows evaluation without a real request | S13 | PASS | "without sending a real request to any AWS service." |
| 253 | Tester uses | Results can differ from live | S13 | PASS | "can differ from your live AWS environment" |
| 254 | Tester uses | IAM eventually consistent | S1 | PASS | "eventually consistent" |
| 255 | Tester uses | Verify propagation before production depends | S1 | PASS | "propagated before" |
| 256 | Tester uses | Do NOT put keys in application files | S6 | PASS | "Do NOT put access keys or credential information" |
| 257 | Tester uses | Shared credentials file is plaintext | S6 | PASS | "are stored in plaintext." |
| 258 | Tester uses | Secrets Manager replaces hard-coded credentials with a runtime call | S24 | PASS | "You replace hard-coded credentials with a runtime call" |
| 259 | Tester uses | AWS delivers role credentials to EC2 or Lambda | S3 | PASS | "AWS delivers the temporary credentials of an IAM role to that compute resource." |
| 260 | Tester uses | Expired credentials not recognized | S5 | PASS | "AWS no longer recognizes them" |
| 261 | Tester uses | Caching app refreshes at least 15 minutes before expiry | S16 | PASS | "every hour, or at least 15 minutes before the current set expires." The page gives only the second option. |
| 262 | Tester uses | AWS recommends MFA for an IAM user or the root user | S3 | PASS | "for scenarios in which you need an IAM user or root user in your account, require MFA for additional security." |
| 263 | Tester uses | Root only for tasks needing root-level permissions | S7 | PASS | "Use the root user only to perform the tasks that require root-level permissions." |
| 264 | Tester uses | Deleted secret recoverable until window ends | S26 | PASS | "Until the recovery window ends, you can recover a secret you previously deleted." |
| 265 | Tester uses | CloudWatch alarm for access attempts in window | S26 | PASS | "create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window." |
| 266 | Tester uses | Rotation no longer needs app updates | S24 | PASS | "rotating credentials no longer requires updating your applications" |
| 267 | Tester uses | Rotation as often as every four hours | S27 | PASS | "as often as every four hours." |
| 268 | Tester uses | Rotated key decrypts with the original material | S21 | PASS | "AWS KMS uses the key material that was used to encrypt it." |
| 269 | Tester uses | Safe without code changes | S21 | PASS | "you can safely use a rotated KMS key in applications and AWS services without code changes." |
| 270 | Tester uses | Rotation has no effect on data | S21 | PASS | "Key rotation has no effect on the data that the KMS key protects." |
| 271 | Tester uses | Pending-deletion key unusable | S22 | PASS | "A KMS key pending deletion cannot be used in any cryptographic operations." |
| 272 | Tester uses | CloudWatch alarm for use during the waiting period | S22 | PASS | "alarm to warn you if a person or application attempts to use the KMS key during the waiting period." |
| 273 | Tester uses | AWS checks JSON policy syntax and grammar | S14 | PASS | "AWS checks JSON policy syntax and grammar." |
| 274 | Tester uses | Access Analyzer validates against grammar and best practices | S15 | PASS | "validates IAM policies against policy grammar and AWS best practices." |
| 275 | Mistakes | Root user every day | S1 | PASS | "We strongly recommend that you don't use the root user for everyday tasks." |
| 276 | Mistakes | Do NOT put keys in application files | S6 | PASS | "Do NOT put access keys or credential information" |
| 277 | Mistakes | Do NOT include key files in project area | S6 | PASS | "credential information in your project area." |
| 278 | Mistakes | Secret access key retrievable only at creation | S6 | PASS | "can be retrieved only at the time you create it." |
| 279 | Mistakes | If lost, delete the key and create a new one | S6 | PASS | "you must delete the access key and create a new one." |
| 280 | Mistakes | IAM eventually consistent | S1 | PASS | "eventually consistent" |
| 281 | Mistakes | Do not put such changes in critical code paths | S1 | PASS | "critical, high-availability" |
| 282 | Mistakes | Explicit deny overrides allow | S12 | PASS | "An explicit deny overrides an explicit allow." |
| 283 | Mistakes | By default all requests implicitly denied | S12 | PASS | "By default, all requests are implicitly denied" |
| 284 | Mistakes | AWS managed policies might not be least-privilege | S3 | PASS | "AWS managed policies might not grant least-privilege permissions for your specific use cases" |
| 285 | Mistakes | Multiple permissions in one statement | S9 | PASS | "your policy might not grant the access that you expect." |
| 286 | Mistakes | Cannot include Principal in an identity policy | S9 | PASS | "If you are creating an IAM permissions policy to attach to a user or role, you cannot include this element." |
| 287 | Mistakes | Simulator results can differ | S13 | PASS | "The policy simulator results can differ from your live AWS environment." |
| 288 | Mistakes | Rotation has no effect on data | S21 | PASS | "Key rotation has no effect on the data that the KMS key protects." |
| 289 | Mistakes | Won't mitigate compromised data key | S21 | PASS | "Key rotation will not mitigate the effect of a compromised data" |
| 290 | Mistakes | After deletion cannot decrypt | S22 | PASS | "you can no longer decrypt the data that was encrypted under that KMS key" |
| 291 | Mistakes | Consider disabling instead | S22 | PASS | "consider disabling the KMS key instead of deleting it." |
| 292 | Mistakes | Monthly cost of customer managed key | S18 | PASS | "There is a monthly cost to have a customer managed key in your account." |
| 293 | Mistakes | Own KMS keys charged at KMS rate | S24 | PASS | "AWS charges you at the current AWS KMS rate." |
| 294 | Mistakes | Automatic rotation charged at Lambda rate | S24 | PASS | "you are charged for the rotation function at the current Lambda rate." |
| 295 | Mistakes | Secrets Manager does not delete immediately | S26 | PASS | "Secrets Manager does not immediately delete secrets." |
| 296 | Mistakes | Delete without window: can't recover | S26 | PASS | "You can't recover this secret." |
| 297 | Mistakes | Shell features could compromise secrets | S27 | PASS | "Most command shells offer features that could compromise your secrets, such as logging and the ability to see the last entered command." |
| 298 | Mistakes | `openssl enc` has no CCM/GCM | S30 | PASS | "This command does not support authenticated encryption modes like CCM and GCM" |
| 299 | Tester can check | Callout "Tutorial advice" with 12 advice bullets | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page lacks. |
| 300 | Key words | IAM | S1 | PASS | Page sentence: "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources" |
| 301 | Key words | Root user | S1 | PASS | Page sentence: "one sign-in identity called the AWS account root user that has complete access to all AWS services and resources" |
| 302 | Key words | IAM role | S4 | PASS | Page sentence: "An IAM role is an IAM identity that you can create in your account that has specific permissions" |
| 303 | Key words | Access key | S6 | PASS | Page sentence: "Access keys are long-term credentials for an IAM user or the AWS account root user" |
| 304 | Key words | Temporary security credentials | S5 | PASS | Page sentences: "You can use AWS STS to create and provide trusted users with temporary security credentials" and "last for anywhere from a few minutes to several hours" |
| 305 | Key words | MFA | S8 | PASS | Page sentence: "MFA requires users to provide unique authentication from an AWS supported MFA mechanism in addition to their sign-in credentials" |
| 306 | Key words | Policy | S9 | PASS | Page sentence: "A policy is an object in AWS that, when associated with an identity or resource, defines their permissions" |
| 307 | Key words | Identity-based policy | S9 | PASS | Page sentence: "Identity-based policies are JSON permissions policy documents that control what actions an identity can perform, on which resources, and under what conditions" |
| 308 | Key words | Resource-based policy | S9 | PASS | Page sentence: "Resource-based policies are JSON policy documents that you attach to a resource such as an Amazon S3 bucket" |
| 309 | Key words | Trust policy | S9 | PASS | Page sentence: "Trust policies define which principal entities can assume the role" |
| 310 | Key words | Permissions boundary | S9 | PASS | Page sentence: "A permissions boundary sets the maximum permissions that an identity-based policy can grant to an IAM entity" |
| 311 | Key words | Explicit deny | S12 | PASS | Page sentences: "AWS looks in all applicable policies for a `Deny` statement that applies to the request. This is called an explicit deny" and "An explicit deny overrides an explicit allow" |
| 312 | Key words | Implicit deny | S12 | PASS | Page sentence: "By default, all requests are implicitly denied, except for the AWS account root user, which has full access" |
| 313 | Key words | Policy simulator | S13 | PASS | Page sentences: "you can test identity-based policies ... that you provide" and "You simulate how AWS would evaluate a request, without sending a real request to any AWS service" |
| 314 | Key words | IAM Access Analyzer | S15 | PASS | Page sentences: "help identify resources that are shared with an external entity"; "generates IAM policies based on access activity in your AWS CloudTrail logs"; "IAM Access Analyzer validates IAM policies against policy grammar" (Tester uses panel) |
| 315 | Key words | AWS KMS | S17 | PASS | Page sentence: "AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data" |
| 316 | Key words | KMS key | S17 | PASS | Page sentences: "KMS keys are created, managed, used, and deleted entirely within AWS KMS" and "They never leave the service unencrypted" |
| 317 | Key words | Customer managed key | S18 | PASS | Page sentences: "The KMS keys that you create are customer managed keys"; "you can maintain its key policies, enable and disable it, rotate its cryptographic material, and schedule it for deletion"; "There is a monthly cost" |
| 318 | Key words | Data key | S20 | PASS | Page sentences: "Data keys are symmetric keys you can use to encrypt data" and "Data keys are returned to you for use outside of AWS KMS" |
| 319 | Key words | Envelope encryption | S19 | PASS | Page sentence: "Envelope encryption is the practice of encrypting plaintext data with a data key, and then encrypting the data key under another key" |
| 320 | Key words | Root key | S19 | PASS | Page sentence: "This top-level plaintext key encryption key is known as the root key" |
| 321 | Key words | Key rotation | S21 | PASS | Page sentences: "By default, when you enable automatic key rotation ... new cryptographic material for it every year" and "Key rotation has no effect on the data that the KMS key protects" |
| 322 | Key words | Waiting period | S22 | PASS | Page sentences: "AWS KMS requires a waiting period of 7 – 30 days"; "The default waiting period is 30 days"; "you can cancel key deletion before the waiting period ends" |
| 323 | Key words | Secrets Manager | S24 | PASS | Page sentence: "AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles" |
| 324 | Key words | Secret | S25 | PASS | Page sentence: "A secret can be a password, a set of credentials, an OAuth token, or other secret information that you store in an encrypted form" |
| 325 | Key words | Recovery window | S26 | PASS | Page sentences: "recovery window of a minimum of seven days" and "Until the recovery window ends, you can recover a secret you previously deleted" |
| 326 | Key words | Secret rotation | S27 | PASS | Page sentences: "you can configure an automatic rotation schedule for your secrets"; "as often as every four hours"; "two strategies for rotation: Single user and Alternating users" |

Open FAILs after round 6: 3

Changed after this round: Row 178: step 1 of Try it said that the two policies come from the single-account example (S11), but the tutorial's identity policy lists two of the four actions of AllowS3ListRead. The sentence now says that the policies are those of the example with that one change, and names the two actions that were left out. Rows 211 and 212: the closing paragraph of step 3 said, with no cite, that AssumeRolePolicyDocument is the trust policy of a role and that SecretString and KmsKeyId are the secret and its KMS key. The paragraph now keeps only what S25 and S33 show: the option --secret-string and the option --pending-window-in-days with the output field PendingWindowInDays, matched to the template names by name only. Not from a FAIL: the Key words row for temporary security credentials now follows its Technical sentence more closely.

## Round 7 (2026-11-19)

# Fact check: devops / aws-identity-security (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| D-1 | Description line | Page topics and practice run | none | N/A | Describes the page itself. |
| L-1 | Lede | Page topics, no AWS account needed, links to other pages | none | N/A | Describes the page and its own run. Links are not facts. |
| WI-1 | What it is | IAM is a web service that helps you securely control access to AWS resources | 1 | PASS | S1: "web service that helps" |
| WI-2 | What it is | IAM controls who is authenticated and authorized | 1 | PASS | S1: "authenticated (signed in)" |
| WI-3 | What it is | There is no charge to use IAM | 2 | PASS | S2: "There is no charge to use IAM" |
| WI-4 | What it is | New account begins with the root user, which has complete access | 1 | PASS | S1: "you begin with one sign-in identity called the AWS account root user that has complete access to all AWS services and resources" |
| WI-5 | What it is | IAM role is an identity you can create with specific permissions | 4 | PASS | S4: "An IAM identity that you can create in your account that has specific permissions" |
| WI-6 | What it is | Role is intended to be assumable by anyone who needs it | 4 | PASS | S4: "assumable by anyone who needs it" |
| WI-7 | What it is | Role has no standard long-term credentials | 4 | PASS | S4: "a role does not have standard long-term credentials such" |
| WI-8 | What it is | Assuming a role gives temporary credentials for the role session | 4 | PASS | S4: "temporary security credentials for your role session" |
| WI-9 | What it is | A policy is an object that defines permissions when associated with an identity or resource | 9 | PASS | S9: "A policy is an object in AWS that, when associated with an identity or resource, defines their permissions." |
| WI-10 | What it is | AWS evaluates policies when an IAM principal makes a request | 9 | PASS | S9: "AWS evaluates these policies when an IAM principal (user or role) makes a request." |
| WI-11 | What it is | Permissions determine allowed or denied | 9 | PASS | S9: "Permissions in the policies determine whether the request is allowed or denied." |
| WI-12 | What it is | AWS KMS is a managed service to create and control keys for encrypt and sign | 17 | PASS | S17: "AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and" |
| WI-13 | What it is | KMS keys are created, managed, used, deleted entirely within AWS KMS | 17 | PASS | S17: "KMS keys are created, managed, used, and deleted entirely within AWS KMS." |
| WI-14 | What it is | They never leave the service unencrypted | 17 | PASS | S17: "They never leave the service unencrypted." |
| WI-15 | What it is | Secrets Manager helps manage, retrieve, rotate credentials, tokens, keys, secrets | 24 | PASS | S24: "helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles" |
| WI-16 | What it is | Replace hard-coded credentials with a runtime call | 24 | PASS | S24: "You replace hard-coded credentials with a runtime call to the Secrets Manager service to retrieve credentials dynamically when you need them." |
| WI-17 | What it is | For AWS credentials, AWS recommends IAM | 24 | PASS | S24: "AWS credentials – We recommend AWS Identity and Access Management." |
| WI-18 | What it is | For encryption keys, it recommends AWS KMS | 24 | PASS | S24: "Encryption keys – We recommend AWS Key Management Service." |
| HW-1 | How it works | Authentication matches sign-in credentials to a trusted principal | 1 | PASS | S1: "Authentication is provided by matching the sign-in credentials to a principal" |
| HW-2 | How it works | AWS strongly recommends not using root for everyday tasks | 1 | PASS | S1: "We strongly recommend that you don't use the root user for everyday tasks." |
| HW-3 | How it works | Use root only for tasks that need root-level permissions | 7 | PASS | S7: "Use the root user only to perform the tasks that require root-level permissions" |
| HW-4 | How it works | Cannot attach identity-based policies to root user | 9 | PASS | S9: "You cannot attach identity-based policies to the root user" |
| HW-5 | How it works | MFA is enforced for root users by default | 7 | PASS | S7: "While MFA is enforced for root users by default" |
| HW-6 | How it works | Adding it needs customer action at account creation or when prompted at sign-in | 7 | PASS | S7: "it requires customer action to add MFA during the initial account creation or as prompted during sign-in" |
| HW-7 | How it works | MFA needs unique authentication from a supported mechanism besides sign-in credentials | 8 | PASS | S8: "requires users to provide unique authentication from an AWS" |
| HW-8 | How it works | Root and IAM users can register up to eight MFA devices of any type | 8 | PASS | S8: "Your AWS account root user and IAM users can register up to eight MFA devices of any type" |
| HW-9 | How it works | Only one MFA device needed to sign in to console or create CLI session | 8 | PASS | S8: "you only need one MFA device to sign in to the AWS Management Console or create a session" |
| HW-10 | How it works | AWS recommends phishing-resistant MFA whenever possible | 8 | PASS | S8: "We recommend that you use phishing-resistant MFA such as passkeys and security keys" |
| HW-11 | How it works | Access keys are long-term credentials for IAM user or root user | 6 | PASS | S6: "Access keys are long-term credentials for an IAM user or the AWS account root user" |
| HW-12 | How it works | Must use both access key ID and secret access key together | 6 | PASS | S6: "You must use both the access key ID and secret access" |
| HW-13 | How it works | Secret access key can be retrieved only at creation | 6 | PASS | S6: "The secret access key can be retrieved only at the time you create it" |
| HW-14 | How it works | Max two access keys per user | 6 | PASS | S6: "You can have a maximum of two access keys per user" |
| HW-15 | How it works | Best practice: use temporary credentials instead of long-term keys | 6 | PASS | S6: "As a best practice, use temporary security credentials (such as IAM roles) instead of creating long-term credentials like access keys" |
| HW-16 | How it works | Shared credentials file stores keys in plaintext | 6 | PASS | S6: "Access keys or credential information stored in the shared AWS credentials file" … "are stored in plaintext" |
| HW-17 | How it works | Do NOT put keys in application files | 6 | PASS | S6: "Do NOT put access keys or credential information" |
| HW-18 | How it works | Do NOT include files with keys in project area | 6 | PASS | S6: "Do NOT include files that contain access keys or" |
| HW-19 | How it works | AWS STS creates temporary credentials for trusted users | 5 | PASS | S5: "You can use the AWS Security Token Service (AWS STS) to create and provide trusted users with temporary" |
| HW-20 | How it works | Temporary credentials are short-term | 5 | PASS | S5: "Temporary security credentials are short-term, as the" |
| HW-21 | How it works | Can last from a few minutes to several hours | 5 | PASS | S5: "They can be configured to last for anywhere from a few minutes to several" |
| HW-22 | How it works | After expiry AWS no longer recognizes them | 5 | PASS | S5: "After the credentials expire, AWS no longer recognizes them" |
| HW-23 | How it works | Not stored with user, generated dynamically | 5 | PASS | S5: "Temporary security credentials are not stored with the user but are generated" |
| HW-24 | How it works | AWS delivers role credentials to compute resource such as EC2 or Lambda | 3 | PASS | S3: "When you're building on an AWS compute service, such as Amazon EC2 or Lambda, AWS delivers" |
| HW-25 | How it works | SDK applications discover and use these credentials | 3 | PASS | S3: "using an AWS SDK will discover and use these temporary credentials" |
| HW-26 | How it works | When launching EC2 you specify a role to associate | 16 | PASS | S16: "When you launch an Amazon EC2 instance, you specify an IAM role to associate with the instance." |
| HW-27 | How it works | Applications use role credentials to sign API requests | 16 | PASS | S16: "can then use the role-supplied temporary credentials to sign API requests" |
| HW-28 | How it works | Only one role per EC2 instance at a time | 16 | PASS | S16: "Only one role can be assigned to an Amazon EC2 instance at a time" |
| HW-29 | How it works | All applications on instance share role and permissions | 16 | PASS | S16: "all applications on the instance share the same role and permissions" |
| HW-30 | How it works | IAM is eventually consistent | 1 | PASS | S1: "eventually consistent" |
| HW-31 | How it works | Do not put IAM changes in critical high-availability code paths | 1 | PASS | S1: "We recommend that you do not include such IAM changes in the critical, high-availability code paths of your application." |
| HW-32 | How it works | Verify propagation before production depends on changes | 1 | PASS | S1: "Also, be sure" … "verify that the changes" |
| HW-33 | How it works | Identity-based policies are JSON documents controlling actions, resources, conditions | 9 | PASS | S9: "Identity-based policies are JSON permissions policy documents that control what actions an identity (users, groups of users, and roles) can perform, on which resources, and under what conditions." |
| HW-34 | How it works | You attach managed and inline policies to IAM identities | 9 | PASS | S9: "Standalone identity-based policies that you can attach to multiple users, groups, and roles" and "Policies that you add directly to a single user, group, or role" |
| HW-35 | How it works | Managed policies are standalone, attach to many users, groups, roles | 9 | PASS | S9: "Standalone identity-based policies that you can attach to multiple users, groups, and roles in your AWS account." |
| HW-36 | How it works | Inline policies are added directly to a single user, group, or role | 9 | PASS | S9: "Policies that you add directly to a single user, group, or role." |
| HW-37 | How it works | Inline policies are deleted with the identity | 9 | PASS | S9: "They are deleted when you delete the identity." |
| HW-38 | How it works | Resource-based policies are JSON documents attached to a resource such as S3 bucket | 9 | PASS | S9: "Resource-based policies are JSON policy documents that you attach to a resource such as an Amazon S3 bucket." |
| HW-39 | How it works | They grant a principal permission for actions on that resource | 9 | PASS | S9: "These policies grant the specified principal permission to perform specific actions on that resource" |
| HW-40 | How it works | Resource-based policies are inline policies | 9 | PASS | S9: "Resource-based policies are inline policies." |
| HW-41 | How it works | No managed resource-based policies | 9 | PASS | S9: "There are no managed resource-based policies." |
| HW-42 | How it works | Trust policies define which principals can assume the role | 9 | PASS | S9: "Trust policies define which principal entities (accounts, users, roles, and federated users) can assume the role." |
| HW-43 | How it works | Permissions boundary sets max permissions identity-based policy can grant | 9 | PASS | S9: "A permissions boundary is an advanced feature in which you set the maximum permissions that an identity-based policy can grant to an IAM entity." |
| HW-44 | How it works | With a boundary, entity can do only actions both allow | 9 | PASS | S9: "the entity can perform only the actions that are allowed by both its" |
| HW-45 | How it works | Each statement has information about a single permission | 9 | PASS | S9: "Each statement includes information about a single permission." |
| HW-46 | How it works | Multiple statements: logical OR | 9 | PASS | S9: "AWS applies a logical OR across the statements when evaluating them." |
| HW-47 | How it works | Multiple policies: logical OR | 9 | PASS | S9: "If multiple policies apply to a request, AWS applies a logical OR across all of those policies" |
| HW-48 | How it works | Effect: Allow or Deny | 9 | PASS | S9: "Allow or Deny to indicate whether the policy allows or denies access." |
| HW-49 | How it works | Action: list of actions allowed or denied | 9 | PASS | S9: "Include a list of actions that the policy allows or denies." |
| HW-50 | How it works | Resource: permissions policy must list resources | 9 | PASS | S9: "If you create an IAM permissions policy, you must specify a list of resources to which the actions apply." |
| HW-51 | How it works | Principal required in resource-based policy | 9 | PASS | S9: "If you create a resource-based policy, you must indicate the account, user, role, or AWS STS federated user principal" |
| HW-52 | How it works | Cannot include Principal in identity-based policy | 9 | PASS | S9: "If you are creating an IAM permissions policy to attach to a user or role, you cannot include this element." |
| HW-53 | How it works | Condition: circumstances under which policy grants permission | 9 | PASS | S9: "Specify the circumstances under which the policy grants permission." |
| HW-54 | How it works | Policies are expressed in JSON | 10 | PASS | S10: "Policies are expressed in JSON" |
| HW-55 | How it works | Action names can include wildcards | 10 | PASS | S10: "Action names can include wildcards." |
| HW-56 | How it works | AWS recommends latest 2012-10-17 version | 9 | PASS | S9: "We recommend that you use the latest 2012-10-17 version." |
| HW-57 | How it works | Multiple permissions in one statement may not grant expected access | 9 | PASS | S9: "try to define multiple permissions in a single statement, your policy might not grant the access that you expect" |
| HW-58 | How it works | By default all requests implicitly denied, except root | 12 | PASS | S12: "By default, all requests are implicitly denied with the exception of the" |
| HW-59 | How it works | Must be explicitly allowed | 12 | PASS | S12: "Requests must be explicitly allowed by a policy or set of policies" |
| HW-60 | How it works | Explicit deny overrides explicit allow | 12 | PASS | S12: "An explicit deny overrides an explicit allow." |
| HW-61 | How it works | AWS looks for a Deny statement in all applicable policies | 12 | PASS | S12: "the enforcement code looks for a Deny statement that applies to the request." |
| HW-62 | How it works | This is called an explicit deny | 12 | PASS | S12: "This is called an explicit deny." |
| HW-63 | How it works | One explicit deny gives final decision Deny | 12 | PASS | S12: "If the enforcement code finds even one explicit deny that applies, the enforcement code returns a final decision of Deny." |
| HW-64 | How it works | No explicit deny: evaluation continues | 12 | PASS | S12: "If there is no explicit deny, the enforcement code evaluation continues." |
| HW-65 | How it works | In one account both policies count; AWS looks for at least one Allow | 11 | PASS | S11: "AWS evaluates all the permissions granted by the policies for at least one Allow within the same account." |
| HW-66 | How it works | If one allows and other doesn't, still allowed | 11 | PASS | S11: "allows the request and the other doesn't, the request is still allowed." |
| HW-67 | How it works | For most resources one explicit Allow is enough | 12 | PASS | S12: "For most resources, you only need an explicit Allow for the principal in either an identity-based policy or a resource-based policy to grant access." |
| HW-68 | How it works | Role trust policies and KMS key policies are exceptions | 12 | PASS | S12: "role trust policies and KMS key policies are exceptions to this logic" |
| HW-69 | How it works | Boundary that does not allow action: implicit deny | 12 | PASS | S12: "does not allow the requested action, then the request is implicitly denied" |
| HW-70 | How it works | Single-account page shows Carlos and two policies | 11 | PASS | S11: "Assume that Carlos has the user name carlossalazar" … "the following resource-based policy (called a bucket policy)" |
| HW-71 | How it works | DenyS3Logs denies S3 buckets with log in name | 11 | PASS | S11: "The DenyS3Logs statement denies Carlos access to any S3 bucket with log in its name." |
| HW-72 | How it works | Saving to logs bucket: AWS first checks for Deny | 11 | PASS | S11: "AWS first checks for a Deny statement that applies to the context of the request." |
| HW-73 | How it works | It finds one | 11 | PASS | S11: "It finds one, because the identity-based policy explicitly denies Carlos" |
| HW-74 | How it works | Carlos is denied | 11 | PASS | S11: "Carlos is denied access." |
| HW-75 | How it works | Own bucket: checks Deny, finds none | 11 | PASS | S11: "AWS checks for a Deny statement and does not find one." |
| HW-76 | How it works | Both policies allow the request | 11 | PASS | S11: "Both the identity-based policy and the resource-based policy allow the request." |
| HW-77 | How it works | AWS allows the request | 11 | PASS | S11: "Therefore, AWS allows the request." |
| HW-78 | How it works | If either explicitly denied, it would be denied | 11 | PASS | S11: "If either of them explicitly denied the statement, the request would have been denied." |
| HW-79 | How it works | Grant only permissions required for a task | 3 | PASS | S3: "grant only the permissions required to" |
| HW-80 | How it works | As use case matures, reduce permissions toward least privilege | 3 | PASS | S3: "As your use case matures, you can work to reduce the permissions" |
| HW-81 | How it works | AWS managed policies might not be least-privilege | 3 | PASS | S3: "least-privilege permissions for your specific use cases" |
| HW-82 | How it works | Last accessed information helps find unneeded permissions | 3 | PASS | S3: "IAM provides last accessed" |
| HW-83 | How it works | Can specify conditions for a statement | 3 | PASS | S3: "You can specify conditions under which a policy statement is in effect" |
| HW-84 | How it works | Access Analyzer external analyzers find resources shared externally | 15 | PASS | S15: "IAM Access Analyzer external access analyzers help identify resources in your organization and accounts that are shared with an external entity." |
| HW-85 | How it works | It generates policies from CloudTrail access activity | 15 | PASS | S15: "policies based on access activity in your AWS CloudTrail logs." |
| HW-86 | How it works | AWS automatically examines policies you create or edit in console | 14 | PASS | S14: "When you create or edit IAM access control policies using the AWS Management Console, AWS automatically examines them to ensure that they comply with the IAM policy grammar." |
| HW-87 | How it works | Also verifies ARNs, action names, condition keys | 14 | PASS | S14: "It also verifies that your ARNs are formatted properly and action names and condition keys are correct." |
| HW-88 | How it works | Simulator tests identity-based, boundaries, SCPs, resource-based policies you provide | 13 | PASS | S13: "you can test identity-based policies, IAM permissions boundaries, service control policies (SCPs), and resource-based policies that you provide." |
| HW-89 | How it works | Simulates evaluation without sending real request | 13 | PASS | S13: "You simulate how AWS would evaluate a request against those policies, without sending a real request to any AWS service." |
| HW-90 | How it works | Binary outcome for every action and resource | 13 | PASS | S13: "Each simulation returns a binary authorization outcome for every action and resource you test" |
| HW-91 | How it works | Custom mode: test policies you write or paste | 13 | PASS | S13: "In Custom mode, you test one or more policies that you write or paste in." |
| HW-92 | How it works | Simulated on their own, not saved | 13 | PASS | S13: "own and are not saved to your account." |
| HW-93 | How it works | Simulator results can differ from live | 13 | PASS | S13: "The policy simulator results can differ from your live AWS environment." |
| HW-94 | How it works | Check policies against live after testing | 13 | PASS | S13: "We recommend that you check your policies against your live AWS environment after testing" |
| HW-95 | How it works | Need to protect encryption key | 17 | PASS | S17: "When you encrypt data, you need to protect your encryption key." |
| HW-96 | How it works | If you encrypt your key, protect its key | 17 | PASS | S17: "If you encrypt your key, you need to protect its encryption key." |
| HW-97 | How it works | Must protect highest-level root key | 17 | PASS | S17: "Eventually, you must protect the highest level encryption key (known as a root key)" |
| HW-98 | How it works | Envelope encryption definition | 19 | PASS | S19: "Envelope encryption is the practice of encrypting plaintext data with a data key, and then encrypting the data key under another key." |
| HW-99 | How it works | One key must remain in plaintext | 19 | PASS | S19: "eventually, one key must remain in plaintext so you can decrypt the keys and your data." |
| HW-100 | How it works | Top-level plaintext key is the root key | 19 | PASS | S19: "This top-level plaintext key encryption key is known as the root key." |
| HW-101 | How it works | To use a KMS key you must call AWS KMS | 19 | PASS | S19: "To use a KMS key, you must call AWS KMS." |
| HW-102 | How it works | Data keys are symmetric keys to encrypt data | 20 | PASS | S20: "Data keys are symmetric keys you can use to encrypt" |
| HW-103 | How it works | Data keys returned for use outside AWS KMS | 20 | PASS | S20: "data keys are returned to you for use outside of AWS KMS." |
| HW-104 | How it works | KMS returns optional plaintext data key and encrypted copy | 20 | PASS | S20: "it returns a plaintext data key for immediate use (optional) and an encrypted copy of the data key" |
| HW-105 | How it works | To decrypt, first ask KMS to decrypt the data key | 20 | PASS | S20: "you first ask AWS KMS to decrypt the encrypted data key." |
| HW-106 | How it works | KMS does not store, manage, track data keys | 20 | PASS | S20: "AWS KMS does not store, manage, or track your data keys" |
| HW-107 | How it works | Call GenerateDataKey to create a data key | 20 | PASS | S20: "To create a data key, call the GenerateDataKey operation." |
| HW-108 | How it works | Can re-encrypt only the data keys | 19 | PASS | S19: "you can re-encrypt only the data keys that protect the raw data." |
| HW-109 | How it works | Keys you create are customer managed keys | 18 | PASS | S18: "The KMS keys that you create are customer managed keys." |
| HW-110 | How it works | Monthly cost for customer managed key | 18 | PASS | S18: "There is a monthly cost to have a customer managed key in your account." |
| HW-111 | How it works | Customer managed: maintain policies, enable/disable, rotate, schedule deletion | 18 | PASS | S18: "maintaining their key policies, IAM policies, and grants, enabling and disabling them, rotating their cryptographic material" … "scheduling the KMS keys for deletion" |
| HW-112 | How it works | Cannot change AWS managed key properties, rotate, change policy, schedule deletion | 18 | PASS | S18: "you cannot change any properties of AWS managed keys, rotate them, change their key policies, or schedule them for deletion." |
| HW-113 | How it works | All AWS managed keys auto-rotated every year | 18 | PASS | S18: "All AWS managed keys are automatically rotated every year." |
| HW-114 | How it works | By default auto rotation makes new material every year | 21 | PASS | S21: "By default, when you enable automatic key rotation for a KMS key, AWS KMS generates new cryptographic material for the KMS key every year." |
| HW-115 | How it works | On-demand rotation starts rotation at once | 21 | PASS | S21: "If you need to immediately initiate key material rotation, you can perform on-demand rotation" |
| HW-116 | How it works | Decrypt uses material that encrypted it | 21 | PASS | S21: "AWS KMS uses the key material that was used to encrypt it." |
| HW-117 | How it works | Safe in applications without code changes | 21 | PASS | S21: "you can safely use a rotated KMS key in applications and AWS services without code changes." |
| HW-118 | How it works | KMS key is same logical resource | 21 | PASS | S21: "The KMS key is the same logical resource, regardless of whether or how many times its key material changes." |
| HW-119 | How it works | Rotation has no effect on protected data | 21 | PASS | S21: "Key rotation has no effect on the data that the KMS key protects." |
| HW-120 | How it works | Does not rotate data keys or re-encrypt data | 21 | PASS | S21: "It does not rotate the data keys that the KMS key generated or re-encrypt any data" |
| HW-121 | How it works | Rotation will not mitigate compromised data key | 21 | PASS | S21: "Key rotation will not mitigate the effect of a compromised data key." |
| HW-122 | How it works | Deleting a KMS key is destructive and dangerous | 22 | PASS | S22: "Deleting an AWS KMS key is destructive and potentially dangerous." |
| HW-123 | How it works | Deletes key material and metadata, irreversible | 22 | PASS | S22: "It deletes the key material and all metadata associated with the KMS key and is irreversible." |
| HW-124 | How it works | After deletion cannot decrypt data | 22 | PASS | S22: "you can no longer decrypt the data that was encrypted under that KMS key" |
| HW-125 | How it works | Waiting period 7 – 30 days | 22 | PASS | S22: "AWS KMS requires you to set a waiting period of 7 – 30 days." |
| HW-126 | How it works | Default waiting period 30 days | 22 | PASS | S22: "The default waiting period is 30" |
| HW-127 | How it works | Pending key cannot be used in crypto operations | 22 | PASS | S22: "A KMS key pending deletion cannot be used in any cryptographic operations." |
| HW-128 | How it works | Can cancel deletion before waiting period ends | 22 | PASS | S22: "To recover the KMS key, you can cancel key deletion before the waiting period ends." |
| HW-129 | How it works | If unsure consider disabling | 22 | PASS | S22: "If you are not sure, consider disabling the KMS key" |
| HW-130 | How it works | No charge for customer managed keys scheduled for deletion | 23 | PASS | S23: "There is no charge for customer managed KMS keys that you manage and are scheduled for deletion." |
| HW-131 | How it works | A secret can be password, credentials, OAuth token, other, stored encrypted | 25 | PASS | S25: "A secret can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager." |
| HW-132 | How it works | Up to 65536 bytes | 25 | PASS | S25: "You can store up to 65536 bytes in the secret." |
| HW-133 | How it works | Need SecretsManagerReadWrite permissions | 25 | PASS | S25: "To create a secret, you need the permissions granted by the SecretsManagerReadWrite managed" |
| HW-134 | How it works | Secrets encrypted at rest with keys you own in KMS | 27 | PASS | S27: "Secrets Manager encrypts secrets at rest using encryption keys that you own and store in AWS Key Management Service (AWS KMS)." |
| HW-135 | How it works | Retrieved secret sent over TLS | 27 | PASS | S27: "Secrets Manager decrypts the secret and transmits it securely over TLS to your local environment." |
| HW-136 | How it works | For most cases choose aws/secretsmanager | 25 | PASS | S25: "For most cases, choose aws/secretsmanager to use the AWS managed key for Secrets Manager." |
| HW-137 | How it works | No cost for this key | 25 | PASS | S25: "There is no cost for using" |
| HW-138 | How it works | Own KMS keys charged at KMS rate | 24 | PASS | S24: "If you create your own KMS keys to encrypt your secrets, AWS charges you at the current AWS KMS rate." |
| HW-139 | How it works | Can configure automatic rotation schedule | 24 | PASS | S24: "you can configure an automatic rotation schedule for your secrets." |
| HW-140 | How it works | Rotation no longer requires updating applications | 24 | PASS | S24: "rotating credentials no longer requires updating your applications and deploying changes to application clients." |
| HW-141 | How it works | Rotation as often as every four hours | 27 | PASS | S27: "every four hours." |
| HW-142 | How it works | Two strategies: Single user and Alternating users | 27 | PASS | S27: "Secrets Manager offers two strategies for rotation: Single user and Alternating users." |
| HW-143 | How it works | Unchanged secrets more likely compromised | 27 | PASS | S27: "If you don't change your secrets for a long period of time, the secrets become more" |
| HW-144 | How it works | Auto rotation (except managed rotation) charged at Lambda rate | 24 | PASS | S24: "When you turn on automatic rotation (except managed rotation)" … "you are charged for the rotation function at the current Lambda rate." |
| HW-145 | How it works | Secrets Manager does not immediately delete | 26 | PASS | S26: "Secrets Manager does not immediately delete secrets." |
| HW-146 | How it works | Makes secret inaccessible, schedules deletion after min seven days | 26 | PASS | S26: "immediately makes the secrets inaccessible and scheduled for deletion after a recovery window of a minimum of seven days." |
| HW-147 | How it works | Can recover until window ends | 26 | PASS | S26: "Until the recovery window ends, you can recover a secret you previously deleted." |
| HW-148 | How it works | No charge for secrets marked for deletion | 26 | PASS | S26: "There is no charge for secrets that you have marked for deletion." |
| HW-149 | How it works | Can't directly delete a version | 26 | PASS | S26: "You can't directly delete a version of a secret." |
| HW-150 | How it works | CloudWatch alarm for access attempts during window | 26 | PASS | S26: "you can create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window." |
| HW-151 | How it works | Without recovery window, can't recover | 26 | PASS | S26: "deletes a secret immediately without a recovery window. You can't recover this secret." |
| HW-152 | How it works | Pay only for what you use, no minimum or setup fees | 24 | PASS | S24: "you pay only for what you use, with no minimum or setup fees." |
| HW-153 | How it works | Command shells could compromise secrets | 27 | PASS | S27: "Most command shells offer features that could compromise your secrets, such as logging and the ability to see the last entered command." |
| HW-154 | How it works | Use least privileged access in IAM policy statements | 27 | PASS | S27: "In IAM policy statements that control access to your secrets, use the principle of least privileged access." |
| HW-155 | How it works | Cache secrets, update only when required | 27 | PASS | S27: "To use your secrets most efficiently, we recommend you use one of the following supported Secrets Manager caching components to cache your secrets and update them only when required" |
| TI-1 | Try it | Run date, OS, tool versions, no AWS account, no AWS_ variables, no ~/.aws folder | none | N/A | Record of the page's own run. The link to AWS Compute and Storage is not a fact. |
| TI-2 | Try it | Step 1 uses json.loads, which deserializes a JSON document to a Python object | 32 | PASS | S32: "deserialize s (a str, bytes or bytearray" and "Deserialize fp to a Python object" |
| TI-3 | Try it | Two policies are those of the S11 single-account example | 11 | PASS | S11: "Assume that Carlos has the user name carlossalazar" |
| TI-4 | Try it | Identity policy lists two of four AllowS3ListRead actions and omits s3:GetAccountPublicAccessBlock and s3:ListAccessPoints. Covers the policy_model.py block. | 11 | PASS | S11 lists "s3:GetBucketLocation", "s3:GetAccountPublicAccessBlock", "s3:ListAccessPoints", "s3:ListAllMyBuckets". The block's policy JSON (AllowS3Self, DenyS3Logs, the bucket policy, ARNs) matches S11. The model logic and the extra cases are the tutorial's own code. |
| TI-5 | Try it | Output of policy_model.py | none | N/A | Output of the page's own run. |
| TI-6 | Try it | Logs bucket: first checks for Deny, finds one, Carlos denied | 11 | PASS | S11: "AWS first checks for a Deny statement" … "Carlos is denied access." |
| TI-7 | Try it | Own bucket: both policies allow, so AWS allows | 11 | PASS | S11: "Both the identity-based policy and the resource-based policy allow the request. Therefore, AWS allows the request." |
| TI-8 | Try it | Another bucket: by default all requests implicitly denied | 12 | PASS | S12: "By default, all requests are implicitly denied" |
| TI-9 | Try it | Someone else: bucket policy says only carlossalazar can access | 11 | PASS | S11: "This policy specifies that only the carlossalazar user can access the" |
| TI-10 | Try it | Identity only / bucket only: one allows, other doesn't, still allowed | 11 | PASS | S11: "allows the request and the other doesn't, the request is still allowed." |
| TI-11 | Try it | Explicit deny overrides explicit allow | 12 | PASS | S12: "An explicit deny overrides an explicit allow." |
| TI-12 | Try it | Page says if either policy explicitly denied, it would be denied | 11 | PASS | S11: "If either of them explicitly denied the statement, the request would have been denied." |
| TI-13 | Try it | First two lines match page; other five are tutorial's own | none | N/A | Record of the page's own run and reasoning. |
| TI-14 | Try it | The model omits many policy features. AWS evaluates all these policy types that apply to a request | 12 | PASS | S12: "These include AWS Organizations SCPs and RCPs, resource-based policies, identity-based policies, IAM permissions boundaries, and session policies." |
| TI-15 | Try it | Step 2 follows envelope encryption definition | 19 | PASS | S19: "Envelope encryption is the practice of encrypting plaintext data with a data key, and then encrypting the data key under another key." |
| TI-16 | Try it | In AWS KMS, KMS keys are created, managed, used, deleted within KMS | 17 | PASS | S17: "KMS keys are created, managed, used, and deleted entirely within AWS KMS." |
| TI-17 | Try it | openssl rand makes random bytes with a CSPRNG | 31 | PASS | S31: "This command generates num random bytes using a cryptographically secure pseudo random number generator (CSPRNG)." |
| TI-18 | Try it | -hex shows output as hex string | 31 | PASS | S31: "-hex Show the output as a hex string." |
| TI-19 | Try it | -K must be hex digits; if only key given, IV needed with -iv | 30 | PASS | S30: "The actual key to use: this must be represented as a string comprised only of hex digits. If only the key is specified, the IV must additionally specified using the -iv option." |
| TI-20 | Try it | -d decrypts the input | 30 | PASS | S30: "-d Decrypt the input data." |
| TI-21 | Try it | The command lists AES in CBC mode | 30 | PASS | S30: "aes-[128\|192\|256]-cbc 128/192/256 bit AES in CBC mode" |
| TI-22 | Try it | Does not support authenticated modes like CCM and GCM | 30 | PASS | S30: "This command does not support authenticated encryption modes like CCM and GCM" |
| TI-23 | Try it | envelope.sh script and its output | none | N/A | The page's own script and run output. Its flags (rand -hex, enc -aes-256-cbc -K -iv -in -out, -d) are checked in TI-17 to TI-21. |
| TI-24 | Try it | Line 1: safe to store the encrypted data key alongside the encrypted data | 19 | PASS | S19: "store the encrypted data key alongside the encrypted data." |
| TI-25 | Try it | Line 2: recipient first decrypts the key, then the message | 19 | PASS | S19: "by first decrypting the encrypted key and then decrypting the message." |
| TI-26 | Try it | With KMS you first ask KMS to decrypt the data key | 20 | PASS | S20: "you first ask AWS KMS to decrypt the encrypted data key." |
| TI-27 | Try it | Line 3: re-encrypt only data keys | 19 | PASS | S19: "you can re-encrypt only the data keys that protect the raw data." |
| TI-28 | Try it | Rotated key decrypt uses material that encrypted | 21 | PASS | S21: "AWS KMS uses the key material that was used to encrypt it." |
| TI-29 | Try it | Key rotation does not re-encrypt any data | 21 | PASS | S21: "It does not rotate the data keys that the KMS key generated or re-encrypt any data" |
| TI-30 | Try it | Line 4: after deletion cannot decrypt | 22 | PASS | S22: "you can no longer decrypt the data that was encrypted under that KMS key" |
| TI-31 | Try it | KMS requires 7 – 30 day wait | 22 | PASS | S22: "a waiting period of 7 – 30 days" |
| TI-32 | Try it | You can cancel deletion before it ends | 22 | PASS | S22: "you can cancel key deletion before the waiting period ends" |
| TI-33 | Try it | Three env vars: files for profiles and access keys; IMDS disabled | 29 | PASS | S29: "Specifies the location of the file that the AWS CLI uses to store configuration profiles." "…to store access keys." "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| TI-34 | Try it | --generate-cli-skeleton makes a parameter template | 28 | PASS | S28: "The --generate-cli-skeleton generates and displays a parameter template that you can customize and use as input on a command." |
| TI-35 | Try it | Step 3 command block and its output | none | N/A | The three commands and the filter are the page's own choice. Output of the page's own run. The flag is checked in TI-34. |
| TI-36 | Try it | SecretString matches --secret-string in create-secret example | 25 | PASS | S25: "--secret-string '{"user":"diegor","password":"EXAMPLE-PASSWORD"}'" |
| TI-37 | Try it | PendingWindowInDays matches option and output field in example | 33 | PASS | S33: "aws kms schedule-key-deletion --key-id 1234abcd-12ab-34cd-56ef-1234567890ab --pending-window-in-days 10" and ""PendingWindowInDays": 10" |
| TI-38 | Try it | Console asks for 7 to 30 days | 33 | PASS | S33: "For Waiting period (in days), enter a number of days between 7 and 30." |
| TI-39 | Try it | Step 4 cost: IAM, IAM Identity Center, STS at no additional charge | 1 | PASS | S1: "are features of your AWS account offered at no additional charge." |
| TI-40 | Try it | Charged only when accessing other services | 1 | PASS | S1: "You are charged only when you access other AWS services using your IAM users or AWS STS temporary security credentials." |
| TI-41 | Try it | Instance billing described on another page | none | N/A | Link to another page of the site. |
| TI-42 | Try it | Step 4.1: administrator creates Get-pics role and attaches to instance | 16 | PASS | S16: "administrator creates the Get-pics service role and attaches the role to the Amazon EC2 instance." |
| TI-43 | Try it | Step 4.2: read-only permissions policy | 16 | PASS | S16: "The role includes a permissions policy that grants read-only access to the specified S3 bucket." |
| TI-44 | Try it | Trust policy lets EC2 assume role | 16 | PASS | S16: "It also includes a trust policy that allows the Amazon EC2 instance to assume" |
| TI-45 | Try it | Step 4.3: developer launches and assigns role | 16 | PASS | S16: "A developer launches an Amazon EC2 instance and assigns the Get-pics role to" |
| TI-46 | Try it | Developer needs launch and pass-role permissions | 16 | PASS | S16: "instances and permission to pass IAM roles." |
| TI-47 | Try it | Step 4.4: console manages instance profile | 16 | PASS | S16: "If you use the IAM console, the instance profile is managed for you" |
| TI-48 | Try it | CLI or API: create instance profile and assign role separately | 16 | PASS | S16: "then you must create the instance profile and assign the role to it" |
| TI-49 | Try it | Step 4.5: application gets credentials from instance metadata | 16 | PASS | S16: "it obtains temporary security credentials from Amazon EC2 instance metadata" |
| TI-50 | Try it | Cached set refreshed every hour or 15 minutes before expiry | 16 | PASS | S16: "it should get a refreshed set of credentials every hour, or at least 15 minutes" |
| TI-51 | Try it | Step 5 cost: pay only for what you use | 24 | PASS | S24: "you pay only for what you use, with no minimum or setup fees." |
| TI-52 | Try it | Own KMS keys charged at KMS rate | 24 | PASS | S24: "AWS charges you at the current AWS KMS rate." |
| TI-53 | Try it | Deletes after min seven day window | 26 | PASS | S26: "a recovery window of a minimum of seven days." |
| TI-54 | Try it | No charge for secrets marked for deletion | 26 | PASS | S26: "There is no charge for secrets that you have marked for deletion." |
| TI-55 | Try it | Step 5.1: Store a new secret | 25 | PASS | S25: "Choose Store a new secret." |
| TI-56 | Try it | 5.2: Other type of secret | 25 | PASS | S25: "databases, choose Other type of secret." |
| TI-57 | Try it | 5.3: key/value pairs or Plaintext tab | 25 | PASS | S25: "Plaintext tab and enter the secret in any format." |
| TI-58 | Try it | 5.4: choose the KMS key | 25 | PASS | S25: "For Encryption key, choose the AWS KMS key that" |
| TI-59 | Try it | Choose aws/secretsmanager for most cases | 25 | PASS | S25: "For most cases, choose aws/secretsmanager" |
| TI-60 | Try it | 5.5: Actions, Delete secret | 26 | PASS | S26: "In the Secret details section, choose Actions, and" |
| TI-61 | Try it | Waiting period, Schedule deletion | 26 | PASS | S26: "Waiting period, enter the number of days to wait before the deletion" … "Choose Schedule deletion." |
| TI-62 | Try it | Step 6 cost: monthly cost for customer managed key | 18 | PASS | S18: "There is a monthly cost to have a customer managed key in your account." |
| TI-63 | Try it | No charge for scheduled-for-deletion keys | 23 | PASS | S23: "There is no charge for customer managed KMS keys that you manage and are scheduled for deletion." |
| TI-64 | Try it | If cancelled, key incurs charges as if never scheduled | 23 | PASS | S23: "will incur charges as though it was never scheduled for deletion." |
| TI-65 | Try it | Page warns deletion is destructive | 33 | PASS | S33: "Deleting a KMS key is destructive and potentially dangerous." |
| TI-66 | Try it | 6.1: Customer managed keys pane | 33 | PASS | S33: "In the navigation pane, choose Customer managed keys." |
| TI-67 | Try it | Cannot schedule AWS managed or owned keys | 33 | PASS | S33: "You cannot schedule the deletion of AWS managed keys or AWS owned keys." |
| TI-68 | Try it | 6.2: checkbox, Key actions, Schedule key deletion | 33 | PASS | S33: "Choose the checkbox next to the KMS key that you want to delete." "Choose Key actions, Schedule key" |
| TI-69 | Try it | 6.3: 7 to 30 days | 33 | PASS | S33: "enter a number of days between 7 and 30." |
| TI-70 | Try it | 6.4: confirm check box | 33 | PASS | S33: "Choose the check box next to I confirm that I want to schedule these keys for deletion." |
| TI-71 | Try it | Keys immediately unusable for crypto operations | 33 | PASS | S33: "The keys will become immediately unusable for cryptographic" |
| TI-72 | Try it | 6.5: CloudTrail entries at scheduling and deletion | 33 | PASS | S33: "AWS KMS records an entry in your AWS CloudTrail log when you schedule deletion of the KMS key and when the" |
| TU-1 | How a tester uses it | Allowed only if a policy explicitly allows | 12 | PASS | S12: "Requests must be explicitly allowed by a policy or set of policies" |
| TU-2 | How a tester uses it | Explicit deny overrides explicit allow | 12 | PASS | S12: "An explicit deny overrides an explicit allow." |
| TU-3 | How a tester uses it | In one account an Allow in either policy is enough for most resources | 12 | PASS | S12: "For most resources, you only need an explicit Allow for the principal in either an identity-based policy or a resource-based policy" |
| TU-4 | How a tester uses it | Simulator evaluates without real request | 13 | PASS | S13: "without sending a real request to any AWS service." |
| TU-5 | How a tester uses it | Results can differ from live | 13 | PASS | S13: "can differ from your live AWS environment" |
| TU-6 | How a tester uses it | IAM eventually consistent | 1 | PASS | S1: "eventually consistent" |
| TU-7 | How a tester uses it | Verify changes propagated | 1 | PASS | S1: "verify that the changes" |
| TU-8 | How a tester uses it | Do NOT put keys in application files | 6 | PASS | S6: "Do NOT put access keys or credential information" |
| TU-9 | How a tester uses it | Shared credentials file is plaintext | 6 | PASS | S6: "are stored in plaintext" |
| TU-10 | How a tester uses it | Secrets Manager replaces hard-coded credentials with runtime call | 24 | PASS | S24: "You replace hard-coded credentials with a runtime call" |
| TU-11 | How a tester uses it | AWS delivers role credentials to EC2 or Lambda | 3 | PASS | S3: "AWS delivers" … "such as Amazon EC2 or Lambda" |
| TU-12 | How a tester uses it | After expiry AWS no longer recognizes them | 5 | PASS | S5: "After the credentials expire, AWS no longer recognizes them" |
| TU-13 | How a tester uses it | Caching app refreshes at least 15 minutes before expiry | 16 | PASS | S16: "every hour, or at least 15 minutes" |
| TU-14 | How a tester uses it | AWS recommends MFA for IAM user or root user | 3 | PASS | S3: "for scenarios in which you need an IAM user or root user in your account, require MFA for additional security." |
| TU-15 | How a tester uses it | Root only for tasks that need root-level permissions | 7 | PASS | S7: "Use the root user only to perform the tasks that require root-level permissions" |
| TU-16 | How a tester uses it | Deleted secret recoverable until window ends | 26 | PASS | S26: "Until the recovery window ends, you can recover a secret you previously deleted." |
| TU-17 | How a tester uses it | CloudWatch alarm for access attempts in window | 26 | PASS | S26: "alarm to alert you to any attempts to access a secret during the recovery window" |
| TU-18 | How a tester uses it | Rotating credentials no longer requires updating applications | 24 | PASS | S24: "rotating credentials no longer requires updating your applications" |
| TU-19 | How a tester uses it | Auto rotation as often as every four hours | 27 | PASS | S27: "every four hours." |
| TU-20 | How a tester uses it | Rotated key decrypts with original material | 21 | PASS | S21: "AWS KMS uses the key material that was used to encrypt it." |
| TU-21 | How a tester uses it | Safe without code changes | 21 | PASS | S21: "you can safely use a rotated KMS key in applications and AWS services without code changes." |
| TU-22 | How a tester uses it | Rotation has no effect on protected data | 21 | PASS | S21: "Key rotation has no effect on the data that the KMS key protects." |
| TU-23 | How a tester uses it | Pending key cannot be used | 22 | PASS | S22: "A KMS key pending deletion cannot be used in any cryptographic operations." |
| TU-24 | How a tester uses it | CloudWatch alarm warns about use during waiting period | 22 | PASS | S22: "You can configure an Amazon CloudWatch alarm to warn you if a person or application attempts to use the KMS key during the waiting period." |
| TU-25 | How a tester uses it | AWS checks JSON policy syntax and grammar | 14 | PASS | S14: "AWS checks JSON policy syntax and grammar." |
| TU-26 | How a tester uses it | Access Analyzer validates against grammar and best practices | 15 | PASS | S15: "IAM Access Analyzer validates IAM policies against policy grammar and AWS best practices." |
| CM-1 | Common mistakes | Do not use root every day | 1 | PASS | S1: "We strongly recommend that you don't use the root user for everyday tasks." |
| CM-2 | Common mistakes | Do NOT put keys in application files | 6 | PASS | S6: "Do NOT put access keys or credential information" |
| CM-3 | Common mistakes | Do NOT include key files in project area | 6 | PASS | S6: "Do NOT include files that contain access keys or" |
| CM-4 | Common mistakes | Secret access key retrieved only at creation | 6 | PASS | S6: "The secret access key can be retrieved only at the time you create it" |
| CM-5 | Common mistakes | If lost, delete key and create new | 6 | PASS | S6: "lose your secret access key, you must delete the access key and create a new one" |
| CM-6 | Common mistakes | IAM eventually consistent | 1 | PASS | S1: "eventually consistent" |
| CM-7 | Common mistakes | Do not include such changes in critical code paths | 1 | PASS | S1: "We recommend that you do not include such IAM changes in the critical, high-availability code paths of your application." |
| CM-8 | Common mistakes | Explicit deny overrides allow | 12 | PASS | S12: "An explicit deny overrides an explicit allow." |
| CM-9 | Common mistakes | Default implicit deny, root excepted | 12 | PASS | S12: "By default, all requests are implicitly denied with the exception of the" |
| CM-10 | Common mistakes | AWS managed policies might not be least-privilege | 3 | PASS | S3: "least-privilege permissions for your specific use cases" |
| CM-11 | Common mistakes | Multiple permissions in one statement | 9 | PASS | S9: "your policy might not grant the access that you expect" |
| CM-12 | Common mistakes | Cannot include Principal in identity-based policy | 9 | PASS | S9: "you cannot include this element." |
| CM-13 | Common mistakes | Simulator results can differ from live | 13 | PASS | S13: "The policy simulator results can differ from your live AWS environment." |
| CM-14 | Common mistakes | Rotation has no effect on protected data | 21 | PASS | S21: "Key rotation has no effect on the data that the KMS key protects." |
| CM-15 | Common mistakes | Rotation will not mitigate compromised data key | 21 | PASS | S21: "Key rotation will not mitigate the effect of a compromised data key." |
| CM-16 | Common mistakes | After deletion cannot decrypt | 22 | PASS | S22: "you can no longer decrypt the data that was encrypted under that KMS key" |
| CM-17 | Common mistakes | If unsure, disable instead | 22 | PASS | S22: "If you are not sure, consider disabling the KMS key" |
| CM-18 | Common mistakes | Monthly cost for customer managed key | 18 | PASS | S18: "There is a monthly cost to have a customer managed key in your account." |
| CM-19 | Common mistakes | Own KMS keys charged at KMS rate | 24 | PASS | S24: "AWS charges you at the current AWS KMS rate." |
| CM-20 | Common mistakes | "With automatic rotation, you are charged for the rotation function at the current Lambda rate" | 24 | FAIL | S24 gives a limit: "When you turn on automatic rotation (except managed rotation)… you are charged for the rotation function at the current Lambda rate." The page drops "except managed rotation", so it claims more than the source. Fix: "When you turn on automatic rotation (except managed rotation), you are charged for the rotation function at the current Lambda rate." |
| CM-21 | Common mistakes | Secrets Manager does not immediately delete | 26 | PASS | S26: "Secrets Manager does not immediately delete secrets." |
| CM-22 | Common mistakes | Delete without window can't be recovered | 26 | PASS | S26: "deletes a secret immediately without a recovery window. You can't recover this secret." |
| CM-23 | Common mistakes | Command shells could compromise secrets | 27 | PASS | S27: "Most command shells offer features that could compromise your secrets, such as logging and the ability to see the last entered command." |
| CM-24 | Common mistakes | openssl enc has no CCM and GCM | 30 | PASS | S30: "This command does not support authenticated encryption modes like CCM and GCM" |
| TC-1 | What a tester can check | Callout list of advice | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no fact about a tool that the rest of the page does not support. |
| KW-1 | Key words | IAM | none | PASS | WI-1: "IAM is a web service that helps you securely control access to AWS resources" |
| KW-2 | Key words | Root user | none | PASS | WI-4: "one sign-in identity called the AWS account root user that has complete access to all AWS services and resources" |
| KW-3 | Key words | IAM role | none | PASS | WI-5: "An IAM role is an IAM identity that you can create in your account that has specific permissions" |
| KW-4 | Key words | Access key | none | PASS | HW-11: "Access keys are long-term credentials for an IAM user or the AWS account root user" |
| KW-5 | Key words | Temporary security credentials | none | PASS | HW-19, HW-21: "You can use AWS STS to create and provide trusted users with temporary security credentials" and "They can be configured to last for anywhere from a few minutes to several hours" |
| KW-6 | Key words | MFA | none | PASS | HW-7: "MFA requires users to provide unique authentication from an AWS supported MFA mechanism in addition to their sign-in credentials" |
| KW-7 | Key words | Policy | none | PASS | WI-9: "A policy is an object in AWS that, when associated with an identity or resource, defines their permissions" |
| KW-8 | Key words | Identity-based policy | none | PASS | HW-33: "Identity-based policies are JSON permissions policy documents that control what actions an identity can perform, on which resources, and under what conditions" |
| KW-9 | Key words | Resource-based policy | none | PASS | HW-38: "Resource-based policies are JSON policy documents that you attach to a resource such as an Amazon S3 bucket" |
| KW-10 | Key words | Trust policy | none | PASS | HW-42: "Trust policies define which principal entities can assume the role" |
| KW-11 | Key words | Permissions boundary | none | PASS | HW-43: "A permissions boundary sets the maximum permissions that an identity-based policy can grant to an IAM entity" |
| KW-12 | Key words | Explicit deny | none | PASS | HW-61 to HW-62, HW-60: "AWS looks in all applicable policies for a Deny statement that applies to the request. This is called an explicit deny." and "An explicit deny overrides an explicit allow" |
| KW-13 | Key words | Implicit deny | none | PASS | HW-58: "By default, all requests are implicitly denied, except for the AWS account root user, which has full access" |
| KW-14 | Key words | Policy simulator | none | PASS | HW-89: "You simulate how AWS would evaluate a request, without sending a real request to any AWS service" with HW-88 "policies … that you provide" |
| KW-15 | Key words | IAM Access Analyzer | none | PASS | HW-84, HW-86, HW-85: "help identify resources that are shared with an external entity", "ensure that they comply with the IAM policy grammar", "generates IAM policies based on access activity" |
| KW-16 | Key words | AWS KMS | none | PASS | WI-12: "makes it easy for you to create and control the keys used to encrypt and sign your data" |
| KW-17 | Key words | KMS key | none | PASS | WI-13, WI-14: "KMS keys are created, managed, used, and deleted entirely within AWS KMS. They never leave the service unencrypted" |
| KW-18 | Key words | Customer managed key | none | PASS | HW-109 to HW-111: "The KMS keys that you create are customer managed keys", "you can maintain its key policies, enable and disable it, rotate its cryptographic material, and schedule it for deletion", "There is a monthly cost" |
| KW-19 | Key words | Data key | none | PASS | HW-102, HW-103: "Data keys are symmetric keys you can use to encrypt data" and "Data keys are returned to you for use outside of AWS KMS" |
| KW-20 | Key words | Envelope encryption | none | PASS | HW-98: "Envelope encryption is the practice of encrypting plaintext data with a data key, and then encrypting the data key under another key" |
| KW-21 | Key words | Root key | none | PASS | HW-100: "This top-level plaintext key encryption key is known as the root key" |
| KW-22 | Key words | Key rotation | none | PASS | HW-114, HW-119: "AWS KMS generates new cryptographic material for it every year" and "Key rotation has no effect on the data that the KMS key protects" |
| KW-23 | Key words | Waiting period | none | PASS | HW-125, HW-126, HW-128: "AWS KMS requires a waiting period of 7 – 30 days. The default waiting period is 30 days" and "you can cancel key deletion before the waiting period ends" |
| KW-24 | Key words | Secrets Manager | none | PASS | WI-15: "helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles" |
| KW-25 | Key words | Secret | none | PASS | HW-131: "A secret can be a password, a set of credentials, an OAuth token, or other secret information that you store in an encrypted form" |
| KW-26 | Key words | Recovery window | none | PASS | HW-146, HW-147: "a recovery window of a minimum of seven days" and "you can recover a secret you previously deleted" |
| KW-27 | Key words | Secret rotation | none | PASS | HW-139, HW-141, HW-142: "configure an automatic rotation schedule", "as often as every four hours", "two strategies for rotation: Single user and Alternating users" |

Open FAILs after round 7: 1

Changed after this round: Row CM-20: the Common mistakes bullet on rotation charges said that with automatic rotation you are charged for the rotation function at the current Lambda rate, and left out the limit in S24: "except managed rotation". The bullet now says that when you turn on automatic rotation (except managed rotation), you are charged for the rotation function at the current Lambda rate.

## Round 8 (2026-11-19)

# Fact check: devops / aws-identity-security (round 8)

Where the page cites one source passage for several adjacent sentences, I list them in one row and give the claim numbers.

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 0a | Description line | IAM, KMS, Secrets Manager, practice run, read-along | none | N/A | Sentence that describes the page itself. |
| 0b | Lede | Page scope; practice run needs no AWS account; links to other pages | none | N/A | Framing sentences, the page's own run, and links that start with `/`. |
| 1 | What it is | IAM is a web service that helps you securely control access to AWS resources | S1 | PASS | "is a web service that helps you securely control access to AWS resources" |
| 2 | What it is | IAM controls who is authenticated (signed in) and authorized (has permissions) | S1 | PASS | "You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources" |
| 3 | What it is | There is no charge to use IAM | S2 | PASS | "There is no charge to use IAM." |
| 4 | What it is | A new account begins with one sign-in identity, the root user, with complete access | S1 | PASS | "you begin with one sign-in identity called the AWS account root user that has complete access to all AWS services and resources" |
| 5 | What it is | An IAM role is an IAM identity you can create in your account that has specific permissions | S4 | PASS | "An IAM identity that you can create in your account that has specific permissions." |
| 6 | What it is | A role is intended to be assumable by anyone who needs it | S4 | PASS | "intended to be assumable by anyone who needs it" |
| 7 | What it is | A role has no standard long-term credentials such as a password or access keys | S4 | PASS | "a role does not have standard long-term credentials such as a password or access keys associated with it" |
| 8 | What it is | Assuming a role gives temporary security credentials for the role session | S4 | PASS | "you with temporary security credentials for your role session" |
| 9 | What it is | A policy is an object in AWS that defines permissions when associated with an identity or resource | S9 | PASS | "A policy is an object in AWS that, when" … (next line) "associated with an identity or resource, defines their permissions" (S9 lines 8-9) |
| 10 | What it is | AWS evaluates policies when an IAM principal (user or role) makes a request | S9 | PASS | "policies when an IAM principal (user or role) makes a request." |
| 11 | What it is | Permissions in the policies decide whether the request is allowed or denied | S9 | PASS | "Permissions in the policies determine whether the request is allowed or denied." |
| 12 | What it is | AWS KMS is an AWS managed service that makes it easy to create and control keys used to encrypt and sign data | S17 | PASS | "is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data" |
| 13 | What it is | KMS keys are created, managed, used, and deleted entirely within AWS KMS | S17 | PASS | "KMS keys are created, managed, used, and deleted entirely within AWS KMS." |
| 14 | What it is | They never leave the service unencrypted | S17 | PASS | "They never leave the service unencrypted." |
| 15 | What it is | Secrets Manager helps manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, other secrets | S24 | PASS | "helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles" |
| 16 | What it is | You replace hard-coded credentials with a runtime call to retrieve credentials dynamically | S24 | PASS | "You replace hard-coded credentials with a runtime call to the Secrets Manager service to retrieve credentials dynamically when you need them." |
| 17 | What it is | For AWS credentials, AWS recommends IAM | S24 | PASS | "AWS credentials – We recommend AWS Identity and Access Management." |
| 18 | What it is | For encryption keys, it recommends AWS KMS | S24 | PASS | "Encryption keys – We recommend AWS Key Management Service." |
| 19 | How it works | Authentication is provided by matching sign-in credentials to a principal trusted by the account | S1 | PASS | "Authentication is provided by matching the sign-in credentials to a principal (an IAM user, AWS STS federated principal, IAM role, or application) trusted by the AWS account." |
| 20 | How it works | AWS strongly recommends not using the root user for everyday tasks | S1 | PASS | "We strongly recommend that you don't use the root user for everyday tasks." |
| 21 | How it works | Use the root user only for tasks that require root-level permissions | S7 | PASS | "Use the root user only to perform the tasks that require root-level permissions." |
| 22 | How it works | You cannot attach identity-based policies to the root user | S9 | PASS | "You cannot attach identity-based policies to the root user" |
| 23 | How it works | MFA is enforced for root users by default; adding it needs customer action at account creation or sign-in prompt | S7 | PASS | "While MFA is enforced for root users by default, it requires customer action to add MFA during the initial account creation or as prompted during sign-in." |
| 24 | How it works | MFA requires unique authentication from an AWS supported MFA mechanism in addition to sign-in credentials | S8 | PASS | "requires users to provide unique authentication from an AWS" … "supported MFA mechanism in addition to their sign-in credentials" (S8 line 24 ff.; the second line was not opened, only the first half is quoted) |
| 25 | How it works | Root user and IAM users can register up to eight MFA devices of any type | S8 | PASS | "Your AWS account root user and IAM users can register up to eight MFA devices of any type." |
| 26 | How it works | Only one MFA device is needed to sign in to the Console or create a CLI session | S8 | PASS | "You only need one MFA device to sign in to the" … "create a session" (S8 lines 20, 124) |
| 27 | How it works | AWS recommends phishing-resistant MFA such as passkeys and security keys whenever possible | S8 | PASS | "We recommend that you use phishing-resistant MFA such as passkeys and security keys whenever possible." |
| 28 | How it works | Access keys are long-term credentials for an IAM user or root user | S6 | PASS | "Access keys are long-term credentials for an IAM user or the AWS account root user." |
| 29 | How it works | You must use both the access key ID and secret access key together | S6 | PASS | "You must use both the access key ID and secret access" … |
| 30 | How it works | The secret access key can be retrieved only at creation | S6 | PASS | "The secret access key can be retrieved only at the time you create it." |
| 31 | How it works | Maximum of two access keys per user | S6 | PASS | "You can have a maximum of two access keys per user." |
| 32 | How it works | Best practice: use temporary credentials (such as IAM roles) instead of long-term access keys | S6 | PASS | "As a best practice, use temporary security credentials (such as IAM roles) instead of creating long-term credentials like access keys." |
| 33 | How it works | Shared credentials file is stored in plaintext | S6 | PASS | "Access keys or credential information stored in the shared AWS credentials file are stored in plaintext." |
| 34 | How it works | Do NOT put keys in application files | S6 | PASS | "Do NOT put access keys or credential information in your application files." |
| 35 | How it works | Do NOT include files with keys in your project area | S6 | PASS | "Do NOT include files that contain access keys or credential information in your project area." |
| 36 | How it works | AWS STS can create temporary credentials for trusted users | S5 | PASS | "use the AWS Security Token Service (AWS STS) to create and provide trusted users with temporary security credentials" |
| 37 | How it works | Temporary credentials are short-term | S5 | PASS | "Temporary security credentials are short-term, as the name implies." |
| 38 | How it works | They can last from a few minutes to several hours | S5 | PASS | "configured to last for anywhere from a few minutes to several hours" |
| 39 | How it works | After expiry AWS no longer recognizes them | S5 | PASS | "After the credentials expire, AWS no longer recognizes them" |
| 40 | How it works | Not stored with the user; generated dynamically when requested | S5 | PASS | "not stored with the user but are generated dynamically and provided to the user when requested" |
| 41 | How it works | AWS delivers an IAM role's temporary credentials to EC2 or Lambda | S3 | PASS | "AWS delivers the temporary credentials of an IAM role to that compute resource." |
| 42 | How it works | SDK applications discover and use these credentials | S3 | PASS | "Applications written using an AWS SDK will discover and use these temporary credentials" |
| 43 | How it works | When launching EC2 you specify an IAM role to associate | S16 | PASS | "you specify an IAM role to associate with the instance" |
| 44 | How it works | Applications can use the role's temporary credentials to sign API requests | S16 | PASS | "can then use the role-supplied temporary credentials to sign API requests" |
| 45 | How it works | Only one role can be assigned to an EC2 instance at a time | S16 | PASS | "Only one role can be assigned to an Amazon EC2 instance at a time" |
| 46 | How it works | All applications on the instance share the same role and permissions | S16 | PASS | "all applications on the instance share the same role and permissions" |
| 47 | How it works | IAM is eventually consistent | S1 | PASS | "IAM, like many other AWS services, is eventually consistent." |
| 48 | How it works | AWS recommends not putting IAM changes in critical high-availability code paths | S1 | PASS | "We recommend that you do not include such IAM changes in the critical, high-availability code paths of your application." |
| 49 | How it works | Verify changes have propagated before production depends on them | S1 | PASS | "be sure to verify that the changes have been propagated before production workflows depend on them" |
| 50 | How it works | Identity-based policies are JSON permissions policy documents controlling actions, resources, conditions | S9 | PASS | "Identity-based policies are JSON permissions policy documents that control what actions an identity … can perform, on which resources, and under what conditions." |
| 51 | How it works | You attach managed and inline policies to IAM identities | S9 | PASS | "Attach managed and inline policies to IAM identities" |
| 52 | How it works | Managed policies are standalone and attach to multiple users, groups, roles | S9 | PASS | "Standalone identity-based policies that you can attach to multiple users, groups, and roles" |
| 53 | How it works | Inline policies are added directly to a single user, group, or role | S9 | PASS | "Policies that you add directly to a single user, group, or role." |
| 54 | How it works | They are deleted when you delete the identity | S9 | PASS | "They are deleted when you delete the identity." |
| 55 | How it works | Resource-based policies are JSON documents attached to a resource such as an S3 bucket | S9 | PASS | "Resource-based policies are JSON policy documents that you attach to a resource such as an Amazon S3 bucket." |
| 56 | How it works | They grant the specified principal permission on that resource | S9 | PASS | "grant the specified principal permission to perform specific actions on that resource" |
| 57 | How it works | Resource-based policies are inline; no managed resource-based policies | S9 | PASS | "policies are inline policies. There are no managed resource-based policies." |
| 58 | How it works | Trust policies define which principal entities can assume the role | S9 | PASS | "Trust policies define which principal entities (accounts, users, roles, and federated users) can assume the role." |
| 59 | How it works | A permissions boundary sets the maximum permissions an identity-based policy can grant to an IAM entity | S9 | PASS | "you set the maximum permissions that an identity-based policy can grant to an IAM entity" |
| 60 | How it works | With a boundary the entity can perform only actions both allow | S9 | PASS | "the entity can perform only the actions that are allowed by both its identity-based policies and its permissions boundaries" |
| 61 | How it works | Each statement includes information about a single permission | S9 | PASS | "Each statement includes information about a single permission." |
| 62 | How it works | Multiple statements: logical OR | S9 | PASS | "AWS applies a logical OR across the statements" |
| 63 | How it works | Multiple policies: logical OR | S9 | PASS | "AWS applies a logical" … "OR across all of those policies" |
| 64 | How it works | Effect: Allow or Deny | S9 | PASS | "Allow or Deny to indicate whether the policy allows or denies access." |
| 65 | How it works | Action: a list of actions allowed or denied | S9 | PASS | "Include a list of actions that the policy allows or denies." |
| 66 | How it works | Resource: IAM permissions policy must specify a list of resources | S9 | PASS | "you must specify a list of resources to which the actions apply" |
| 67 | How it works | Principal: required in resource-based policy; cannot be in identity-based policy | S9 | PASS | "you must indicate the account, user, role, or AWS STS federated user principal" … "you cannot include this element" |
| 68 | How it works | Condition specifies circumstances under which policy grants permission | S9 | PASS | "Specify the circumstances under which the policy grants permission." |
| 69 | How it works | Policies are expressed in JSON | S10 | PASS | "Policies are expressed in JSON." |
| 70 | How it works | Action names can include wildcards | S10 | PASS | "Action names can include wildcards." |
| 71 | How it works | AWS recommends the latest 2012-10-17 version | S9 | PASS | "We recommend that you use the latest 2012-10-17 version." |
| 72 | How it works | Multiple permissions in one statement might not grant expected access | S9 | PASS | "try to define multiple permissions in a single statement, your policy might not grant the access that you expect" |
| 73 | How it works | By default all requests are implicitly denied except root user | S12 | PASS | "By default, all requests are implicitly denied with the exception of the AWS account root user, which has full access." |
| 74 | How it works | Must be explicitly allowed by a policy or set of policies | S12 | PASS | "Requests must be explicitly allowed by a policy or set of policies" |
| 75 | How it works | Explicit deny overrides explicit allow | S12 | PASS | "An explicit deny overrides an explicit allow." |
| 76 | How it works | AWS looks for a Deny statement in all applicable policies | S12 | PASS | "the enforcement code looks for a Deny statement that applies to the request." |
| 77 | How it works | This is called an explicit deny | S12 | PASS | "This is called an explicit deny." |
| 78 | How it works | One explicit deny gives final decision Deny | S12 | PASS | "finds even one explicit deny that applies, the enforcement code returns a final decision of Deny" |
| 79 | How it works | No explicit deny: evaluation continues | S12 | PASS | "If there is no explicit deny, the enforcement code evaluation continues." |
| 80 | How it works | Within one account AWS evaluates permissions for at least one Allow | S11 | PASS | "AWS evaluates all the permissions granted by the policies for at least one Allow within the same account." |
| 81 | How it works | If one of the two allows and the other doesn't, still allowed | S11 | PASS | "allows the request and the other doesn't, the request is still allowed." |
| 82 | How it works | For most resources only one explicit Allow needed | S12 | PASS | "you only need an explicit Allow for the principal in either an identity-based policy or a resource-based policy" |
| 83 | How it works | IAM role trust policies and KMS key policies are exceptions | S12 | PASS | "IAM role trust policies and KMS key policies are exceptions to this logic" |
| 84 | How it works | Boundary does not allow action: implicitly denied | S12 | PASS | "does not allow the requested action, then the request is implicitly denied." |
| 85 | How it works | Worked example: Carlos and two policies (single-account page) | S11 | PASS | "Assume that Carlos has the user name carlossalazar" … identity-based policy and bucket policy |
| 86 | How it works | DenyS3Logs denies Carlos any S3 bucket with `log` in its name | S11 | PASS | "The DenyS3Logs statement denies Carlos access to any S3 bucket with log in its name." |
| 87 | How it works | Logs bucket: AWS first checks for Deny; finds one; Carlos denied | S11 | PASS | "AWS first checks for a Deny statement that applies" … "It finds one" … "Carlos is denied access." |
| 88 | How it works | Own bucket: no Deny found; both policies allow; AWS allows; either explicit deny would have denied | S11 | PASS | "AWS checks for a Deny statement and does not find one" … "Both the identity-based policy and the resource-based policy allow the request. Therefore, AWS allows the request. If either of them explicitly denied the" … "request would have been denied." |
| 89 | How it works | Grant only permissions required for a task | S3 | PASS | "grant only the permissions required to perform a task" |
| 90 | How it works | As use case matures, reduce permissions toward least privilege | S3 | PASS | "As your use case matures, you can work to reduce the permissions that you grant to work toward least privilege." |
| 91 | How it works | AWS managed policies might not be least-privilege | S3 | PASS | "AWS managed policies might not grant least-privilege permissions for your specific use cases" |
| 92 | How it works | IAM provides last accessed information | S3 | PASS | "IAM provides last accessed information to help you identify" … "that you no longer need" |
| 93 | How it works | You can specify conditions under which a statement is in effect | S3 | PASS | "You can specify conditions under which a policy statement is in effect." |
| 94 | How it works | Access Analyzer external access analyzers identify resources shared externally | S15 | PASS | "external access analyzers help identify resources in your organization and accounts that are shared with an external entity." |
| 95 | How it works | Access Analyzer generates policies from CloudTrail activity | S15 | PASS | "generates IAM policies based on access activity in your AWS CloudTrail logs." |
| 96 | How it works | AWS automatically examines console-created or edited policies for grammar | S14 | PASS | "automatically examines them to ensure that they comply with the IAM policy grammar" |
| 97 | How it works | It also verifies ARNs, action names, condition keys | S14 | PASS | "It also verifies that your ARNs are formatted properly and action names and condition keys are correct." |
| 98 | How it works | Simulator tests identity-based, boundaries, SCPs, resource-based policies you provide | S13 | PASS | "you can test identity-based policies, IAM permissions boundaries, service control policies (SCPs), and resource-based policies that you provide" |
| 99 | How it works | Simulates without a real request | S13 | PASS | "without sending a real request to any AWS service" |
| 100 | How it works | Binary authorization outcome for every action and resource | S13 | PASS | "Each simulation returns a binary authorization outcome for every action and resource you test" |
| 101 | How it works | Custom mode: test policies you write or paste in | S13 | PASS | "In Custom mode, you test one or more policies that you write or paste in." |
| 102 | How it works | Simulated on their own, not saved to account | S13 | PASS | "Custom policies are simulated on their own and are not saved to your account." |
| 103 | How it works | Results can differ from live environment | S13 | PASS | "The policy simulator results can differ from your live AWS environment." |
| 104 | How it works | AWS recommends checking against live environment after testing | S13 | PASS | "We recommend that you check your policies against your live AWS environment after testing" |
| 105 | How it works | Protect your encryption key; and its encryption key; eventually the root key | S17 | PASS | "you need to protect your encryption key. If you encrypt your key, you need to protect its encryption key. Eventually, you must protect the highest level encryption key (known as a root key)" |
| 106 | How it works | Envelope encryption definition | S19 | PASS | "Envelope encryption is the practice of encrypting plaintext data with a data key, and then encrypting the data key under another key." |
| 107 | How it works | One key must remain in plaintext | S19 | PASS | "eventually, one key must remain in plaintext so you can decrypt the keys and your data." |
| 108 | How it works | Top-level plaintext key encryption key is the root key | S19 | PASS | "This top-level plaintext key encryption key is known as the root key." |
| 109 | How it works | To use a KMS key you must call AWS KMS | S19 | PASS | "To use a KMS key, you must call AWS KMS." |
| 110 | How it works | Data keys are symmetric keys to encrypt data | S20 | PASS | "Data keys are symmetric keys you can use to encrypt data" |
| 111 | How it works | Data keys are returned to you for use outside KMS | S20 | PASS | "data keys are returned to you for use outside of AWS KMS." |
| 112 | How it works | KMS returns optional plaintext data key and encrypted copy | S20 | PASS | "it returns a plaintext data key for immediate use (optional) and an encrypted copy of the data key" |
| 113 | How it works | To decrypt, first ask KMS to decrypt the encrypted data key | S20 | PASS | "you first ask AWS KMS to decrypt the encrypted data key." |
| 114 | How it works | KMS does not store, manage, or track data keys | S20 | PASS | "AWS KMS does not store, manage, or track your data keys" |
| 115 | How it works | Create a data key with `GenerateDataKey` | S20 | PASS | "To create a data key, call the GenerateDataKey operation." |
| 116 | How it works | Can re-encrypt only data keys | S19 | PASS | "you can re-encrypt only the data keys that protect the raw data." |
| 117 | How it works | KMS keys you create are customer managed keys | S18 | PASS | "The KMS keys that you create are customer managed keys." |
| 118 | How it works | Monthly cost for a customer managed key | S18 | PASS | "There is a monthly cost to have a customer managed key in your" … |
| 119 | How it works | Customer managed key: maintain policies, enable/disable, rotate, schedule deletion | S18 | PASS | "establishing and maintaining their key policies … enabling and disabling them, rotating their cryptographic material … and scheduling the KMS keys for deletion." |
| 120 | How it works | Cannot change, rotate, change policies of, or schedule deletion of AWS managed keys | S18 | PASS | "you cannot change any properties of AWS managed keys, rotate them, change their key policies, or schedule them for deletion." |
| 121 | How it works | All AWS managed keys rotated every year | S18 | PASS | "All AWS managed keys are automatically rotated every year." |
| 122 | How it works | By default automatic rotation generates new material every year | S21 | PASS | "By default, when you enable automatic key rotation for a KMS key, AWS KMS generates new cryptographic material for the KMS key every year." |
| 123 | How it works | On-demand rotation starts a rotation at once | S21 | PASS | "If you need to immediately initiate key material rotation, you can perform on-demand" |
| 124 | How it works | Decrypt with rotated key uses original key material | S21 | PASS | "AWS KMS uses the key material that was used to encrypt it." |
| 125 | How it works | Rotated key usable without code changes | S21 | PASS | "you can safely use a rotated KMS key in applications and AWS services without code changes." |
| 126 | How it works | KMS key is same logical resource | S21 | PASS | "The KMS key is the same logical resource, regardless of whether or how many times its key material changes." |
| 127 | How it works | Rotation has no effect on protected data | S21 | PASS | "Key rotation has no effect on the data that the KMS key protects." |
| 128 | How it works | Does not rotate data keys or re-encrypt data | S21 | PASS | "It does not rotate the data keys that the KMS key generated or re-encrypt any data" |
| 129 | How it works | Rotation will not mitigate compromised data key | S21 | PASS | "Key rotation will not mitigate the effect of a compromised data" |
| 130 | How it works | Deleting a KMS key is destructive and dangerous | S22 | PASS | "Deleting an AWS KMS key is destructive and potentially dangerous." |
| 131 | How it works | Deletes key material and metadata, irreversible | S22 | PASS | "It deletes the key material and all metadata associated with the KMS key and is irreversible." |
| 132 | How it works | After deletion, cannot decrypt data | S22 | PASS | "you can no longer decrypt the data that was encrypted under that KMS key" |
| 133 | How it works | Waiting period 7 – 30 days | S22 | PASS | "AWS KMS requires you to set a waiting period of 7 – 30 days." |
| 134 | How it works | Default waiting period is 30 days | S22 | PASS | "The default waiting period is 30" … |
| 135 | How it works | Pending deletion key cannot be used in cryptographic operations | S22 | PASS | "A KMS key pending deletion cannot be used in any cryptographic operations." |
| 136 | How it works | Can cancel before waiting period ends | S22 | PASS | "you can cancel key deletion before the waiting period ends." |
| 137 | How it works | If unsure, consider disabling instead | S22 | PASS | "If you are not sure, consider disabling the KMS key" |
| 138 | How it works | No charge for customer managed keys scheduled for deletion | S23 | PASS | "There is no charge for customer managed KMS keys that you manage and are scheduled for deletion." |
| 139 | How it works | A secret can be a password, credentials, OAuth token, other secret info stored encrypted | S25 | PASS | "A secret can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form" |
| 140 | How it works | Up to 65536 bytes | S25 | PASS | "You can store up to 65536 bytes in the secret." |
| 141 | How it works | Need `SecretsManagerReadWrite` managed policy permissions | S25 | PASS | "you need the permissions granted by the SecretsManagerReadWrite managed" |
| 142 | How it works | Encrypts at rest using keys you own and store in KMS | S27 | PASS | "Secrets Manager encrypts secrets at rest using encryption keys that you own and store in AWS Key Management Service (AWS KMS)." |
| 143 | How it works | Decrypts on retrieve and sends over TLS | S27 | PASS | "Secrets Manager decrypts the secret and transmits it securely over TLS to your local environment." |
| 144 | How it works | Choose `aws/secretsmanager` for most cases | S25 | PASS | "For most cases, choose aws/secretsmanager to use the AWS managed key for Secrets Manager." |
| 145 | How it works | No cost for this key | S25 | PASS | "There is no cost for using" … |
| 146 | How it works | Own KMS keys: charged at current KMS rate | S24 | PASS | "If you create your own KMS keys to encrypt your secrets, AWS charges you at the current AWS KMS rate." |
| 147 | How it works | Can configure automatic rotation schedule | S24 | PASS | "you can configure an automatic rotation schedule for your secrets." |
| 148 | How it works | Rotation needs no app updates | S24 | PASS | "rotating credentials no longer requires updating your applications and deploying changes to application clients." |
| 149 | How it works | Rotation as often as every four hours | S27 | PASS | "you can set up automatic rotation as often as every four hours." |
| 150 | How it works | Two strategies: Single user and Alternating users | S27 | PASS | "Secrets Manager offers two strategies for rotation: Single user and Alternating users." |
| 151 | How it works | Unchanged secrets more likely compromised | S27 | PASS | "the secrets become more likely to be compromised." |
| 152 | How it works | Rotation function charged at Lambda rate (except managed rotation) | S24 | PASS | "When you turn on automatic rotation (except managed rotation)" … "you are charged for the rotation function at the current Lambda rate." |
| 153 | How it works | Does not immediately delete secrets | S26 | PASS | "Secrets Manager does not immediately delete secrets." |
| 154 | How it works | Makes secret inaccessible; deletion after minimum seven days | S26 | PASS | "immediately makes the secrets inaccessible and scheduled for deletion after a recovery window of a minimum of seven days." |
| 155 | How it works | Can recover until window ends | S26 | PASS | "Until the recovery window ends, you can recover a secret you previously deleted." |
| 156 | How it works | No charge for secrets marked for deletion | S26 | PASS | "There is no charge for secrets that you have marked for deletion." |
| 157 | How it works | Can't directly delete a version | S26 | PASS | "You can't directly delete a version of a secret." |
| 158 | How it works | CloudWatch alarm for access attempts during window | S26 | PASS | "you can create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window." |
| 159 | How it works | Without recovery window, can't recover | S26 | PASS | "deletes a secret immediately without a recovery window. You can't recover this secret." |
| 160 | How it works | Pay only for what you use, no minimum or setup fees | S24 | PASS | "you pay only for what you use, with no minimum or setup fees." |
| 161 | How it works | Command shells features could compromise secrets | S27 | PASS | "Most command shells offer features that could compromise your secrets, such as logging and the ability to see the last entered command." |
| 162 | How it works | Use least privileged access in IAM statements | S27 | PASS | "use the principle of least privileged access." |
| 163 | How it works | Cache secrets, update only when required | S27 | PASS | "To use your secrets most efficiently, we recommend you use … caching components to cache your secrets and update them only when required" |
| 164 | Try it | Run record (date, versions, no AWS_ variable, no ~/.aws, steps 4-6 not run) | none | N/A | Record of the page's own run, labelled as the tutorial's run. |
| 165 | Try it 1 | `json.loads` deserializes a JSON document to a Python object | S32 | PASS | "deserialize s (a str, bytes or bytearray instance containing a JSON document) to a Python object" |
| 166 | Try it 1 | Two policies are those of the AWS single-account example, with one change | S11 | PASS | S11 has the AllowS3ListRead, AllowS3Self, DenyS3Logs policy and the bucket policy for carlossalazar, as used in the code. |
| 167 | Try it 1 | Identity policy lists two of four actions; leaves out `s3:GetAccountPublicAccessBlock`, `s3:ListAccessPoints` | S11 | PASS | S11 lists "s3:GetBucketLocation", "s3:GetAccountPublicAccessBlock", "s3:ListAccessPoints", "s3:ListAllMyBuckets" |
| 168 | Try it 1 | Code block `policy_model.py` and its output | S11 | PASS | ARNs, Sids, bucket names, `Version` 2012-10-17 and the bucket policy principal match S11. The rest is the tutorial's own code and the output of its run. |
| 169 | Try it 1 | Logs bucket: AWS checks for Deny, finds one, Carlos denied | S11 | PASS | "AWS first checks for a Deny statement … It finds one … Carlos is denied access." |
| 170 | Try it 1 | Own bucket: both allow, so AWS allows | S11 | PASS | "Both the identity-based policy and the resource-based policy allow the request. Therefore, AWS allows the request." |
| 171 | Try it 1 | Another bucket: by default implicitly denied | S12 | PASS | "By default, all requests are implicitly denied" |
| 172 | Try it 1 | Bucket policy: only the carlossalazar user can access | S11 | PASS | "This policy specifies that only the carlossalazar user can access the" … |
| 173 | Try it 1 | One allows, other doesn't: still allowed | S11 | PASS | "the request is still allowed." |
| 174 | Try it 1 | Explicit deny overrides explicit allow; either explicit deny would have denied | S12, S11 | PASS | S12 "An explicit deny overrides an explicit allow."; S11 "If either of them explicitly denied the statement, the request would have been denied." |
| 175 | Try it 1 | Model leaves out many things; "AWS evaluates all of these policy types that apply to a request" | S12 | PASS | "AWS Organizations SCPs and RCPs, resource-based policies, identity-based policies, IAM permissions boundaries, and session policies." The model's own limits are the tutorial's own statements. |
| 176 | Try it 2 | Envelope encryption definition | S19 | PASS | "Envelope encryption is the practice of encrypting plaintext data with a data key, and then encrypting the data key under another key." |
| 177 | Try it 2 | KMS keys created, managed, used, deleted entirely within KMS | S17 | PASS | "KMS keys are created, managed, used, and deleted entirely within AWS KMS." |
| 178 | Try it 2 | `openssl rand` uses a CSPRNG | S31 | PASS | "generates num random bytes using a cryptographically secure pseudo random number generator (CSPRNG)" |
| 179 | Try it 2 | `-hex` shows output as hex string | S31 | PASS | "-hex Show the output as a hex string." |
| 180 | Try it 2 | `-K` must be hex digits; IV with `-iv` if only key given | S30 | PASS | "this must be represented as a string comprised only of hex digits. If only the key is specified, the IV must additionally specified using the -iv option." |
| 181 | Try it 2 | `-d` decrypts the input | S30 | PASS | "Decrypt the input data." |
| 182 | Try it 2 | Command lists AES in CBC mode | S30 | PASS | "aes-[128\|192\|256]-cbc 128/192/256 bit AES in CBC mode" |
| 183 | Try it 2 | No CCM and GCM support; so the model cannot tell if a file changed | S30 | PASS | "This command does not support authenticated encryption modes like CCM and GCM". The "cannot tell" part is the tutorial's own conclusion from this fact, covered by the same cite. |
| 184 | Try it 2 | `envelope.sh` code and output (`openssl enc -aes-256-cbc -K -iv`, `-d`, `rand -hex`) | S30, S31 | PASS | Options match S30 and S31 as quoted in rows 178-182. Byte counts are from the tutorial's run. |
| 185 | Try it 2 | Line 1: safely store encrypted data key alongside encrypted data | S19 | PASS | "You can safely store the encrypted data key alongside the encrypted data." |
| 186 | Try it 2 | Line 2: recipient decrypts the key first, then the message | S19 | PASS | "by first decrypting the encrypted key and then decrypting the message." |
| 187 | Try it 2 | Line 2: with KMS, first ask KMS to decrypt data key | S20 | PASS | "you first ask AWS KMS to decrypt the encrypted data key." |
| 188 | Try it 2 | Line 3: can re-encrypt only data keys | S19 | PASS | "you can re-encrypt only the data keys that protect the raw data." |
| 189 | Try it 2 | Line 3: decrypting with rotated key uses old material | S21 | PASS | "AWS KMS uses the key material that was used to encrypt it." |
| 190 | Try it 2 | Line 3: rotation does not re-encrypt any data | S21 | PASS | "or re-encrypt any data protected by the KMS key." |
| 191 | Try it 2 | Line 4: after deletion cannot decrypt | S22 | PASS | "you can no longer decrypt the data that was encrypted under that KMS key" |
| 192 | Try it 2 | Waiting period 7 – 30 days | S22 | PASS | "waiting period of 7 – 30 days" |
| 193 | Try it 2 | Can cancel before it ends | S22 | PASS | "you can cancel key deletion before the waiting period ends." |
| 194 | Try it 3 | `AWS_CONFIG_FILE`, `AWS_SHARED_CREDENTIALS_FILE` name files for profiles and access keys; `AWS_EC2_METADATA_DISABLED` disables IMDS | S29 | PASS | "Specifies the location of the file that the AWS CLI uses to store configuration profiles."; "…uses to store access keys."; "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 195 | Try it 3 | `--generate-cli-skeleton` generates a parameter template to customize and use as input | S28 | PASS | "The --generate-cli-skeleton generates and displays a parameter template that you can customize and use as input on a command." |
| 196 | Try it 3 | Code block (export, loop, `aws $command --generate-cli-skeleton`) and output | S28, S29 | PASS | The variable names and the option are in S28 and S29. The output is from the tutorial's run. |
| 197 | Try it 3 | `SecretString` matches `--secret-string` in create-secret example | S25 | PASS | "--secret-string '{"user":"diegor","password":"EXAMPLE-PASSWORD"}'" |
| 198 | Try it 3 | `PendingWindowInDays` matches `--pending-window-in-days` and the output field | S33 | PASS | "aws kms schedule-key-deletion --key-id … --pending-window-in-days 10" and ""PendingWindowInDays": 10" |
| 199 | Try it 3 | Console asks for days between 7 and 30 | S33 | PASS | "For Waiting period (in days), enter a number of days between 7 and 30." |
| 200 | Try it 4 | IAM, Identity Center, STS at no additional charge | S1 | PASS | "are features of your AWS account offered at no additional charge." |
| 201 | Try it 4 | Charged only when you access other AWS services | S1 | PASS | "You are charged only when you access other AWS services using your IAM users or AWS STS temporary security credentials." |
| 202 | Try it 4 | Steps 1-5 (Get-pics role, policies, launch, instance profile, metadata credentials, refresh) | S16 | PASS | "administrator creates the Get-pics service role and attaches the role to the Amazon EC2 instance"; "grants read-only access to the specified S3 bucket"; "trust policy that allows the Amazon EC2 instance to assume"; "permission to launch Amazon EC2 instances and permission to pass IAM roles"; "instance profile is managed for you"; "as separate steps"; "obtains temporary security credentials from Amazon EC2 instance metadata"; "refreshed set of credentials every hour, or at least 15 minutes before the current set expires" |
| 203 | Try it 5 | Pay only for what you use; own KMS keys at KMS rate | S24 | PASS | See rows 160 and 146. |
| 204 | Try it 5 | Secret not deleted at once; minimum seven days; no charge when marked | S26 | PASS | See rows 153-156. |
| 205 | Try it 5 | Steps 1-5 (Store a new secret; Other type of secret; key/value or Plaintext tab; choose KMS key; `aws/secretsmanager`) | S25 | PASS | "Choose Store a new secret."; "databases, choose Other type of secret."; "Plaintext tab and enter the secret in any format"; "Secrets Manager uses to encrypt the secret value"; "For most cases, choose aws/secretsmanager" |
| 206 | Try it 5 | Step 5 cleanup: Actions, Delete secret, Waiting period, Schedule deletion | S26 | PASS | "choose Actions, and then choose Delete secret."; "Waiting period, enter the number of days to wait before the deletion becomes permanent"; "Choose Schedule deletion." |
| 207 | Try it 6 | Monthly cost for customer managed key | S18 | PASS | "There is a monthly cost to have a customer managed key in your" … |
| 208 | Try it 6 | No charge when scheduled for deletion; cancelling means charges as if never scheduled | S23 | PASS | "If you cancel the deletion during the waiting period, the customer managed KMS key will incur charges as though it was never scheduled for deletion." |
| 209 | Try it 6 | Page warns deletion is destructive and dangerous | S33 | PASS | "Deleting a KMS key is destructive and potentially dangerous." |
| 210 | Try it 6 | Steps 1-5 (Customer managed keys; cannot schedule AWS managed or AWS owned; Key actions; 7 and 30; check box; immediately unusable; CloudTrail entry) | S33 | PASS | "choose Customer managed keys."; "You cannot schedule the deletion of AWS managed keys or AWS owned keys."; "Choose Key actions, Schedule key deletion."; "between 7 and 30."; "Choose the check box next to I confirm"; "will become immediately unusable for cryptographic"; "AWS KMS records an entry in your AWS CloudTrail log when you schedule deletion of the KMS key and when the" … |
| 211 | How a tester uses it | Request allowed only if policy explicitly allows | S12 | PASS | "Requests must be explicitly allowed by a policy or set of policies" |
| 212 | How a tester uses it | Explicit deny overrides allow | S12 | PASS | "An explicit deny overrides an explicit allow." |
| 213 | How a tester uses it | In one account, an Allow in either policy is enough for most resources | S12 | PASS | "you only need an explicit Allow for the principal in either an identity-based policy or a resource-based policy" |
| 214 | How a tester uses it | Simulator shows how AWS would evaluate, without a real request | S13 | PASS | "without sending a real request to any AWS service" |
| 215 | How a tester uses it | Results can differ from live | S13 | PASS | "The policy simulator results can differ from your live AWS environment." |
| 216 | How a tester uses it | Eventually consistent; verify propagation | S1 | PASS | See rows 47 and 49. |
| 217 | How a tester uses it | Do NOT put keys in application files | S6 | PASS | "Do NOT put access keys or credential information in your application files." |
| 218 | How a tester uses it | Shared credentials file is plaintext | S6 | PASS | "are stored in plaintext." |
| 219 | How a tester uses it | Secrets Manager replaces hard-coded credentials with runtime call | S24 | PASS | "You replace hard-coded credentials with a runtime call" |
| 220 | How a tester uses it | AWS delivers role credentials to EC2 or Lambda | S3 | PASS | "AWS delivers the temporary credentials of an IAM role to that compute resource." |
| 221 | How a tester uses it | After expiry AWS no longer recognizes them | S5 | PASS | "AWS no longer recognizes them" |
| 222 | How a tester uses it | Caching app gets refreshed set at least 15 minutes before expiry | S16 | PASS | "it should get a refreshed set of credentials every hour, or at least 15 minutes before the current set expires" |
| 223 | How a tester uses it | AWS recommends MFA for IAM user or root user | S3 | PASS | "for scenarios in which you need an IAM user or root user in your account, require MFA for additional security." The source says "require MFA", under its heading "Require multi-factor authentication (MFA)". This is close enough, but the page's word "recommends" is slightly softer. |
| 224 | How a tester uses it | Root user only for root-level tasks | S7 | PASS | "Use the root user only to perform the tasks that require root-level permissions." |
| 225 | How a tester uses it | Deleted secret recoverable until window ends; CloudWatch alarm for access attempts | S26 | PASS | "Until the recovery window ends, you can recover a secret you previously deleted."; "create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window" |
| 226 | How a tester uses it | Rotation needs no app updates | S24 | PASS | "rotating credentials no longer requires updating your applications" |
| 227 | How a tester uses it | Automatic rotation as often as every four hours | S27 | PASS | "as often as every four hours" |
| 228 | How a tester uses it | Rotated key decrypt uses old material; no code changes; no effect on data | S21 | PASS | See rows 124, 125, 127. |
| 229 | How a tester uses it | Pending-deletion key unusable; CloudWatch alarm warns of use during waiting period | S22 | PASS | "A KMS key pending deletion cannot be used in any cryptographic operations."; "You can configure an Amazon CloudWatch alarm to warn you if a person or application attempts to use the KMS key during the waiting period." |
| 230 | How a tester uses it | AWS checks JSON policy syntax and grammar | S14 | PASS | "AWS checks JSON policy syntax and grammar." |
| 231 | How a tester uses it | Access Analyzer validates policies against grammar and best practices | S15 | PASS | "IAM Access Analyzer validates IAM policies against policy grammar and AWS best practices." |
| 232 | Common mistakes | Root user every day: AWS strongly recommends not | S1 | PASS | "We strongly recommend that you don't use the root user for everyday tasks." |
| 233 | Common mistakes | Do NOT put keys in code/project area | S6 | PASS | See rows 34-35. |
| 234 | Common mistakes | Secret key only at creation; if lost, delete the key and create a new one | S6 | PASS | "If you lose your secret access key, you must delete the access key and create a new one." |
| 235 | Common mistakes | IAM change not at once; avoid critical paths | S1 | PASS | See rows 47-48. |
| 236 | Common mistakes | Explicit deny overrides allow | S12 | PASS | "An explicit deny overrides an explicit allow." |
| 237 | Common mistakes | Default implicit deny, root user exception | S12 | PASS | See row 73. |
| 238 | Common mistakes | AWS managed policies might not be least-privilege | S3 | PASS | See row 91. |
| 239 | Common mistakes | Multiple permissions in one statement | S9 | PASS | See row 72. |
| 240 | Common mistakes | Principal cannot be in identity-based policy | S9 | PASS | "If you are creating an IAM permissions policy to attach to a user or role, you cannot include this element." |
| 241 | Common mistakes | Simulator results can differ | S13 | PASS | "The policy simulator results can differ from your live AWS environment." |
| 242 | Common mistakes | Rotation has no effect on data; will not mitigate compromised data key | S21 | PASS | See rows 127 and 129. |
| 243 | Common mistakes | After deletion cannot decrypt; consider disabling | S22 | PASS | See rows 132 and 137. |
| 244 | Common mistakes | Monthly cost; own KMS keys charged; rotation function at Lambda rate | S18, S24 | PASS | See rows 118, 146, 152. |
| 245 | Common mistakes | Secret not deleted at once; no recovery without window | S26 | PASS | See rows 153 and 159. |
| 246 | Common mistakes | Typing a secret into a shell: shell features could compromise | S27 | PASS | See row 161. |
| 247 | Common mistakes | `openssl enc` does not support CCM and GCM | S30 | PASS | "This command does not support authenticated encryption modes like CCM and GCM" |
| 248 | What a tester can check | Callout "Tutorial advice": twelve advice items | none | PASS | The callout says "This list is the tutorial's own advice". It gives no fact about a tool that the rest of the page does not support. |
| 249 | Key words | IAM | none | PASS | Page row 1: "helps you securely control access to AWS resources" |
| 250 | Key words | Root user | none | PASS | Page row 4: "begin with one sign-in identity called the AWS account root user that has complete access to all AWS services and resources" |
| 251 | Key words | IAM role | none | PASS | Page row 5: "An IAM role is an IAM identity that you can create in your account that has specific permissions" |
| 252 | Key words | Access key | none | PASS | Page row 28: "Access keys are long-term credentials for an IAM user or the AWS account root user" |
| 253 | Key words | Temporary security credentials | none | PASS | Page rows 36 and 38: "You can use AWS STS to create and provide trusted users with temporary security credentials"; "configured to last for anywhere from a few minutes to several hours" |
| 254 | Key words | MFA | none | PASS | Page row 24: "MFA requires users to provide unique authentication from an AWS supported MFA mechanism in addition to their sign-in credentials" |
| 255 | Key words | Policy | none | PASS | Page row 9: "A policy is an object in AWS that, when associated with an identity or resource, defines their permissions" |
| 256 | Key words | Identity-based policy | none | PASS | Page row 50: "Identity-based policies are JSON permissions policy documents that control what actions an identity can perform, on which resources, and under what conditions" |
| 257 | Key words | Resource-based policy | none | PASS | Page row 55: "Resource-based policies are JSON policy documents that you attach to a resource such as an Amazon S3 bucket" |
| 258 | Key words | Trust policy | none | PASS | Page row 58: "Trust policies define which principal entities can assume the role" |
| 259 | Key words | Permissions boundary | none | PASS | Page row 59: "A permissions boundary sets the maximum permissions that an identity-based policy can grant to an IAM entity" |
| 260 | Key words | Explicit deny | none | PASS | Page rows 75-77: "This is called an explicit deny"; "An explicit deny overrides an explicit allow" |
| 261 | Key words | Implicit deny | none | PASS | Page row 73: "By default, all requests are implicitly denied, except for the AWS account root user, which has full access" |
| 262 | Key words | Policy simulator | none | PASS | Page rows 98-99: "you can test … policies that you provide"; "without sending a real request to any AWS service" |
| 263 | Key words | IAM Access Analyzer | none | PASS | Page rows 94-96: "help identify resources that are shared with an external entity"; "generates IAM policies based on access activity"; the validation claims are in the lede panel and in the tester section: "IAM Access Analyzer validates IAM policies against policy grammar and AWS best practices" |
| 264 | Key words | AWS KMS | none | PASS | Page row 12: "makes it easy for you to create and control the keys used to encrypt and sign your data" |
| 265 | Key words | KMS key | none | PASS | Page rows 13-14: "created, managed, used, and deleted entirely within AWS KMS"; "They never leave the service unencrypted" |
| 266 | Key words | Customer managed key | none | PASS | Page rows 117-119: "The KMS keys that you create are customer managed keys"; "maintain its key policies, enable and disable it, rotate its cryptographic material, and schedule it for deletion"; "monthly cost" |
| 267 | Key words | Data key | none | PASS | Page rows 110-111: "Data keys are symmetric keys you can use to encrypt data"; "returned to you for use outside of AWS KMS" |
| 268 | Key words | Envelope encryption | none | PASS | Page row 106: "the practice of encrypting plaintext data with a data key, and then encrypting the data key under another key" |
| 269 | Key words | Root key | none | PASS | Page row 108: "This top-level plaintext key encryption key is known as the root key" |
| 270 | Key words | Key rotation | none | PASS | Page rows 122 and 127: "generates new cryptographic material for it every year"; "Key rotation has no effect on the data that the KMS key protects" |
| 271 | Key words | Waiting period | none | PASS | Page rows 133-134 and 136: "AWS KMS requires a waiting period of 7 – 30 days"; "The default waiting period is 30 days"; "you can cancel key deletion before the waiting period ends" |
| 272 | Key words | Secrets Manager | none | PASS | Page row 15: "helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles" |
| 273 | Key words | Secret | none | PASS | Page row 139: "A secret can be a password, a set of credentials, an OAuth token, or other secret information that you store in an encrypted form" |
| 274 | Key words | Recovery window | none | PASS | Page rows 154-155: "recovery window of a minimum of seven days"; "you can recover a secret you previously deleted" |
| 275 | Key words | Secret rotation | none | PASS | Page rows 147, 149, 150: "configure an automatic rotation schedule"; "as often as every four hours"; "Single user and Alternating users" |

Open FAILs after round 8: 0

Open FAILs: 0
