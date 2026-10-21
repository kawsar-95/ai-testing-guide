"use client";

import { createUseProgress } from "@/components/prep/useProgress";
import type { FlatModule } from "@/lib/modules/flat";
import { FLAT_MODULES, type FlatModuleId } from "@/lib/modules/registry";

type UseProgress = ReturnType<typeof createUseProgress>;

/** One hook for each storage key, so every component on a page shares one store. */
const HOOKS = new Map<string, UseProgress>();

/** The progress hook of a flat module. It throws if the module has no progress. */
export function progressHook(module: FlatModule): UseProgress {
  if (!module.progress) throw new Error(`the module ${module.id} has no progress`);
  const key = module.progress.storageKey;
  let hook = HOOKS.get(key);
  if (!hook) {
    hook = createUseProgress(key);
    HOOKS.set(key, hook);
  }
  return hook;
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
