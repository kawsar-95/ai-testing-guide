# Voice fact-check: Shell Scripting (round 1, 2026-10-20)

Page: `content/linux/shell-scripting.mdx`. I did not write this page.

Method: I read the 6 `<Voices>` blocks (Shell Programming, Variables, Literals, Conditionals, Loops, Debugging). For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a version, a flag, a command, a path, a product name, a scope, or a condition, is a FAIL. An omission is not a FAIL. For each `<Cite n>` in a voice panel, I checked two things. The Technical panel of the same section must cite the same `n`. The source must support the same claim as in the Technical panel (the Technical cites are the base). I read the Bangla text for meaning and natural use (আপনি, English technical terms, a hyphen between an English word and a Bangla suffix). I ran a script that finds an English word joined to a Bangla suffix with no hyphen: it found none. A language problem is a FAIL only if it changes or hides the meaning.

Flagged items:

- Tutorial advice in voices: each "Tutorial's own advice" sentence in a Layman or Bangla panel appears in the Technical callout of the same section and has no cite. PASS.
- Layman and Bangla panels leave out the "Why it matters for testing" sentences and the code blocks. These are omissions, not FAILs.
- Technical sentences about a dash test ("dash rejected it in a test") appear in the Bangla panels and in some Layman panels. They match the Technical text.
- Literals, Layman: "The tutorial's own advice: `$((08))` is an error" labels a fact as advice. The Technical callout has the same label, so this is not a FAIL.
- Loops, Bangla: "`while`-এর ভেতরে pipe করবেন না" says "inside", and the Technical says "into". The Bangla text keeps the correct reason and fix in the next sentences, so this is a language note, not a FAIL (row marked below).

