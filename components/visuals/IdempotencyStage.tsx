"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { LAST_STEP, chargeCount, sceneFor } from "@/lib/visuals/idempotency";
import type { Message } from "@/lib/visuals/idempotency";
import type { StageProps } from "./StepVisual";

const X = { client: 50, api: 180, db: 310 } as const;
const TOP = 96;
const GAP = 34;

const COLOR: Record<Message["kind"], string> = {
  plain: "var(--text-dim)",
  lost: "var(--warn)",
  good: "var(--good)",
  bad: "var(--danger)",
};

/** A sequence diagram: client, payment API, and the charges in the database. */
export function IdempotencyStage({ step, reduced, onLive }: StageProps) {
  const [useKey, setUseKey] = useState(false);
  const keyOn = useKey || step === LAST_STEP;
  const scene = sceneFor(step, useKey);
  const transition = reduced ? undefined : "fill 300ms ease, stroke 300ms ease";
  const charges = scene.server.charges;
  const height = TOP + GAP * scene.messages.length + 20;

  return (
    <div>
      <svg role="img" aria-label={`Client, payment API, and database. ${charges.length} charge in the database.`} viewBox={`0 0 360 ${Math.max(height, 260)}`} className="mx-auto block h-auto w-full max-w-sm" fontSize="12">
        {(["client", "api", "db"] as const).map((id) => (
          <g key={id}>
            <rect x={X[id] - 42} y={8} width="84" height="30" rx="6" fill="var(--bg-raised-2)" stroke="var(--border-strong)" />
            <text x={X[id]} y={28} textAnchor="middle" fill="var(--text)">
              {id === "client" ? "Client" : id === "api" ? "Payment API" : "Database"}
            </text>
            <line x1={X[id]} y1={38} x2={X[id]} y2={Math.max(height, 260) - 8} stroke="var(--border)" strokeDasharray="3 4" />
          </g>
        ))}
        {/* The charges in the database. A second charge is a duplicate. */}
        {charges.map((c, i) => (
          <g key={i}>
            <rect x={X.db - 38} y={48 + i * 24} width="76" height="20" rx="4" fill={c.duplicate ? "var(--danger)" : "var(--good)"} fillOpacity="0.18" stroke={c.duplicate ? "var(--danger)" : "var(--good)"} style={{ transition }} />
            <text x={X.db} y={62 + i * 24} textAnchor="middle" fill="var(--text)" fontSize="11">
              {`charge ${c.amount}`}
            </text>
          </g>
        ))}
        {scene.messages.map((m, i) => {
          const y = TOP + i * GAP;
          const x1 = X[m.from];
          const x2 = X[m.to];
          const dir = x2 > x1 ? 1 : -1;
          const color = COLOR[m.kind];
          const mid = (x1 + x2) / 2;
          return (
            <g key={i}>
              <line x1={x1} y1={y} x2={x2 - dir * 6} y2={y} stroke={color} strokeWidth="1.8" strokeDasharray={m.kind === "lost" ? "5 4" : undefined} />
              {m.kind === "lost" ? (
                <text x={mid} y={y + 4} textAnchor="middle" fill={color} fontSize="14" fontWeight="700">
                  ✕
                </text>
              ) : (
                <path d={`M ${x2} ${y} l ${-dir * 8} -4 l 0 8 z`} fill={color} />
              )}
              <text x={mid} y={y - 6} textAnchor="middle" fill={color} fontSize="11">
                {m.label}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="mt-3 flex justify-center">
        <button
          type="button"
          className="btn btn-outline"
          aria-pressed={keyOn}
          aria-label="Idempotency key"
          disabled={step === LAST_STEP}
          onClick={() => {
            onLive(!useKey);
            setUseKey(!useKey);
          }}
        >
          <T en={keyOn ? "Idempotency key: on" : "Idempotency key: off"} bn={keyOn ? "Idempotency key: চালু" : "Idempotency key: বন্ধ"} />
        </button>
      </div>
    </div>
  );
}
