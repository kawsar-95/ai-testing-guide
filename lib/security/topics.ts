/**
 * The one ordered list of the Security Testing module. Every entry is a topic,
 * served at /security/<slug>/ with its text in content/security/<slug>.mdx.
 * The topics follow the 8 modules of the course "Cyber Security and Penetration
 * Testing with AI" (Road to SDET), in their order. The text is the tutorial's own.
 */
import { defineFlatModule, type FlatEntry } from "../modules/flat.ts";
import { SECURITY_UI } from "./ui.ts";

export type SecuritySlug =
  | "security-basics-and-lab"
  | "network-scanning-and-hardening"
  | "web-application-security"
  | "api-auth-database-security"
  | "ai-assisted-security-testing"
  | "devsecops-automation"
  | "cyber-law-and-data-protection"
  | "pentest-capstone";

const entries: readonly FlatEntry<SecuritySlug>[] = [
  {
    slug: "security-basics-and-lab",
    title: "Security Basics and a Practice Lab",
    description: "The three security goals, vulnerability and risk, written permission, and a safe lab with Docker, Kali Linux, and Juice Shop.",
    kind: "topic",
  },
  {
    slug: "network-scanning-and-hardening",
    title: "Network Scanning and Server Hardening",
    description: "Find open ports and services with Nmap, then close the gaps: fewer services, SSH keys, and a firewall.",
    kind: "topic",
  },
  {
    slug: "web-application-security",
    title: "Web Application Security",
    description: "Broken access control, injection, and cross-site scripting, tested with Burp Suite and ZAP on Juice Shop.",
    kind: "topic",
  },
  {
    slug: "api-auth-database-security",
    title: "API, Authentication, and Database Security",
    description: "Object-level authorization (BOLA and IDOR), JWT checks, and safe database queries, practised on OWASP crAPI.",
    kind: "topic",
  },
  {
    slug: "ai-assisted-security-testing",
    title: "AI-Assisted Security Testing",
    description: "Use an AI assistant to review code, draft test cases, and explain findings, and verify every answer it gives.",
    kind: "topic",
  },
  {
    slug: "devsecops-automation",
    title: "Security Automation and DevSecOps",
    description: "SAST, dependency, secret, and DAST scans in CI/CD with Semgrep, Trivy, Gitleaks, and the ZAP baseline scan.",
    kind: "topic",
  },
  {
    slug: "cyber-law-and-data-protection",
    title: "Cyber Law and Data Protection",
    description: "Permission, responsible disclosure, Bangladesh's 2026 cyber and data protection laws, and GDPR basics for testers.",
    kind: "topic",
  },
  {
    slug: "pentest-capstone",
    title: "Capstone: A Practice Penetration Test",
    description: "Plan, discover, attack, and report on a lab app from start to end, then fix, retest, and rate what you found.",
    kind: "topic",
  },
];

export const SECURITY = defineFlatModule({
  id: "security",
  label: "Security Testing",
  searchGroup: "security",
  entries,
  progress: { storageKey: "security-progress" },
  ui: SECURITY_UI,
});
