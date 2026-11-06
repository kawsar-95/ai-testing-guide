"use client";

import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";
import { FUNDAMENTALS_UI_BN } from "@/lib/bn/fundamentals";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { countDone, percent } from "@/lib/prep/progress";
import { ProgressReadout } from "@/components/prep/ProgressReadout";
import { useFundamentalsProgress } from "./useFundamentalsProgress";

/** A readout for a set of topics. It counts only the ids that exist, so it never passes 100. */
export function FundamentalsProgressSummary({
  ids,
  title,
  compact = false,
}: {
  ids: readonly string[];
  /** The name of a chapter. Without it, the bar is the overall progress. */
  title?: string;
  /** The percentage as inline text, for a row of a list. */
  compact?: boolean;
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
    <ProgressReadout
      text={<T en={text} bn={textBn} />}
      percentText={FUNDAMENTALS_UI.percentText(value)}
      value={value}
      label={label}
      valueText={valueText}
      compact={compact}
    />
  );
}
