"use client";

import type { FlatModuleId } from "@/lib/modules/registry";
import { flatModule, progressHook } from "./useModuleProgress";
import { useBn } from "@/components/i18n/useBn";
import { FLAT_UI_BN } from "@/lib/bn/flat";

/** The small done toggle next to a link item of a flat module with progress. */
export function LinkDoneToggle({ moduleId, id, title }: { moduleId: FlatModuleId; id: string; title: string }) {
  const m = flatModule(moduleId);
  const { done, toggle } = progressHook(m)();
  const isDone = done.includes(id);
  const bnUi = FLAT_UI_BN[moduleId];
  const label = isDone ? m.ui.markedDone : m.ui.markDone;
  const labelBn = (isDone ? bnUi.markedDone : bnUi.markDone) ?? label;
  const name = useBn(`${label}: ${title}`, `${labelBn}: ${title}`);
  return (
    <button
      type="button"
      aria-pressed={isDone}
      title={name}
      aria-label={name}
      onClick={() => toggle(id)}
      className={
        "inline-flex size-6 shrink-0 items-center justify-center rounded-md border text-[13px] leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
        (isDone ? "border-accent text-accent" : "border-border-strong text-text-faint hover:border-accent hover:text-accent")
      }
    >
      <span aria-hidden="true">{isDone ? "✓" : "○"}</span>
      <span className="sr-only">{name}</span>
    </button>
  );
}
