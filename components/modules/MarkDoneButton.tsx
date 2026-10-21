"use client";

import type { FlatModuleId } from "@/lib/modules/registry";
import { flatModule, progressHook } from "./useModuleProgress";

/** The "Mark this topic as done" toggle at the end of a topic page. */
export function MarkDoneButton({ moduleId, id }: { moduleId: FlatModuleId; id: string }) {
  const m = flatModule(moduleId);
  const { done, toggle } = progressHook(m)();
  const isDone = done.includes(id);
  return (
    <button
      type="button"
      aria-pressed={isDone}
      onClick={() => toggle(id)}
      className={
        "mt-12 inline-flex items-center gap-2 rounded-md border px-4 py-2 text-[15px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
        (isDone
          ? "border-accent bg-bg-raised text-accent"
          : "border-border-strong text-text hover:border-accent hover:text-accent")
      }
    >
      <span aria-hidden="true">{isDone ? "✓" : "○"}</span>
      {isDone ? m.ui.markedDone : m.ui.markDone}
    </button>
  );
}
