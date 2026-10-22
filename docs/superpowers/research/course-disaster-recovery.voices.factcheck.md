# Voice fact-check: Disaster Recovery (round 1, 2026-10-22)

Page: `content/course/disaster-recovery.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 8 `<Voices>` blocks (the `## Key words` section has no voices). For each block, I compared `<Layman>` and `<Bangla>` with the `<Technical>` panel of the same block. A fact, number, name, example, or cite that Technical does not give is a FAIL. So is a dropped hedge or a changed condition, a wrong or confusing Bangla meaning, and a Layman sentence that is long or not plain. An omission is not a FAIL. I checked each `<Cite n>` against the cites of the Technical panel of the same block. I did not re-check the sources.

Structure checks:

- No `TODO-LAYMAN` or `TODO-BANGLA` is left.
- No Markdown heading in any Layman or Bangla panel.
- Technical text is unchanged: `git diff -U0 content/course/disaster-recovery.mdx | grep '^-' | grep -v '^---'` shows no removed line.
- Cites: each Layman and Bangla cite is in the Technical panel of its block (1, 2, 3, 4, 5 as in Technical).

Notes:

- In "Trade-offs", Technical has a 4-row table. Layman and Bangla use 4 bullets with the same cells and the same cites. The lead-in says "This list follows the AWS text only", which matches "The table follows the AWS text only". PASS.
- In "When you need it", "you should not put it in place" became the imperative "do not put it in place" in Layman and Bangla. The exception for regulation follows at once, so the meaning is the same. PASS.
- The longest Layman sentence in "Trade-offs" has 24 words. PASS.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Disaster, DR, RTO, RPO, the Azure examples ("30 minutes of data", "eight hours of downtime"), and the zero-values warning all match. |
| 2 | In plain words | Bangla | FAIL (fixed) | "বড় প্রভাবের মানবিক ভুল" for "human errors with a major impact". In Bangla, "মানবিক" usually means "humane", so "মানবিক ভুল" is confusing. Fixed to "মানুষের করা বড় প্রভাবের ভুল". The rest is PASS. |
| 3 | When you need it | Layman | PASS | Same 3 points and cite 1. |
| 4 | When you need it | Bangla | PASS | Same 3 points and cite 1. |
| 5 | How it works | Layman | PASS | HA versus DR, point-in-time backups, the region-outage note, failover and failback, backups, and the runbook all match. |
| 6 | How it works | Bangla | PASS | Same facts. "RTO-তে তা ধরতে হবে" means "RTO must allow for it". |
| 7 | Trade-offs | Layman | PASS | 4 strategies, hot standby, and the last advice match Technical. No new cell or number. |
| 8 | Trade-offs | Bangla | PASS | Same. "বাকি তিনটা" means the other three. |
| 9 | Testing disaster recovery | Layman | PASS | AWS points (test regularly, rare paths, quotas, drift) and Azure points (human processes, restore, active/active) match. |
| 10 | Testing disaster recovery | Bangla | PASS | Same. |
| 11 | A real-life example | Layman | PASS | Same numbers: RPO 15 minutes, RTO 1 hour, backup every 4 hours, failover 90 minutes. |
| 12 | A real-life example | Bangla | PASS | Same numbers. |
| 13 | Common mistakes | Layman | PASS | 3 bullets match. |
| 14 | Common mistakes | Bangla | PASS | 3 bullets match. |
| 15 | What a tester can check | Layman | PASS | 6 ideas match. |
| 16 | What a tester can check | Bangla | PASS | 6 ideas match. |

Language: polite (আপনি), terms in English, hyphen before Bangla suffixes. The only item to fix was row 2.

## Re-check

Row 2: the sentence now reads "উদাহরণ হলো প্রাকৃতিক দুর্যোগ, মানুষের করা বড় প্রভাবের ভুল (যেমন production data মুছে ফেলা), এবং ransomware-এর মতো বড় security incident". It matches "human errors with a major impact (such as deleting production data)". PASS.

Open FAILs: 0
