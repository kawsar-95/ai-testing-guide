/** The English strings of the AI Skills module. */

const pad = (number: number) => String(number).padStart(2, "0");

export const AI_SKILLS_UI = {
  siteTitle: "AI Skills for Testers",
  description:
    "20 AI skills in 4 tiers, from prompting to fine-tuning, each with how a tester can use it.",
  eyebrow: (topics: number) => `AI SKILLS · ${topics} SKILLS`,
  heading: "AI Skills for Testers",
  lede: "Learn 20 AI skills in 4 tiers. Start with the skills that pay off fastest, and learn the specialist skills only when you have a clear need. Each skill has a page that explains it and shows how a tester can use it.",
  sourceNote:
    "The list of skills and the 4 tiers follow the infographic “20 AI Skills Your Team Must Master in 2026” by AI for Leaders. The text is the tutorial's own. Each fact on a page links to an official source.",
  itemsHeading: "SKILLS",
  itemsHeadingId: "skills-heading",
  overallLabel: "Skills done",
  summaryText: (done: number, total: number) => `${done} of ${total} skills done`,
  percentText: (value: number) => `${value}%`,

  // The topic page.
  itemEyebrow: (number: number) => `SKILL ${pad(number)} · AI SKILLS`,
  itemNav: "AI skills",
  allItems: "All skills",
  previousItem: "Previous skill",
  nextItem: "Next skill",
  markDone: "Mark this skill as done",
  markedDone: "Done. Click to undo",

  // The sidebar, the drawer, and the header.
  sidebarNav: "AI skills",
  sidebarItemLabel: (number: number) => `SKILL ${pad(number)}`,
  sidebarDone: "done",
  headerLink: "AI Skills",
  crossTo: "AI Skills",
} as const;
