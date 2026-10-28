// Both env vars are optional. Without them the build has no canonical URLs,
// sitemap entries, or analytics.
export const SITE_URL: string | null = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || null;
export const GA_ID: string | null = process.env.NEXT_PUBLIC_GA_ID || null;
// next.config.ts sets it from PAGES_BASE_PATH: "/<repo-name>" on GitHub Pages, "" locally.
export const BASE_PATH: string = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_NAME = "Agentic QA";
/** The name under the icon of the installed app. */
export const SITE_SHORT_NAME = "Agentic QA";
export const SITE_DESCRIPTION =
  "A tutorial for QA engineers and SDETs on software testing with Claude Code: getting started, foundations, configuration, extensions, and automation.";
export const OWNER = { name: "kawsar-95", url: "https://github.com/kawsar-95" };

/** The author of the site, shown at the end of the dashboard. The details come from the public GitHub profile README. */
export const AUTHOR = {
  name: "Nuruddin Kawsar",
  role: "QA Automation Engineer at Shomvob Technologies Ltd.",
  bio: "Software QA Engineer with 5+ years of experience in manual and automated testing across web, mobile, API, and SaaS platforms. I build automation with Playwright, Cypress, and Selenium, and I care about QA processes as much as test code. Currently exploring AI-assisted testing and growing toward QA leadership.",
  photo: "/images/author/nuruddin-kawsar.jpg",
  links: [
    { label: "Portfolio", href: "https://nuruddinkawsar.me/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nuruddin-kawsar-3b5152279/" },
    { label: "GitHub", href: "https://github.com/kawsar-95" },
    { label: "X", href: "https://x.com/nur_kawsar95" },
    { label: "Resume (PDF)", href: "https://github.com/kawsar-95/kawsar-95/blob/main/Nuruddin_Kawsar_Resume.pdf" },
  ],
} as const;
