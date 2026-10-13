# Fact-check: Prep, HR & Soft Skills (round 2, 2026-10-13)

Round 2 on c712e21 (changed items re-checked; other rows from round 1 on 49f7044). Changed items: `hr-soft-skills-002` to `hr-soft-skills-005`. In each, only the `behind` text changed: it now ends with "The story in the example is a model. Replace it with your own." The checker read the new sentences again for hidden facts and found none. The rows of the changed items are replaced. The other rows are kept from round 1.

Round 1 content under check: `content/prep/hr-soft-skills.ts` at commit 49f7044 (8 `qa` items). The author's research notes (`prep-hr-soft-skills.md`) say that the area has no factual claim. The checker did not accept that statement. The checker read every sentence of `question`, `template`, `example` and `behind` of all 8 items.

Sources fetched: none. No item has a `source`, and the checker found no claim that needs one.

What the checker looked for in each sentence: a statistic or a percentage; "most teams", "usually", "industry standard" or a similar general claim; a named framework or method (for example STAR); a definition of a term; a claim about what a standard requires; a claim about law or HR practice (for example the legality of salary-history questions); salary data or a salary number.

Findings:

- Every number in the examples ("four years", "10-minute talk", "two quarters", "one week", "two small defects", "five years", "two years") is part of a first-person sample story. The `behind` text of `hr-soft-skills-001` says "The details in the example are samples", and `hr-soft-skills-007` says "Replace X and Y with numbers from your own research".
- `hr-soft-skills-003` says "the story has a situation, an action, a result and a lesson". It does not name STAR or claim a standard, so it is a description of the sample, not a claim.
- `hr-soft-skills-007` gives no salary figure and no claim about salary law. "salary surveys and job posts" is the speaker's own practice.
- The `behind` texts say what the interviewer checks. They are advice about interviewer intent, not facts from a source.

| # | Item id | Claim | Source URL | Verdict | Quote from the content, and why |
|---|---|---|---|---|---|
| 1 | hr-soft-skills-001 | "Tell me about yourself" sample and advice | - | OPINION-OK | Sample story. Hidden-fact search: none found. "The details in the example are samples." |
| 2 | hr-soft-skills-002 | Strength with proof, real weakness with action | - | OPINION-OK | First-person sample. Round 2 `behind` adds "The story in the example is a model. Replace it with your own.": an instruction, not a fact. Hidden-fact search: none found. |
| 3 | hr-soft-skills-003 | Conflict with a developer | - | OPINION-OK | Sample story. "situation, an action, a result and a lesson" names no framework. Round 2 `behind` adds the "model" sentence: an instruction, not a fact. Hidden-fact search: none found. |
| 4 | hr-soft-skills-004 | Bug that reached production | - | OPINION-OK | Sample story. Round 2 `behind` adds the "model" sentence: an instruction, not a fact. Hidden-fact search: none found. |
| 5 | hr-soft-skills-005 | Tight deadline | - | OPINION-OK | Sample story. Round 2 `behind` adds the "model" sentence: an instruction, not a fact. Hidden-fact search: none found. |
| 6 | hr-soft-skills-006 | Why leave the current job; "A positive reason that points to the future is best." | - | OPINION-OK | Advice, not a fact from a source. Hidden-fact search: none found. |
| 7 | hr-soft-skills-007 | Salary expectations | - | OPINION-OK | No salary number ("X to Y" placeholders), no claim about salary law or HR rules. Hidden-fact search: none found. |
| 8 | hr-soft-skills-008 | Five-year plan; "They also like to see that you stay flexible" | - | OPINION-OK | Advice about interviewer intent. Hidden-fact search: none found. |

Open FAILs: 0
