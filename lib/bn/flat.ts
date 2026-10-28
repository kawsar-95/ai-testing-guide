import type { Bn } from "../bn.ts";
import type { FlatModuleUI, FlatProgressUI } from "../modules/flat.ts";
import type { FlatModuleId } from "../modules/registry.ts";
import { AI_SKILLS_UI_BN } from "./ai-skills.ts";
import { ARCHITECTURE_UI_BN } from "./architecture.ts";
import { COURSE_UI_BN } from "./course.ts";
import { K6_UI_BN } from "./k6.ts";
import { SYSTEM_DESIGN_UI_BN } from "./system-design.ts";

/** The Bangla twin of the `ui` of each flat module, by module id. */
export const FLAT_UI_BN: Record<FlatModuleId, Bn<FlatModuleUI & Partial<FlatProgressUI>>> = {
  "system-design": SYSTEM_DESIGN_UI_BN,
  architecture: ARCHITECTURE_UI_BN,
  course: COURSE_UI_BN,
  k6: K6_UI_BN,
  "ai-skills": AI_SKILLS_UI_BN,
};
