/**
 * The registry of the reels. A module has reels if it is a key here. The value maps the slug of a
 * page to its reels, in the order that the reader sees them. A flat module gets reels by adding one
 * data file and one line here: `FlatTopicPage` shows them with no change to the MDX.
 */
import type { FlatModuleId } from "../modules/registry.ts";
import { ARCHITECTURE_REELS } from "./architecture.ts";
import type { Reel } from "./reels.ts";
import { SYSTEM_DESIGN_REELS } from "./system-design.ts";

type PageReels = Readonly<Record<string, readonly Reel[]>>;

export const REELS: Partial<Record<FlatModuleId, PageReels>> = {
  "system-design": SYSTEM_DESIGN_REELS,
  architecture: ARCHITECTURE_REELS,
};

/** The reels of one page. A page or a module with none gives an empty list. */
export function reelsFor(moduleId: string, slug: string): readonly Reel[] {
  return (REELS as Record<string, PageReels | undefined>)[moduleId]?.[slug] ?? [];
}
