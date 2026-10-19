"use client";

import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";
import { countDone, percent } from "@/lib/prep/progress";
import { ProgressBar } from "@/components/prep/ProgressBar";
import { useFundamentalsProgress } from "./useFundamentalsProgress";

/** A small "N / M done" text and a bar for one chapter. */
export function ChapterProgress({ ids, title }: { ids: readonly string[]; title: string }) {
  const { done } = useFundamentalsProgress();
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  return (
    <div>
      <p className="font-mono text-[12px] text-text-dim">{FUNDAMENTALS_UI.chapterCount(count, total)}</p>
      <ProgressBar
        value={percent(count, total)}
        label={FUNDAMENTALS_UI.chapterProgressLabel(title)}
        valueText={FUNDAMENTALS_UI.summaryText(count, total - count)}
        className="mt-2"
      />
    </div>
  );
}
