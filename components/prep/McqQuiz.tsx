"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { advanceTarget, isCorrect, startIndex } from "@/lib/prep/quiz";
import type { McqItem } from "@/lib/prep/types";
import { PREP_UI } from "@/lib/prep/ui";
import { SourceLink } from "./item-parts";
import { usePrefs } from "./usePrefs";
import { useProgress } from "./useProgress";

/** The wait before auto-advance moves to the next question. */
export const ADVANCE_DELAY_MS = 1200;

const LETTERS = "ABCDEFGHIJ";

/** A, B, C, … for the first 10 options, then the number. */
const letterOf = (index: number) => LETTERS[index] ?? String(index + 1);

const NAV_BUTTON =
  "cursor-pointer rounded-[8px] border border-border-strong bg-bg-raised px-4 py-2 font-mono text-[13px] text-text transition-[background-color,border-color,color] hover:bg-bg-raised-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:hover:bg-bg-raised";

/** One question at a time. A right answer marks the item done. */
export function McqQuiz({ items }: { items: readonly McqItem[] }) {
  const { prefs, setPref } = usePrefs();
  const { done, markDone } = useProgress();
  const [index, setIndex] = useState(0);
  // The pick belongs to one visit of one question. A move to another question clears it.
  const [pick, setPick] = useState<{ index: number; choice: number } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const focusHeading = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);

  const clearTimer = useCallback(() => {
    if (timer.current !== null) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  // The first question comes from the URL hash. The server render shows question 1.
  // A later hash change moves the quiz only if the hash names a question of this quiz. Other jumps
  // (the skip link, a heading link) leave the question and the pick as they are.
  useEffect(() => {
    const show = () => {
      clearTimer();
      setPick(null);
      setIndex(startIndex(items, window.location.hash));
    };
    const onHashChange = () => {
      const id = window.location.hash.slice(1);
      if (items.some((entry) => entry.id === id)) show();
    };
    show();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [items, clearTimer]);

  // No timer outlives the quiz.
  useEffect(() => clearTimer, [clearTimer]);

  // After a move, the focus goes to the question, so a screen reader reads it.
  useEffect(() => {
    if (focusHeading.current) {
      focusHeading.current = false;
      heading.current?.focus();
    }
  }, [index]);

  const goTo = useCallback(
    (target: number) => {
      clearTimer();
      focusHeading.current = true;
      setPick(null);
      setIndex(target);
    },
    [clearTimer],
  );

  if (items.length === 0) return <p className="text-text-dim">{PREP_UI.areaEmpty}</p>;

  const item = items[Math.min(index, items.length - 1)];
  const picked = pick?.index === index ? pick.choice : null;
  const locked = picked !== null;
  const correct = locked && isCorrect(item, picked);
  const isDone = done.includes(item.id);

  const onPick = (choice: number) => {
    // A click on a locked option changes no result. It still cancels a pending advance.
    clearTimer();
    if (locked) return;
    const right = isCorrect(item, choice);
    setPick({ index, choice });
    if (right) markDone(item.id);
    const target = advanceTarget(index, items.length, right, prefs.autoAdvance);
    if (target !== null) {
      timer.current = setTimeout(() => {
        timer.current = null;
        goTo(target);
      }, ADVANCE_DELAY_MS);
    }
  };

  const atFirst = index === 0;
  const atLast = index === items.length - 1;

  return (
    <section aria-label={PREP_UI.quizLabel} className="rounded-[10px] border border-border bg-bg-raised p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[12px] text-text-dim" data-quiz-position>
          {PREP_UI.quizPosition(index + 1, items.length)}
        </p>
        {isDone ? (
          <p
            data-quiz-done
            className="rounded-full border border-good px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-good"
          >
            <span aria-hidden="true">✓ </span>
            {PREP_UI.quizDone}
          </p>
        ) : null}
      </div>

      <h2
        id={item.id}
        ref={heading}
        tabIndex={-1}
        className="mt-4 scroll-mt-20 whitespace-pre-line font-display text-2xl leading-snug font-medium text-text outline-none! focus-visible:outline-2! focus-visible:outline-offset-4 focus-visible:outline-accent!"
      >
        {item.question}
      </h2>

      <div role="group" aria-labelledby={item.id} className="mt-6 grid gap-3">
        {item.options.map((option, i) => {
          const isAnswer = i === item.answer;
          const isPicked = i === picked;
          const state = !locked
            ? "border-border-strong hover:border-accent hover:bg-bg-raised-2"
            : isAnswer
              ? "border-good bg-bg-raised-2"
              : isPicked
                ? "border-danger bg-bg-raised-2"
                : "border-border opacity-80";
          return (
            <button
              key={i}
              type="button"
              aria-disabled={locked}
              data-option={i}
              onClick={() => onPick(i)}
              className={`flex w-full items-start gap-3 rounded-[8px] border px-4 py-3 text-left text-[15px] leading-relaxed text-text transition-[background-color,border-color,color] ${
                locked ? "cursor-default" : "cursor-pointer"
              } ${state}`}
            >
              <span aria-hidden="true" className="font-mono text-[13px] text-text-dim">
                {letterOf(i)}
              </span>
              <span className="min-w-0 flex-1 whitespace-pre-line">{option}</span>
              {locked && isAnswer ? (
                <span className="font-mono text-[12px] text-good">
                  <span aria-hidden="true">✓ </span>
                  {PREP_UI.quizCorrectMark}
                </span>
              ) : null}
              {locked && isPicked && !isAnswer ? (
                <span className="font-mono text-[12px] text-danger">
                  <span aria-hidden="true">✗ </span>
                  {PREP_UI.quizWrongMark}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div role="status" className="mt-5">
        {locked ? (
          <div data-quiz-result={correct ? "correct" : "wrong"}>
            <p className={`font-medium ${correct ? "text-good" : "text-danger"}`}>
              <span aria-hidden="true">{correct ? "✓ " : "✗ "}</span>
              {correct ? PREP_UI.quizCorrectResult : PREP_UI.quizWrongResult(letterOf(item.answer))}
            </p>
            <p className="mt-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-text-dim">
              {PREP_UI.quizExplanation}
            </p>
            <p className="mt-1 text-[15px] leading-relaxed whitespace-pre-line text-text">{item.explanation}</p>
            <SourceLink href={item.source} title={item.question} />
          </div>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
        <div className="flex gap-3">
          <button
            type="button"
            aria-disabled={atFirst}
            onClick={() => {
              if (!atFirst) goTo(index - 1);
            }}
            className={NAV_BUTTON}
          >
            {PREP_UI.quizPrevious}
          </button>
          <button
            type="button"
            aria-disabled={atLast}
            onClick={() => {
              if (!atLast) goTo(index + 1);
            }}
            className={NAV_BUTTON}
          >
            {PREP_UI.quizNext}
          </button>
        </div>
        <label className="flex cursor-pointer items-center gap-2 text-[14px] text-text">
          <input
            type="checkbox"
            checked={prefs.autoAdvance}
            onChange={(event) => {
              if (!event.target.checked) clearTimer();
              setPref("autoAdvance", event.target.checked);
            }}
            className="size-[18px] cursor-pointer accent-accent"
          />
          {PREP_UI.quizAutoAdvance}
        </label>
      </div>
    </section>
  );
}
