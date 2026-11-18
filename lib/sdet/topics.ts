/**
 * The one ordered list of the SDET Roadmap module. The order of the 20 steps follows the curriculum of the course
 * "Become an SDET Professional" (Road to SDET, Batch 21). A step that the site already teaches is a link entry to
 * that module or page. A topic entry is served at /sdet/<slug>/ with its text in content/sdet/<slug>.mdx.
 * The 7 parts are the tutorial's own grouping, in the same order.
 */
import { defineFlatModule, type FlatEntry, type FlatPart } from "../modules/flat.ts";
import { SDET_UI } from "./ui.ts";

export type SdetSlug =
  | "manual-testing"
  | "api-testing-postman"
  | "javascript"
  | "typescript"
  | "sql-mysql"
  | "problem-solving"
  | "backend-node-express"
  | "frontend-nextjs"
  | "docker"
  | "system-design"
  | "performance-testing"
  | "system-design-in-practice"
  | "linux"
  | "security-testing"
  | "aws"
  | "playwright-ui"
  | "playwright-api"
  | "ci-cd"
  | "interview-preparation"
  | "real-project";

const parts: readonly FlatPart[] = [
  { num: 1, title: "Testing basics" },
  { num: 2, title: "Programming for testers" },
  { num: 3, title: "Build the app you test" },
  { num: 4, title: "System design and performance" },
  { num: 5, title: "Servers, security, and the cloud" },
  { num: 6, title: "Test automation and CI/CD" },
  { num: 7, title: "Career" },
];

const entries: readonly FlatEntry<SdetSlug>[] = [
  {
    slug: "manual-testing",
    title: "Manual Testing",
    description: "Testing basics, defects, the life cycles, test types and levels, test techniques, test cases, and bugs: the Fundamentals module.",
    kind: "link",
    href: "/fundamentals/",
    part: 1,
  },
  {
    slug: "api-testing-postman",
    title: "API Testing with Postman",
    description: "Send requests, read the responses, write checks in Postman, and run a collection from the command line.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "javascript",
    title: "JavaScript for Testers",
    description: "Values, functions, arrays, objects, JSON, errors, and async code: the JavaScript that test scripts use.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "typescript",
    title: "TypeScript for Testers",
    description: "Types, interfaces, and unions that catch mistakes in test code before it runs.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "sql-mysql",
    title: "SQL with MySQL",
    description: "Select, filter, join, and group data in MySQL to check what an app really saved.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "problem-solving",
    title: "Programming Problem Solving",
    description: "Strings, arrays, counting, duplicates, and sorting: small problems that build the logic for code interviews and test scripts.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "backend-node-express",
    title: "Backend with Node.js and Express",
    description: "Routes, middleware, JSON bodies, login, and error handling in a small REST API.",
    kind: "topic",
    part: 3,
  },
  {
    slug: "frontend-nextjs",
    title: "Frontend with React and Next.js",
    description: "Components, props, state, effects, routing, and Server and Client Components in a Next.js app.",
    kind: "topic",
    part: 3,
  },
  {
    slug: "docker",
    title: "Docker",
    description: "What Docker is, then images, Compose, and volumes: the Containers pages of DevOps & Cloud.",
    kind: "link",
    href: "/devops/docker-basics/",
    part: 3,
  },
  {
    slug: "system-design",
    title: "System Design",
    description: "Networks, DNS, proxies, databases, consistency, architecture, and reliability: the System Design Course.",
    kind: "link",
    href: "/course/",
    part: 4,
  },
  {
    slug: "performance-testing",
    title: "Performance Testing with k6",
    description: "Performance testing and k6, from the first script to dashboards and CI: the k6 module.",
    kind: "link",
    href: "/k6/",
    part: 4,
  },
  {
    slug: "system-design-in-practice",
    title: "System Design in Practice",
    description: "Scaling, load balancers, caching with Redis, queues, rate limits, idempotency, and monitoring, with what a tester checks: the Architecture module.",
    kind: "link",
    href: "/architecture/",
    part: 4,
  },
  {
    slug: "linux",
    title: "Linux",
    description: "The shell, files, users, processes, networking, services, and troubleshooting: the Linux command sheets.",
    kind: "link",
    href: "/linux/",
    part: 5,
  },
  {
    slug: "security-testing",
    title: "Security Testing",
    description: "A safe practice lab, Nmap, web flaws tested with Burp Suite and ZAP, API and database security, security scans in CI, and a practice penetration test: the Security Testing module.",
    kind: "link",
    href: "/security/",
    part: 5,
  },
  {
    slug: "aws",
    title: "AWS Basics",
    description: "Cloud concepts, then EC2, S3, VPC, IAM, and the AWS databases: the Cloud and AWS pages of DevOps & Cloud.",
    kind: "link",
    href: "/devops/cloud-concepts/",
    part: 5,
  },
  {
    slug: "playwright-ui",
    title: "UI Automation with Playwright",
    description: "Locators, actions, web-first assertions, page objects, and traces in Playwright Test.",
    kind: "topic",
    part: 6,
  },
  {
    slug: "playwright-api",
    title: "API Automation with Playwright",
    description: "API tests with the request fixture: requests, response checks, test data, and login.",
    kind: "topic",
    part: 6,
  },
  {
    slug: "ci-cd",
    title: "CI/CD",
    description: "Pipelines with Jenkins and GitHub Actions: the CI/CD page of DevOps & Cloud.",
    kind: "link",
    href: "/devops/ci-cd/",
    part: 6,
  },
  {
    slug: "interview-preparation",
    title: "Interview Preparation",
    description: "Testing interview questions, system design practice, and how to answer a design interview.",
    kind: "link",
    href: "/interview/",
    part: 7,
  },
  {
    slug: "real-project",
    title: "Practice on a Real Project",
    description: "One real QA practice project, from the bug hunt to the retest: the Case Study of the tutorial.",
    kind: "link",
    href: "/case-study/overview/",
    part: 7,
  },
];

export const SDET = defineFlatModule({
  id: "sdet",
  label: "SDET Roadmap",
  searchGroup: "sdet",
  entries,
  parts,
  progress: { storageKey: "sdet-progress" },
  ui: SDET_UI,
});
