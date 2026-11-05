/** The English strings of the DevOps & Cloud module. */

const pad = (number: number) => String(number).padStart(2, "0");

export const DEVOPS_UI = {
  siteTitle: "DevOps & Cloud",
  description:
    "Git, CI/CD, Docker, Kubernetes, AWS, Terraform, Ansible, monitoring, and CNCF projects: a short sourced explanation of each topic, then KodeKloud Shorts to watch.",
  eyebrow: (topics: number) => `DEVOPS & CLOUD · ${topics} TOPICS`,
  heading: "DevOps & Cloud",
  lede: "This module explains the tools around a delivery pipeline: version control, CI/CD, containers, Kubernetes, the cloud, infrastructure as code, and monitoring. Each topic has a short explanation with its sources, then KodeKloud Shorts that show it at work.",
  sourceNote:
    "Each fact on a page links to the official documentation of the tool or the foundation behind it. The reels under a page are KodeKloud Shorts: another creator's videos, not part of the checked text.",
  itemsHeading: "TOPICS",
  itemsHeadingId: "topics-heading",

  // The topic page.
  itemEyebrow: (number: number) => `TOPIC ${pad(number)} · DEVOPS & CLOUD`,
  itemNav: "DevOps & Cloud topics",
  allItems: "All topics",
  previousItem: "Previous topic",
  nextItem: "Next topic",

  // The sidebar, the drawer, and the header.
  sidebarNav: "DevOps & Cloud topics",
  sidebarItemLabel: (number: number) => `TOPIC ${pad(number)}`,
  headerLink: "DevOps & Cloud",
  crossTo: "DevOps & Cloud",
} as const;
