"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { KEYS, KEY_COUNT, loadSpread, loads, sceneFor } from "@/lib/visuals/ring";
import type { Chip, StageProps } from "./StepVisual";

const SIZE = 360;
const CENTER = SIZE / 2;
const RADIUS = 130;
const NAMES = ["A", "B", "C", "D"] as const;
// One color for each server, from the site tokens.
const COLOR: Record<string, string> = {
  A: "var(--accent)",
  B: "var(--accent-2)",
  C: "var(--voice-layman)",
  D: "var(--voice-bangla)",
};

/** A point on the ring. 0 degrees is the top; the angle grows clockwise. */
function point(angle: number, radius: number): { x: number; y: number } {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) };
}

/** The live numbers of each step, from the same scene that the stage draws. */
export function consistentHashingChips(step: number): readonly Chip[] {
  const scene = sceneFor(step);
  const servers: Chip = { label: { en: "Servers", bn: "সার্ভার" }, value: String(scene.servers.length) };
  const keys: Chip = { label: { en: "Keys", bn: "কী" }, value: String(KEY_COUNT) };
  if (step === 3) {
    return [servers, keys, { label: { en: "Keys moved", bn: "সরেছে" }, value: `${scene.movedRing} / ${KEY_COUNT}` }];
  }
  if (step === 4) {
    return [
      servers,
      { label: { en: "Ring moved", bn: "রিংয়ে সরেছে" }, value: `${scene.movedRing} / ${KEY_COUNT}` },
      { label: { en: "Modulo moved", bn: "মডুলোতে সরেছে" }, value: `${scene.movedModulo} / ${KEY_COUNT}` },
    ];
  }
  if (step === 5) {
    return [servers, keys, { label: { en: "Keys moved", bn: "সরেছে" }, value: `${scene.movedRing} / ${KEY_COUNT}` }];
  }
  if (step >= 6) {
    const spread = loadSpread(scene.owners, scene.servers);
    return [servers, { label: { en: "Most keys on one server", bn: "এক সার্ভারে সর্বোচ্চ কী" }, value: String(spread.max) }, { label: { en: "Fewest", bn: "সবচেয়ে কম" }, value: String(spread.min) }];
  }
  if (step === 2) {
    const spread = loadSpread(scene.owners, scene.servers);
    return [servers, keys, { label: { en: "Most / fewest per server", bn: "সর্বোচ্চ / সর্বনিম্ন" }, value: `${spread.max} / ${spread.min}` }];
  }
  return [servers, keys];
}

/** The ring, the keys, and the servers of the consistent-hashing visual. */
export function ConsistentHashingStage({ step, reduced }: StageProps) {
  const [rule, setRule] = useState<"ring" | "modulo">("ring");
  const scene = sceneFor(step, step === 4 ? rule : "ring");
  const transition = reduced ? undefined : "fill 340ms cubic-bezier(.2,.7,.2,1), stroke 340ms cubic-bezier(.2,.7,.2,1)";
  const counts = loads(scene.owners, scene.servers);
  const comparing = step === 4;

  return (
    <div>
      <svg
        role="img"
        aria-label={`Ring of ${KEY_COUNT} keys and ${scene.servers.length} servers`}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="mx-auto block h-auto w-full max-w-sm"
        fontSize="13"
      >
        <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="var(--border-strong)" strokeWidth="1.5" />
        {/* The keys. A key that moved in this step gets a ring around it. */}
        {KEYS.map((key, i) => {
          const p = point(key.angle, RADIUS);
          const owner = scene.owners[i];
          const fill = owner ? COLOR[owner] : "var(--text-faint)";
          return (
            <g key={i}>
              {scene.moved[i] ? (
                <circle cx={p.x} cy={p.y} r="9" fill="none" stroke="var(--text)" strokeWidth="1.5" />
              ) : null}
              <circle cx={p.x} cy={p.y} r="5" fill={fill} style={{ transition }} />
            </g>
          );
        })}
        {/* The servers: one marker for each place on the ring, with its letter outside the ring. */}
        {scene.servers.flatMap((server) =>
          server.angles.map((angle, j) => {
            const inner = point(angle, RADIUS - 14);
            const outer = point(angle, RADIUS + 20);
            const color = COLOR[server.name];
            const first = j === 0;
            return (
              <g key={`${server.name}-${j}`}>
                <line x1={point(angle, RADIUS - 6).x} y1={point(angle, RADIUS - 6).y} x2={inner.x} y2={inner.y} stroke={color} strokeWidth="2" />
                <rect x={inner.x - 7} y={inner.y - 7} width="14" height="14" rx="3" fill={color} stroke="var(--bg-raised)" strokeWidth="1.5" />
                <text x={outer.x} y={outer.y + 4} textAnchor="middle" fill={color} fontWeight={first ? 600 : 400} opacity={first ? 1 : 0.8}>
                  {server.name}
                  {first ? "" : "′"}
                </text>
              </g>
            );
          }),
        )}
        {/* The centre: the rule that picks the owner. */}
        <text x={CENTER} y={CENTER - 4} textAnchor="middle" fill="var(--text-dim)">
          {comparing && rule === "modulo" ? "hash mod N" : step >= 2 ? "clockwise" : "hash ring"}
        </text>
        <text x={CENTER} y={CENTER + 14} textAnchor="middle" fill="var(--text-faint)" fontSize="11">
          {NAMES.filter((n) => counts[n] !== undefined)
            .map((n) => `${n}:${counts[n]}`)
            .join("  ")}
        </text>
      </svg>
      {comparing ? (
        <div className="mt-3 flex justify-center gap-2" role="group" aria-label="Rule">
          <button type="button" className="btn btn-outline" aria-pressed={rule === "ring"} onClick={() => setRule("ring")}>
            <T en="Ring" bn="রিং" />
          </button>
          <button type="button" className="btn btn-outline" aria-pressed={rule === "modulo"} onClick={() => setRule("modulo")}>
            <T en="Hash mod N" bn="হ্যাশ মডুলো N" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
