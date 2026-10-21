"use client";

import type { FlatModuleId } from "@/lib/modules/registry";
import { flatModule, progressHook } from "./useModuleProgress";

/** A tick next to a done topic on the module home page. Nothing for a topic that is not done. */
export function DoneMark({ moduleId, id }: { moduleId: FlatModuleId; id: string }) {
  const m = flatModule(moduleId);
  const { done } = progressHook(m)();
  if (!done.includes(id)) return null;
  return (
    <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
      <span aria-hidden="true">✓ </span>
      {m.ui.sidebarDone}
    </span>
  );
}
