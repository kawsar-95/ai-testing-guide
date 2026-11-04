# Independent fact-check: Shell Scripting (`lib/linux/sheets/shell-scripting.ts`)

Date: 2026-11-04. 2 rounds. In each round a checker that did not write the sheet (Claude Code, model claude-sonnet-5-5, a new session with read-only tools and no web access) got only the cards and the text of the pages that they cite. Round 1 checked the English gloss, the Bangla gloss, and the red "!" of every row. Round 2 checked the rows that the writer changed or answered after round 1, and the "!" of every row against its rule. Below are the checkers' reports as they wrote them, with each heading one level down.

## Round 1: Shell Scripting (shell-scripting)

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows checked: 48.

### FAILs

- 3.7 `printf '%s\n' TEXT`: EN. The cited pages do not say printf is "portable". The printf page only says it formats and prints data. Quote: "FORMAT controls the output as in C printf." (printf). Fix: EN "print text using a format" / BN "format অনুযায়ী text print করে"

### Notes

- 1.7: the gloss leaves out `pipefail`. This is not a FAIL, but "errors, unset variables, failed pipes" would be fuller (9 words or fewer).
- 2.3: `:-` also substitutes when the variable is null (empty). "unset or empty" is more exact than "unset".
- 3.3: the bashref quote used for this row is about the backslash. The escapes `\$  \"  \\` work as written outside quotes.
- 6.8: shellcheck's page says "finds bugs in your shell scripts". "Find bugs" is closer than "common mistakes".
- 1.4: the page only says `filename args` equals `bash filename args` for an executable script. The "without the executable bit" part is a fair inference.

### All rows

