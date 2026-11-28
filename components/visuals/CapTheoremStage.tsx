"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { sceneFor, type Choice } from "@/lib/visuals/cap";
import type { Chip, StageProps } from "./StepVisual";

const W = 360;
const H = 200;
const NODE_W = 96;
const NODE_H = 70;
const AX = 20;
const BX = W - 20 - NODE_W;
const NODE_Y = 70;

/** The live numbers of each step, from the same scene that the stage draws. */
export function capTheoremChips(step: number): readonly Chip[] {
  const scene = sceneFor(step, "C");
  const { a, b } = scene.cluster;
  const copies: Chip[] = [
    { label: { en: "Value on A", bn: "A-র মান" }, value: String(a) },
    { label: { en: "Value on B", bn: "B-র মান" }, value: String(b) },
  ];
  if (step === 0 || step === 4) {
    const read = scene.read;
    return [...copies, { label: { en: "Read on B", bn: "B-তে রিড" }, value: read?.served ? String(read.value) : "–" }];
  }
  if (step === 3) {
    const c = sceneFor(3, "C").read;
    const av = sceneFor(3, "A").read;
    return [
      { label: { en: "Read served, choose C", bn: "রিড উত্তর পেল, C" }, value: `${c?.served ? 1 : 0} / 1` },
      { label: { en: "Read served, choose A", bn: "রিড উত্তর পেল, A" }, value: `${av?.served ? 1 : 0} / 1` },
      { label: { en: "Value returned, choose A", bn: "ফেরত মান, A" }, value: av?.served ? String(av.value) : "–" },
    ];
  }
  return copies;
}

