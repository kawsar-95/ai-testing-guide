/**
 * The one ordered list of Interview Prep areas. Each area is served at
 * /prep/<slug>/ and has its items in content/prep/<slug>.ts.
 */
import type { AreaSlug, ItemKind, PrepArea } from "./types.ts";

export const PREP_HOME = "/prep/";

type AreaEntry = { slug: AreaSlug; title: string; description: string; kind: ItemKind };

const SOURCE: readonly AreaEntry[] = [
  {
    slug: "interview-prep",
    title: "Interview Preparation",
    description: "Steps to get ready before the interview: research, practice, and a plan for the day.",
    kind: "task",
  },
  {
    slug: "intern",
    title: "Intern",
    description: "Basic questions on testing terms and first test cases for a new tester.",
    kind: "qa",
  },
  {
    slug: "junior",
    title: "Junior",
    description: "Questions on test design, bug reports, and the daily work of a junior tester.",
    kind: "qa",
  },
  {
    slug: "mid-level",
    title: "Mid-Level",
    description: "Questions on test strategy, automation choices, and work across a team.",
    kind: "qa",
  },
  {
    slug: "senior",
    title: "Senior",
    description: "Questions on risk, test architecture, and how to guide the quality of a product.",
    kind: "qa",
  },
  {
    slug: "leadership",
    title: "Leadership",
    description: "Questions on how to lead a QA team, set goals, and report on quality.",
    kind: "qa",
  },
  {
    slug: "programming-problems",
    title: "Programming Problems",
    description: "Small coding problems that a tester can get in an interview, with a way to solve each.",
    kind: "qa",
  },
  {
    slug: "practical-tasks",
    title: "Practical Tasks",
    description: "Hands-on tasks that you do on a real page or API, such as writing test cases.",
    kind: "task",
  },
  {
    slug: "tools-mastery",
    title: "Tools Mastery",
    description: "Questions on the tools of a tester: test runners, API clients, and bug trackers.",
    kind: "qa",
  },
  {
    slug: "hands-on-automation",
    title: "Hands-on Automation",
    description: "Automation tasks to build step by step, from a first script to a stable suite.",
    kind: "task",
  },
  {
    slug: "hr-soft-skills",
    title: "HR & Soft Skills",
    description: "Questions on teamwork, communication, and how to talk about your own work.",
    kind: "qa",
  },
  {
    slug: "realistic-scenarios",
    title: "Realistic Scenarios",
    description: "Work situations to think through, each with a level of easy, medium, or hard.",
    kind: "qa",
  },
  {
    slug: "mcq-test",
    title: "MCQ Test",
    description: "A quiz of multiple-choice questions with an explanation for each answer.",
    kind: "mcq",
  },
];

export const AREAS: readonly PrepArea[] = SOURCE.map((area) => ({
  ...area,
  href: `/prep/${area.slug}/`,
}));

export const PREP_ROUTES: readonly string[] = [PREP_HOME, ...AREAS.map((area) => area.href)];

export function getArea(slug: string): PrepArea | undefined {
  return AREAS.find((area) => area.slug === slug);
}
