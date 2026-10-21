"use client";

import { countDone, percent } from "@/lib/prep/progress";
import type { FlatModuleId } from "@/lib/modules/registry";
import { ProgressBar } from "@/components/prep/ProgressBar";
import { flatModule, progressHook } from "./useModuleProgress";

/** A bar for a set of ids of a module (the topics or the practice questions). It never passes 100. */
export function ProgressSummary({
  moduleId,
  ids,
  kind = "topics",
}: {
  moduleId: FlatModuleId;
  ids: readonly string[];
  kind?: "topics" | "practice";
}) {
  const m = flatModule(moduleId);
  const { done } = progressHook(m)();
  const ui = m.ui;
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  const value = percent(count, total);
  const text = kind === "practice" ? ui.practiceSummaryText?.(count, total) : ui.summaryText?.(count, total);
  const label = kind === "practice" ? ui.practiceLabel : ui.overallLabel;
  return (
    <div className="rounded-2xl border border-border bg-bg-raised shadow-sm px-5 py-4">
      <div className="flex items-baseline justify-between gap-4">
        <p data-progress-text className="font-mono text-[13px] text-text-dim">
          {text}
        </p>
        <p className="font-display text-2xl font-medium tabular-nums text-text">{ui.percentText?.(value)}</p>
      </div>
      <ProgressBar value={value} label={label ?? ""} valueText={text ?? ""} className="mt-3" />
    </div>
  );
}
