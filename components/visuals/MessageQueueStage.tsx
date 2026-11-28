"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { BURST, DEFAULT_CONSUMERS, MAX_CONSUMERS, MIN_CONSUMERS, SLIDER_STEP, sceneFor } from "@/lib/visuals/message-queue";
import type { StageProps } from "./StepVisual";

const WIDTH = 360;
const HEIGHT = 210;
const SLOT = 26;

/** The producer, the queue, and the consumers of the message-queue visual. */
export function MessageQueueStage({ step, reduced, onLive }: StageProps) {
  const [consumers, setConsumers] = useState(DEFAULT_CONSUMERS);
  const live = step === SLIDER_STEP;
  const scene = sceneFor(step, consumers);
  const transition = reduced ? undefined : "fill 300ms ease, stroke 300ms ease, opacity 300ms ease";

  const producer = useBn("API", "API");
  const queueLabel = useBn("Queue", "Queue");
  const consumersLabel = useBn("Consumers", "Consumer");
  const doneLabel = useBn("done", "শেষ");
  const sliderLabel = useBn("Consumers", "Consumer সংখ্যা");

  // The queue: 12 slots in 4 columns. Jobs wait from the first slot on.
  const slotX = (i: number) => 112 + (i % 4) * (SLOT + 4);
  const slotY = (i: number) => 58 + Math.floor(i / 4) * (SLOT + 4);
  const workerY = (i: number) => 40 + i * 24;

  return (
    <div>
      <svg
        role="img"
        aria-label={`Queue with ${scene.waiting} waiting jobs, ${scene.active} taken, ${scene.done} done`}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="mx-auto block h-auto w-full max-w-sm"
        fontSize="12"
      >
        {/* Producer */}
        <rect x="8" y="78" width="60" height="44" rx="8" fill="var(--bg-raised-2)" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="38" y="105" textAnchor="middle" fill="var(--text)" fontWeight={600}>{producer}</text>
        {step <= 1 ? (
          <text x="38" y="142" textAnchor="middle" fill="var(--good)" fontWeight={600}>202</text>
        ) : null}
        <path d="M70 100 H108" stroke="var(--text-faint)" strokeWidth="1.5" fill="none" />

        {/* Queue */}
        <rect x="106" y="34" width="132" height="124" rx="10" fill="var(--bg-raised)" stroke="var(--border-strong)" strokeWidth="1.5" />
        <text x="172" y="50" textAnchor="middle" fill="var(--text-dim)" fontSize="11">{queueLabel} · {scene.waiting}</text>
        {Array.from({ length: BURST }, (_, i) => {
          const full = i < scene.waiting;
          return (
            <rect
              key={i}
              x={slotX(i) + 3}
              y={slotY(i)}
              width={SLOT}
              height={SLOT}
              rx="5"
              fill={full ? "var(--accent)" : "none"}
              stroke={full ? "var(--accent)" : "var(--text-faint)"}
              strokeWidth="1.5"
              strokeDasharray={full ? undefined : "3 3"}
              style={{ transition }}
            />
          );
        })}
        {scene.crashed ? (
          <text x="172" y="172" textAnchor="middle" fill="var(--warn)" fontSize="11">↩ 1</text>
        ) : null}
        <path d="M240 100 H262" stroke="var(--text-faint)" strokeWidth="1.5" fill="none" />

        {/* Consumers */}
        <text x="306" y="30" textAnchor="middle" fill="var(--text-dim)" fontSize="11">{consumersLabel} · {scene.consumers}</text>
        {Array.from({ length: MAX_CONSUMERS }, (_, i) => {
          const present = i < scene.consumers;
          const busy = i < scene.active;
          const dead = scene.crashed && i === scene.consumers - 1;
          const color = dead ? "var(--danger)" : busy ? "var(--good)" : "var(--text-faint)";
          return (
            <g key={i} opacity={present ? 1 : 0.18} style={{ transition: reduced ? undefined : "opacity 300ms ease" }}>
              <rect x="264" y={workerY(i)} width="84" height="20" rx="5" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray={busy || dead ? undefined : "3 3"} style={{ transition }} />
              <text x="306" y={workerY(i) + 14} textAnchor="middle" fill={color} fontSize="11">
                {dead ? "✕" : busy ? "▶" : "·"} #{i + 1}
              </text>
            </g>
          );
        })}

        {/* Footer */}
        <text x="180" y="196" textAnchor="middle" fill="var(--text-dim)" fontSize="11">
          {scene.workersOn ? `${doneLabel} ${scene.done} / ${scene.total} · ${scene.seconds} s` : `${scene.waiting} / ${scene.total}`}
        </text>
      </svg>
      {live ? (
        <div className="mt-3">
          <label className="flex flex-col gap-1 text-sm text-[var(--text-dim)]">
            <span>
              <T en="Consumers" bn="Consumer সংখ্যা" />: <strong className="text-[var(--text)]">{consumers}</strong>
            </span>
            <input
              type="range"
              min={MIN_CONSUMERS}
              max={MAX_CONSUMERS}
              step={1}
              value={consumers}
              aria-label={sliderLabel}
              onChange={(e) => {
                const next = Number(e.target.value);
                setConsumers(next);
                onLive(next);
              }}
              className="w-full"
            />
          </label>
        </div>
      ) : null}
    </div>
  );
}
