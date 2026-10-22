"use client";

import { LINUX_UI } from "@/lib/linux/ui";
import { LINUX_UI_BN } from "@/lib/bn/linux";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { countDone, percent } from "@/lib/prep/progress";
import { ProgressBar } from "@/components/prep/ProgressBar";
import { useLinuxProgress } from "./useLinuxProgress";

/** A bar for a set of topics. It counts only the ids that exist, so it never passes 100. */
export function LinuxProgressSummary({
  ids,
  title,
}: {
  ids: readonly string[];
  /** The name of a stage. Without it, the bar is the overall progress. */
  title?: string;
}) {
  const { done } = useLinuxProgress();
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  const value = percent(count, total);
  const text = LINUX_UI.summaryText(count, total - count);
  const textBn = LINUX_UI_BN.summaryText(count, total - count);
  const label = useBn(
    title === undefined ? LINUX_UI.overallLabel : LINUX_UI.stageProgressLabel(title),
    title === undefined ? LINUX_UI_BN.overallLabel : LINUX_UI_BN.stageProgressLabel(title),
  );
  const valueText = useBn(text, textBn);
  return (
    <div className="rounded-2xl border border-border bg-bg-raised shadow-sm px-5 py-4">
      <div className="flex items-baseline justify-between gap-4">
        <p data-progress-text className="font-mono text-[13px] text-text-dim">
          <T en={text} bn={textBn} />
        </p>
        <p className="font-display text-2xl font-medium tabular-nums text-text">
          {LINUX_UI.percentText(value)}
        </p>
      </div>
      <ProgressBar value={value} label={label} valueText={valueText} className="mt-3" />
    </div>
  );
}
