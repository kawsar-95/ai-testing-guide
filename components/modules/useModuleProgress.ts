"use client";

import { createUseProgress, useNoProgress } from "@/components/prep/useProgress";
import type { FlatModule } from "@/lib/modules/flat";
import { cachedBy } from "@/lib/modules/hook-cache";
import { FLAT_MODULES, type FlatModuleId } from "@/lib/modules/registry";

type UseProgress = ReturnType<typeof createUseProgress>;

/** One hook for each storage key, so every component on a page shares one store. */
const hookFor = cachedBy(createUseProgress);

/** The progress hook of a flat module. It throws if the module has no progress. */
export function progressHook(module: FlatModule): UseProgress {
  if (!module.progress) throw new Error(`the module ${module.id} has no progress`);
  return hookFor(module.progress.storageKey);
}

/**
 * The progress hook of a module with progress, else a hook with an empty list.
 * Both call the same hooks, so a component that changes its module keeps a
 * valid hook order.
 */
export function doneHook(module: FlatModule): UseProgress {
  return module.progress ? progressHook(module) : useNoProgress;
}

/**
 * The flat module of an id. A server component cannot pass the module object
 * (it has functions) to a client component, so the client components take the id.
 */
export function flatModule(id: FlatModuleId): FlatModule {
  const found = FLAT_MODULES.find((m) => m.id === id);
  if (!found) throw new Error(`unknown flat module ${id}`);
  return found;
}
