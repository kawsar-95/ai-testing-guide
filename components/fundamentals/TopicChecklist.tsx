"use client";

import Link from "next/link";
import type { FundamentalsChapter } from "@/lib/fundamentals/chapters";
import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";
import { FUNDAMENTALS_UI_BN } from "@/lib/bn/fundamentals";
import { useBn } from "@/components/i18n/useBn";
import { useFundamentalsProgress } from "./useFundamentalsProgress";

/** The topics of one chapter. Each row has a checkbox and a link to the heading of the topic. */
export function TopicChecklist({ chapter }: { chapter: FundamentalsChapter }) {
  const { done, toggle } = useFundamentalsProgress();
  const bn = useBn("en", "bn") === "bn";
  return (
    <ul className="m-0 grid list-none gap-1 p-0 sm:grid-cols-2">
      {chapter.topics.map((topic) => (
        <li key={topic.id} id={topic.id} className="flex items-center gap-3 py-1.5">
          <input
            type="checkbox"
            checked={done.includes(topic.id)}
            onChange={() => toggle(topic.id)}
            aria-label={(bn ? FUNDAMENTALS_UI_BN : FUNDAMENTALS_UI).checklistLabel(topic.title)}
            className="size-4 shrink-0 cursor-pointer accent-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          />
          <Link
            href={`${chapter.href}#${topic.anchor}`}
            className="text-[15px] leading-snug text-text no-underline hover:text-accent hover:underline"
          >
            {topic.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