| Row | Command | EN | Quote (source key) | BN | Note |
|---|---|---|---|---|---|
| 1.1 | `#!/bin/bash` | PASS | "the remainder of the line specifies an interpreter for the program" (bashref) | PASS | |
| 1.2 | `chmod +x script.sh` | PASS | "execute (or search for directories) (x)" (chmod); "turn on the execute bit" (bashref) | PASS | |
| 1.3 | `./script.sh` | PASS | "executing filename arguments is equivalent to executing bash filename arguments" (bashref) | PASS | |
| 1.4 | `bash script.sh` | PASS | "is equivalent to executing bash filename arguments" (bashref) | PASS | inference |
| 1.5 | `$1  $@  $#  $?` | PASS | "($#) Expands to the number of positional parameters"; "($?) Expands to the exit status of the most recently executed command." (bashref) | PASS | |
| 1.6 | `exit 1` | PASS | "Exit the shell, returning a status of n to the shell's parent." (bashref); "returns an exit status of zero (success)" (bashref) | PASS | |
| 1.7 | `set -euo pipefail` | PASS | "Exit immediately if a pipeline ... returns a non-zero status." (bashref); "Treat unset variables ... as an error" (bashref) | PASS | pipefail not glossed |
| 1.8 | `source FILE` | PASS | "A synonym for ." (bashref); ". ... executed in the current shell environment" (bashref) | PASS | |
| 2.1 | `NAME=VALUE` | PASS | Assignment syntax `name=value`; the spaces rule follows from it (bashref) | PASS | |
| 2.2 | `echo "$NAME"` | PASS | "Enclosing characters in double quotes preserves the literal value of all characters" (bashref) | PASS | |
| 2.3 | `"${NAME:-default}"` | PASS | "If parameter is unset or null, the expansion of word is substituted." (bashref) | PASS | null omitted |
| 2.4 | `read -p "Name: " NAME` | PASS | "Display prompt, without a trailing newline, before attempting to read any input" (bashref) | PASS | |
| 2.5 | `NAME=$(date +%F)` | PASS | "%F full date; like %+4Y-%m-%d" (date); Command Substitution (bashref) | PASS | |
| 2.6 | `export NAME` | PASS | "Functions may be exported so that child shell processes" (bashref), export builtin | PASS | |
| 2.7 | `arr=(a b c); echo "${arr[1]}"` | PASS | "and are zero-based" (bashref) | PASS | |
| 2.8 | `$(( 2 + 3 ))` | PASS | "3.5.5 Arithmetic Expansion" (bashref) | PASS | |
| 3.1 | `'$NAME'` | PASS | "Enclosing characters in single quotes preserves the literal value" (bashref) | PASS | |
| 3.2 | `"$NAME"` | PASS | "retain their special meaning within double quotes" (bashref) | PASS | |
| 3.3 | `\$  \"  \\` | PASS | "It preserves the literal value of the next character that follows" (bashref) | PASS | |
| 3.4 | `$'a\tb'` | PASS | "\t horizontal tab"; "\n newline" (bashref) | PASS | |
| 3.5 | `cat <<'EOF'` | PASS | "If any part of word is quoted ... the lines in the here-document are not expanded." (bashref) | PASS | |
| 3.6 | `echo -e "a\nb"` | PASS | "If the -e option is given, echo interprets the following backslash-escaped characters." (bashref) | PASS | |
| 3.7 | `printf '%s\n' TEXT` | FAIL | "FORMAT controls the output as in C printf." (printf) | PASS | "portable" not supported |
| 3.8 | `*.txt  ?  [a-z]` | PASS | "Matches any string, including the null string."; "Matches any single character." (bashref) | PASS | |
| 4.1 | `if [[ -f FILE ]]; then …; fi` | PASS | "The test-commands list is executed, and if its return status is zero" (bashref); "-f file" (bashref) | PASS | |
| 4.2 | `[[ -e FILE ]]` | PASS | "-e file", "-f file", "-d file" (bashref) | PASS | |
| 4.3 | `[[ -z "$VAR" ]]` | PASS | "-z string" (bashref) | PASS | |
| 4.4 | `[[ "$x" == "y" ]]` | PASS | "string1 == string2" (bashref) | PASS | |
| 4.5 | `[[ $n -gt 5 ]]` | PASS | "'-eq', '-ne', '-lt', '-le', '-gt', or '-ge'" (bashref) | PASS | |
| 4.6 | `CMD && CMD` | PASS | AND list: second command runs "if and only if command1 returns an exit status of zero (success)" (bashref) | PASS | |
| 4.7 | `CMD \|\| CMD` | PASS | OR list: runs "if and only if command1 returns a non-zero exit status" (bashref) | PASS | |
| 4.8 | `case "$x" in a) …;; esac` | PASS | "The return status is zero if no pattern matches." (bashref) | PASS | |
| 5.1 | `for i in 1 2 3; do echo "$i"; done` | PASS | "for in until while do done" (bashref), Looping Constructs | PASS | |
| 5.2 | `for f in *.txt; do …; done` | PASS | "Matches any string, including the null string." (bashref) | PASS | |
| 5.3 | `for i in {1..5}; do …; done` | PASS | "expands to each number between x and y, inclusive." (bashref) | PASS | |
| 5.4 | `seq 1 5` | PASS | "Print numbers from FIRST to LAST, in steps of INCREMENT." (seq) | PASS | |
| 5.5 | `while read -r line; do …; done < FILE` | PASS | "If this option is given, backslash does not act as an escape character." (bashref) | PASS | |
| 5.6 | `while CMD; do …; done` | PASS | "test-commands has an exit status of zero" (bashref) | PASS | |
| 5.7 | `until CMD; do …; done` | PASS | "test-commands has an exit status which is not zero." (bashref) | PASS | the loop ends when it succeeds |
| 5.8 | `break  continue` | PASS | "Exit from a for, while, until, or select loop." (bashref) | PASS | |
| 6.1 | `bash -x script.sh` | PASS | "Print a trace of simple commands ... after they are expanded and before they are executed." (bashref) | PASS | |
| 6.2 | `set -x  /  set +x` | PASS | "-x Print a trace of simple commands" (bashref) | PASS | |
| 6.3 | `bash -n script.sh` | PASS | "Read commands but do not execute them. This may be used to check a script for syntax errors." (bashref) | PASS | |
| 6.4 | `set -e` | PASS | "Exit immediately if a pipeline ... returns a non-zero status." (bashref) | PASS | |
| 6.5 | `trap 'echo line $LINENO' ERR` | PASS | "If a sigspec is ERR, action is executed whenever a pipeline ... returns a non-zero exit status" (bashref); "Use LINENO to obtain the current line number." (bashref) | PASS | |
| 6.6 | `echo "x=$x" >&2` | PASS | "[n]>&word" Duplicating File Descriptors (bashref) | PASS | |
| 6.7 | `PS4='+ $LINENO: '` | PASS | "The shell prints the expanded value of the PS4 variable before the command" (bashref) | PASS | |
| 6.8 | `shellcheck script.sh` | PASS | "finds bugs in your shell scripts."; "You can cabal, apt, dnf, pkg or brew install it" (shellcheck) | PASS | |

Open FAILs after round 1: 1

## Round 2: Shell Scripting (shell-scripting)

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 1.

### FAILs

none

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 3.7 | `printf '%s\n' TEXT` | PASS: "print text with a format" matches the page. | "printf - format and print data" and "FORMAT controls the output as in C printf." (printf) | PASS: "format অনুযায়ী text print করে" says the same as the English, in natural Bangla. | PASS: printf only prints to stdout and has no file redirect, so it has no "!". |

Section B is "none", so there are no B rows to check.

### The "!" of every row

All rows follow the rule. I checked all 48 rows of section C. None has a file redirect with `>`, `2>` or `&>`, and none uses rm, cp, mv, tee, tar, curl -o, or another command from the rule. Row 6.6 `echo "x=$x" >&2` redirects to stderr (fd 2), not to a file, so it correctly has no "!".

Open FAILs after round 2: 0

Open FAILs: 0
