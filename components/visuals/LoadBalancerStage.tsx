"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { SERVICE_TICKS, SERVER_COUNT, STEP_ALGORITHM, STEP_TICKS, TOTAL_REQUESTS, longestQueue, simulate } from "@/lib/visuals/load-balancer";
import type { Algorithm } from "@/lib/visuals/load-balancer";
import type { Chip, StageProps } from "./StepVisual";

const join = (values: readonly number[]) => values.join(" / ");

/** The live numbers of each step, from the same simulation that the stage draws. */
export function loadBalancerChips(step: number): readonly Chip[] {
  const at = Math.max(0, Math.min(STEP_TICKS.length - 1, step));
  const ticks = STEP_TICKS[at];
  const rr = simulate("round-robin", ticks);
  const lc = simulate("least-connections", ticks);
  const speed: Chip = { label: { en: "Ticks per request", bn: "প্রতি request-এ tick" }, value: join(SERVICE_TICKS) };
  if (at === 0) return [{ label: { en: "Servers", bn: "সার্ভার" }, value: String(SERVER_COUNT) }, speed, { label: { en: "Requests", bn: "Request" }, value: String(TOTAL_REQUESTS) }];
  if (at === 1) return [{ label: { en: "Sent", bn: "পাঠানো" }, value: join(rr.sent) }, { label: { en: "Queue", bn: "Queue" }, value: join(rr.queue) }];
  if (at === 2) return [{ label: { en: "Queue", bn: "Queue" }, value: join(rr.queue) }, { label: { en: "Longest queue", bn: "সবচেয়ে লম্বা queue" }, value: String(longestQueue(rr)) }];
  if (at === 3) return [{ label: { en: "Queue", bn: "Queue" }, value: join(lc.queue) }, { label: { en: "Longest queue", bn: "সবচেয়ে লম্বা queue" }, value: String(longestQueue(lc)) }];
  if (at === 4) return [{ label: { en: "Longest queue: Round Robin / Least Connections", bn: "সবচেয়ে লম্বা queue: Round Robin / Least Connections" }, value: `${longestQueue(rr)} / ${longestQueue(lc)}` }];
  return [
    { label: { en: "Round Robin per server", bn: "Round Robin, সার্ভার প্রতি" }, value: join(rr.sent) },
    { label: { en: "Least Connections per server", bn: "Least Connections, সার্ভার প্রতি" }, value: join(lc.sent) },
  ];
}

const WIDTH = 360;
const ROW_Y = [70, 130, 190] as const;
const BOX = 13; // one queued request
const GAP = 3;
const MAX_BOXES = 9;
const QUEUE_X = 130;

/** The balancer, three servers of different speed, and their queues. */
export function LoadBalancerStage({ step, reduced }: StageProps) {
  const [choice, setChoice] = useState<Algorithm>("round-robin");
  const at = Math.max(0, Math.min(STEP_TICKS.length - 1, step));
  const forced = STEP_ALGORITHM[at];
  const algorithm = forced ?? choice;
  const sim = simulate(algorithm, STEP_TICKS[at]);
  const transition = reduced ? undefined : "width 340ms cubic-bezier(.2,.7,.2,1)";
  const rule = algorithm === "round-robin" ? "Round Robin" : "Least Connections";

  return (
    <div>
      <svg
        role="img"
        aria-label={`Load balancer with ${SERVER_COUNT} servers, rule ${rule}, queues ${sim.queue.join(", ")}`}
        viewBox={`0 0 ${WIDTH} 240`}
        className="mx-auto block h-auto w-full max-w-sm"
        fontSize="12"
      >
        {/* The balancer */}
        <rect x="6" y="85" width="54" height="80" rx="8" fill="var(--bg-raised-2)" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="33" y="120" textAnchor="middle" fill="var(--text)" fontSize="12">LB</text>
        <text x="33" y="138" textAnchor="middle" fill="var(--text-dim)" fontSize="11">{at === 0 ? "" : rule === "Round Robin" ? "RR" : "LC"}</text>
        <text x="6" y="30" fill="var(--text-dim)" fontSize="12">{`${sim.tick} / ${TOTAL_REQUESTS}`}</text>
        {SERVICE_TICKS.map((ticks, i) => {
          const y = ROW_Y[i];
          const q = sim.queue[i];
          const shown = Math.min(q, MAX_BOXES);
          return (
            <g key={i}>
              <line x1="60" y1="125" x2="92" y2={y} stroke="var(--border-strong)" strokeWidth="1.5" />
              <rect x="92" y={y - 22} width="30" height="44" rx="6" fill="var(--bg-raised-2)" stroke="var(--border-strong)" />
              <text x="107" y={y - 3} textAnchor="middle" fill="var(--text)" fontSize="12">{`S${i + 1}`}</text>
              <text x="107" y={y + 12} textAnchor="middle" fill="var(--text-dim)" fontSize="11">{`${ticks}t`}</text>
              {Array.from({ length: shown }, (_, k) => (
                <rect key={k} x={QUEUE_X + k * (BOX + GAP)} y={y - BOX / 2} width={BOX} height={BOX} rx="2" fill={q > 4 ? "var(--danger)" : q > 2 ? "var(--warn)" : "var(--good)"} style={{ transition }} />
              ))}
              {q > MAX_BOXES ? <text x={QUEUE_X + MAX_BOXES * (BOX + GAP)} y={y + 4} fill="var(--text-dim)" fontSize="11">{`+${q - MAX_BOXES}`}</text> : null}
              <text x={WIDTH - 6} y={y - 12} textAnchor="end" fill="var(--text-dim)" fontSize="11">{`sent ${sim.sent[i]}`}</text>
              <text x={WIDTH - 6} y={y + 6} textAnchor="end" fill="var(--text)" fontSize="12">{`queue ${q}`}</text>
            </g>
          );
        })}
      </svg>
      {forced === null ? (
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Algorithm">
          <span className="text-sm text-[var(--text-dim)]">
            <T en="Algorithm" bn="Algorithm" />
          </span>
          <button type="button" className="btn btn-outline" aria-pressed={algorithm === "round-robin"} aria-label="Round Robin" onClick={() => setChoice("round-robin")}>
            <T en="Round Robin" bn="Round Robin" />
          </button>
          <button type="button" className="btn btn-outline" aria-pressed={algorithm === "least-connections"} aria-label="Least Connections" onClick={() => setChoice("least-connections")}>
            <T en="Least Connections" bn="Least Connections" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
