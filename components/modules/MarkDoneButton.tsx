"use client";

import type { FlatModuleId } from "@/lib/modules/registry";
import { flatModule, progressHook } from "./useModuleProgress";
import { T } from "@/components/i18n/T";
import { FLAT_UI_BN } from "@/lib/bn/flat";

/**
 * The "Mark this topic as done" toggle at the end of a topic page. It is the
 * outline button of the page tools (ChapterTools), so a progress toggle looks
 * the same wherever it is.
 */
export function MarkDoneButton({ moduleId, id }: { moduleId: FlatModuleId; id: string }) {
  const m = flatModule(moduleId);
  const { done, toggle } = progressHook(m)();
  const isDone = done.includes(id);
  return (
    <button
      type="button"
      aria-pressed={isDone}
      onClick={() => toggle(id)}
      className="btn btn-outline mt-12 aria-pressed:border-accent aria-pressed:text-accent"
    >
      <span aria-hidden="true">{isDone ? "✓" : "○"}</span>
      {isDone ? (
        <T en={m.ui.markedDone ?? ""} bn={FLAT_UI_BN[moduleId].markedDone ?? ""} />
      ) : (
        <T en={m.ui.markDone ?? ""} bn={FLAT_UI_BN[moduleId].markDone ?? ""} />
      )}
    </button>
  );
}
