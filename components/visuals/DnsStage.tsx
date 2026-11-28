"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { ANSWER, LINK_MS, NODE_IDS, TTL_SECONDS, hops, hopsSoFar, msSoFar, reachedCount, totalMs, type NodeId } from "@/lib/visuals/dns";
import type { Chip, StageProps } from "./StepVisual";

const ROW = 48;
const TOP = 12;
const NODE_W = 150;
const NODE_H = 34;
const LEFT = 14;

const NAME: Record<NodeId, string> = {
  browser: "Browser",
  stub: "Stub resolver",
  recursive: "Recursive server",
  root: "Root server",
  tld: "“com” server",
  auth: "“example.com” server",
};

/** The live numbers of each step. Both cases show, because the chips do not know the switch. */
export function dnsChips(step: number): readonly Chip[] {
  const chips: Chip[] = [
    { label: { en: "Hops: not cached / cached", bn: "হপ: ক্যাশ ছাড়া / ক্যাশসহ" }, value: `${hops(false)} / ${hops(true)}` },
    { label: { en: "Time: not cached / cached", bn: "সময়: ক্যাশ ছাড়া / ক্যাশসহ" }, value: `${totalMs(false)} ms / ${totalMs(true)} ms` },
  ];
  if (step >= 6) chips.push({ label: { en: "TTL", bn: "TTL" }, value: `${TTL_SECONDS} s` });
  return chips;
}

/** What each node says at this step, in the selected case. */
function note(id: NodeId, step: number, cached: boolean): string {
  if (id === "recursive") {
    if (step < 2) return "";
    if (cached) return `cache hit: A ${ANSWER}`;
    return step >= 6 ? `cached for the TTL` : "cache miss";
  }
  if (cached) return "";
  if (id === "root" && step >= 3) return "points to “com”";
  if (id === "tld" && step >= 4) return "points to “example.com”";
  if (id === "auth" && step >= 5) return `A ${ANSWER}`;
  return "";
}

/** The path of one lookup, with a switch for a cached or a not cached answer. */
export function DnsStage({ step, reduced }: StageProps) {
  const [cached, setCached] = useState(false);
  const reached = reachedCount(step, cached);
  const transition = reduced ? undefined : "fill 300ms ease, stroke 300ms ease, opacity 300ms ease";
  const y = (i: number) => TOP + i * ROW;
  const returning = step >= 6;
  const height = TOP + NODE_IDS.length * ROW + 24;

  return (
    <div>
      <svg role="img" aria-label="DNS lookup path from the browser to the answer" viewBox={`0 0 360 ${height}`} className="mx-auto block h-auto w-full max-w-sm" fontSize="12">
        {NODE_IDS.map((id, i) => {
          const isReached = i < reached;
          const skipped = cached && i >= 3;
          const active = i === reached - 1 && !returning;
          const stroke = skipped ? "var(--border)" : active ? "var(--accent)" : isReached ? "var(--accent-2)" : "var(--border-strong)";
          const text = note(id, step, cached);
          return (
            <g key={id} opacity={skipped ? 0.45 : 1} style={{ transition }}>
              {i > 0 ? (
                <g>
                  <line
                    x1={LEFT + NODE_W / 2}
                    y1={y(i - 1) + NODE_H}
                    x2={LEFT + NODE_W / 2}
                    y2={y(i)}
                    stroke={isReached ? (returning && !skipped ? "var(--good)" : "var(--accent-2)") : "var(--border-strong)"}
                    strokeWidth="2"
                    strokeDasharray={skipped ? "3 3" : undefined}
                    style={{ transition }}
                  />
                  {isReached && !skipped ? (
                    <text x={LEFT + NODE_W / 2 + 8} y={y(i) - 3} fill="var(--text-dim)" fontSize="11">
                      {LINK_MS[id]} ms
                    </text>
                  ) : null}
                </g>
              ) : null}
              <rect x={LEFT} y={y(i)} width={NODE_W} height={NODE_H} rx="6" fill="var(--bg-raised-2)" stroke={stroke} strokeWidth={active ? 2.5 : 1.5} style={{ transition }} />
              <text x={LEFT + NODE_W / 2} y={y(i) + NODE_H / 2 + 4} textAnchor="middle" fill="var(--text)">
                {NAME[id]}
              </text>
              {text ? (
                <text x={LEFT + NODE_W + 10} y={y(i) + NODE_H / 2 + 4} fill={id === "auth" || (id === "recursive" && cached) ? "var(--good)" : "var(--text-dim)"} fontSize="12">
                  {text}
                </text>
              ) : null}
            </g>
          );
        })}
        <text x={LEFT} y={height - 6} fill="var(--text)" fontSize="13">
          {`Hops ${hopsSoFar(step, cached)} / ${hops(cached)}  ·  ${msSoFar(step, cached)} / ${totalMs(cached)} ms`}
        </text>
      </svg>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Cache">
        <span className="text-sm text-[var(--text-dim)]">
          <T en="Answer in the cache?" bn="উত্তর কি ক্যাশে আছে?" />
        </span>
        <button type="button" className="btn btn-outline" aria-pressed={!cached} aria-label="Not cached" onClick={() => setCached(false)}>
          <T en="Not cached" bn="ক্যাশে নেই" />
        </button>
        <button type="button" className="btn btn-outline" aria-pressed={cached} aria-label="Cached" onClick={() => setCached(true)}>
          <T en="Cached" bn="ক্যাশে আছে" />
        </button>
      </div>
    </div>
  );
}
