/**
 * The registry of the flat modules, in the order of the site: System Design,
 * then Architecture. The module files must not import this file.
 */
import { ARCHITECTURE } from "../architecture/topics.ts";
import { SYSTEM_DESIGN } from "../system-design/cases.ts";

export { ARCHITECTURE, SYSTEM_DESIGN };

export const FLAT_MODULES = [SYSTEM_DESIGN, ARCHITECTURE] as const;

export type FlatModuleId = (typeof FLAT_MODULES)[number]["id"];

/** The flat modules with a progress store, in registry order. */
export const PROGRESS_MODULES = FLAT_MODULES.filter((m) => m.progress);
