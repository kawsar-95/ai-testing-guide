"use client";

import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";
import { FUNDAMENTALS_UI_BN } from "@/lib/bn/fundamentals";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { countDone, percent } from "@/lib/prep/progress";
import { ProgressBar } from "@/components/prep/ProgressBar";
import { useFundamentalsProgress } from "./useFundamentalsProgress";

/** A bar for a set of topics. It counts only the ids that exist, so it never passes 100. */
export function FundamentalsProgressSummary({
  ids,
  title,
}: {
  ids: readonly string[];
  /** The name of a chapter. Without it, the bar is the overall progress. */
  title?: string;
}) {
  const { done } = useFundamentalsProgress();
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  const value = percent(count, total);
  const text = FUNDAMENTALS_UI.summaryText(count, total - count);
  const textBn = FUNDAMENTALS_UI_BN.summaryText(count, total - count);
  const label = useBn(
    title === undefined ? FUNDAMENTALS_UI.overallLabel : FUNDAMENTALS_UI.chapterProgressLabel(title),
    title === undefined ? FUNDAMENTALS_UI_BN.overallLabel : FUNDAMENTALS_UI_BN.chapterProgressLabel(title),
  );
  const valueText = useBn(text, textBn);
  return (
    <div className="rounded-2xl border border-border bg-bg-raised shadow-sm px-5 py-4">
      <div className="flex items-baseline justify-between gap-4">
        <p data-progress-text className="font-mono text-[13px] text-text-dim">
          <T en={text} bn={textBn} />
        </p>
        <p className="font-display text-2xl font-medium tabular-nums text-text">
          {FUNDAMENTALS_UI.percentText(value)}
        </p>
      </div>
      <ProgressBar value={value} label={label} valueText={valueText} className="mt-3" />
    </div>
  );
}
