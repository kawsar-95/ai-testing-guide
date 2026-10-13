/** The data model of the Interview Prep module. */
export type AreaSlug =
  | "interview-prep"
  | "intern"
  | "junior"
  | "mid-level"
  | "senior"
  | "leadership"
  | "programming-problems"
  | "practical-tasks"
  | "tools-mastery"
  | "hands-on-automation"
  | "hr-soft-skills"
  | "realistic-scenarios"
  | "mcq-test";

export type Level = "easy" | "medium" | "hard";

export type ItemKind = "qa" | "task" | "mcq";

/** A question with an answer template, an example answer, and the reason behind it. */
export type QaItem = {
  kind: "qa";
  /** Stable and unique across all areas: `<area-slug>-NNN`. Progress uses it. */
  id: string;
  question: string;
  template: string;
  example: string;
  behind: string;
  /** Only the items of `realistic-scenarios` have a level. */
  level?: Level;
  /** An https:// link to an official source. */
  source?: string;
};

/** A task to do, with its details. */
export type TaskItem = {
  kind: "task";
  id: string;
  title: string;
  details: string;
  source?: string;
};

/** A multiple-choice question. `answer` is the index in `options`. */
export type McqItem = {
  kind: "mcq";
  id: string;
  question: string;
  options: readonly string[];
  answer: number;
  explanation: string;
  source: string;
};

export type PrepItem = QaItem | TaskItem | McqItem;

export type PrepArea = {
  slug: AreaSlug;
  title: string;
  description: string;
  kind: ItemKind;
  /** `/prep/<slug>/` */
  href: string;
};
