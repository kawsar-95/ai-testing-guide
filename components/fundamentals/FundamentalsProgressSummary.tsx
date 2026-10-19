"use client";

import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";
import { countDone, percent } from "@/lib/prep/progress";
import { ProgressBar } from "@/components/prep/ProgressBar";
import { useFundamentalsProgress } from "./useFundamentalsProgress";

/** A bar for a set of topics. It counts only the ids that exist, so it never passes 100. */
export function FundamentalsProgressSummary({
  ids,
  label = FUNDAMENTALS_UI.overallLabel,
}: {
  ids: readonly string[];
  label?: string;
}) {
  const { done } = useFundamentalsProgress();
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  const value = percent(count, total);
  const text = FUNDAMENTALS_UI.summaryText(count, total - count);
  return (
    <div className="rounded-[10px] border border-border bg-bg-raised px-5 py-4">
      <div className="flex items-baseline justify-between gap-4">
        <p data-progress-text className="font-mono text-[13px] text-text-dim">
          {text}
        </p>
        <p className="font-display text-2xl font-medium tabular-nums text-text">
          {FUNDAMENTALS_UI.percentText(value)}
        </p>
      </div>
      <ProgressBar value={value} label={label} valueText={text} className="mt-3" />
    </div>
  );
}
