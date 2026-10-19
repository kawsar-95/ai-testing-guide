"use client";

import { useRef } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { VOICE_LABELS } from "@/lib/voice";
import type { Voice } from "@/lib/voice";
import { voiceGroup } from "@/lib/ui";

/** The color of the selected button of each voice. */
const VOICE_COLOR: Record<Voice, string> = {
  technical: "var(--accent)",
  layman: "var(--voice-layman)",
  bangla: "var(--voice-bangla)",
  all: "var(--text)",
};

/**
 * A segmented control that selects the voice of one section. The Left and
 * Right arrows, Home, and End move to an option and select it. Only the
 * selected button is in the tab order (roving focus).
 */
export function VoiceSwitcher({
  value,
  order,
  onChange,
}: {
  value: Voice;
  order: Voice[];
  onChange: (v: Voice) => void;
}) {
  const buttons = useRef<Map<Voice, HTMLButtonElement>>(new Map());

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const i = order.indexOf(value);
    let next: number;
    if (event.key === "ArrowRight") next = (i + 1) % order.length;
    else if (event.key === "ArrowLeft") next = (i - 1 + order.length) % order.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = order.length - 1;
    else return;
    event.preventDefault();
    const voice = order[next];
    onChange(voice);
    buttons.current.get(voice)?.focus();
  }

  return (
    <div
      role="group"
      aria-label={voiceGroup}
      onKeyDown={onKeyDown}
      className="voice-switch mb-5 inline-flex max-w-full flex-wrap gap-1 rounded-xl border border-border bg-bg-raised p-1"
    >
      {order.map((v) => {
        const active = v === value;
        const color = VOICE_COLOR[v];
        // Only CSS variables come in through style. The values stay in globals.css.
        const style: CSSProperties | undefined = active
          ? {
              color,
              borderColor: `color-mix(in srgb, ${color} 55%, transparent)`,
              backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`,
            }
          : undefined;
        return (
          <button
            key={v}
            ref={(el) => {
              if (el) buttons.current.set(v, el);
              else buttons.current.delete(v);
            }}
            type="button"
            aria-pressed={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(v)}
            lang={v === "bangla" ? "bn" : undefined}
            style={style}
            className={
              "rounded-lg border px-3 py-1.5 text-[13px] leading-5 font-medium transition-colors " +
              (active ? "" : "border-transparent text-text-dim hover:bg-bg-raised-2 hover:text-text")
            }
          >
            {VOICE_LABELS[v]}
          </button>
        );
      })}
    </div>
  );
}
