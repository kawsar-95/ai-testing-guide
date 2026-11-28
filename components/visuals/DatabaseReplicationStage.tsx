"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { DEFAULT_TARGET, LAG_S, sceneFor } from "@/lib/visuals/database-replication";
import type { Target } from "@/lib/visuals/database-replication";
import type { StageProps } from "./StepVisual";

const WIDTH = 360;
const HEIGHT = 262;
const TOGGLE_STEPS = [3, 4];

type Box = { x: number; y: number; w: number; h: number };
const PRIMARY: Box = { x: 110, y: 14, w: 140, h: 56 };
const REPLICA_A: Box = { x: 20, y: 124, w: 140, h: 56 };
const REPLICA_B: Box = { x: 200, y: 124, w: 140, h: 56 };

/** The primary, the two replicas, the copy between them, and the read. */
export function DatabaseReplicationStage({ step, reduced, onLive }: StageProps) {
  const [target, setTarget] = useState<Target>(DEFAULT_TARGET);
  const hasToggle = TOGGLE_STEPS.includes(step);
  const scene = sceneFor(step, hasToggle ? target : DEFAULT_TARGET);
  const transition = reduced ? undefined : "fill 340ms cubic-bezier(.2,.7,.2,1), stroke 340ms cubic-bezier(.2,.7,.2,1)";

  const paid = useBn("Paid", "Paid");
  const unpaid = useBn("Unpaid", "Unpaid");
  const primaryName = useBn("Primary", "Primary");
  const replicaName = useBn("Replica", "Replica");
  const staleWord = useBn("stale", "stale");
  const freshWord = useBn("fresh", "fresh");
  const readWord = useBn("Read", "Read");
  const writeWord = useBn("Write", "Write");
  const lagWord = useBn("lag", "lag");
  const groupLabel = useBn("Read from the primary or from a replica", "Primary বা replica থেকে read");
  const aria = useBn(
    `Primary and two replicas, ${scene.copies} of 3 hold the payment`,
    `Primary আর দুটি replica, ${scene.copies} / 3 server-এ payment আছে`,
  );

  const server = (box: Box, name: string, has: boolean, key: string, hot: boolean) => (
    <g key={key}>
      <rect
        x={box.x}
        y={box.y}
        width={box.w}
        height={box.h}
        rx="10"
        fill="var(--bg-raised-2)"
        stroke={hot ? "var(--accent)" : has ? "var(--good)" : "var(--border-strong)"}
        strokeWidth={hot ? 2.5 : 1.5}
        style={{ transition }}
      />
      <text x={box.x + box.w / 2} y={box.y + 21} textAnchor="middle" fill="var(--text-dim)" fontSize="11">
        {name}
      </text>
      <text x={box.x + box.w / 2} y={box.y + 43} textAnchor="middle" fontWeight={700} fontSize="14" fill={has ? "var(--good)" : "var(--text-faint)"} style={{ transition }}>
        {has ? paid : unpaid}
      </text>
    </g>
  );

  const readFrom = scene.read?.from;
  const hotPrimary = readFrom === "primary" || scene.splitting;
  const hotReplica = readFrom === "replica" || scene.splitting;
  const stale = scene.read?.stale ?? false;
  const resultColor = stale ? "var(--danger)" : "var(--good)";

  return (
    <div>
      <svg role="img" aria-label={aria} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="mx-auto block h-auto w-full max-w-sm" fontSize="12">
        {/* The copy from the primary to each replica */}
        {[REPLICA_A, REPLICA_B].map((r, i) => {
          const x2 = r.x + r.w / 2;
          return (
            <line
              key={i}
              x1="180"
              y1={PRIMARY.y + PRIMARY.h}
              x2={x2}
              y2={r.y}
              stroke={scene.inFlight ? "var(--warn)" : scene.wrote ? "var(--good)" : "var(--border-strong)"}
              strokeWidth="2"
              strokeDasharray={scene.inFlight ? "5 4" : undefined}
              style={{ transition }}
            />
          );
        })}
        {scene.inFlight ? (
          <text x="180" y="100" textAnchor="middle" fill="var(--warn)" fontWeight={600}>
            {lagWord} {LAG_S} s
          </text>
        ) : null}
        {step === 1 ? (
          <text x="248" y="46" fill="var(--accent)" fontWeight={600}>
            ← {writeWord}
          </text>
        ) : null}
        {server(PRIMARY, primaryName, scene.primaryPaid, "p", hotPrimary)}
        {server(REPLICA_A, `${replicaName} 1`, scene.replicasPaid, "a", hotReplica)}
        {server(REPLICA_B, `${replicaName} 2`, scene.replicasPaid, "b", hotReplica)}

        {/* The clock */}
        <text x="20" y="46" fill="var(--text-dim)" fontSize="11">
          {scene.t} s
        </text>

        {/* The read and its answer */}
        {scene.read ? (
          <g>
            <rect x="20" y="204" width="320" height="44" rx="10" fill="none" stroke={resultColor} strokeWidth="2" style={{ transition }} />
            <text x="180" y="224" textAnchor="middle" fill="var(--text-dim)" fontSize="11">
              {scene.splitting ? `${readWord}: ${primaryName}` : `${readWord}: ${scene.read.from === "primary" ? primaryName : replicaName}`}
            </text>
            <text x="180" y="241" textAnchor="middle" fill={resultColor} fontWeight={700} fontSize="13">
              {scene.read.status === "paid" ? paid : unpaid} ({stale ? staleWord : freshWord})
            </text>
          </g>
        ) : null}
      </svg>
      {hasToggle ? (
        <div className="mt-3">
          <p className="mb-1 text-sm text-[var(--text-dim)]">
            <T en="Read the payment status from" bn="payment status পড়ুন যেখান থেকে" />
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label={groupLabel}>
            {(["primary", "replica"] as const).map((choice) => (
              <button
                key={choice}
                type="button"
                className={`btn btn-outline${target === choice ? " is-active" : ""}`}
                aria-pressed={target === choice}
                style={target === choice ? { borderColor: "var(--accent)", color: "var(--accent)" } : undefined}
                onClick={() => {
                  setTarget(choice);
                  onLive(choice);
                }}
              >
                {choice === "primary" ? <T en="Primary" bn="Primary" /> : <T en="Replica" bn="Replica" />}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
