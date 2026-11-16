# Voices fact check: sdet / security-testing

Checked by an independent agent. In each round, a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page compared each Layman and Bangla panel with the Technical panel of the same section, under the standard in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the panels, and the next round checked every panel again. No person who reads Bangla has read the Bangla.

## Round 1 (2026-11-15)

### Voices fact check: sdet / security-testing (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Several problems. The Layman text says "In 2025, number one is Broken Access Control: users reaching what is not theirs", and that gloss is an added explanation. "Well-known list of the biggest security risks" drops "awareness document" and "most critical". "Stop, read, and change the messages" changes "intercept, inspect, modify the traffic in both directions" to messages. "Intruder ... a different value each time" drops "in chosen positions". The Layman text leaves out that Injection is fifth and Authentication Failures is seventh, and that the Proxy works in both directions. It also leaves out the Web Security Academy's "online" and "interactive" labels. |
| What it is | Bangla | PASS | Matches the Technical panel sentence by sentence. Rank, Proxy, Repeater, Intruder, Juice Shop, and Academy facts are all kept with the same scope. The callout says what the Technical callout says. Nothing is left out except small wording. |
| How it works | Layman | FAIL | "A classic failure: you change an id in a request, and you see someone else's account" adds "change an id in a request". The Technical panel says the failure is giving a unique identifier. "A login is weak if it lets a robot try a stolen list of real usernames and passwords" changes "breached" to "stolen" and drops "automated attacks such as credential stuffing". "In SQL, `--` turns the rest of the query into a comment" is close but drops "so the rest is ignored". Left out: IDOR arises from user-supplied input used to access objects directly, Burp's browser is preconfigured, Repeater is for varying parameter values to test for input-based flaws, and the "common" qualifier on the failure. |
| How it works | Bangla | PASS | Every sentence matches the Technical panel, with the same cites. IDOR is defined the same way, `--` is a comment so the rest is ignored, credential stuffing keeps the "breached list", the Proxy workflow keeps the browser being preconfigured, and Repeater keeps the varying parameter values. Nothing is added. |
| Try it | Layman | FAIL | "Burp holds the request: `POST /rest/user/login`" drops the JSON body, which is only a detail. "You get `200` and a token: you are now the admin" drops "the first user" but is not stronger. "`--` hides the password check" is close but is a looser wording for "turns the password check into a comment". "Change the email to ... keep any password" is changed to "Set the email to ...", which is close. Left out: "Docker" is dropped from the step title, and "the request for your own basket" is dropped from step 4. The code block is the same. |
| Try it | Bangla | PASS | Matches the Technical panel step by step, with the same cites. The JSON body detail, `200` with token, "first user, the admin", the own-basket detail, the IDOR label, the curl block, and the Academy line are all kept. |
| How a tester uses it | Layman | FAIL | "Apps are open to injection when they do not check user data" drops "validated, filtered, or sanitized", which is weaker and looser. "Try the tricky inputs" and "Report the fix too" are fine. The "Follow a guide" bullet says "shows what to test", which is not said in S15 and is not in the Technical panel as stated; the Technical panel says "full testing resource". The Layman panel also leaves out "deny by default" for everything except public resources, and the Intruder example of a list of ids. It makes "must check who owns each record" stronger than "should enforce record ownership". |
| How a tester uses it | Bangla | FAIL | "Intruder ... একবার করে পাঠায়" repeats the Technical claim, which is itself unsupported by S9 (see claim 40). "পূর্ণাঙ্গ resource" repeats the unsupported "full" (see claim 43). Otherwise the Bangla follows the Technical panel closely and keeps "should" and "by default". It adds nothing beyond the Technical panel. Marked FAIL because the cited claims it carries do not match their source. |
| Common mistakes | Layman | FAIL | "Burp's own practice site" drops "deliberately vulnerable". "The page hides the buttons you may not use, but a changed request can still get through" carries the Technical panel's unsupported claim and says "a changed request can still get through", which is a looser form of the Technical bypass claim. "Use two accounts" repeats advice that the Technical panel makes. "Robot tries many stolen passwords" changes "breached list of real usernames and passwords" to "stolen passwords" and drops usernames. Left out: modifying the URL, the "attack tool that modifies API requests", and "credential stuffing". |
| Common mistakes | Bangla | FAIL | The Bangla follows the Technical panel closely, but it carries the unsupported claims 48 and 50 ("শুধু তখন, যখন"). Everything else matches: the targets, the two-account advice, credential stuffing, and the payload being only the proof. Marked FAIL because the cited sentences do not match their source. |
| What a tester can check | Layman | PASS | The callout says it is the tutorial's own advice. The list shortens the Technical list without adding facts. Left out: "written" before scope, "for read, change, and delete", "header, and query parameter", "does the app say the same thing for a wrong user and a wrong password", and "stack traces, SQL, and server versions". |
| What a tester can check | Bangla | PASS | Same items as the Technical list, with the same details. The callout says it is advice. Nothing is added. |

