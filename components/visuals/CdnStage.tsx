"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { DEFAULT_MODE, LAST_STEP, sceneFor } from "@/lib/visuals/cdn";
import type { Mode } from "@/lib/visuals/cdn";
import type { StageProps } from "./StepVisual";

const WIDTH = 360;
const HEIGHT = 230;
const USER = { x: 40, y: 120 };
const EDGE = { x: 110, y: 120 };
const ORIGIN = { x: 320, y: 120 };

/** A far user, a near edge, and the origin. The toggle on the last step picks a cached copy or a miss. */
export function CdnStage({ step, reduced, onLive }: StageProps) {
  const [mode, setMode] = useState<Mode>(DEFAULT_MODE);
  const live = step === LAST_STEP;
  const scene = sceneFor(step, live ? mode : DEFAULT_MODE);
  const transition = reduced ? undefined : "stroke 340ms cubic-bezier(.2,.7,.2,1), opacity 340ms cubic-bezier(.2,.7,.2,1), fill 340ms cubic-bezier(.2,.7,.2,1)";

  const userLabel = useBn("User", "User");
  const edgeLabel = useBn("Edge", "Edge");
  const originLabel = useBn("Origin", "Origin");
  const copyLabel = useBn("copy", "copy");
  const emptyLabel = useBn("empty", "খালি");
  const missLabel = useBn("miss", "miss");
  const hitLabel = useBn("hit", "hit");
  const noRequest = useBn("no request yet", "এখনো request নেই");

  const toOrigin = scene.answeredBy === "origin";
  const toEdge = scene.answeredBy === "edge" && step !== 1;
  const requested = step !== 0 && step !== 1;
  const originActive = toOrigin && step !== 1;
  const originColor = originActive || step === 0 ? "var(--danger)" : "var(--border-strong)";
  const edgeColor = toEdge ? "var(--good)" : "var(--border-strong)";
  const answerText = step === 1 ? noRequest : toOrigin ? missLabel : hitLabel;

  return (
    <div>
      <svg
        role="img"
        aria-label={`User ${scene.km} km from the answer, ${scene.ms} ms`}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="mx-auto block h-auto w-full max-w-sm"
        fontSize="12"
      >
        {/* The long way to the origin, and the short way to the edge */}
        <path
          d={`M ${USER.x} ${USER.y} C ${USER.x + 60} 40, ${ORIGIN.x - 60} 40, ${ORIGIN.x} ${ORIGIN.y}`}
          fill="none"
          stroke={originColor}
          strokeWidth={originActive || step === 0 ? 3 : 1.5}
          strokeDasharray={originActive || step === 0 ? undefined : "4 4"}
          style={{ transition }}
        />
        {scene.edgeShown ? (
          <line
            x1={USER.x}
            y1={USER.y}
            x2={EDGE.x}
            y2={EDGE.y}
            stroke={edgeColor}
            strokeWidth={toEdge ? 4 : 1.5}
            strokeDasharray={toEdge ? undefined : "4 4"}
            style={{ transition }}
          />
        ) : null}

        {/* Time and distance on the path that answers */}
        {step === 1 ? null : toOrigin ? (
          <text x={(USER.x + ORIGIN.x) / 2} y="62" textAnchor="middle" fill="var(--danger)" fontWeight={600}>
            {scene.km} km · {scene.ms} ms
          </text>
        ) : (
          <text x={(USER.x + EDGE.x) / 2} y="160" textAnchor="middle" fill="var(--good)" fontWeight={600}>
            {scene.km} km · {scene.ms} ms
          </text>
        )}

        {/* The user */}
        <circle cx={USER.x} cy={USER.y} r="15" fill="var(--bg-raised-2)" stroke="var(--accent)" strokeWidth="2" />
        <text x={USER.x} y={USER.y + 4} textAnchor="middle" fill="var(--text)" fontWeight={600}>
          U
        </text>
        <text x={USER.x} y={USER.y + 34} textAnchor="middle" fill="var(--text-dim)" fontSize="11">
          {userLabel}
        </text>

        {/* The edge server */}
        {scene.edgeShown ? (
          <g>
            <rect x={EDGE.x + 8} y={EDGE.y - 18} width="56" height="36" rx="8" fill="var(--bg-raised-2)" stroke={toEdge ? "var(--good)" : "var(--border-strong)"} strokeWidth="2" style={{ transition }} />
            <text x={EDGE.x + 36} y={EDGE.y - 2} textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight={600}>
              {edgeLabel}
            </text>
            <text x={EDGE.x + 36} y={EDGE.y + 12} textAnchor="middle" fill={scene.edgeHasCopy ? "var(--good)" : "var(--text-faint)"} fontSize="11">
              {scene.edgeHasCopy ? copyLabel : emptyLabel}
            </text>
          </g>
        ) : null}

        {/* The origin */}
        <rect x={ORIGIN.x - 24} y={ORIGIN.y - 20} width="48" height="40" rx="8" fill="var(--bg-raised-2)" stroke={originActive || step === 0 ? "var(--danger)" : "var(--border-strong)"} strokeWidth="2" style={{ transition }} />
        <text x={ORIGIN.x} y={ORIGIN.y + 4} textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight={600}>
          {originLabel}
        </text>

        {/* The answer line */}
        {requested || step === 1 ? (
          <text x={WIDTH / 2} y="206" textAnchor="middle" fill={toOrigin && step !== 1 ? "var(--danger)" : step === 1 ? "var(--text-dim)" : "var(--good)"} fontWeight={600}>
            {answerText}
          </text>
        ) : null}
      </svg>
      {live ? (
        <div className="mt-3 flex flex-col items-center gap-2 text-sm text-[var(--text-dim)]">
          <span>
            <T en="The edge has" bn="Edge-এর কাছে" />:{" "}
            <strong className="text-[var(--text)]">{mode === "hit" ? <T en="a cached copy" bn="cached copy আছে" /> : <T en="no copy (miss)" bn="copy নেই (miss)" />}</strong>
          </span>
          <button
            type="button"
            className="btn btn-outline"
            aria-label="Switch the edge between a cached copy and a miss"
            aria-pressed={mode === "miss"}
            onClick={() => {
              const next: Mode = mode === "hit" ? "miss" : "hit";
              setMode(next);
              onLive(next);
            }}
          >
            {mode === "hit" ? <T en="Make it a miss" bn="miss বানান" /> : <T en="Make it a hit" bn="hit বানান" />}
          </button>
        </div>
      ) : null}
    </div>
  );
}
