"use client";

import { T } from "@/components/i18n/T";
import { flatModule, progressHook } from "@/components/modules/useModuleProgress";
import { AI_ROADMAP_UI } from "@/lib/ai-roadmap/ui";
import { AI_ROADMAP_UI_BN } from "@/lib/bn/ai-roadmap";
import type { FlatModuleId } from "@/lib/modules/registry";
import { countDone } from "@/lib/prep/progress";

/** "3 of 5 done" for the pages of one stage, from the progress store of the module. Nothing until one page is done. */
export function StageProgress({ moduleId, slugs }: { moduleId: FlatModuleId; slugs: readonly string[] }) {
  const { done } = progressHook(flatModule(moduleId))();
  const count = countDone(slugs, done);
  if (count === 0) return null;
  return (
    <span className="font-mono text-[12px] tracking-normal text-accent">
      <span aria-hidden="true" className="text-text-dim">{"· "}</span>
      <T en={AI_ROADMAP_UI.stageDone(count, slugs.length)} bn={AI_ROADMAP_UI_BN.stageDone(count, slugs.length)} />
    </span>
  );
}