Open FAILs: 6

Skipped: I did not read the whole source files, and I judged the Bangla panels by meaning only through the Technical comparison. Risk: the Voices FAIL notes for "Try it" and "What it is" Layman are judgment calls on wording. Re-check them before you edit the page.

FAILs in round 1: 7.

## Round 2 (2026-11-16)

### Voices fact check: sdet / security-testing (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "standard"; Injection fifth and Authentication Failures seventh; "target" app; Juice Shop described as an insecure web application; the module's scope (safe lab to practice penetration test). |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Nothing is added. Left out: nothing of substance. |
| How it works | Layman | FAIL | "Users must not act outside what they are allowed to do" is stronger than "Access control should keep users from...". It also drops the subject, access control. "SQL injection lets an attacker change the app's database queries" changes "interfere with". Left out: "untrusted"; "interpreter"; that the Burp browser is preconfigured; that Repeater suits varying parameter values for input-based flaws. |
| How it works | Bangla | PASS | The meaning matches the Technical panel. The Bangla reads clearly. Nothing is added. Left out: nothing of substance. |
| Try it | Layman | FAIL | "`OR 1=1` is always true" cites S13, and S13 does not say it. The Technical panel has the same fault. The cite on opening `localhost:3000` in Burp's browser (S6) does not support the URL. Left out: "With Docker"; "register a user"; the Technical wording "a JSON body of `email` and `password`". |
| Try it | Bangla | FAIL | "`OR 1=1` শর্ত সবসময় সত্য" ("always true") cites S13, and S13 does not say it. The cite on the `localhost:3000` step (S6) does not support the URL. Left out: nothing else of substance. |
| How a tester uses it | Layman | FAIL | "The server must check who owns each record" is stronger than "Access control should enforce record ownership". "Send each request" drops "that carries an id". Left out: "deny by default"; the "predefined positions" limit; the list-of-ids example; "web application" for developers. |
| How a tester uses it | Bangla | PASS | The meaning matches the Technical panel. "উচিত" keeps "should". Left out: nothing of substance. |
| Common mistakes | Layman | PASS | Every fact is in the Technical panel. Left out: "ask as one user for an object of the other"; "deliberately"; that the access checks are bypassed on the app side. |
| Common mistakes | Bangla | PASS | The meaning matches the Technical panel. Nothing is added. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | It is advice only and adds no fact. Left out: "written" before scope; read/change/delete; header and query parameter; same message for wrong user and wrong password; stack traces, SQL and server versions. |
| What a tester can check | Bangla | PASS | It matches the Technical callout item by item. Nothing is added. Left out: nothing. |

Open FAILs: 4

FAILs in round 2: 4.

## Round 3 (2026-11-16)

Stopped: a safety classifier stopped the checker before it wrote its tables, so this round gave no verdicts.

## Round 4 (2026-11-16)

Stopped: a safety classifier stopped the checker before it wrote its tables, so this round gave no verdicts.

## Round 5 (2026-11-16)

### Voices fact check: sdet / security-testing (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Drops the fifth/seventh ranking for Injection/Authentication Failures, and drops tool details (change in "both ways" vs "both directions" is equivalent wording). |
| What it is | Bangla | PASS | Matches Technical fully, including rankings and all tool descriptions. |
| How it works | Layman | PASS | Drops "An app is weak if..." framing nuance (kept same meaning), drops repeat of Repeater's general-purpose sentence ("made for sending a request with varying parameter values"). |
| How it works | Bangla | PASS | Full match to Technical, including the Repeater general-purpose sentence. |
| Try it | Layman | PASS | Minor wording changes only ("says" vs "answers"); same facts and same cites. |
| Try it | Bangla | PASS | Same facts, same structure, same cites as Technical. |
| How a tester uses it | Layman | PASS | Drops "predefined positions" (kept "each time"), drops the explicit "enforce record ownership"/"deny by default" distinction into one merged "check who owns" sentence — still true and no stronger. |
| How a tester uses it | Bangla | PASS | Matches Technical closely, including "deny by default" clause and "predefined positions" wording. |
| Common mistakes | Layman | PASS | Same facts as Technical, same cites, just simplified phrasing ("changing the URL" vs "modifying the URL"). |
| Common mistakes | Bangla | PASS | Same facts as Technical, same cites. |
| What a tester can check | Layman | PASS | This is tutorial's own advice (no cites, callout), so no source-fact issue; Layman drops detail ("and a written scope" → "and a scope", drops "for read, change, and delete", drops "does the app say the same thing for a wrong user and wrong password", drops "stack traces, SQL, and server versions" → "technical details"). All omissions, not added claims. |
| What a tester can check | Bangla | PASS | Matches Technical callout content fully, same list items and same detail level. |

