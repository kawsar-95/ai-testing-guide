"use client";

import { ARCHITECTURE_UI } from "@/lib/architecture/ui";
import { countDone, percent } from "@/lib/prep/progress";
import { ProgressBar } from "@/components/prep/ProgressBar";
import { useArchitectureProgress } from "./useArchitectureProgress";

/** A bar for a set of ids (the topics or the practice questions). It never passes 100. */
export function ArchitectureProgressSummary({
  ids,
  kind = "topics",
}: {
  ids: readonly string[];
  kind?: "topics" | "practice";
}) {
  const { done } = useArchitectureProgress();
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  const value = percent(count, total);
  const text =
    kind === "practice"
      ? ARCHITECTURE_UI.practiceSummaryText(count, total)
      : ARCHITECTURE_UI.summaryText(count, total);
  const label = kind === "practice" ? ARCHITECTURE_UI.practiceLabel : ARCHITECTURE_UI.overallLabel;
  return (
    <div className="rounded-[10px] border border-border bg-bg-raised px-5 py-4">
      <div className="flex items-baseline justify-between gap-4">
        <p data-progress-text className="font-mono text-[13px] text-text-dim">
          {text}
        </p>
        <p className="font-display text-2xl font-medium tabular-nums text-text">
          {ARCHITECTURE_UI.percentText(value)}
        </p>
      </div>
      <ProgressBar value={value} label={label} valueText={text} className="mt-3" />
    </div>
  );
}
