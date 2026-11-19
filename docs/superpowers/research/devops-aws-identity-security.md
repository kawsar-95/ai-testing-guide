# Research notes: AWS Identity and Security

Page: `content/devops/aws-identity-security.mdx`. Module: DevOps & Cloud. Date: 2026-11-19 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): IAM identities, credentials, and policies and the way AWS decides a request, AWS KMS keys, data keys, rotation, and deletion, and AWS Secrets Manager secrets, rotation, and deletion, with a practice run of two models of the tutorial's own (a model of the policy decision, and a model of a key hierarchy with OpenSSL) and AWS CLI templates on a laptop, and a read-along of AWS's own pages. The first version (2026-11-05) had four sources and one section. The page needs no AWS account: nothing on it runs against AWS. It gives no price, because prices change; it cites the AWS pages that say what is billed. Source S23 is the KMS pricing page; the page cites only its two sentences about keys that are scheduled for deletion. The Secrets Manager pricing page is not a source, because its text has template placeholders in place of the prices; the pricing sentences of the page come from S24 and S26.

The practice run of `## Try it` (steps 1 to 3) was recorded on 2026-11-18 at 13:03:35 (+06) on Linux 7.0.0-43-generic with the system Python 3.14.4 (`/usr/bin/python3`), OpenSSL 3.5.5, aws-cli/2.41.0 (Python 3.14.8, installed that day for one user, as the page AWS Compute and Storage describes), and bash 5.3.9. The runner `practice/is.sh` ran in an empty environment (`env -i HOME=... PATH=/usr/local/bin:/usr/bin:/bin TMPDIR=...`), in a fresh temp folder with a copy of `policy_model.py` and `envelope.sh` (the tutorial's own code, not from a source), and stopped at once if `~/.aws` existed. It ran the three step files (`practice/is/steps/step1.sh` to `step3.sh`) in one shell and saved the output of each step in `practice/is/out/`. The date, the versions, the names of the `AWS_` variables that were set before the steps (none), and whether `~/.aws` existed after the run (it did not) are in `practice/is/out/env.txt`. The page reads the date and the versions from that file.

The runner was run three times that day. The first two runs found faults of the tutorial's own code, and only the third is used. The first run answered "Deny (explicit deny: DenyS3Logs)" for Carlos's request to his own bucket, because the test object was named `app.log` and the pattern `arn:aws:s3:::*log*` of the example matches the whole object ARN, key included; the objects are now named `notes.txt`. The first runs also listed the runner's own `all.txt` in the folder of step 2; the runner now writes it elsewhere, and `envelope.sh` works in its own folder and removes the plaintext after sealing it.

- Step 1: `python3 policy_model.py` printed seven lines: explicit deny (`DenyS3Logs`) for the logs bucket, Allow for Carlos's own bucket, implicit deny for another bucket, implicit deny for another user, Allow with the identity policy only, Allow with the bucket policy only, and explicit deny (`DenyCarlos`) when the bucket policy adds a Deny. The first two are the example of S11, and the model gave the answers of its text; the other five are the tutorial's own, with expected answers reasoned from the cited sentences.
- Step 2: `bash envelope.sh` printed five lines. The sealed message is 48 bytes and the sealed data key is 80 bytes; both are the padded sizes of a 33-byte message and a 64-character hex key in AES-CBC. The message file is the same file after the re-wrap (its SHA-256 did not change), and the data key opened with the new root key. The run did not try to open `datakey.enc` after the root keys were dropped; the page says so.
- Step 3: the filter printed 23 lines for three commands, 7 for `aws iam create-role`, 11 for `aws secretsmanager create-secret`, and 2 for `aws kms schedule-key-deletion`, plus the three heading lines.

The run did not watch the network, so the page does not say that the AWS CLI commands send nothing to AWS. It says that they needed no account and no credentials in the tutorial's run. The tutorial matched the template names to the pages by their names only (the page says so).

Steps 4 to 6 are a read-along of S16, S25 and S26, and S33. The tutorial did not run them. The cost warnings come from S1 (IAM, AWS STS: no additional charge), S24 and S26 (Secrets Manager), and S18 and S23 (KMS). The OpenSSL sentences are from the OpenSSL 3.5 manual pages (S30, S31), the version of the tutorial's run.

Some quotes are written as `scripts/devops_claimcheck.py` reads them (case, white space, and curly quotes do not count as differences).

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | What is IAM? (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html |
| S2 | Getting started with IAM (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started.html |
| S3 | Security best practices in IAM (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html |
| S4 | IAM roles (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html |
| S5 | Temporary security credentials in IAM (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html |
| S6 | Manage access keys for IAM users (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html |
| S7 | AWS account root user (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html |
| S8 | AWS Multi-factor authentication in IAM (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html |
| S9 | Policies and permissions in AWS Identity and Access Management (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html |
| S10 | Grammar of the IAM JSON policy language (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_grammar.html |
| S11 | Policy evaluation for requests within a single account (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic_policy-eval-basics.html |
| S12 | How AWS enforcement code logic evaluates requests to allow or deny access (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic_policy-eval-denyallow.html |
| S13 | IAM policy testing with the IAM policy simulator (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html |
| S14 | IAM policy validation (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html |
| S15 | Using AWS Identity and Access Management Access Analyzer (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html |
| S16 | Use an IAM role to grant permissions to applications running on Amazon EC2 instances (AWS Documentation) | https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html |
| S17 | AWS Key Management Service (AWS Documentation) | https://docs.aws.amazon.com/kms/latest/developerguide/overview.html |
| S18 | AWS KMS keys (AWS Documentation) | https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html |
| S19 | AWS KMS cryptography essentials (AWS Documentation) | https://docs.aws.amazon.com/kms/latest/developerguide/kms-cryptography.html |
| S20 | Generate data keys (AWS Documentation) | https://docs.aws.amazon.com/kms/latest/developerguide/data-keys.html |
| S21 | Rotate AWS KMS keys (AWS Documentation) | https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html |
| S22 | Delete an AWS KMS key (AWS Documentation) | https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html |
| S23 | AWS Key Management Service pricing (Amazon Web Services) | https://aws.amazon.com/kms/pricing/ |
| S24 | What is AWS Secrets Manager? (AWS Documentation) | https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html |
| S25 | Create an AWS Secrets Manager secret (AWS Documentation) | https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_secret.html |
| S26 | Delete an AWS Secrets Manager secret (AWS Documentation) | https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_delete-secret.html |
| S27 | AWS Secrets Manager best practices (AWS Documentation) | https://docs.aws.amazon.com/secretsmanager/latest/userguide/best-practices.html |
| S28 | AWS CLI skeletons and input files in the AWS CLI (AWS Documentation) | https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-skeleton.html |
| S29 | Configuring environment variables for the AWS CLI (AWS Documentation) | https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html |
| S30 | openssl-enc (OpenSSL Documentation) | https://docs.openssl.org/3.5/man1/openssl-enc/ |
| S31 | openssl-rand (OpenSSL Documentation) | https://docs.openssl.org/3.5/man1/openssl-rand/ |
| S32 | json: JSON encoder and decoder (Python Documentation) | https://docs.python.org/3/library/json.html |
| S33 | Schedule key deletion (AWS Documentation) | https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys-scheduling-key-deletion.html |

## Claims

| Claim | Source | Quote |
|---|---|---|
| AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources | S1 | "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources" |
| You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources | S1 | "You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources" |
| There is no charge to use IAM | S2 | "There is no charge to use IAM" |
| When you create an AWS account, you begin with one sign-in identity called the AWS account root user that has complete access to all AWS services and resources | S1 | "When you create an AWS account, you begin with one sign-in identity called the AWS account root user that has complete access to all AWS services and resources" |
| An IAM role is an IAM identity that you can create in your account that has specific permissions | S4 | "An IAM role is an IAM identity that you can create in your account that has specific permissions" |
| A role is intended to be assumable by anyone who needs it | S4 | "a role is intended to be assumable by anyone who needs it" |
| A role does not have standard long-term credentials such as a password or access keys associated with it | S4 | "a role does not have standard long-term credentials such as a password or access keys associated with it" |
| When you assume a role, it provides you with temporary security credentials for your role session | S4 | "when you assume a role, it provides you with temporary security credentials for your role session" |
| A policy is an object in AWS that, when associated with an identity or resource, defines their permissions | S9 | "A policy is an object in AWS that, when associated with an identity or resource, defines their permissions" |
| AWS evaluates these policies when an IAM principal (user or role) makes a request | S9 | "AWS evaluates these policies when an IAM principal (user or role) makes a request" |
| Permissions in the policies determine whether the request is allowed or denied | S9 | "Permissions in the policies determine whether the request is allowed or denied" |
| AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data | S17 | "AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data" |
| KMS keys are created, managed, used, and deleted entirely within AWS KMS | S17 | "KMS keys are created, managed, used, and deleted entirely within AWS KMS" |
| They never leave the service unencrypted | S17 | "They never leave the service unencrypted" |
| AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles | S24 | "AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles" |
| You replace hard-coded credentials with a runtime call to the Secrets Manager service to retrieve credentials dynamically when you need them | S24 | "You replace hard-coded credentials with a runtime call to the Secrets Manager service to retrieve credentials dynamically when you need them" |
| For AWS credentials, AWS recommends AWS Identity and Access Management | S24 | "We recommend AWS Identity and Access Management" |
| For encryption keys, it recommends AWS Key Management Service | S24 | "We recommend AWS Key Management Service" |
| Authentication is provided by matching the sign-in credentials to a principal trusted by the AWS account | S1 | "Authentication is provided by matching the sign-in credentials to a principal (an IAM user, AWS STS federated principal, IAM role, or application) trusted by the AWS account" |
| AWS strongly recommends that you don't use the root user for everyday tasks | S1 | "We strongly recommend that you don't use the root user for everyday tasks" |
| Use the root user only to perform the tasks that require root-level permissions | S7 | "Use the root user only to perform the tasks that require root-level permissions" |
| You cannot attach identity-based policies to the root user | S9 | "You cannot attach identity-based policies to the root user" |
| MFA is enforced for root users by default | S7 | "While MFA is enforced for root users by default" |
| Adding it requires customer action during the initial account creation or as prompted during sign-in | S7 | "it requires customer action to add MFA during the initial account creation or as prompted during sign-in" |
| MFA requires users to provide unique authentication from an AWS supported MFA mechanism in addition to their sign-in credentials | S8 | "MFA adds extra security that requires users to provide unique authentication from an AWS supported MFA mechanism in addition to their sign-in credentials" |
| Your AWS account root user and IAM users can register up to eight MFA devices of any type | S8 | "Your AWS account root user and IAM users can register up to eight MFA devices of any type" |
| You only need one MFA device to sign in to the AWS Management Console or create a session through the AWS CLI | S8 | "You only need one MFA device to sign in to the AWS Management Console or create a session through the AWS CLI" |
| AWS recommends phishing-resistant MFA such as passkeys and security keys whenever possible | S8 | "We recommend that you use phishing-resistant MFA such as passkeys and security keys whenever possible" |
| Access keys are long-term credentials for an IAM user or the AWS account root user | S6 | "Access keys are long-term credentials for an IAM user or the AWS account root user" |
| You must use both the access key ID and secret access key together to authenticate your requests | S6 | "You must use both the access key ID and secret access key together to authenticate your requests" |
| The secret access key can be retrieved only at the time you create it | S6 | "The secret access key can be retrieved only at the time you create it" |
| You can have a maximum of two access keys per user | S6 | "You can have a maximum of two access keys per user" |
| As a best practice, use temporary security credentials (such as IAM roles) instead of creating long-term credentials like access keys | S6 | "As a best practice, use temporary security credentials (such as IAM roles) instead of creating long-term credentials like access keys" |
| Access keys or credential information stored in the shared AWS credentials file are stored in plaintext | S6 | "Access keys or credential information stored in the shared AWS credentials file are stored in plaintext" |
| Do NOT put access keys or credential information in your application files | S6 | "Do NOT put access keys or credential information in your application files" |
| Do NOT include files that contain access keys or credential information in your project area | S6 | "Do NOT include files that contain access keys or credential information in your project area" |
| You can use AWS STS to create and provide trusted users with temporary security credentials | S5 | "You can use the AWS Security Token Service (AWS STS) to create and provide trusted users with temporary security credentials that can control access to your AWS resources" |
| Temporary security credentials are short-term, as the name implies | S5 | "Temporary security credentials are short-term, as the name implies" |
| They can be configured to last for anywhere from a few minutes to several hours | S5 | "They can be configured to last for anywhere from a few minutes to several hours" |
| After the credentials expire, AWS no longer recognizes them | S5 | "After the credentials expire, AWS no longer recognizes them or allows any kind of access from API requests made with them" |
| They are not stored with the user but are generated dynamically when requested | S5 | "Temporary security credentials are not stored with the user but are generated dynamically and provided to the user when requested" |
| When you're building on an AWS compute service, such as Amazon EC2 or Lambda, AWS delivers the temporary credentials of an IAM role to that compute resource | S3 | "When you're building on an AWS compute service, such as Amazon EC2 or Lambda, AWS delivers the temporary credentials of an IAM role to that compute resource" |
| Applications written using an AWS SDK will discover and use these temporary credentials | S3 | "Applications written using an AWS SDK will discover and use these temporary credentials to access AWS resources, and there is no need to distribute long lived credentials for an IAM user to your workloads running on AWS" |
| When you launch an Amazon EC2 instance, you specify an IAM role to associate with the instance | S16 | "When you launch an Amazon EC2 instance, you specify an IAM role to associate with the instance" |
| Applications that run on the instance can then use the role-supplied temporary credentials to sign API requests | S16 | "Applications that run on the instance can then use the role-supplied temporary credentials to sign API requests" |
| Only one role can be assigned to an Amazon EC2 instance at a time | S16 | "Only one role can be assigned to an Amazon EC2 instance at a time, and all applications on the instance share the same role and permissions" |
| All applications on the instance share the same role and permissions | S16 | "all applications on the instance share the same role and permissions" |
| IAM, like many other AWS services, is eventually consistent | S1 | "IAM, like many other AWS services, is eventually consistent" |
| AWS recommends that you do not include IAM changes in the critical, high-availability code paths of your application | S1 | "We recommend that you do not include such IAM changes in the critical, high-availability code paths of your application" |
| Be sure to verify that the changes have been propagated before production workflows depend on them | S1 | "be sure to verify that the changes have been propagated before production workflows depend on them" |
| Identity-based policies are JSON permissions policy documents that control what actions an identity can perform, on which resources, and under what conditions | S9 | "Identity-based policies are JSON permissions policy documents that control what actions an identity (users, groups of users, and roles) can perform, on which resources, and under what conditions" |
| You attach managed and inline policies to IAM identities | S9 | "Attach managed and inline policies to IAM identities (users, groups to which users belong, or roles)" |
| Managed policies are standalone identity-based policies that you can attach to multiple users, groups, and roles | S9 | "Standalone identity-based policies that you can attach to multiple users, groups, and roles in your AWS account" |
| Inline policies are policies that you add directly to a single user, group, or role | S9 | "Policies that you add directly to a single user, group, or role" |
| They are deleted when you delete the identity | S9 | "They are deleted when you delete the identity" |
| Resource-based policies are JSON policy documents that you attach to a resource such as an Amazon S3 bucket | S9 | "Resource-based policies are JSON policy documents that you attach to a resource such as an Amazon S3 bucket" |
| They grant the specified principal permission to perform specific actions on that resource | S9 | "These policies grant the specified principal permission to perform specific actions on that resource" |
| Resource-based policies are inline policies | S9 | "Resource-based policies are inline policies" |
| There are no managed resource-based policies | S9 | "There are no managed resource-based policies" |
| Trust policies define which principal entities can assume the role | S9 | "Trust policies define which principal entities (accounts, users, roles, and federated users) can assume the role" |
| A permissions boundary sets the maximum permissions that an identity-based policy can grant to an IAM entity | S9 | "you set the maximum permissions that an identity-based policy can grant to an IAM entity" |
| With a boundary, the entity can perform only the actions that both its identity-based policies and its boundary allow | S9 | "the entity can perform only the actions that are allowed by both its identity-based policies and its permissions boundaries" |
| Each statement includes information about a single permission | S9 | "Each statement includes information about a single permission" |
| If a policy includes multiple statements, AWS applies a logical OR across the statements | S9 | "If a policy includes multiple statements, AWS applies a logical OR across the statements when evaluating them" |
| If multiple policies apply to a request, AWS applies a logical OR across all of those policies | S9 | "If multiple policies apply to a request, AWS applies a logical OR across all of those policies when evaluating them" |
| Effect: use Allow or Deny to indicate whether the policy allows or denies access | S9 | "Use Allow or Deny to indicate whether the policy allows or denies access" |
| Action: a list of actions that the policy allows or denies | S9 | "Include a list of actions that the policy allows or denies" |
| Resource: an IAM permissions policy must specify a list of resources to which the actions apply | S9 | "If you create an IAM permissions policy, you must specify a list of resources to which the actions apply" |
| Principal: in a resource-based policy, you must indicate the account, user, role, or AWS STS federated user principal | S9 | "If you create a resource-based policy, you must indicate the account, user, role, or AWS STS federated user principal to which you would like to allow or deny access" |
| In an identity-based policy, you cannot include this element | S9 | "If you are creating an IAM permissions policy to attach to a user or role, you cannot include this element" |
| Condition: it specifies the circumstances under which the policy grants permission | S9 | "Specify the circumstances under which the policy grants permission" |
| Policies are expressed in JSON | S10 | "Policies are expressed in JSON" |
| Action names can include wildcards | S10 | "Action names can include wildcards" |
| AWS recommends the latest 2012-10-17 version of the policy language | S9 | "We recommend that you use the latest 2012-10-17 version" |
| If you try to define multiple permissions in a single statement, your policy might not grant the access that you expect | S9 | "If you try to define multiple permissions in a single statement, your policy might not grant the access that you expect" |
| By default, all requests are implicitly denied, except for the AWS account root user, which has full access | S12 | "By default, all requests are implicitly denied with the exception of the AWS account root user, which has full access" |
| A request must be explicitly allowed by a policy or set of policies to be allowed | S12 | "Requests must be explicitly allowed by a policy or set of policies following the evaluation logic below to be allowed" |
| An explicit deny overrides an explicit allow | S12 | "An explicit deny overrides an explicit allow" |
| AWS looks in all applicable policies for a Deny statement that applies to the request | S12 | "In all those policies, the enforcement code looks for a Deny statement that applies to the request" |
| This is called an explicit deny | S12 | "This is called an explicit deny" |
| If it finds even one explicit deny that applies, the final decision is Deny | S12 | "If the enforcement code finds even one explicit deny that applies, the enforcement code returns a final decision of Deny" |
| If there is no explicit deny, the evaluation continues | S12 | "If there is no explicit deny, the enforcement code evaluation continues" |
| AWS evaluates all the permissions granted by the policies for at least one Allow | S11 | "AWS evaluates all the permissions granted by the policies for at least one Allow within the same account" |
| If one of the two allows the request and the other doesn't, the request is still allowed | S11 | "If either the identity-based policy or the resource-based policy within the same account allows the request and the other doesn't, the request is still allowed" |
| For most resources, you only need an explicit Allow in one of them | S12 | "For most resources, you only need an explicit Allow for the principal in either an identity-based policy or a resource-based policy to grant access" |
| IAM role trust policies and KMS key policies are exceptions | S12 | "IAM role trust policies and KMS key policies are exceptions to this logic, because they must explicitly allow access for principals" |
| If a permissions boundary does not allow the requested action, the request is implicitly denied | S12 | "If the policy that is used to set the permissions boundary does not allow the requested action, then the request is implicitly denied" |
| The page for a single account shows a user named Carlos and two policies | S11 | "Assume that Carlos has the user name carlossalazar and he tries to save a file to the amzn-s3-demo-bucket-carlossalazar-logs Amazon S3 bucket" |
| The DenyS3Logs statement denies Carlos access to any S3 bucket with log in its name | S11 | "The DenyS3Logs statement denies Carlos access to any S3 bucket with log in its name" |
| When Carlos saves a file in the logs bucket, AWS first checks for a Deny statement that applies to the request | S11 | "AWS first checks for a Deny statement that applies to the context of the request" |
| It finds one | S11 | "It finds one, because the identity-based policy explicitly denies Carlos access to any S3 buckets used for logging" |
| Carlos is denied access | S11 | "Carlos is denied access" |
| When he saves the file in his own bucket, AWS checks for a Deny statement and does not find one | S11 | "AWS checks for a Deny statement and does not find one" |
| Both the identity-based policy and the resource-based policy allow the request | S11 | "Both the identity-based policy and the resource-based policy allow the request" |
| Therefore, AWS allows the request | S11 | "Therefore, AWS allows the request" |
| If either of them explicitly denied the request, it would have been denied | S11 | "If either of them explicitly denied the statement, the request would have been denied" |
| When you set permissions with IAM policies, grant only the permissions required to perform a task | S3 | "When you set permissions with IAM policies, grant only the permissions required to perform a task" |
| As your use case matures, you can work to reduce the permissions that you grant to work toward least privilege | S3 | "As your use case matures, you can work to reduce the permissions that you grant to work toward least privilege" |
| AWS managed policies might not grant least-privilege permissions for your specific use cases | S3 | "Keep in mind that AWS managed policies might not grant least-privilege permissions for your specific use cases because they are available for use by all AWS customers" |
| IAM provides last accessed information to help you identify what you no longer need | S3 | "IAM provides last accessed information to help you identify the users, roles, permissions, policies, and credentials that you no longer need so that you can remove them" |
| You can specify conditions under which a policy statement is in effect | S3 | "You can specify conditions under which a policy statement is in effect" |
| IAM Access Analyzer external access analyzers help identify resources that are shared with an external entity | S15 | "IAM Access Analyzer external access analyzers help identify resources in your organization and accounts that are shared with an external entity" |
| It generates IAM policies based on access activity in your AWS CloudTrail logs | S15 | "IAM Access Analyzer generates IAM policies based on access activity in your AWS CloudTrail logs" |
| AWS automatically examines the policies that you create or edit in the console to ensure that they comply with the IAM policy grammar | S14 | "When you create or edit IAM access control policies using the AWS Management Console, AWS automatically examines them to ensure that they comply with the IAM policy grammar" |
| It also verifies that your ARNs are formatted properly and action names and condition keys are correct | S14 | "It also verifies that your ARNs are formatted properly and action names and condition keys are correct" |
| With the IAM policy simulator, you can test identity-based policies, IAM permissions boundaries, service control policies (SCPs), and resource-based policies that you provide | S13 | "With the IAM policy simulator, you can test identity-based policies, IAM permissions boundaries, service control policies (SCPs), and resource-based policies that you provide" |
| You simulate how AWS would evaluate a request, without sending a real request to any AWS service | S13 | "You simulate how AWS would evaluate a request against those policies, without sending a real request to any AWS service" |
| Each simulation returns a binary authorization outcome for every action and resource you test | S13 | "Each simulation returns a binary authorization outcome for every action and resource you test: the action is either allowed or denied" |
| In Custom mode, you test one or more policies that you write or paste in | S13 | "In Custom mode, you test one or more policies that you write or paste in" |
| They are simulated on their own and are not saved to your account | S13 | "Custom policies are simulated on their own and are not saved to your account" |
| The simulator results can differ from your live AWS environment | S13 | "The policy simulator results can differ from your live AWS environment" |
| AWS recommends that you check your policies against your live environment after testing | S13 | "We recommend that you check your policies against your live AWS environment after testing with the policy simulator to confirm that you have the desired results" |
| When you encrypt data, you need to protect your encryption key | S17 | "When you encrypt data, you need to protect your encryption key" |
| If you encrypt your key, you need to protect its encryption key | S17 | "If you encrypt your key, you need to protect its encryption key" |
| Eventually, you must protect the highest level encryption key, known as a root key | S17 | "Eventually, you must protect the highest level encryption key (known as a root key) in the hierarchy that protects your data" |
| Envelope encryption is the practice of encrypting plaintext data with a data key, and then encrypting the data key under another key | S19 | "Envelope encryption is the practice of encrypting plaintext data with a data key, and then encrypting the data key under another key" |
| Eventually, one key must remain in plaintext so you can decrypt the keys and your data | S19 | "But, eventually, one key must remain in plaintext so you can decrypt the keys and your data" |
| This top-level plaintext key encryption key is known as the root key | S19 | "This top-level plaintext key encryption key is known as the root key" |
| To use a KMS key, you must call AWS KMS | S19 | "To use a KMS key, you must call AWS KMS" |
| Data keys are symmetric keys you can use to encrypt data | S20 | "Data keys are symmetric keys you can use to encrypt data, including large amounts of data and other data encryption keys" |
| Data keys are returned to you for use outside of AWS KMS | S20 | "Unlike symmetric KMS keys, which can't be downloaded, data keys are returned to you for use outside of AWS KMS" |
| AWS KMS returns a plaintext data key for immediate use (optional) and an encrypted copy of the data key | S20 | "it returns a plaintext data key for immediate use (optional) and an encrypted copy of the data key that you can safely store with the data" |
| When you are ready to decrypt the data, you first ask AWS KMS to decrypt the encrypted data key | S20 | "When you are ready to decrypt the data, you first ask AWS KMS to decrypt the encrypted data key" |
| AWS KMS does not store, manage, or track your data keys | S20 | "AWS KMS does not store, manage, or track your data keys, or perform cryptographic operations with data keys" |
| To create a data key, call the GenerateDataKey operation | S20 | "To create a data key, call the GenerateDataKey operation" |
| You can re-encrypt only the data keys instead of re-encrypting the raw data | S19 | "Instead of re-encrypting raw data multiple times with different keys, you can re-encrypt only the data keys that protect the raw data" |
| The KMS keys that you create are customer managed keys | S18 | "The KMS keys that you create are customer managed keys" |
| There is a monthly cost to have a customer managed key in your account | S18 | "There is a monthly cost to have a customer managed key in your account" |
| For a customer managed key, you can maintain its key policies, enable and disable it, rotate its cryptographic material, and schedule it for deletion | S18 | "You have full control over these KMS keys, including establishing and maintaining their key policies, IAM policies, and grants, enabling and disabling them, rotating their cryptographic material, adding tags, creating aliases that refer to the KMS keys, and scheduling the KMS keys for deletion" |
| You cannot change any properties of AWS managed keys, rotate them, change their key policies, or schedule them for deletion | S18 | "you cannot change any properties of AWS managed keys, rotate them, change their key policies, or schedule them for deletion" |
| All AWS managed keys are automatically rotated every year | S18 | "All AWS managed keys are automatically rotated every year" |
| By default, when you enable automatic key rotation for a KMS key, AWS KMS generates new cryptographic material for it every year | S21 | "By default, when you enable automatic key rotation for a KMS key, AWS KMS generates new cryptographic material for the KMS key every year" |
| You can perform on-demand rotation to start a rotation at once | S21 | "If you need to immediately initiate key material rotation, you can perform on-demand rotation, regardless of whether or not automatic key rotation is enabled" |
| When you use the rotated KMS key to decrypt ciphertext, AWS KMS uses the key material that was used to encrypt it | S21 | "When you use the rotated KMS key to decrypt ciphertext, AWS KMS uses the key material that was used to encrypt it" |
| You can safely use a rotated KMS key in applications without code changes | S21 | "you can safely use a rotated KMS key in applications and AWS services without code changes" |
| The KMS key is the same logical resource, however often its key material changes | S21 | "The KMS key is the same logical resource, regardless of whether or how many times its key material changes" |
| Key rotation has no effect on the data that the KMS key protects | S21 | "Key rotation has no effect on the data that the KMS key protects" |
| It does not rotate the data keys that the KMS key generated or re-encrypt any data | S21 | "It does not rotate the data keys that the KMS key generated or re-encrypt any data protected by the KMS key" |
| Key rotation will not mitigate the effect of a compromised data key | S21 | "Key rotation will not mitigate the effect of a compromised data key" |
| Deleting an AWS KMS key is destructive and potentially dangerous | S22 | "Deleting an AWS KMS key is destructive and potentially dangerous" |
| It deletes the key material and all metadata associated with the KMS key and is irreversible | S22 | "It deletes the key material and all metadata associated with the KMS key and is irreversible" |
| After a KMS key is deleted, you can no longer decrypt the data that was encrypted under that KMS key | S22 | "After a KMS key is deleted, you can no longer decrypt the data that was encrypted under that KMS key, which means that data becomes unrecoverable" |
| AWS KMS requires a waiting period of 7 – 30 days | S22 | "AWS KMS requires you to set a waiting period of 7 – 30 days" |
| The default waiting period is 30 days | S22 | "The default waiting period is 30 days" |
| A KMS key pending deletion cannot be used in any cryptographic operations | S22 | "A KMS key pending deletion cannot be used in any cryptographic operations" |
| To recover the KMS key, you can cancel key deletion before the waiting period ends | S22 | "To recover the KMS key, you can cancel key deletion before the waiting period ends" |
| If you are not sure, consider disabling the KMS key instead of deleting it | S22 | "If you are not sure, consider disabling the KMS key instead of deleting it" |
| There is no charge for customer managed KMS keys that are scheduled for deletion | S23 | "There is no charge for customer managed KMS keys that you manage and are scheduled for deletion" |
| A secret can be a password, a set of credentials, an OAuth token, or other secret information that you store in an encrypted form | S25 | "A secret can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager" |
| You can store up to 65536 bytes in the secret | S25 | "You can store up to 65536 bytes in the secret" |
| To create a secret, you need the permissions granted by the SecretsManagerReadWrite managed policy | S25 | "To create a secret, you need the permissions granted by the SecretsManagerReadWrite managed policy" |
| Secrets Manager encrypts secrets at rest using encryption keys that you own and store in AWS KMS | S27 | "Secrets Manager encrypts secrets at rest using encryption keys that you own and store in AWS Key Management Service (AWS KMS)" |
| When you retrieve a secret, Secrets Manager decrypts it and transmits it securely over TLS to your local environment | S27 | "When you retrieve a secret, Secrets Manager decrypts the secret and transmits it securely over TLS to your local environment" |
| For most cases, choose aws/secretsmanager, the AWS managed key | S25 | "For most cases, choose aws/secretsmanager to use the AWS managed key for Secrets Manager" |
| There is no cost for using this key | S25 | "There is no cost for using this key" |
| If you create your own KMS keys to encrypt your secrets, AWS charges you at the current AWS KMS rate | S24 | "If you create your own KMS keys to encrypt your secrets, AWS charges you at the current AWS KMS rate" |
| With Secrets Manager, you can configure an automatic rotation schedule for your secrets | S24 | "With Secrets Manager, you can configure an automatic rotation schedule for your secrets" |
| Rotating credentials no longer requires updating your applications and deploying changes to application clients | S24 | "rotating credentials no longer requires updating your applications and deploying changes to application clients" |
| You can set up automatic rotation as often as every four hours | S27 | "With Secrets Manager, you can set up automatic rotation as often as every four hours" |
| Secrets Manager offers two strategies for rotation: Single user and Alternating users | S27 | "Secrets Manager offers two strategies for rotation: Single user and Alternating users" |
| If you don't change your secrets for a long period of time, the secrets become more likely to be compromised | S27 | "If you don't change your secrets for a long period of time, the secrets become more likely to be compromised" |
| When you turn on automatic rotation (except managed rotation), you are charged for the rotation function at the current Lambda rate | S24 | "When you turn on automatic rotation (except managed rotation), Secrets Manager uses an AWS Lambda function to rotate the secret, and you are charged for the rotation function at the current Lambda rate" |
| Secrets Manager does not immediately delete secrets | S26 | "Secrets Manager does not immediately delete secrets" |
| It immediately makes the secret inaccessible and schedules it for deletion after a recovery window of a minimum of seven days | S26 | "Instead, Secrets Manager immediately makes the secrets inaccessible and scheduled for deletion after a recovery window of a minimum of seven days" |
| Until the recovery window ends, you can recover a secret you previously deleted | S26 | "Until the recovery window ends, you can recover a secret you previously deleted" |
| There is no charge for secrets that you have marked for deletion | S26 | "There is no charge for secrets that you have marked for deletion" |
| You can't directly delete a version of a secret | S26 | "You can't directly delete a version of a secret" |
| If you don't know whether an application still uses a secret, you can create an Amazon CloudWatch alarm for access attempts during the recovery window | S26 | "If you don't know whether an application still uses a secret, you can create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window" |
| If you delete a secret without a recovery window, you can't recover it | S26 | "You can't recover this secret" |
| When you use Secrets Manager, you pay only for what you use, with no minimum or setup fees | S24 | "When you use Secrets Manager, you pay only for what you use, with no minimum or setup fees" |
| Most command shells offer features that could compromise your secrets, such as logging and the ability to see the last entered command | S27 | "Most command shells offer features that could compromise your secrets, such as logging and the ability to see the last entered command" |
| In IAM policy statements that control access to your secrets, use the principle of least privileged access | S27 | "In IAM policy statements that control access to your secrets, use the principle of least privileged access" |
| To use your secrets most efficiently, cache them and update them only when required | S27 | "we recommend you use one of the following supported Secrets Manager caching components to cache your secrets and update them only when required" |
| It reads JSON policies with json.loads, which deserializes a JSON document to a Python object | S32 | "deserialize s (a str, bytes or bytearray instance containing a JSON document) to a Python object" |
| The two policies are those of the single-account example of AWS | S11 | "Assume that Carlos has the user name carlossalazar and he tries to save a file to the amzn-s3-demo-bucket-carlossalazar-logs Amazon S3 bucket" |
| The identity policy of the tutorial lists two of the four actions of the AllowS3ListRead statement, and leaves out s3:GetAccountPublicAccessBlock and s3:ListAccessPoints | S11 | "The AllowS3ListRead statement in this policy allows Carlos to view a list of all of the buckets in the account" |
| The identity policy of the tutorial lists two of the four actions of the AllowS3ListRead statement, and leaves out s3:GetAccountPublicAccessBlock and s3:ListAccessPoints | S11 | "s3:GetAccountPublicAccessBlock" |
| The identity policy of the tutorial lists two of the four actions of the AllowS3ListRead statement, and leaves out s3:GetAccountPublicAccessBlock and s3:ListAccessPoints | S11 | "s3:ListAccessPoints" |
| Logs bucket: AWS first checks for a Deny statement that applies to the request, finds one, and Carlos is denied access | S11 | "AWS first checks for a Deny statement that applies to the context of the request" |
| Logs bucket: AWS first checks for a Deny statement that applies to the request, finds one, and Carlos is denied access | S11 | "Carlos is denied access" |
| His own bucket: both the identity-based policy and the resource-based policy allow the request, so AWS allows it | S11 | "Both the identity-based policy and the resource-based policy allow the request" |
| His own bucket: both the identity-based policy and the resource-based policy allow the request, so AWS allows it | S11 | "Therefore, AWS allows the request" |
| Another bucket: by default, all requests are implicitly denied | S12 | "By default, all requests are implicitly denied with the exception of the AWS account root user, which has full access" |
| Someone else: the bucket policy specifies that only the carlossalazar user can access the bucket | S11 | "This policy specifies that only the carlossalazar user can access the amzn-s3-demo-bucket-carlossalazar bucket" |
| Identity policy only, and bucket policy only: if one of the two allows the request and the other doesn't, the request is still allowed | S11 | "If either the identity-based policy or the resource-based policy within the same account allows the request and the other doesn't, the request is still allowed" |
| A Deny in the bucket policy: an explicit deny overrides an explicit allow | S12 | "An explicit deny overrides an explicit allow" |
| The page says that if either policy explicitly denied the request, it would have been denied | S11 | "If either of them explicitly denied the statement, the request would have been denied" |
| AWS evaluates all of these policy types that apply to a request | S12 | "These include AWS Organizations SCPs and RCPs, resource-based policies, identity-based policies, IAM permissions boundaries, and session policies" |
| It follows envelope encryption, which is the practice of encrypting plaintext data with a data key, and then encrypting the data key under another key | S19 | "Envelope encryption is the practice of encrypting plaintext data with a data key, and then encrypting the data key under another key" |
| In AWS KMS, KMS keys are created, managed, used, and deleted entirely within AWS KMS | S17 | "KMS keys are created, managed, used, and deleted entirely within AWS KMS" |
| openssl rand generates random bytes with a cryptographically secure pseudo random number generator | S31 | "This command generates num random bytes using a cryptographically secure pseudo random number generator (CSPRNG)" |
| openssl rand generates random bytes with a cryptographically secure pseudo random number generator , and -hex shows the output as a hex string | S31 | "Show the output as a hex string" |
| For openssl enc, the key given with -K must be a string of hex digits, and if only the key is specified, the IV must be given with -iv | S30 | "The actual key to use: this must be represented as a string comprised only of hex digits. If only the key is specified, the IV must additionally specified using the -iv option" |
| The option -d decrypts the input | S30 | "Decrypt the input data" |
| The command lists AES in CBC mode | S30 | "128/192/256 bit AES in CBC mode" |
| It does not support authenticated encryption modes like CCM and GCM | S30 | "This command does not support authenticated encryption modes like CCM and GCM, and will not support such modes in the future" |
| AWS says that you can safely store the encrypted data key alongside the encrypted data | S19 | "You can safely store the encrypted data key alongside the encrypted data" |
| The recipient first decrypts the encrypted key and then decrypts the message | S19 | "can open the enveloped message by first decrypting the encrypted key and then decrypting the message" |
| With AWS KMS, you first ask AWS KMS to decrypt the encrypted data key | S20 | "When you are ready to decrypt the data, you first ask AWS KMS to decrypt the encrypted data key" |
| AWS says that you can re-encrypt only the data keys instead of re-encrypting the raw data | S19 | "Instead of re-encrypting raw data multiple times with different keys, you can re-encrypt only the data keys that protect the raw data" |
| When you use a rotated KMS key to decrypt, AWS KMS uses the key material that was used to encrypt | S21 | "When you use the rotated KMS key to decrypt ciphertext, AWS KMS uses the key material that was used to encrypt it" |
| What both share is that key rotation does not re-encrypt any data | S21 | "It does not rotate the data keys that the KMS key generated or re-encrypt any data protected by the KMS key" |
| AWS says that after a KMS key is deleted, you can no longer decrypt the data that was encrypted under it | S22 | "After a KMS key is deleted, you can no longer decrypt the data that was encrypted under that KMS key, which means that data becomes unrecoverable" |
| AWS KMS requires a waiting period of 7 – 30 days | S22 | "AWS KMS requires you to set a waiting period of 7 – 30 days" |
| AWS KMS requires a waiting period of 7 – 30 days , and you can cancel key deletion before it ends | S22 | "To recover the KMS key, you can cancel key deletion before the waiting period ends" |
| AWS_CONFIG_FILE and AWS_SHARED_CREDENTIALS_FILE name the files for configuration profiles and access keys, and AWS_EC2_METADATA_DISABLED disables the use of the EC2 instance metadata service (IMDS) | S29 | "AWS_CONFIG_FILE Specifies the location of the file that the AWS CLI uses to store configuration profiles" |
| AWS_CONFIG_FILE and AWS_SHARED_CREDENTIALS_FILE name the files for configuration profiles and access keys, and AWS_EC2_METADATA_DISABLED disables the use of the EC2 instance metadata service (IMDS) | S29 | "AWS_SHARED_CREDENTIALS_FILE Specifies the location of the file that the AWS CLI uses to store access keys" |
| AWS_CONFIG_FILE and AWS_SHARED_CREDENTIALS_FILE name the files for configuration profiles and access keys, and AWS_EC2_METADATA_DISABLED disables the use of the EC2 instance metadata service (IMDS) | S29 | "AWS_EC2_METADATA_DISABLED Disables the use of the Amazon EC2 instance metadata service (IMDS)" |
| The --generate-cli-skeleton option generates and displays a parameter template that you can customize and use as input on a command | S28 | "The --generate-cli-skeleton generates and displays a parameter template that you can customize and use as input on a command" |
| SecretString matches the option --secret-string in the create-secret example of AWS | S25 | "--secret-string file://mycreds.json" |
| PendingWindowInDays matches the option --pending-window-in-days and the output field PendingWindowInDays in the schedule-key-deletion example of AWS | S33 | "aws kms schedule-key-deletion --key-id 1234abcd-12ab-34cd-56ef-1234567890ab --pending-window-in-days 10" |
| PendingWindowInDays matches the option --pending-window-in-days and the output field PendingWindowInDays in the schedule-key-deletion example of AWS | S33 | "PendingWindowInDays" |
| For the waiting period, the console asks for a number of days between 7 and 30 | S33 | "For Waiting period (in days), enter a number of days between 7 and 30" |
| IAM, IAM Identity Center, and AWS STS are features of your AWS account offered at no additional charge | S1 | "AWS Identity and Access Management (IAM), AWS IAM Identity Center and AWS Security Token Service (AWS STS) are features of your AWS account offered at no additional charge" |
| You are charged only when you access other AWS services using your IAM users or AWS STS temporary security credentials | S1 | "You are charged only when you access other AWS services using your IAM users or AWS STS temporary security credentials" |
| An administrator creates the Get-pics service role and attaches the role to the EC2 instance | S16 | "An administrator creates the Get-pics service role and attaches the role to the Amazon EC2 instance" |
| The role includes a permissions policy that grants read-only access to the specified S3 bucket | S16 | "The role includes a permissions policy that grants read-only access to the specified S3 bucket" |
| It also includes a trust policy that allows the EC2 instance to assume the role and retrieve the temporary credentials | S16 | "It also includes a trust policy that allows the Amazon EC2 instance to assume the role and retrieve the temporary credentials" |
| A developer launches an EC2 instance and assigns the role to that instance | S16 | "A developer launches an Amazon EC2 instance and assigns the Get-pics role to that instance" |
| To launch an instance with a role, the developer must have permission to launch EC2 instances and permission to pass IAM roles | S16 | "To launch an instance with a role, the developer must have permission to launch Amazon EC2 instances and permission to pass IAM roles" |
| If you use the IAM console, the instance profile is managed for you | S16 | "If you use the IAM console, the instance profile is managed for you and is mostly transparent to you" |
| If you use the AWS CLI or API, you must create the instance profile and assign the role to it as separate steps | S16 | "if you use the AWS CLI or API to create and manage the role and Amazon EC2 instance, then you must create the instance profile and assign the role to it as separate steps" |
| When the application runs, it obtains temporary security credentials from the EC2 instance metadata | S16 | "When the application runs, it obtains temporary security credentials from Amazon EC2 instance metadata" |
| If the application caches them, it should get a refreshed set every hour, or at least 15 minutes before the current set expires | S16 | "it should get a refreshed set of credentials every hour, or at least 15 minutes before the current set expires" |
| When you use Secrets Manager, you pay only for what you use, with no minimum or setup fees | S24 | "When you use Secrets Manager, you pay only for what you use, with no minimum or setup fees" |
| If you create your own KMS keys to encrypt your secrets, AWS charges you at the current AWS KMS rate | S24 | "If you create your own KMS keys to encrypt your secrets, AWS charges you at the current AWS KMS rate" |
| Secrets Manager does not delete a secret at once, but after a recovery window of a minimum of seven days | S26 | "Instead, Secrets Manager immediately makes the secrets inaccessible and scheduled for deletion after a recovery window of a minimum of seven days" |
| There is no charge for secrets that you have marked for deletion | S26 | "There is no charge for secrets that you have marked for deletion" |
| Open the Secrets Manager console and choose Store a new secret | S25 | "Open the Secrets Manager console at https://console.aws.amazon.com/secretsmanager/" |
| Open the Secrets Manager console and choose Store a new secret | S25 | "Choose Store a new secret" |
| To store API keys, access tokens, or credentials that aren't for databases, choose Other type of secret | S25 | "To store API keys, access tokens, credentials that aren't for databases, choose Other type of secret" |
| Enter the secret as key/value pairs, or choose the Plaintext tab and enter it in any format | S25 | "In Key/value pairs, either enter your secret in JSON Key/value pairs, or choose the Plaintext tab and enter the secret in any format" |
| For Encryption key, choose the AWS KMS key that Secrets Manager uses to encrypt the secret value | S25 | "For Encryption key, choose the AWS KMS key that Secrets Manager uses to encrypt the secret value" |
| For most cases, choose aws/secretsmanager | S25 | "For most cases, choose aws/secretsmanager to use the AWS managed key for Secrets Manager" |
| In the list of secrets, choose the secret, and choose Actions and then Delete secret | S26 | "In the list of secrets, choose the secret you want to delete" |
| In the list of secrets, choose the secret, and choose Actions and then Delete secret | S26 | "In the Secret details section, choose Actions, and then choose Delete secret" |
| In Waiting period, enter the number of days to wait before the deletion becomes permanent, and choose Schedule deletion | S26 | "in Waiting period, enter the number of days to wait before the deletion becomes permanent" |
| In Waiting period, enter the number of days to wait before the deletion becomes permanent, and choose Schedule deletion | S26 | "Choose Schedule deletion" |
| There is a monthly cost to have a customer managed key in your account | S18 | "There is a monthly cost to have a customer managed key in your account" |
| There is no charge for customer managed KMS keys that you manage and are scheduled for deletion | S23 | "There is no charge for customer managed KMS keys that you manage and are scheduled for deletion" |
| If you cancel the deletion during the waiting period, the key will incur charges as though it was never scheduled for deletion | S23 | "If you cancel the deletion during the waiting period, the customer managed KMS key will incur charges as though it was never scheduled for deletion" |
| The page warns that deleting a KMS key is destructive and potentially dangerous | S33 | "Deleting a KMS key is destructive and potentially dangerous" |
| In the navigation pane, choose Customer managed keys | S33 | "In the navigation pane, choose Customer managed keys" |
| You cannot schedule the deletion of AWS managed keys or AWS owned keys | S33 | "You cannot schedule the deletion of AWS managed keys or AWS owned keys" |
| Choose the checkbox next to the KMS key that you want to delete, and choose Key actions, Schedule key deletion | S33 | "Choose the checkbox next to the KMS key that you want to delete" |
| Choose the checkbox next to the KMS key that you want to delete, and choose Key actions, Schedule key deletion | S33 | "Choose Key actions, Schedule key deletion" |
| For Waiting period (in days), enter a number of days between 7 and 30 | S33 | "For Waiting period (in days), enter a number of days between 7 and 30" |
| Choose the check box next to I confirm that I want to schedule these keys for deletion | S33 | "Choose the check box next to I confirm that I want to schedule these keys for deletion" |
| The keys become immediately unusable for cryptographic operations | S33 | "The keys will become immediately unusable for cryptographic operations" |
| AWS KMS records an entry in your AWS CloudTrail log when you schedule deletion of the KMS key and when the KMS key is actually deleted | S33 | "AWS KMS records an entry in your AWS CloudTrail log when you schedule deletion of the KMS key and when the KMS key is actually deleted" |
| A request is allowed only if a policy explicitly allows it | S12 | "Requests must be explicitly allowed by a policy or set of policies following the evaluation logic below to be allowed" |
| An explicit deny overrides an explicit allow | S12 | "An explicit deny overrides an explicit allow" |
| In one account, an Allow in either the identity-based or the resource-based policy is enough for most resources | S12 | "For most resources, you only need an explicit Allow for the principal in either an identity-based policy or a resource-based policy to grant access" |
| The IAM policy simulator shows how AWS would evaluate a request, without sending a real request to any AWS service | S13 | "You simulate how AWS would evaluate a request against those policies, without sending a real request to any AWS service" |
| Its results can differ from your live AWS environment | S13 | "The policy simulator results can differ from your live AWS environment" |
| IAM, like many other AWS services, is eventually consistent | S1 | "IAM, like many other AWS services, is eventually consistent" |
| Be sure to verify that the changes have been propagated before production workflows depend on them | S1 | "be sure to verify that the changes have been propagated before production workflows depend on them" |
| Do NOT put access keys or credential information in your application files | S6 | "Do NOT put access keys or credential information in your application files" |
| Credentials in the shared AWS credentials file are stored in plaintext | S6 | "Access keys or credential information stored in the shared AWS credentials file are stored in plaintext" |
| Secrets Manager replaces hard-coded credentials with a runtime call | S24 | "You replace hard-coded credentials with a runtime call to the Secrets Manager service to retrieve credentials dynamically when you need them" |
| AWS delivers the temporary credentials of an IAM role to a compute resource such as EC2 or Lambda | S3 | "When you're building on an AWS compute service, such as Amazon EC2 or Lambda, AWS delivers the temporary credentials of an IAM role to that compute resource" |
| After temporary credentials expire, AWS no longer recognizes them | S5 | "After the credentials expire, AWS no longer recognizes them or allows any kind of access from API requests made with them" |
| A caching application should get a refreshed set at least 15 minutes before the current set expires | S16 | "it should get a refreshed set of credentials every hour, or at least 15 minutes before the current set expires" |
| AWS recommends MFA for an IAM user or the root user | S3 | "for scenarios in which you need an IAM user or root user in your account, require MFA for additional security" |
| The root user should be used only for tasks that require root-level permissions | S7 | "Use the root user only to perform the tasks that require root-level permissions" |
| A deleted secret stays recoverable until the recovery window ends | S26 | "Until the recovery window ends, you can recover a secret you previously deleted" |
| A CloudWatch alarm can tell you about access attempts during the recovery window | S26 | "If you don't know whether an application still uses a secret, you can create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window" |
| Rotating credentials no longer requires updating your applications and deploying changes to application clients | S24 | "rotating credentials no longer requires updating your applications and deploying changes to application clients" |
| Automatic rotation can run as often as every four hours | S27 | "With Secrets Manager, you can set up automatic rotation as often as every four hours" |
| When you use the rotated KMS key to decrypt ciphertext, AWS KMS uses the key material that was used to encrypt it | S21 | "When you use the rotated KMS key to decrypt ciphertext, AWS KMS uses the key material that was used to encrypt it" |
| You can safely use a rotated KMS key in applications without code changes | S21 | "you can safely use a rotated KMS key in applications and AWS services without code changes" |
| Key rotation has no effect on the data that the KMS key protects | S21 | "Key rotation has no effect on the data that the KMS key protects" |
| A KMS key pending deletion cannot be used in any cryptographic operations | S22 | "A KMS key pending deletion cannot be used in any cryptographic operations" |
| A CloudWatch alarm can warn you if a person or application attempts to use the key during the waiting period | S22 | "You can configure an Amazon CloudWatch alarm to warn you if a person or application attempts to use the KMS key during the waiting period" |
| AWS checks JSON policy syntax and grammar | S14 | "AWS checks JSON policy syntax and grammar" |
| IAM Access Analyzer validates IAM policies against policy grammar and AWS best practices | S15 | "IAM Access Analyzer validates IAM policies against policy grammar and AWS best practices" |
| AWS strongly recommends that you don't use the root user for everyday tasks | S1 | "We strongly recommend that you don't use the root user for everyday tasks" |
| Do NOT put access keys or credential information in your application files | S6 | "Do NOT put access keys or credential information in your application files" |
| Do NOT include files that contain access keys or credential information in your project area | S6 | "Do NOT include files that contain access keys or credential information in your project area" |
| The secret access key can be retrieved only at the time you create it | S6 | "The secret access key can be retrieved only at the time you create it" |
| If you lose it, you must delete the access key and create a new one | S6 | "If you lose your secret access key, you must delete the access key and create a new one" |
| IAM, like many other AWS services, is eventually consistent | S1 | "IAM, like many other AWS services, is eventually consistent" |
| AWS recommends that you do not include such changes in the critical, high-availability code paths of your application | S1 | "We recommend that you do not include such IAM changes in the critical, high-availability code paths of your application" |
| An explicit deny overrides an explicit allow | S12 | "An explicit deny overrides an explicit allow" |
| By default, all requests are implicitly denied, with the exception of the AWS account root user, which has full access | S12 | "By default, all requests are implicitly denied with the exception of the AWS account root user, which has full access" |
| AWS managed policies might not grant least-privilege permissions for your specific use cases | S3 | "Keep in mind that AWS managed policies might not grant least-privilege permissions for your specific use cases because they are available for use by all AWS customers" |
| If you try to define multiple permissions in a single statement, your policy might not grant the access that you expect | S9 | "If you try to define multiple permissions in a single statement, your policy might not grant the access that you expect" |
| If you are creating an IAM permissions policy to attach to a user or role, you cannot include this element | S9 | "If you are creating an IAM permissions policy to attach to a user or role, you cannot include this element" |
| The policy simulator results can differ from your live AWS environment | S13 | "The policy simulator results can differ from your live AWS environment" |
| Key rotation has no effect on the data that the KMS key protects | S21 | "Key rotation has no effect on the data that the KMS key protects" |
| It will not mitigate the effect of a compromised data key | S21 | "Key rotation will not mitigate the effect of a compromised data key" |
| After a KMS key is deleted, you can no longer decrypt the data that was encrypted under that KMS key | S22 | "After a KMS key is deleted, you can no longer decrypt the data that was encrypted under that KMS key, which means that data becomes unrecoverable" |
| If you are not sure, consider disabling the KMS key instead | S22 | "If you are not sure, consider disabling the KMS key instead of deleting it" |
| There is a monthly cost to have a customer managed key in your account | S18 | "There is a monthly cost to have a customer managed key in your account" |
| If you create your own KMS keys to encrypt your secrets, AWS charges you at the current AWS KMS rate | S24 | "If you create your own KMS keys to encrypt your secrets, AWS charges you at the current AWS KMS rate" |
| When you turn on automatic rotation (except managed rotation), you are charged for the rotation function at the current Lambda rate | S24 | "When you turn on automatic rotation (except managed rotation), Secrets Manager uses an AWS Lambda function to rotate the secret, and you are charged for the rotation function at the current Lambda rate" |
| Secrets Manager does not immediately delete secrets | S26 | "Secrets Manager does not immediately delete secrets" |
| A secret that you delete without a recovery window can't be recovered | S26 | "You can't recover this secret" |
| Most command shells offer features that could compromise your secrets, such as logging and the ability to see the last entered command | S27 | "Most command shells offer features that could compromise your secrets, such as logging and the ability to see the last entered command" |
| openssl enc does not support authenticated encryption modes like CCM and GCM | S30 | "This command does not support authenticated encryption modes like CCM and GCM, and will not support such modes in the future" |