Open FAILs: 0

FAILs in round 5: 0.

## Round 6 (2026-11-16)

### Voices fact check: sdet / security-testing (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Leaves out: "standard" (document), that Injection is fifth and Authentication Failures seventh, and the "from a safe lab to a practice penetration test" detail of the Security Testing module |
| What it is | Bangla | PASS | Near-complete translation; leaves out nothing of substance |
| How it works | Layman | PASS | Leaves out: "deny by default" rule, "That browser is preconfigured to work with Burp", "Repeater is made for sending a request with varying parameter values, to test for input-based flaws" |
| How it works | Bangla | PASS | Full translation; no facts added |
| Try it | Layman | PASS | Leaves out: "from the WHERE clause" detail, the `200` status code in step 4 |
| Try it | Bangla | PASS | Full translation, including "WHERE clause" detail; no facts added |
| How a tester uses it | Layman | PASS | Leaves out: "deny by default" rule, "in predefined positions", "cybersecurity" qualifier for WSTG resource |
| How a tester uses it | Bangla | PASS | Full translation; no facts added |
| Common mistakes | Layman | PASS | Minor rewording only ("Testing without permission" vs "Testing a target without permission"); no facts added or changed |
| Common mistakes | Bangla | PASS | Full translation; no facts added |
| What a tester can check | Layman | PASS | Leaves out: "for read, change, and delete" qualifier, the "wrong user vs wrong password" question, and replaces "stack traces, SQL, and server versions" with the general term "technical details" |
| What a tester can check | Bangla | PASS | Full translation, keeps all enumerated details (header, query parameter, stack trace, SQL, server version, wrong user/password) |

Open FAILs: 0

FAILs in round 6: 0.

## Round 7 (2026-11-16)

### Voices fact check: sdet / security-testing (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Drops "standard"; drops the "Injection is fifth, Authentication Failures is seventh" detail; drops full descriptions of Juice Shop ("insecure web application for security training") and Web Security Academy ("interactive labs") wording, merging them into one short sentence |
| What it is | Bangla | PASS | Close translation, keeps all facts of Technical (A01/A05/A07 ranking, full Proxy/Repeater/Intruder and Juice Shop/WSA descriptions); no omissions beyond translation |
| How it works | Layman | PASS | Drops "That browser is preconfigured to work with Burp"; drops "Repeater is made for sending a request with varying parameter values, to test for input-based flaws" |
| How it works | Bangla | PASS | Full translation, all Technical facts kept including preconfigured-browser detail and Repeater's purpose statement |
| Try it | Layman | PASS | Minor wording trims only (e.g. "practice app" shortened); no facts added or changed |
| Try it | Bangla | PASS | Full translation of all steps, same facts and numbers |
| How a tester uses it | Layman | PASS | Drops "and everything except public resources should be denied by default"; drops "in predefined positions"; simplifies "cybersecurity testing resource" wording |
| How a tester uses it | Bangla | PASS | Full translation, keeps "deny by default" rule and all other Technical details |
| Common mistakes | Layman | PASS | Drops "ask as one user for an object of the other" detail (keeps "Test it with two accounts") |
| Common mistakes | Bangla | PASS | Full translation, keeps the "ask as one user for an object of the other" detail |
| What a tester can check | Layman | PASS | Drops "written" before "scope"; drops "object"/"for read, change, and delete"; drops "header, and query parameter" (says "field" only); drops "does the app say the same thing for a wrong user and a wrong password"; generalizes "stack traces, SQL, and server versions" to "technical details" |
| What a tester can check | Bangla | PASS | Full translation, keeps all Technical checklist details (written permission and written scope, read/change/delete, field/header/query parameter, same-message login check, stack trace/SQL/server version) |

Open FAILs: 0

FAILs in round 7: 0.

Open FAILs: 0
