"use client";

import { useRef } from "react";
import type { KeyboardEvent } from "react";
import { VOICE_LABELS, switchStyle } from "@/lib/voice";
import type { Voice } from "@/lib/voice";
import { voiceGroup } from "@/lib/ui";

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
        const style = active ? switchStyle(v) : undefined;
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
            lang={v === "bangla" || v === "all" ? "bn" : undefined}
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
