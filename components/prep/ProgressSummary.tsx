"use client";

import { countDone, percent } from "@/lib/prep/progress";
import { PREP_UI } from "@/lib/prep/ui";
import { ProgressBar } from "./ProgressBar";
import { useProgress } from "./useProgress";

/** The overall bar. It counts only the ids that exist, so it never passes 100. */
export function ProgressSummary({
  ids,
  label = PREP_UI.overallLabel,
}: {
  ids: readonly string[];
  label?: string;
}) {
  const { done } = useProgress();
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  const value = percent(count, total);
  const text = PREP_UI.summaryText(count, total - count);
  return (
    <div className="rounded-[10px] border border-border bg-bg-raised px-5 py-4">
      <div className="flex items-baseline justify-between gap-4">
        <p data-progress-text className="font-mono text-[13px] text-text-dim">
          {text}
        </p>
        <p className="font-display text-2xl font-medium tabular-nums text-text">
          {PREP_UI.percentText(value)}
        </p>
      </div>
      <ProgressBar value={value} label={label} valueText={text} className="mt-3" />
    </div>
  );
}
