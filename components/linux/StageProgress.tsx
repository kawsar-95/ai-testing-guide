"use client";

import { LINUX_UI } from "@/lib/linux/ui";
import { LINUX_UI_BN } from "@/lib/bn/linux";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { countDone, percent } from "@/lib/prep/progress";
import { ProgressBar } from "@/components/prep/ProgressBar";
import { useLinuxProgress } from "./useLinuxProgress";

/** A small "N / M done" text and a bar for one stage. */
export function StageProgress({ ids, title }: { ids: readonly string[]; title: string }) {
  const { done } = useLinuxProgress();
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  const label = useBn(LINUX_UI.stageProgressLabel(title), LINUX_UI_BN.stageProgressLabel(title));
  const valueText = useBn(
    LINUX_UI.summaryText(count, total - count),
    LINUX_UI_BN.summaryText(count, total - count),
  );
  return (
    <div>
      <p className="font-mono text-[12px] text-text-dim"><T en={LINUX_UI.stageCount(count, total)} bn={LINUX_UI_BN.stageCount(count, total)} />
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