/** The two nodes, the link, the write, and the read of the CAP visual. */
export function CapTheoremStage({ step, reduced }: StageProps) {
  const [choice, setChoice] = useState<Choice>("C");
  const scene = sceneFor(step, choice);
  const { cluster, read } = scene;
  const transition = reduced ? undefined : "fill 340ms cubic-bezier(.2,.7,.2,1), stroke 340ms cubic-bezier(.2,.7,.2,1), opacity 340ms";
  const choosing = step === 3;
  const linkY = NODE_Y + NODE_H / 2;
  const refused = read !== null && !read.served;
  const stale = read !== null && read.served && read.value !== cluster.a;
  const bStroke = refused ? "var(--danger)" : stale ? "var(--warn)" : "var(--border-strong)";

  return (
    <div>
      <svg
        role="img"
        aria-label={`Node A holds ${cluster.a}, node B holds ${cluster.b}, the link is ${cluster.linkUp ? "up" : "cut"}`}
        viewBox={`0 0 ${W} ${H}`}
        className="mx-auto block h-auto w-full max-w-sm"
        fontSize="13"
      >
        {/* The link between the nodes. */}
        <line
          x1={AX + NODE_W}
          y1={linkY}
          x2={BX}
          y2={linkY}
          stroke={cluster.linkUp ? "var(--good)" : "var(--danger)"}
          strokeWidth="3"
          strokeDasharray={cluster.linkUp ? undefined : "6 6"}
          style={{ transition }}
        />
        {!cluster.linkUp ? (
          <g stroke="var(--danger)" strokeWidth="3" strokeLinecap="round">
            <line x1={W / 2 - 8} y1={linkY - 8} x2={W / 2 + 8} y2={linkY + 8} />
            <line x1={W / 2 - 8} y1={linkY + 8} x2={W / 2 + 8} y2={linkY - 8} />
          </g>
        ) : null}
        {/* The write copy travels to B only when the link is up. */}
        {scene.writing && cluster.linkUp ? (
          <circle cx={W / 2} cy={linkY} r="6" fill="var(--accent)" />
        ) : null}
        {/* The nodes. */}
        <rect x={AX} y={NODE_Y} width={NODE_W} height={NODE_H} rx="10" fill="var(--bg-raised-2)" stroke="var(--accent)" strokeWidth="2" />
        <text x={AX + NODE_W / 2} y={NODE_Y + 26} textAnchor="middle" fill="var(--text-dim)">
          A
        </text>
        <text x={AX + NODE_W / 2} y={NODE_Y + 54} textAnchor="middle" fill="var(--text)" fontSize="24" fontWeight="600">
          {cluster.a}
        </text>
        <rect x={BX} y={NODE_Y} width={NODE_W} height={NODE_H} rx="10" fill="var(--bg-raised-2)" stroke={bStroke} strokeWidth="2" style={{ transition }} />
        <text x={BX + NODE_W / 2} y={NODE_Y + 26} textAnchor="middle" fill="var(--text-dim)">
          B
        </text>
        <text x={BX + NODE_W / 2} y={NODE_Y + 54} textAnchor="middle" fill="var(--text)" fontSize="24" fontWeight="600">
          {cluster.b}
        </text>
        {/* The clients: a write arrives at A, a read arrives at B. */}
        {step === 2 || step === 0 ? (
          <g>
            <line x1={AX + NODE_W / 2} y1="28" x2={AX + NODE_W / 2} y2={NODE_Y - 2} stroke="var(--accent)" strokeWidth="2" />
            <text x={AX + NODE_W / 2} y="20" textAnchor="middle" fill="var(--accent)">
              write {cluster.a}
            </text>
          </g>
        ) : null}
        {read !== null ? (
          <g>
            <line x1={BX + NODE_W / 2} y1="28" x2={BX + NODE_W / 2} y2={NODE_Y - 2} stroke="var(--accent-2)" strokeWidth="2" />
            <text x={BX + NODE_W / 2} y="20" textAnchor="middle" fill="var(--accent-2)">
              read
            </text>
            <text
              x={BX + NODE_W / 2}
              y={NODE_Y + NODE_H + 24}
              textAnchor="middle"
              fontWeight="600"
              fill={refused ? "var(--danger)" : stale ? "var(--warn)" : "var(--good)"}
            >
              {refused ? "try again later" : `answer: ${read.value}`}
            </text>
          </g>
        ) : null}
        <text x={AX + NODE_W / 2} y={NODE_Y + NODE_H + 24} textAnchor="middle" fill="var(--text-faint)" fontSize="11">
          group 1
        </text>
        <text x={W / 2} y={linkY - 14} textAnchor="middle" fill="var(--text-faint)" fontSize="11">
          {cluster.linkUp ? "link up" : "link cut"}
        </text>
      </svg>
      {choosing ? (
        <div className="mt-3 flex flex-col items-center gap-2">
          <div className="text-xs text-[var(--text-dim)]">
            <T en="During the partition, choose:" bn="পার্টিশনের সময় বাছুন:" />
          </div>
          <div className="flex justify-center gap-2" role="group" aria-label="Choose consistency or availability">
            <button type="button" className="btn btn-outline" aria-pressed={choice === "C"} onClick={() => setChoice("C")}>
              <T en="Consistency (C)" bn="কনসিসটেন্সি (C)" />
            </button>
            <button type="button" className="btn btn-outline" aria-pressed={choice === "A"} onClick={() => setChoice("A")}>
              <T en="Availability (A)" bn="অ্যাভেইলেবিলিটি (A)" />
            </button>
          </div>
          <p className="m-0 text-center text-sm text-[var(--text)]">
            {choice === "C" ? (
              <T en="B refuses. The read gets no answer, so availability is lost." bn="B প্রত্যাখ্যান করে। রিড উত্তর পায় না, তাই অ্যাভেইলেবিলিটি হারায়।" />
            ) : (
              <T en="B answers 2, but the latest write is 3, so consistency is lost." bn="B 2 দিয়ে উত্তর দেয়, কিন্তু সর্বশেষ লেখা 3, তাই কনসিসটেন্সি হারায়।" />
            )}
          </p>
        </div>
      ) : null}
    </div>
  );
}
