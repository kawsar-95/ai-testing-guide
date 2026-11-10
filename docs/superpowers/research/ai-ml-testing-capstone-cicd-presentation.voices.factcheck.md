# Voices fact check: AI/ML Testing, CI/CD Integration and Capstone Presentation

Page: `content/ai-ml-testing/capstone-cicd-presentation.mdx`. Date: 2026-11-02.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Unchanged. |
| How it works | PASS, after fix | PASS, after fix | The exit-code-100 and promptfoo-action sentences were rewritten in all three panels, with `promptfoo-cli` and `promptfoo-cicd` cites in each. |
| In practice | PASS, after fix | PASS, after fix | Workflow YAML (eval step, `redteam-config.yaml`, `python -m pytest tests/ui/`) is identical code in all three panels (count-asserted). |
| Common mistakes | PASS | PASS | Unchanged. |
| What a tester can check | PASS | PASS | Unchanged. |
| Key words | n/a | n/a | No voices. |

Bangla check: আপনি-register, tool and API names in English, numbers match Technical.

Open FAILs at the end of the rounds above: 0

## The new সহজ English panels (2026-11-10)

The `<Layman>` (সহজ English) panels of 4 sections were in Bangla, not plain English: `In plain words`, `How it works`, `In practice`, `Common mistakes`. The rounds above checked the facts of these panels, not their language. The site now tests that rule: `voiceErrors` in `lib/voice-source.ts` fails a `<Layman>` panel when more than 2 % of the letters that a reader reads are Bangla (code, tags, and URLs do not count), and a `<Bangla>` panel when fewer than 20 % are.

The panels were written again in plain English from the Technical text of the same section, with every code block of that text copied, by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write them, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Facts, cites and the fast/slow suite split match the Technical text. |
| How it works | PASS | Code block, exit code 100, threshold variable, action inputs and permission all match. Cites are unchanged. |
| In practice | PASS | The YAML and outline blocks are identical. The advice matches the tutorial's own advice. |
| Common mistakes | PASS | The "only", "ten minutes" and "eventually" meanings are kept. Cites are on the same claims. |

Open FAILs: 0
