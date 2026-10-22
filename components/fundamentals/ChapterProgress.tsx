"use client";

import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";
import { FUNDAMENTALS_UI_BN } from "@/lib/bn/fundamentals";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { countDone, percent } from "@/lib/prep/progress";
import { ProgressBar } from "@/components/prep/ProgressBar";
import { useFundamentalsProgress } from "./useFundamentalsProgress";

/** A small "N / M done" text and a bar for one chapter. */
export function ChapterProgress({ ids, title }: { ids: readonly string[]; title: string }) {
  const { done } = useFundamentalsProgress();
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  const label = useBn(
    FUNDAMENTALS_UI.chapterProgressLabel(title),
    FUNDAMENTALS_UI_BN.chapterProgressLabel(title),
  );
  const valueText = useBn(
    FUNDAMENTALS_UI.summaryText(count, total - count),
    FUNDAMENTALS_UI_BN.summaryText(count, total - count),
  );
  return (
    <div>
      <p className="font-mono text-[12px] text-text-dim"><T en={FUNDAMENTALS_UI.chapterCount(count, total)} bn={FUNDAMENTALS_UI_BN.chapterCount(count, total)} />
      </p>
      <ProgressBar
        value={percent(count, total)}
        label={label}
        valueText={valueText}
        className="mt-2"
      />
    </div>
  );
}
