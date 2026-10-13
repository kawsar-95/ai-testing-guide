/**
 * The items of every area. Each area file is content/prep/<slug>.ts.
 * Progress uses the item ids, so an id never changes.
 */
import type { AreaSlug, PrepItem } from "./types.ts";
import { items as interviewPrep } from "../../content/prep/interview-prep.ts";
import { items as intern } from "../../content/prep/intern.ts";
import { items as junior } from "../../content/prep/junior.ts";
import { items as midLevel } from "../../content/prep/mid-level.ts";
import { items as senior } from "../../content/prep/senior.ts";
import { items as leadership } from "../../content/prep/leadership.ts";
import { items as programmingProblems } from "../../content/prep/programming-problems.ts";
import { items as practicalTasks } from "../../content/prep/practical-tasks.ts";
import { items as toolsMastery } from "../../content/prep/tools-mastery.ts";
import { items as handsOnAutomation } from "../../content/prep/hands-on-automation.ts";
import { items as hrSoftSkills } from "../../content/prep/hr-soft-skills.ts";
import { items as realisticScenarios } from "../../content/prep/realistic-scenarios.ts";
import { items as mcqTest } from "../../content/prep/mcq-test.ts";

export const ITEMS_BY_AREA: Record<AreaSlug, readonly PrepItem[]> = {
  "interview-prep": interviewPrep,
  "intern": intern,
  "junior": junior,
  "mid-level": midLevel,
  "senior": senior,
  "leadership": leadership,
  "programming-problems": programmingProblems,
  "practical-tasks": practicalTasks,
  "tools-mastery": toolsMastery,
  "hands-on-automation": handsOnAutomation,
  "hr-soft-skills": hrSoftSkills,
  "realistic-scenarios": realisticScenarios,
  "mcq-test": mcqTest,
};

export const ALL_ITEMS: readonly PrepItem[] = Object.values(ITEMS_BY_AREA).flat();

export function itemsOf(slug: AreaSlug): readonly PrepItem[] {
  return ITEMS_BY_AREA[slug];
}
