"use client";

import { LINUX_UI } from "@/lib/linux/ui";
import { LINUX_UI_BN } from "@/lib/bn/linux";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { countDone, percent } from "@/lib/prep/progress";
import { ProgressBar } from "@/components/prep/ProgressBar";
import { useLinuxProgress } from "./useLinuxProgress";

/**
 * One line for one stage: a thin bar and the "N / M done" text. It sits in a
 * block of the Linux home page and in the header of a stage page. The text has
 * a minimum width so the bars of neighbouring blocks end at the same x.
 */
export function StageProgress({ ids, title }: { ids: readonly string[]; title: string }) {
  const { done } = useLinuxProgress();
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  const value = percent(count, total);
  const label = useBn(LINUX_UI.stageProgressLabel(title), LINUX_UI_BN.stageProgressLabel(title));
  const valueText = useBn(
    LINUX_UI.summaryText(count, total - count),
    LINUX_UI_BN.summaryText(count, total - count),
  );
  return (
    <div className="flex items-center gap-3">
      <ProgressBar value={value} label={label} valueText={valueText} thin className="min-w-0 flex-1" />
      <p className="m-0 min-w-[5.5rem] shrink-0 text-right font-mono text-[12px] tabular-nums text-text-faint">
        <T en={LINUX_UI.stageCount(count, total)} bn={LINUX_UI_BN.stageCount(count, total)} />
      </p>
    </div>
  );
}
