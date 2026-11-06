"use client";

import { LINUX_UI } from "@/lib/linux/ui";
import { LINUX_UI_BN } from "@/lib/bn/linux";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { countDone, percent } from "@/lib/prep/progress";
import { ProgressReadout } from "@/components/prep/ProgressReadout";
import { useLinuxProgress } from "./useLinuxProgress";

/** A readout for a set of topics. It counts only the ids that exist, so it never passes 100. */
export function LinuxProgressSummary({
  ids,
  title,
  compact = false,
}: {
  ids: readonly string[];
  /** The name of a stage. Without it, the bar is the overall progress. */
  title?: string;
  /** The percentage as inline text, for a row of a list. */
  compact?: boolean;
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
    <ProgressReadout
      text={<T en={text} bn={textBn} />}
      percentText={LINUX_UI.percentText(value)}
      value={value}
      label={label}
      valueText={valueText}
      compact={compact}
    />
  );
}
