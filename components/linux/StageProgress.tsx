"use client";

import { LINUX_UI } from "@/lib/linux/ui";
import { countDone, percent } from "@/lib/prep/progress";
import { ProgressBar } from "@/components/prep/ProgressBar";
import { useLinuxProgress } from "./useLinuxProgress";

/** A small "N / M done" text and a bar for one stage. */
export function StageProgress({ ids, title }: { ids: readonly string[]; title: string }) {
  const { done } = useLinuxProgress();
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  return (
    <div>
      <p className="font-mono text-[12px] text-text-dim">{LINUX_UI.stageCount(count, total)}</p>
      <ProgressBar
        value={percent(count, total)}
        label={LINUX_UI.stageProgressLabel(title)}
        valueText={LINUX_UI.summaryText(count, total - count)}
        className="mt-2"
      />
    </div>
  );
}
