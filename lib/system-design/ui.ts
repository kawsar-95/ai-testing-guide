/** The English strings of the System Design module. */

const pad = (number: number) => String(number).padStart(2, "0");

export const SYSTEM_DESIGN_UI = {
  siteTitle: "System Design",
  description:
    "How 15 well-known systems work, in plain words: Kafka, Google Search, YouTube, WhatsApp, Uber, payments, and more.",
  eyebrow: (cases: number) => `SYSTEM DESIGN · ${cases} CASE STUDIES`,
  heading: "System Design",
  lede: "Each case study takes one well-known product and explains how it works inside, in plain words. You do not need to be an architect. Read them in any order.",
  sourceNote:
    "Each case study is based on one article of The System Design Newsletter by Neo Kim. The text is our own summary. The article is the first source of each page.",
  casesHeading: "CASE STUDIES",

  // The case page.
  caseEyebrow: (number: number) => `CASE ${pad(number)} · SYSTEM DESIGN`,
  caseNav: "System Design case studies",
  allCases: "All case studies",
  previousCase: "Previous case study",
  nextCase: "Next case study",

  // The sidebar, the drawer, and the header.
  sidebarNav: "Case studies",
  sidebarCaseLabel: (number: number) => `CASE ${pad(number)}`,
  headerLink: "System Design",
  crossToSystemDesign: "System Design",
} as const;
