# Voices fact check: harness / permissions-and-sandboxing (round 1)

Each Layman and Bangla panel was compared with the Technical panel of the same block. The checker did not write the voices.

| Section | Panel | Verdict | Note |
|---|---|---|---|
| Permission rules | Layman | PASS | Same facts: format, 3 lists, order, first match, deny beats allow, enforced by Claude Code. Cite 1 only, cited in Technical. The refund example comes from the lede. |
| Permission rules | Bangla | PASS | Same facts, cite 1. `Read(./.env)`, `allow`, `ask`, `deny`, Claude Code stay in English. |
| Permission modes | Layman | PASS | 4 modes match the table. Danger callout matches. "A deny rule always wins" restates Technical: deny comes before every step that can approve, and S3 also says "even when a hook returned `allow`". Cites 1, 3 are in Technical. |
| Permission modes | Bangla | PASS | Same facts. Mode names, `canUseTool`, Agent SDK, container stay in English. Cites 1, 3. |
| The sandbox | Layman | FAIL | "a command can write only to the project folder and the temp folder, by default" adds "only". Technical does not say "only", and S2 also allows "any directories you've added". Fix: "By default, a command can write to the project folder and the temp folder <Cite n={2} />." |
| The sandbox | Bangla | FAIL | Same problem: "ডিফল্টভাবে একটা কমান্ড শুধু প্রজেক্ট ফোল্ডার আর temp ফোল্ডারে লিখতে পারে". Fix: remove "শুধু": "ডিফল্টভাবে একটা কমান্ড প্রজেক্ট ফোল্ডার আর temp ফোল্ডারে লিখতে পারে <Cite n={2} />।" The rest passes: Seatbelt, `bubblewrap`, macOS, Linux, WSL2 are in the Technical table and stay in English. |
| What a tester can check | Layman | PASS | Tutorial advice. Same 5 tests as Technical. |
| What a tester can check | Bangla | PASS | Same 5 tests. `.env`, `bypassPermissions`, CI job, sandbox stay in English. The injected prompt text stays in English, as in Technical. |

Note: the Network bullet "can reach only the domains that you allow" (Layman and Bangla) matches Technical "A proxy checks each host against your allowed domains". PASS.

Note: if row 10 of `harness-permissions-and-sandboxing.factcheck.md` is fixed by adding `<Cite n={3} />` in Technical, the Layman and Bangla cite 1 on the same sentence stays valid.

## Round 2 (2026-10-28)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| The sandbox | Layman | PASS | "by default, a command can write to the project folder and the temp folder <Cite n={2} />." "only" is gone. Same fact as the Technical "Writes" row. |
| The sandbox | Bangla | PASS | "ডিফল্টভাবে একটা কমান্ড প্রজেক্ট ফোল্ডার আর temp ফোল্ডারে লিখতে পারে <Cite n={2} />।" "শুধু" is gone. |
| Permission modes | Layman, Bangla | PASS | Technical now also cites 3 on the intro sentence. The cite 1 of Layman and Bangla stays valid. |

Open FAILs: 0
