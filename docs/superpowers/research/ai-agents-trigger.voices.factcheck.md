# Voices fact check: How AI Agents Work, Trigger

Page: `content/ai-agents/trigger.mdx`. Checker: an agent that did not write the voices. Date: 2026-10-28. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | The Technical table becomes a list (no new fact). Cites 1, 2, 3, 8, 9 are all in Technical. |
| How it works | PASS | PASS | Same facts per trigger. After the Technical addition (research preview for cloud tasks and channels), both voices got the same addition. "Secret token" (Layman) restates "bearer token". |
| A real-life example | PASS | PASS | The YAML becomes a list. 06:00 UTC, weekdays, `tests/`, write access, `allowed_bots`, late start all match. |
| Common mistakes | FAIL, fixed | FAIL, fixed | Layman "A missed run is not run later" and Bangla "ছুটে যাওয়া run পরে আর চলে না" were wrong: a task due while Claude is busy fires once when idle. Fixed in both, with the Technical addition. The cap sentence fix (GitHub events dropped, API fires fail) added to both. 7 days matches. |
| What a tester can check | PASS | PASS | Tutorial advice; no cites in any voice. Same 8 items. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (আপনি commit push করলে, দিন, দেখুন) | PASS |
| Product names, code, and terms stay in English (GitHub Actions, `@claude`, `prompt`, `paths`, `allowed_bots`, `GITHUB_TOKEN`, cron, MCP server, channel, subagent, handoff, `/loop`) | PASS |
| Grammar and natural wording | FAIL, fixed. "অলস (idle)" means "lazy"; now "idle থাকে, মানে অন্য কোনো কাজ করছে না". "পাঠকের" (reader) for sender; now "প্রেরকের". |
| Numbers match Technical (4 groups, 5 minutes, 09:00, 06:00 UTC, 7 days, once per hour) | PASS |

Open FAILs: 0
