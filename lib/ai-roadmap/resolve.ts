/** Finds the title, the description, and the address of a page that a roadmap points at. */
import { getPage } from "../nav.ts";
import { FLAT_MODULES, type FlatModuleId } from "../modules/registry.ts";
import type { RoadmapId } from "./roadmaps.ts";

export type ResolvedPage = { slug: string; title: string; description: string; href: string };

/** The id of the flat module of a roadmap, or null for Agentic QA, which is a group of the tutorial. */
export function flatIdOf(id: RoadmapId): FlatModuleId | null {
  return id === "agentic-qa" ? null : id;
}

/** The id of the flat module of a roadmap when the module has a progress store, else null. */
export function progressIdOf(id: RoadmapId): FlatModuleId | null {
  const flat = flatIdOf(id);
  return flat && FLAT_MODULES.find((m) => m.id === flat)?.progress ? flat : null;
}

/** The page of a roadmap, or undefined when the slug is not a page of the module. */
export function resolvePage(id: RoadmapId, slug: string): ResolvedPage | undefined {
  if (id === "agentic-qa") {
    const page = getPage("agentic-qa", slug);
    return page && { slug, title: page.title, description: page.description, href: page.href };
  }
  const item = FLAT_MODULES.find((m) => m.id === id)?.get(slug);
  return item && { slug, title: item.title, description: item.description, href: item.href };
}

/** The home of a roadmap's module. */
export function moduleHome(id: RoadmapId): string {
  const flat = flatIdOf(id);
  return flat ? (FLAT_MODULES.find((m) => m.id === flat)?.home ?? `/${id}/`) : "/agentic-qa/";
}
