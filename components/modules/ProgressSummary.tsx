"use client";

import { countDone, percent } from "@/lib/prep/progress";
import type { FlatModuleId } from "@/lib/modules/registry";
import { ProgressReadout } from "@/components/prep/ProgressReadout";
import { flatModule, progressHook } from "./useModuleProgress";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { FLAT_UI_BN } from "@/lib/bn/flat";

/** A readout for a set of ids of a module (the topics or the practice questions). It never passes 100. */
export function ProgressSummary({
  moduleId,
  ids,
  kind = "topics",
  compact = false,
}: {
  moduleId: FlatModuleId;
  ids: readonly string[];
  kind?: "topics" | "practice";
  /** The percentage as inline text, for a row of a list. */
  compact?: boolean;
}) {
  const m = flatModule(moduleId);
  const { done } = progressHook(m)();
  const ui = m.ui;
  const bn = FLAT_UI_BN[moduleId];
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  const value = percent(count, total);
  const practice = kind === "practice";
  const text = (practice ? ui.practiceSummaryText?.(count, total) : ui.summaryText?.(count, total)) ?? "";
  const textBn = (practice ? bn.practiceSummaryText?.(count, total) : bn.summaryText?.(count, total)) ?? text;
  const label = (practice ? ui.practiceLabel : ui.overallLabel) ?? "";
  const labelBn = (practice ? bn.practiceLabel : bn.overallLabel) ?? label;
  const ariaLabel = useBn(label, labelBn);
  const valueText = useBn(text, textBn);
  return (
    <ProgressReadout
      text={<T en={text} bn={textBn} />}
      percentText={ui.percentText?.(value) ?? `${value}%`}
      value={value}
      label={ariaLabel}
      valueText={valueText}
      compact={compact}
    />
  );
}
