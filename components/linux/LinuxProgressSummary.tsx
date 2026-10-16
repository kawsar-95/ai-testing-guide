"use client";

import { LINUX_UI } from "@/lib/linux/ui";
import { countDone, percent } from "@/lib/prep/progress";
import { ProgressBar } from "@/components/prep/ProgressBar";
import { useLinuxProgress } from "./useLinuxProgress";

/** A bar for a set of topics. It counts only the ids that exist, so it never passes 100. */
export function LinuxProgressSummary({
  ids,
  label = LINUX_UI.overallLabel,
}: {
  ids: readonly string[];
  label?: string;
}) {
  const { done } = useLinuxProgress();
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  const value = percent(count, total);
  const text = LINUX_UI.summaryText(count, total - count);
  return (
    <div className="rounded-[10px] border border-border bg-bg-raised px-5 py-4">
      <div className="flex items-baseline justify-between gap-4">
        <p data-progress-text className="font-mono text-[13px] text-text-dim">
          {text}
        </p>
        <p className="font-display text-2xl font-medium tabular-nums text-text">
          {LINUX_UI.percentText(value)}
        </p>
      </div>
      <ProgressBar value={value} label={label} valueText={text} className="mt-3" />
    </div>
  );
}