| # | Section | Voice | Claim (English gloss for Bangla) | Technical sentence (quoted) | Verdict | Language |
|---|---|---|---|---|---|---|
| 1 | Shell Programming | Layman | A shell passes your commands to the operating system [2] | "A shell is a program that passes your commands to the operating system. [2]" | PASS | – |
| 2 | Shell Programming | Layman | A shell script is a text file of such commands | "A shell script is a text file of such commands." | PASS | – |
| 3 | Shell Programming | Layman | Bash runs it with no person at the prompt [11] | "Bash runs it in a non-interactive shell, with no person at the prompt. [11]" | PASS (drops the name "non-interactive shell"; an omission) | – |
| 4 | Shell Programming | Layman | The first line is the shebang: `#!` and the path of an interpreter; the kernel reads it when it runs the file | "The first line is the shebang, `#!` plus the path of an interpreter. The kernel reads it when it runs the file." | PASS | – |
| 5 | Shell Programming | Layman | The file must have the execute permission [41] | "The file needs the execute permission. [41]" | PASS | – |
| 6 | Shell Programming | Layman | `chmod +x` adds it [42] | "`chmod +x` adds that permission. [42]" | PASS | – |
| 7 | Shell Programming | Layman | `./setup.sh` runs in a child shell, so its variables are lost at the end [11] | "`./setup.sh` runs the file in a child shell, so its variables vanish at the end. [11]" | PASS | – |
| 8 | Shell Programming | Layman | `. ./setup.sh` (or `source`) runs it in the current shell [35] | "`. ./setup.sh` (or `source`) runs it in the current shell. [35] [36]" | PASS (cites only 35; Technical cites 35 and 36) | – |
| 9 | Shell Programming | Layman | Each command ends with an exit status from 0 to 255; zero means success; `$?` holds the last status [12][15] | "Every command ends with an exit status from 0 to 255. Zero means success. `$?` holds the last status. [12] [15]" | PASS | – |
| 10 | Shell Programming | Layman | A script returns the status of its last command [38] | "A script returns the status of its last command. [38]" | PASS | – |
| 11 | Shell Programming | Layman | POSIX defines the portable shell language [39] | "POSIX defines the portable shell language. [39]" | PASS | – |
| 12 | Shell Programming | Layman | ShellCheck finds mistakes before a run and reports through its exit status, so CI can run it [45][49] | "ShellCheck finds mistakes before a run and reports through its exit status, so CI can run it. [45] [49]" | PASS | – |
| 13 | Shell Programming | Layman | Tutorial's own advice: in CI, check the exit status, not the printed text | "Tutorial's own advice: start each CI script with a shebang and run `shellcheck` on it in the pipeline. Check the exit status, not the printed text." | PASS | – |
| 14 | Shell Programming | Bangla | A shell is a program that passes your commands to the operating system [2] | "A shell is a program that passes your commands to the operating system. [2]" | PASS | OK |
| 15 | Shell Programming | Bangla | A shell script is a text file of such commands | "A shell script is a text file of such commands." | PASS | OK |
| 16 | Shell Programming | Bangla | Bash runs it in a non-interactive shell, meaning no person at the prompt [11] | "Bash runs it in a non-interactive shell, with no person at the prompt. [11]" | PASS | OK |
| 17 | Shell Programming | Bangla | The first line is the shebang: `#!` and the path of an interpreter | "The first line is the shebang, `#!` plus the path of an interpreter." | PASS | OK |
| 18 | Shell Programming | Bangla | The kernel reads this line when it runs the file | "The kernel reads it when it runs the file." | PASS | OK |
| 19 | Shell Programming | Bangla | The file must have the execute permission [41] | "The file needs the execute permission. [41]" | PASS | OK |
| 20 | Shell Programming | Bangla | `chmod +x` adds this permission [42] | "`chmod +x` adds that permission. [42]" | PASS | OK |
| 21 | Shell Programming | Bangla | `#!/usr/bin/env bash` finds the first `bash` in `PATH` [11] | "`#!/usr/bin/env bash` finds the first `bash` in `PATH`. [11]" | PASS | OK |
| 22 | Shell Programming | Bangla | `./setup.sh` runs the file in a child shell, so its variables are lost at the end [11] | "`./setup.sh` runs the file in a child shell, so its variables vanish at the end. [11]" | PASS | OK |
| 23 | Shell Programming | Bangla | `. ./setup.sh` (or `source`) runs it in the current shell [35][36] | "`. ./setup.sh` (or `source`) runs it in the current shell. [35] [36]" | PASS | OK |
| 24 | Shell Programming | Bangla | Each command ends with an exit status from 0 to 255; 0 means success; `$?` holds the last status [12][15] | "Every command ends with an exit status from 0 to 255. Zero means success. `$?` holds the last status. [12] [15]" | PASS | OK |
| 25 | Shell Programming | Bangla | A script returns the status of its last command [38] | "A script returns the status of its last command. [38]" | PASS | OK |
| 26 | Shell Programming | Bangla | POSIX defines the portable shell language [39] | "POSIX defines the portable shell language. [39]" | PASS | OK |
| 27 | Shell Programming | Bangla | ShellCheck finds mistakes before a run and reports through its exit status, so CI can run it [45][49] | "ShellCheck finds mistakes before a run and reports through its exit status, so CI can run it. [45] [49]" | PASS | OK |
| 28 | Shell Programming | Bangla | Tutorial's own advice: in CI check the exit status, not the printed text | Tutorial's own advice: ... Check the exit status, not the printed text. (callout) | PASS | OK |
| 29 | Variables | Layman | A variable keeps a value under a name; write `name=value` with no spaces around `=` [13] | "A variable holds a value under a name. Assign it as `name=value`, with no spaces around `=`. [13]" | PASS | – |
| 30 | Variables | Layman | Read with `$name` and quote it: `"$name"` | "Read it with `$name`, and quote the read: `"$name"`." | PASS | – |
| 31 | Variables | Layman | Without quotes the shell splits the value at spaces and then treats it as a filename pattern such as `*.txt` [46][32] | "An unquoted value is split at spaces and then treated as a glob, a filename pattern such as `*.txt`. [46] [32]" | PASS | – |
| 32 | Variables | Layman | If the variable is unset or empty, `${name:-default}` gives a default and `${name:?message}` stops the script with an error | "`${name:-default}` gives a default when the variable is unset or empty. `${name:?message}` stops a script with an error in that case." | PASS | – |
| 33 | Variables | Layman | `${#name}` gives the length [16] | "`${#name}` gives the length. [16]" | PASS | – |
| 34 | Variables | Layman | Script arguments are `$1`, `$2`, and so on [14] | "Script arguments arrive as positional parameters `$1`, `$2`, and so on. [14]" | PASS | – |
| 35 | Variables | Layman | `$#` is their count, `$0` is the script name, `"$@"` gives each argument as a separate word [15] | "`$#` is their count, and `$0` is the name of the script. `"$@"` gives each argument as one separate word. [15]" | PASS | – |
| 36 | Variables | Layman | A variable stays in the current shell; `export` gives it to child processes [35][19] | "A shell variable lives in the current shell only. `export` adds it to the environment, the list of name-value pairs that child processes inherit. [35] [19]" | PASS | – |
| 37 | Variables | Layman | `readonly` stops later changes [4][35] | "`readonly` blocks later changes with an error. [4] [35]" | PASS | – |
| 38 | Variables | Layman | The shell replaces `$(command)` with the output of the command [17] | "`$(command)` is command substitution: it is replaced by the output of the command. [17]" | PASS | – |
| 39 | Variables | Layman | An array is a list of values; bash, ksh, zsh support arrays; dash rejected one in a test [18][46] | "An array is a list of values. It works in bash, ksh, and zsh, but dash rejected it in a test. [18] [46]" | PASS | – |
| 40 | Variables | Layman | Tutorial's own advice: never print variables that hold tokens or passwords into the job log | Never print variables that hold tokens or passwords into the job log. (callout "Tutorial's own advice") | PASS | – |
| 41 | Variables | Bangla | A variable holds a value under a name | "A variable holds a value under a name." | PASS | OK |
| 42 | Variables | Bangla | Write `name=value`, no spaces around `=` [13] | "Assign it as `name=value`, with no spaces around `=`. [13]" | PASS | OK |
| 43 | Variables | Bangla | Read with `$name`, quote the read: `"$name"` | "Read it with `$name`, and quote the read: `"$name"`." | PASS | OK |
| 44 | Variables | Bangla | Unquoted: value splits at spaces, then the shell treats it as a glob, a filename pattern like `*.txt` [46][32] | "An unquoted value is split at spaces and then treated as a glob, a filename pattern such as `*.txt`. [46] [32]" | PASS | OK |
| 45 | Variables | Bangla | Parameter expansion changes a value as the shell reads it | "Parameter expansion changes a value as the shell reads it." | PASS | OK |
| 46 | Variables | Bangla | If the variable is unset or empty, `${name:-default}` gives a default and `${name:?message}` stops the script with an error | "`${name:-default}` gives a default when the variable is unset or empty. `${name:?message}` stops a script with an error in that case." | PASS | OK |
| 47 | Variables | Bangla | `${#name}` gives the length [16] | "`${#name}` gives the length. [16]" | PASS | OK |
| 48 | Variables | Bangla | Script arguments come as positional parameters `$1`, `$2` and so on [14] | "Script arguments arrive as positional parameters `$1`, `$2`, and so on. [14]" | PASS | OK |
| 49 | Variables | Bangla | `$#` is their count, `$0` is the script name, `"$@"` gives each argument as one separate word [15] | "`$#` is their count, and `$0` is the name of the script. `"$@"` gives each argument as one separate word. [15]" | PASS | OK |
| 50 | Variables | Bangla | A shell variable lives in the current shell only | "A shell variable lives in the current shell only." | PASS | OK |
| 51 | Variables | Bangla | `export` adds it to the environment, which child processes inherit [35][19] | "`export` adds it to the environment, the list of name-value pairs that child processes inherit. [35] [19]" | PASS (drops "list of name-value pairs"; an omission) | OK |
| 52 | Variables | Bangla | `readonly` blocks later changes with an error [4][35] | "`readonly` blocks later changes with an error. [4] [35]" | PASS | OK |
| 53 | Variables | Bangla | `$(command)` is command substitution: the output of the command takes its place [17] | "`$(command)` is command substitution: it is replaced by the output of the command. [17]" | PASS | OK |
| 54 | Variables | Bangla | An array is a list of values; works in bash, ksh, zsh; dash rejected it in a test [18][46] | "An array is a list of values. It works in bash, ksh, and zsh, but dash rejected it in a test. [18] [46]" | PASS | OK |
| 55 | Variables | Bangla | Tutorial's own advice: keep the base URL and the environment name in variables with defaults, such as `${TARGET_ENV:-staging}` | "Tutorial's own advice: keep the base URL, browser, and environment name in variables with defaults, such as `${TARGET_ENV:-staging}`." | PASS (drops "browser"; an omission) | OK |
| 56 | Variables | Bangla | Never print variables that hold tokens or passwords into the job log | "Never print variables that hold tokens or passwords into the job log." | PASS | OK |
| 57 | Literals | Layman | A literal is text that the shell takes exactly as written; quotes switch off the special meaning of characters | "A literal is text that the shell takes as written. Quoting switches off the special meaning of characters." | PASS | – |
| 58 | Literals | Layman | Single quotes keep every character literal; a single quote cannot go inside them [21] | "Single quotes keep every character literal, and a single quote cannot appear inside them. [21]" | PASS | – |
| 59 | Literals | Layman | To add one: close the string, write `\'`, open the string again [5] | "To place one, close the string, add `\'`, and open it again. [5]" | PASS | – |
| 60 | Literals | Layman | Double quotes keep most characters literal, but `$`, the backtick, and `\` stay active [22] | "Double quotes keep most characters literal, but `$`, the backtick, and `\` stay active. [22]" | PASS | – |
| 61 | Literals | Layman | Outside quotes, a backslash makes the next character literal [20] | "A backslash outside quotes makes the next character literal. [20]" | PASS | – |
| 62 | Literals | Layman | `$'...'` decodes escapes such as `\n` and `\t` [23] | "`$'...'` decodes escapes such as `\n` and `\t`. [23]" | PASS (drops the POSIX 2024 and dash sentence; an omission) | – |
| 63 | Literals | Layman | A here-document gives several lines of input to a command | "A here-document gives several lines to a command as input." | PASS | – |
| 64 | Literals | Layman | The word after `<<` marks the end; if quoted, nothing inside expands; if not, variables and `$(...)` expand | "The word after `<<` is the end marker. If you quote the marker, nothing inside expands. Otherwise variables and `$(...)` expand." | PASS | – |
| 65 | Literals | Layman | With `<<-` the shell removes leading tabs, so you can indent the text [24] | "With `<<-`, the shell strips leading tabs, so you can indent the text. [24]" | PASS | – |
| 66 | Literals | Layman | `$((expression))` does arithmetic on whole numbers [26][25] | "`$((expression))` does arithmetic on whole numbers with C operators. [26] [25]" | PASS (drops "with C operators"; an omission) | – |
| 67 | Literals | Layman | A leading `0` means octal, `0x` means hexadecimal [25] | "A leading `0` means octal, and `0x` means hexadecimal. [25]" | PASS | – |
| 68 | Literals | Layman | POSIX requires only decimal, octal, and hexadecimal constants, so other shells may reject `base#n` [25][39] | "POSIX requires only decimal, octal, and hexadecimal constants, so other shells may reject `base#n`. Dash did in a test. [25] [39]" | PASS (drops the dash result; an omission. It does not say what `base#n` is, but the term has no other use here.) | – |
| 69 | Literals | Layman | Tutorial's own advice: `$((08))` is an error, because `08` is not a valid octal number | Beware of leading zeros: `$((08))` is an error, because `08` is not a valid octal number. (callout "Tutorial's own advice") | PASS | Note: the sentence is a fact, not advice, so "own advice" is a loose label. The meaning is the same as the callout. |
| 70 | Literals | Bangla | A literal is text that the shell takes exactly as written | "A literal is text that the shell takes as written." | PASS | OK |
| 71 | Literals | Bangla | Quoting switches off the special meaning of characters | "Quoting switches off the special meaning of characters." | PASS | OK |
| 72 | Literals | Bangla | Inside single quotes every character is literal and a single quote cannot go inside [21] | "Single quotes keep every character literal, and a single quote cannot appear inside them. [21]" | PASS | OK |
| 73 | Literals | Bangla | To place one: close the string, add `\'`, open it again [5] | "To place one, close the string, add `\'`, and open it again. [5]" | PASS | OK |
| 74 | Literals | Bangla | Double quotes keep most characters literal, but `$`, backtick, `\` stay active [22] | "Double quotes keep most characters literal, but `$`, the backtick, and `\` stay active. [22]" | PASS | OK |
| 75 | Literals | Bangla | A backslash outside quotes makes the next character literal [20] | "A backslash outside quotes makes the next character literal. [20]" | PASS | OK |
| 76 | Literals | Bangla | `$'...'` decodes escapes such as `\n` and `\t` [23] | "`$'...'` decodes escapes such as `\n` and `\t`. [23]" | PASS | OK |
| 77 | Literals | Bangla | The 2024 POSIX standard defines it, but dash did not decode it in a test [39] | "The 2024 POSIX standard defines it, but dash did not decode it in a test. [39]" | PASS | OK |
| 78 | Literals | Bangla | A here-document gives several lines to a command as input | "A here-document gives several lines to a command as input." | PASS | OK |
| 79 | Literals | Bangla | The word after `<<` is the end marker; if quoted nothing expands; if not, variables and `$(...)` expand | "The word after `<<` is the end marker. If you quote the marker, nothing inside expands. Otherwise variables and `$(...)` expand." | PASS | OK |
| 80 | Literals | Bangla | With `<<-` the shell strips leading tabs, so you can indent [24] | "With `<<-`, the shell strips leading tabs, so you can indent the text. [24]" | PASS | OK |
| 81 | Literals | Bangla | `$((expression))` does arithmetic on whole numbers with C operators [26][25] | "`$((expression))` does arithmetic on whole numbers with C operators. [26] [25]" | PASS | OK |
| 82 | Literals | Bangla | A leading `0` means octal, `0x` means hexadecimal [25] | "A leading `0` means octal, and `0x` means hexadecimal. [25]" | PASS | OK |
| 83 | Literals | Bangla | `base#n` writes a number in another base | "The form `base#n` writes a number in another base." | PASS | OK |
| 84 | Literals | Bangla | POSIX requires only decimal, octal, hexadecimal constants, so other shells may reject `base#n` [25][39] | "POSIX requires only decimal, octal, and hexadecimal constants, so other shells may reject `base#n`. [25] [39]" | PASS | Note: "চায়" for "requires" is informal. The meaning stays. "বাধ্যতামূলক করে" or "শুধু ... constant-ই নির্ধারণ করে" is more exact. |
| 85 | Literals | Bangla | Dash rejected it in a test | "Dash did in a test." | PASS | OK |
| 86 | Literals | Bangla | Tutorial's own advice: `$((08))` is an error, because `08` is not a valid octal number | "Beware of leading zeros: `$((08))` is an error, because `08` is not a valid octal number." | PASS | OK |
| 87 | Conditionals | Layman | `if` runs a command and reads its exit status; zero means true, any other value false [12] | "`if` runs a command and reads its exit status. Zero means true. Any other value means false. [12]" | PASS | – |
| 88 | Conditionals | Layman | `elif` and `else` add more branches [27] | "`elif` and `else` add more branches. [27]" | PASS | – |
| 89 | Conditionals | Layman | `[ ... ]` is the `test` command; it needs spaces around the brackets and each operator [35][43] | "`[ ... ]` is the `test` command, so it needs spaces around the brackets and around each operator. [35] [43]" | PASS | – |
| 90 | Conditionals | Layman | `[[ ... ]]` is a Bash keyword that POSIX leaves unspecified [27][39] | "`[[ ... ]]` is a Bash keyword that POSIX leaves unspecified. [27] [39]" | PASS | – |
| 91 | Conditionals | Layman | It does not split words; it matches patterns with `==` and regular expressions with `=~` [27] | "It does not split words, it matches patterns with `==`, and `=~` matches a regular expression. [27]" | PASS | – |
| 92 | Conditionals | Layman | Inside `[ ]`, use a single `=` for portability [28] | "Use a single `=` inside `[ ]` for portability. [28]" | PASS | – |
| 93 | Conditionals | Layman | `-f` regular file, `-d` directory, `-e` a path that exists, `-r` a readable file [28] | "File tests: `-f` regular file, `-d` directory, `-e` exists, `-r` readable. [28]" | PASS ("a path that exists" for "exists"; same meaning) | – |
| 94 | Conditionals | Layman | Numbers use `-eq -ne -lt -le -gt -ge`; strings use `= !=` [7][28] | "Numbers use `-eq -ne -lt -le -gt -ge`. Strings use `= !=`. [7] [28]" | PASS | – |
| 95 | Conditionals | Layman | In `[ ]`, quote each variable [32] | "In `[ ]`, quote each variable. [32]" | PASS (drops the reason; an omission) | – |
| 96 | Conditionals | Layman | `&&` runs the next command only after success, `\|\|` only after failure [29] | "`&&` runs the next command only after success. `\|\|` runs it only after failure. [29]" | PASS | – |
| 97 | Conditionals | Layman | `a && b \|\| c` is not if/else, because `c` also runs when `b` fails | "`a && b \|\| c` is not if/else: `c` also runs when `b` fails." | PASS | – |
| 98 | Conditionals | Layman | `cd "$dir" \|\| exit 1` stops the script when `cd` fails [48] | "`cd "$dir" \|\| exit 1` stops a script when `cd` fails. [48]" | PASS | – |
| 99 | Conditionals | Layman | `case` compares one word with patterns [27] | "`case` compares one word with patterns and ends each branch with `;;`. [27]" | PASS (drops `;;`; an omission) | – |
| 100 | Conditionals | Bangla | `if` runs a command and reads its exit status; 0 means true, any other value false [12] | "`if` runs a command and reads its exit status. Zero means true. Any other value means false. [12]" | PASS | OK |
| 101 | Conditionals | Bangla | The command can be any program, such as `grep -q` | "The command can be any program, such as `grep -q`." | PASS | OK |
| 102 | Conditionals | Bangla | `elif` and `else` add more branches [27] | "`elif` and `else` add more branches. [27]" | PASS | OK |
| 103 | Conditionals | Bangla | Two forms compare values | "Two forms compare values." | PASS | OK |
| 104 | Conditionals | Bangla | `[ ... ]` is the `test` command, so spaces are needed around the brackets and each operator [35][43] | "`[ ... ]` is the `test` command, so it needs spaces around the brackets and around each operator. [35] [43]" | PASS | OK |
| 105 | Conditionals | Bangla | `[[ ... ]]` is a Bash keyword that POSIX leaves unspecified [27][39] | "`[[ ... ]]` is a Bash keyword that POSIX leaves unspecified. [27] [39]" | PASS | OK |
| 106 | Conditionals | Bangla | It does not split words, matches patterns with `==`, matches a regular expression with `=~` [27] | "It does not split words, it matches patterns with `==`, and `=~` matches a regular expression. [27]" | PASS | OK |
| 107 | Conditionals | Bangla | For portability use a single `=` inside `[ ]` [28] | "Use a single `=` inside `[ ]` for portability. [28]" | PASS | OK |
| 108 | Conditionals | Bangla | File tests: `-f` regular file, `-d` directory, `-e` exists, `-r` readable [28] | "File tests: `-f` regular file, `-d` directory, `-e` exists, `-r` readable. [28]" | PASS | OK |
| 109 | Conditionals | Bangla | Numbers use `-eq -ne -lt -le -gt -ge`; strings use `= !=` [7][28] | "Numbers use `-eq -ne -lt -le -gt -ge`. Strings use `= !=`. [7] [28]" | PASS | OK |
| 110 | Conditionals | Bangla | In `[ ]` quote each variable; an empty unquoted variable vanishes and the test breaks [32] | "In `[ ]`, quote each variable. An empty unquoted variable vanishes and leaves a broken test. [32]" | PASS | OK |
| 111 | Conditionals | Bangla | `&&` runs the next command only after success, `\|\|` only after failure [29] | "`&&` runs the next command only after success. `\|\|` runs it only after failure. [29]" | PASS | OK |
| 112 | Conditionals | Bangla | `a && b \|\| c` is not if/else: `c` also runs when `b` fails | "`a && b \|\| c` is not if/else: `c` also runs when `b` fails." | PASS | OK |
| 113 | Conditionals | Bangla | `cd "$dir" \|\| exit 1` stops the script when `cd` fails [48] | "`cd "$dir" \|\| exit 1` stops a script when `cd` fails. [48]" | PASS | OK |
| 114 | Conditionals | Bangla | `case` compares one word with patterns and each branch ends with `;;` [27] | "`case` compares one word with patterns and ends each branch with `;;`. [27]" | PASS | OK |
| 115 | Loops | Layman | A loop repeats commands; `for name in words; do ...; done` runs one time for each word | "A loop repeats commands. `for name in words; do ...; done` runs once for each word." | PASS | – |
| 116 | Loops | Layman | `while` repeats while its test succeeds; `until` repeats while its test fails [30][8] | "`while` repeats as long as its test succeeds. `until` repeats as long as it fails, so it is a `while` with the test reversed. [30] [8]" | PASS (drops "a `while` with the test reversed"; an omission) | – |
| 117 | Loops | Layman | Put `;` or a new line before `do` [9][30] | "Put `;` or a newline before `do`. [9] [30]" | PASS | – |
| 118 | Loops | Layman | `break` stops the loop, `continue` starts the next round [35] | "`break` leaves the loop, and `continue` starts the next round. [35]" | PASS | – |
| 119 | Loops | Layman | To loop over files use a glob, not `$(ls)`; the shell splits the output of `ls` at spaces, so `my report.txt` becomes two words [47] | "To loop over files, use a glob, not `$(ls)`. The output of `ls` is split at spaces, so `my report.txt` becomes two words. [47]" | PASS | – |
| 120 | Loops | Layman | If no file matches, the glob stays as typed, so test each name with `[ -e "$f" ] \|\| continue` [31] | "If nothing matches, the glob stays as typed, so test with `[ -e "$f" ] \|\| continue`. [31]" | PASS | – |
| 121 | Loops | Layman | Put `--` before names that can start with a dash [6] | "Use `--` before names that may start with a dash. [6]" | PASS | – |
| 122 | Loops | Layman | To read a file one line at a time use `while IFS= read -r line`; `-r` keeps backslashes [36] | "To read a file line by line, use `while IFS= read -r line`. `-r` keeps backslashes. [36]" | PASS | – |
| 123 | Loops | Layman | An empty `IFS` keeps leading spaces [32][6] | "An empty `IFS` keeps leading spaces. [32] [6]" | PASS | – |
| 124 | Loops | Layman | Do not pipe into `while`; each part of a pipeline runs in its own subshell, so the loop loses its variables [33] | "Do not pipe into `while`. Each part of a pipeline runs in its own subshell, a child copy of the shell, so variables set in the loop are lost. [33]" | PASS (drops "a child copy of the shell"; an omission) | – |
| 125 | Loops | Layman | Write `done < file` instead | "Write `done < file` instead." | PASS | – |
| 126 | Loops | Layman | Tutorial's own advice: when `until` waits for a service, always add a counter or a time limit | "Tutorial's own advice: use `until` to wait for a service, and always add a counter or a time limit." | PASS | – |
| 127 | Loops | Bangla | A loop repeats commands; `for name in words; do ...; done` runs once for each word | "A loop repeats commands. `for name in words; do ...; done` runs once for each word." | PASS | OK |
| 128 | Loops | Bangla | `while` runs as long as its test succeeds; `until` as long as it fails, so it is a `while` with the test reversed [30][8] | "`while` repeats as long as its test succeeds. `until` repeats as long as it fails, so it is a `while` with the test reversed. [30] [8]" | PASS | OK |
| 129 | Loops | Bangla | Put `;` or a newline before `do` [9][30] | "Put `;` or a newline before `do`. [9] [30]" | PASS | OK |
| 130 | Loops | Bangla | `break` leaves the loop, `continue` starts the next round [35] | "`break` leaves the loop, and `continue` starts the next round. [35]" | PASS | OK |
| 131 | Loops | Bangla | C-style `for ((i=0; i<3; i++))` is a Bash form; dash rejected it in a test [30] | "The C-style `for ((i=0; i<3; i++))` is a Bash form; dash rejected it in a test. [30]" | PASS | OK |
| 132 | Loops | Bangla | To loop over files use a glob, not `$(ls)` | "To loop over files, use a glob, not `$(ls)`." | PASS | OK |
| 133 | Loops | Bangla | The output of `ls` is split at spaces, so `my report.txt` becomes two words [47] | "The output of `ls` is split at spaces, so `my report.txt` becomes two words. [47]" | PASS | OK |
| 134 | Loops | Bangla | If nothing matches, the glob stays as typed, so test with `[ -e "$f" ] \|\| continue` [31] | "If nothing matches, the glob stays as typed, so test with `[ -e "$f" ] \|\| continue`. [31]" | PASS | OK |
| 135 | Loops | Bangla | Put `--` before names that may start with a dash [6] | "Use `--` before names that may start with a dash. [6]" | PASS | OK |
| 136 | Loops | Bangla | To read a file line by line use `while IFS= read -r line`; `-r` keeps backslashes [36] | "To read a file line by line, use `while IFS= read -r line`. `-r` keeps backslashes. [36]" | PASS | OK |
| 137 | Loops | Bangla | An empty `IFS` keeps leading spaces [32][6] | "An empty `IFS` keeps leading spaces. [32] [6]" | PASS | OK |
| 138 | Loops | Bangla | Do not pipe into `while` | "Do not pipe into `while`." | PASS | Note: "`while`-এর ভেতরে pipe করবেন না" means "do not pipe inside `while`", not "into". The next sentence and `done < file` give the right idea. Fix: "`while`-এ pipe করে input দেবেন না।" |
| 139 | Loops | Bangla | Each part of a pipeline runs in its own subshell, so variables set in the loop are lost [33] | "Each part of a pipeline runs in its own subshell, a child copy of the shell, so variables set in the loop are lost. [33]" | PASS (drops "a child copy of the shell"; an omission) | OK |
| 140 | Loops | Bangla | Write `done < file` instead | "Write `done < file` instead." | PASS | OK |
| 141 | Loops | Bangla | Tutorial's own advice: when `until` waits for a service, always add a counter or a time limit | "Tutorial's own advice: use `until` to wait for a service, and always add a counter or a time limit." | PASS | OK |
| 142 | Debugging | Layman | `bash -n script.sh` reports syntax errors and runs nothing [34][10] | "`bash -n script.sh` reads a script, reports syntax errors, and runs nothing. [34] [10]" | PASS | – |
| 143 | Debugging | Layman | `bash -x script.sh` prints each command after expansion [34] | "`bash -x script.sh` prints each command after expansion. [34]" | PASS | – |
| 144 | Debugging | Layman | `PS4` sets the start of each trace line; `BASH_SOURCE` and `LINENO` add the file and the line | "The `PS4` variable sets the prefix of each trace line, and `BASH_SOURCE` and `LINENO` add file and line." | PASS | – |
| 145 | Debugging | Layman | Put `PS4` in single quotes, so it expands at each trace [37] | "Use single quotes, so `PS4` expands at each trace. [37]" | PASS | Note: "Put `PS4` in single quotes" is loose. The Technical means to quote the value that you assign to `PS4`. The meaning is close enough. |
| 146 | Debugging | Layman | `set -e` stops a script after a command fails; it ignores a failure in an `if` test | "`set -e` stops a script after a failed command. It ignores a failure in an `if` test. [34]" | PASS | – |
| 147 | Debugging | Layman | It also ignores failures before the last command of a `&&` or `\|\|` list, and of a pipeline without `pipefail` | "It also ignores failures before the last command of a `&&` or `\|\|` list, and of a pipeline without `pipefail`. [34]" | PASS | – |
| 148 | Debugging | Layman | `set -o pipefail` makes a pipeline fail when any part fails; `set -u` makes an unset variable an error [34] | "`set -o pipefail` makes a pipeline fail when any part fails. `set -u` makes an unset variable an error. [34]" | PASS (drops "These are aids, not guarantees"; an omission) | – |
| 149 | Debugging | Layman | `trap 'cmd' ERR` runs a command when a command fails, with the same exceptions as `set -e` | "`trap 'cmd' ERR` fires when a command fails, with the same exceptions as `set -e`. [35] [50]" | PASS | – |
| 150 | Debugging | Layman | `trap 'cmd' EXIT` runs when the shell exits, so it suits clean-up; it does not run after SIGKILL, because no trap can catch SIGKILL [35][50] | "`trap 'cmd' EXIT` fires when the shell exits, which suits clean-up, but not after SIGKILL, which no trap can catch. [35] [50]" | PASS | – |
| 151 | Debugging | Layman | `ERR` is not a POSIX condition [39] | "`ERR` is not a POSIX condition: POSIX lists `EXIT` and signals. [39]" | PASS (drops "POSIX lists `EXIT` and signals"; an omission) | – |
| 152 | Debugging | Layman | If a variable can be empty, never run `rm -rf "$dir/"`, because the path can become `/`; use `${dir:?}` [16] | Never run `rm -rf "$dir/"` with a variable that may be empty: the path can become `/`. Use `${dir:?}`, which stops the script if it is unset or empty. [16] (danger callout) | PASS | – |
| 153 | Debugging | Bangla | `bash -n script.sh` reads a script, reports syntax errors, runs nothing [34][10] | "`bash -n script.sh` reads a script, reports syntax errors, and runs nothing. [34] [10]" | PASS | OK |
| 154 | Debugging | Bangla | `bash -x script.sh` prints each command after expansion [34] | "`bash -x script.sh` prints each command after expansion. [34]" | PASS | OK |
| 155 | Debugging | Bangla | `PS4` sets the prefix of each trace line; `BASH_SOURCE` and `LINENO` add file and line | "The `PS4` variable sets the prefix of each trace line, and `BASH_SOURCE` and `LINENO` add file and line." | PASS | OK |
| 156 | Debugging | Bangla | Use single quotes so `PS4` expands at each trace [37] | "Use single quotes, so `PS4` expands at each trace. [37]" | PASS | OK |
| 157 | Debugging | Bangla | `set -e` stops a script after a command fails; it ignores a failure in an `if` test | "`set -e` stops a script after a failed command. It ignores a failure in an `if` test." | PASS | OK |
| 158 | Debugging | Bangla | It also ignores failures before the last command of a `&&` or `\|\|` list, and of a pipeline without `pipefail` | "It also ignores failures before the last command of a `&&` or `\|\|` list, and of a pipeline without `pipefail`." | PASS | OK |
| 159 | Debugging | Bangla | `set -o pipefail` makes a pipeline fail when any part fails | "`set -o pipefail` makes a pipeline fail when any part fails." | PASS | OK |
| 160 | Debugging | Bangla | `set -u` makes an unset variable an error [34] | "`set -u` makes an unset variable an error. [34]" | PASS | OK |
| 161 | Debugging | Bangla | These are aids, not guarantees | "These are aids, not guarantees." | PASS | OK |
| 162 | Debugging | Bangla | A trap runs a command on an event | "A trap runs a command on an event." | PASS | OK |
| 163 | Debugging | Bangla | `trap 'cmd' ERR` fires when a command fails, with the same exceptions as `set -e` | "`trap 'cmd' ERR` fires when a command fails, with the same exceptions as `set -e`." | PASS | OK |
| 164 | Debugging | Bangla | `trap 'cmd' EXIT` fires when the shell exits, which suits clean-up; not after SIGKILL, which no trap can catch [35][50] | "`trap 'cmd' EXIT` fires when the shell exits, which suits clean-up, but not after SIGKILL, which no trap can catch. [35] [50]" | PASS | OK |
| 165 | Debugging | Bangla | `ERR` is not a POSIX condition [39] | "`ERR` is not a POSIX condition: POSIX lists `EXIT` and signals. [39]" | PASS (drops the second half; an omission) | OK |
| 166 | Debugging | Bangla | If a variable can be empty never run `rm -rf "$dir/"`: the path can become `/` | Never run `rm -rf "$dir/"` with a variable that may be empty: the path can become `/`. (danger callout) | PASS | OK |
| 167 | Debugging | Bangla | Use `${dir:?}`, which stops the script if the variable is unset or empty [16] | "Use `${dir:?}`, which stops the script if it is unset or empty. [16]" | PASS | OK |

Cite check: every `<Cite n>` in a Layman or Bangla panel is also cited by the Technical panel of the same section. Section 1: 2, 11, 12, 15, 35, 36, 38, 39, 41, 42, 45, 49. Section 2: 4, 13, 14, 15, 16, 17, 18, 19, 32, 35, 46. Section 3: 5, 20, 21, 22, 23, 24, 25, 26, 39. Section 4: 7, 12, 27, 28, 29, 32, 35, 39, 43, 48. Section 5: 6, 8, 9, 30, 31, 32, 33, 35, 36, 47. Section 6: 10, 16, 34, 35, 37, 39, 50. Each cite follows the same claim as in the Technical panel.

Open FAILs: 0
