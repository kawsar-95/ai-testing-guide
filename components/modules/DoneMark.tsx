"use client";

import type { FlatModuleId } from "@/lib/modules/registry";
import { flatModule, progressHook } from "./useModuleProgress";
import { T } from "@/components/i18n/T";
import { FLAT_UI_BN } from "@/lib/bn/flat";

/** A tick next to a done topic on the module home page. Nothing for a topic that is not done. */
export function DoneMark({ moduleId, id }: { moduleId: FlatModuleId; id: string }) {
  const m = flatModule(moduleId);
  const { done } = progressHook(m)();
  if (!done.includes(id)) return null;
  return (
    <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
      <span aria-hidden="true">✓ </span>
      <T en={m.ui.sidebarDone ?? ""} bn={FLAT_UI_BN[moduleId].sidebarDone ?? ""} />
    </span>
  );
}
