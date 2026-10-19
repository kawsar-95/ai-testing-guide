"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { getTopic, practiceId } from "@/lib/architecture/topics";
import { ARCHITECTURE_UI } from "@/lib/architecture/ui";
import { useArchitectureProgress } from "./useArchitectureProgress";

/**
 * One practice question of content/architecture/practice.mdx: the number, the
 * question, a link to its topic page, a "done" tick, and the model answer in a
 * closed <details>.
 */
export function PracticeQuestion({
  n,
  topic,
  question,
  children,
}: {
  n: number;
  topic: string;
  question: string;
  children: ReactNode;
}) {
  const { done, toggle } = useArchitectureProgress();
  const id = practiceId(n);
  const item = getTopic(topic);
  return (
    <div id={`q-${String(n).padStart(2, "0")}`} className="practice-q my-5 scroll-mt-24 rounded-[10px] border border-border bg-bg-raised px-5 py-4">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={done.includes(id)}
          onChange={() => toggle(id)}
          aria-label={ARCHITECTURE_UI.practiceDoneLabel(n)}
          className="mt-1.5 size-4 shrink-0 cursor-pointer accent-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />
        <div className="min-w-0 flex-1">
          <p className="m-0 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            {ARCHITECTURE_UI.questionLabel(n)}
            {item ? (
              <>
                {" · "}
                <Link href={item.href} className="text-accent underline underline-offset-2">
                  {ARCHITECTURE_UI.practiceTopicLink}: {item.title}
                </Link>
              </>
            ) : null}
          </p>
          <p className="mt-1.5 mb-0 text-[16px] font-medium leading-snug text-text">{question}</p>
          <details className="mt-3">
            <summary>{ARCHITECTURE_UI.showAnswer}</summary>
            <div className="practice-answer">{children}</div>
          </details>
        </div>
      </div>
    </div>
  );
}
