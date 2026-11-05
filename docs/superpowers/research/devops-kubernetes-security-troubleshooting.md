# Research notes: Kubernetes Security and Troubleshooting

Page: `content/devops/kubernetes-security-troubleshooting.mdx`. Module: DevOps & Cloud. Date: 2026-11-05.

The page is a shelf: a short explanation with its sources, then KodeKloud Shorts. The reels are another creator's videos and are not sources. Each fact in the text comes from the sources below.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Secrets (Kubernetes documentation) | https://kubernetes.io/docs/concepts/configuration/secret/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key. | S1 | "A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key" |
| By default, Kubernetes Secrets are stored unencrypted in the API server's underlying data store (etcd). | S1 | "stored unencrypted in the API server's underlying data store (etcd)" |
