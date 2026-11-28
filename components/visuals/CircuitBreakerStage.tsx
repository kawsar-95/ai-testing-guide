"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { CONFIG, sceneFor, type BreakerState, type Outcome } from "@/lib/visuals/circuit-breaker";
import type { Chip, StageProps } from "./StepVisual";

const STATE_NAME: Record<BreakerState, string> = { closed: "Closed", open: "Open", "half-open": "Half-Open" };

/** The live numbers of each step, from the same scene that the stage draws. */
export function circuitBreakerChips(step: number): readonly Chip[] {
  const scene = sceneFor(step);
  return [
    { label: { en: "Failures in a row", bn: "পরপর ফেইলিউর" }, value: `${scene.failRun} / ${CONFIG.threshold}` },
    { label: { en: "State", bn: "স্টেট" }, value: STATE_NAME[scene.state] },
    { label: { en: "Calls reaching the service", bn: "সার্ভিসে পৌঁছানো কল" }, value: String(scene.reached) },
    { label: { en: "Failed at once", bn: "সঙ্গে সঙ্গে ব্যর্থ" }, value: String(scene.rejected) },
  ];
}

const NODES: Record<BreakerState, { x: number; y: number; color: string }> = {
  closed: { x: 62, y: 44, color: "var(--good)" },
  open: { x: 298, y: 44, color: "var(--danger)" },
  "half-open": { x: 180, y: 128, color: "var(--warn)" },
};

const CELL: Record<Outcome, { fill: string; glyph: string }> = {
  ok: { fill: "var(--good)", glyph: "✓" },
  fail: { fill: "var(--danger)", glyph: "✗" },
  rejected: { fill: "var(--warn)", glyph: "–" },
  "trial-ok": { fill: "var(--accent)", glyph: "✓" },
  "trial-fail": { fill: "var(--danger)", glyph: "?" },
};

/** The state machine and the stream of calls of the circuit-breaker visual. */
export function CircuitBreakerStage({ step, reduced }: StageProps) {
  const [broken, setBroken] = useState(true);
  const scene = sceneFor(step, broken);
  const transition = reduced ? undefined : "fill 300ms ease, stroke 300ms ease, opacity 300ms ease";
  const cellW = 18;
  const gap = 2;
  const x0 = (360 - (CONFIG.total * cellW + (CONFIG.total - 1) * gap)) / 2;

  const arrows: { from: BreakerState; to: BreakerState; dashed?: boolean }[] = [
    { from: "closed", to: "open" },
    { from: "open", to: "half-open" },
    { from: "half-open", to: "closed" },
  ];

  return (
    <div>
      <svg
        role="img"
        aria-label={`Circuit breaker, state ${STATE_NAME[scene.state]}, ${scene.ticks.length} calls`}
        viewBox="0 0 360 250"
        className="mx-auto block h-auto w-full max-w-sm"
        fontSize="12"
      >
        <defs>
          <marker id="cb-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L8 4 L0 8 z" fill="var(--text-faint)" />
          </marker>
        </defs>
        {arrows.map((a) => {
          const f = NODES[a.from];
          const t = NODES[a.to];
          const dx = t.x - f.x;
          const dy = t.y - f.y;
          const len = Math.hypot(dx, dy);
          const ux = dx / len;
          const uy = dy / len;
          return (
            <line
              key={`${a.from}-${a.to}`}
              x1={f.x + ux * 42}
              y1={f.y + uy * 20}
              x2={t.x - ux * 46}
              y2={t.y - uy * 24}
              stroke="var(--text-faint)"
              strokeWidth="1.5"
              markerEnd="url(#cb-arrow)"
            />
          );
        })}
        <text x="180" y="30" textAnchor="middle" fill="var(--text-faint)" fontSize="11">
          {`${CONFIG.threshold} failures`}
        </text>
        <text x="260" y="104" textAnchor="start" fill="var(--text-faint)" fontSize="11">
          timer ends
        </text>
        <text x="100" y="104" textAnchor="end" fill="var(--text-faint)" fontSize="11">
          {`${CONFIG.successNeeded} trials ok`}
        </text>
        {(Object.keys(NODES) as BreakerState[]).map((s) => {
          const n = NODES[s];
          const active = scene.state === s;
          return (
            <g key={s}>
              <rect
                x={n.x - 42}
                y={n.y - 20}
                width="84"
                height="40"
                rx="10"
                fill={active ? n.color : "var(--bg-raised-2)"}
                stroke={active ? n.color : "var(--border-strong)"}
                strokeWidth="1.5"
                opacity={active ? 1 : 0.8}
                style={{ transition }}
              />
              <text
                x={n.x}
                y={n.y + 4}
                textAnchor="middle"
                fontWeight={active ? 700 : 500}
                fill={active ? "var(--bg-raised)" : "var(--text-dim)"}
              >
                {STATE_NAME[s]}
              </text>
            </g>
          );
        })}
        {/* The stream of calls, one cell for each call. */}
        <text x={x0} y="182" fill="var(--text-dim)" fontSize="11">
          calls →
        </text>
        {Array.from({ length: CONFIG.total }, (_, i) => {
          const tick = scene.ticks[i];
          const x = x0 + i * (cellW + gap);
          const cell = tick ? CELL[tick.outcome] : undefined;
          return (
            <g key={i}>
              <rect
                x={x}
                y="192"
                width={cellW}
                height="22"
                rx="3"
                fill={cell ? cell.fill : "none"}
                stroke={cell ? cell.fill : "var(--border)"}
                strokeWidth="1"
                style={{ transition }}
              />
              {cell ? (
                <text x={x + cellW / 2} y="207" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--bg-raised)">
                  {cell.glyph}
                </text>
              ) : null}
            </g>
          );
        })}
        <text x="180" y="236" textAnchor="middle" fill="var(--text-dim)" fontSize="11">
          {`✓ passed   ✗ failed   – failed at once   ? trial failed`}
        </text>
      </svg>
      <div className="mt-3 flex justify-center">
        <button
          type="button"
          className="btn btn-outline"
          aria-pressed={broken}
          aria-label={broken ? "Fix the service" : "Break the service"}
          onClick={() => setBroken((b) => !b)}
        >
          {broken ? <T en="Fix the service" bn="সার্ভিস ঠিক করুন" /> : <T en="Break the service" bn="সার্ভিস ভাঙুন" />}
        </button>
      </div>
    </div>
  );
}
