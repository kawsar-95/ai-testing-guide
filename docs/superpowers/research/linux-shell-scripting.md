# Shell Scripting (Linux stage 6) — research notes (2026-10-19)

Fetch note: the official pages were fetched with `scripts/linux_fetch.py` (robots.txt respected, 2 s host delay) into `<scratch dir>/stage-shell-scripting/` (`off/`, `off2/`, `off3/`; flat copies `A001.txt`…, `B001.txt`…, `C001.txt`… for the overlap check). The roadmap pages were fetched into `<scratch dir>/roadmap-raw/` (`NNN.txt`). The GNU Bash Reference Manual pages are the current (Bash 5.3) manual: they describe the `${ command; }` form of command substitution and the `$'...'` and `declare -I` features of Bash 5.x. The local checks ran GNU bash 5.3.9 and dash (`sh` was dash); I did not run `shellcheck`.

Safety rule of this stage: every example runs in a sandbox directory (`<scratch dir>/stage-shell-scripting/sandbox/`). No example uses root, `sudo`, or `rm -r` on a variable that was not guarded. The only `rm -rf` of the page is `rm -rf -- "${tmp:?}"` on a directory that `mktemp -d` made, inside a `danger` callout.

## Sources
Numbers S1…S50 are the indexes of `page.sources`. A page cite `<Cite n={k} />` points to S_k.

S1. Linux Roadmap — roadmap.sh — https://roadmap.sh/linux — accessed 2026-10-19
S2. Learning the Shell: What is the shell? — LinuxCommand.org (William Shotts) — https://www.linuxcommand.org/lc3_lts0010.php — accessed 2026-10-19 (roadmap #279, `279.txt`)
S3. Bash Fundamentals — Linux Handbook — https://linuxhandbook.com/bash/ — accessed 2026-10-19 (roadmap #205, `205.txt`; the roadmap title is "Bash Scripting Tutorial Series for Beginners"; the page is now a course overview titled "Bash Fundamentals")
S4. How to Use Variables in Bash Shell Scripts — Linux Handbook — https://linuxhandbook.com/bash-variables/ — accessed 2026-10-19 (roadmap #280, `280.txt`)
S5. Bash Tutorial: Quoting literal text — RIP Tutorial — https://riptutorial.com/bash/example/2465/quoting-literal-text — accessed 2026-10-19 (roadmap #125, `125.txt`)
S6. Handling Special Characters in Shell Scripts — Baeldung on Linux — https://www.baeldung.com/linux/special-characters-in-shell-scripts — accessed 2026-10-19 (roadmap #126, `126.txt`)
S7. Bash Scripting: Conditionals — LinuxConfig — https://linuxconfig.org/bash-scripting-conditionals — accessed 2026-10-19 (roadmap #033, `033.txt`)
S8. Using For, While and Until Loops in Bash — Linux Handbook — https://linuxhandbook.com/bash-loops/ — accessed 2026-10-19 (roadmap #127, `127.txt`)
S9. Bash Loops with examples — LinuxConfig — https://linuxconfig.org/bash-loops-with-examples — accessed 2026-10-19 (roadmap #128, `128.txt`)
S10. How to Debug a Bash Shell Script in Linux — LinuxTechi — https://www.linuxtechi.com/debugging-shell-scripts-in-linux/ — accessed 2026-10-19 (roadmap #056, `056.txt`)
S11. Shell Scripts (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Shell-Scripts.html — accessed 2026-10-19 (`A001.txt`)
S12. Exit Status (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html — accessed 2026-10-19 (`A002.txt`)
S13. Shell Parameters (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Shell-Parameters.html — accessed 2026-10-19 (`A003.txt`)
S14. Positional Parameters (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Positional-Parameters.html — accessed 2026-10-19 (`A004.txt`)
S15. Special Parameters (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Special-Parameters.html — accessed 2026-10-19 (`A005.txt`)
S16. Shell Parameter Expansion (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html — accessed 2026-10-19 (`A006.txt`)
S17. Command Substitution (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Command-Substitution.html — accessed 2026-10-19 (`A007.txt`)
S18. Arrays (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Arrays.html — accessed 2026-10-19 (`A008.txt`)
S19. Environment (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Environment.html — accessed 2026-10-19 (`A009.txt`)
S20. Escape Character (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Escape-Character.html — accessed 2026-10-19 (`A011.txt`)
S21. Single Quotes (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html — accessed 2026-10-19 (`A012.txt`)
S22. Double Quotes (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html — accessed 2026-10-19 (`A013.txt`)
S23. ANSI-C Quoting (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html — accessed 2026-10-19 (`A014.txt`)
S24. Redirections (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Redirections.html — accessed 2026-10-19 (`B001.txt`; the node "Here Documents" alone returns 404, so the here-document claims come from this page, section 3.6.6)
S25. Shell Arithmetic (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Shell-Arithmetic.html — accessed 2026-10-19 (`A016.txt`)
S26. Arithmetic Expansion (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Arithmetic-Expansion.html — accessed 2026-10-19 (`A017.txt`)
S27. Conditional Constructs (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Conditional-Constructs.html — accessed 2026-10-19 (`A018.txt`)
S28. Bash Conditional Expressions (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html — accessed 2026-10-19 (`A019.txt`)
S29. Lists of Commands (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Lists.html — accessed 2026-10-19 (`A020.txt`)
S30. Looping Constructs (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Looping-Constructs.html — accessed 2026-10-19 (`A021.txt`)
S31. Filename Expansion (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Filename-Expansion.html — accessed 2026-10-19 (`A022.txt`)
S32. Word Splitting (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Word-Splitting.html — accessed 2026-10-19 (`B014.txt`)
S33. Pipelines (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Pipelines.html — accessed 2026-10-19 (`B002.txt`)
S34. The Set Builtin (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html — accessed 2026-10-19 (`A023.txt`)
S35. Bourne Shell Builtins (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Bourne-Shell-Builtins.html — accessed 2026-10-19 (`A024.txt`)
S36. Bash Builtin Commands (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Bash-Builtins.html — accessed 2026-10-19 (`A025.txt`)
S37. Bash Variables (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Bash-Variables.html — accessed 2026-10-19 (`A026.txt`)
S38. Invoking Bash (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/Invoking-Bash.html — accessed 2026-10-19 (`A027.txt`)
S39. Shell Command Language (POSIX.1-2024 / IEEE Std 1003.1-2024, chapter 2) — The Open Group — https://pubs.opengroup.org/onlinepubs/9799919799/utilities/V3_chap02.html — accessed 2026-10-19 (`A034.txt`)
S40. Debian Policy Manual, chapter 10: Files (section 10.4 Scripts) — Debian Project — https://www.debian.org/doc/debian-policy/ch-files.html — accessed 2026-10-19 (`B005.txt`; v4.7.4.1)
S41. execve(2) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man2/execve.2.html — accessed 2026-10-19 (`A035.txt`)
S42. chmod(1) — man7.org (GNU coreutils) — https://man7.org/linux/man-pages/man1/chmod.1.html — accessed 2026-10-19 (`A037.txt`)
S43. test(1) — man7.org (GNU coreutils) — https://man7.org/linux/man-pages/man1/test.1.html — accessed 2026-10-19 (`A036.txt`)
S44. mktemp(1) — man7.org (GNU coreutils) — https://man7.org/linux/man-pages/man1/mktemp.1.html — accessed 2026-10-19 (`C001.txt`)
S45. ShellCheck: shell script analysis tool — ShellCheck project — https://www.shellcheck.net/ — accessed 2026-10-19 (`A042.txt`)
S46. ShellCheck wiki: SC2086 — ShellCheck project — https://www.shellcheck.net/wiki/SC2086 — accessed 2026-10-19 (`A043.txt`)
S47. ShellCheck wiki: SC2045 — ShellCheck project — https://www.shellcheck.net/wiki/SC2045 — accessed 2026-10-19 (`A044.txt`)
S48. ShellCheck wiki: SC2164 — ShellCheck project — https://www.shellcheck.net/wiki/SC2164 — accessed 2026-10-19 (`A045.txt`)
S49. koalaman/shellcheck README — GitHub — https://github.com/koalaman/shellcheck — accessed 2026-10-19 (`A046.txt`)
S50. signal(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/signal.7.html — accessed 2026-10-19 (`D001.txt`; added in fix round 1)

Fetched or listed, but not cited (reasons):
- Roadmap #204 Learn Shell (learnshell.org, `204.txt`): the text is a table of contents of interactive lessons. It holds no claim.
- Roadmap #281 DigitalOcean "How To Read and Set Environmental and Shell Variables" (`281.txt`): the fetch returned only the site footer (830 bytes, no article text). Not usable. The environment claims come from S19 and S35.
- Roadmap #057 TheLinuxCode "How to Debug Bash Scripts" (`057.txt`): read, not cited. It has errors against the official manual: it says `kill -SIGDEBUG <pid>` fires a DEBUG trap (DEBUG is a pseudo-signal of `trap`, S35), and it says `bash -f` shows unexpanded globs (`-f` only disables filename expansion, S34, and does not "reveal" anything). The page uses S34, S35, and S37 for debugging.
- Roadmap #206 Linux Bash Shell Scripting Tutorial Wiki (bash.cyberciti.biz) and #055 cyberciti "How To Debug a Bash Shell Script": status `http-403` in the old fetch (no raw text). Not used.
- Roadmap #207 Bash Scripting on Linux (YouTube playlist): `title-only`. Further reading only.
- Debian wiki `DashAsBinSh` and `Shell` (wiki.debian.org): the fetch returned an anti-bot challenge page (94 bytes). Not used. The page says nothing that only they could support. The claim "`/bin/sh` is dash on Debian and Ubuntu" is therefore not on the page. The page says only what the dash test shows.
- Bash manual node "Here Documents" (404). The same content is in S24.
- `man7.org` bash(1), printf(1), env(1), and the Bash manual nodes Shell Syntax, Executing Commands, Command Search and Execution, Bash Startup Files, Bash POSIX Mode, Shell Functions, Compound Constructs, Reserved Words, Simple Commands, Signals, Comments, Shell Builtin Commands: fetched and read for context; no page claim depends only on them.

## Claims

### Lede
| # | Claim | Source | Quote (≤ 25 words) |
|---|---|---|---|
| C1 | CI pipelines and Docker entrypoints use the same Bash basics as this stage. | S3 | "Ansible playbooks, CI/CD pipelines, and Docker entrypoints all lean on the same bash fundamentals this course covers." |
| C2 | The roadmap has the topics Shell Programming, Variables, Literals, Conditionals, Loops, and Debugging. | S1 | roadmap.sh/linux topic list (see `docs/superpowers/research/linux-roadmap-links.md`) |

### Shell Programming
| # | Claim | Source | Quote (≤ 25 words) |
|---|---|---|---|
| C3 | A shell is a program that passes commands to the operating system. | S2 | "the shell is a program that takes commands from the keyboard and gives them to the operating system to perform." |
| C4 | A shell script is a text file of shell commands. Bash runs it in a non-interactive shell. | S11 | "A shell script is a text file containing shell commands." / "This mode of operation creates a non-interactive shell." |
| C5 | A script whose first line starts with `#!` names its interpreter. | S11 | "If the first line of a script begins with the two characters ‘#!’, the remainder of the line specifies an interpreter for the program" |
| C6 | The kernel reads the shebang when it runs the file. The file needs the execute permission. | S41 | "An interpreter script is a text file that has execute permission enabled and whose first line is of the form:" |
| C7 | `chmod +x` adds the execute permission. | S42 | "The operator + causes the selected file mode bits to be added to the existing file mode bits of each file" |
| C8 | `#!/usr/bin/env bash` finds the first `bash` in `PATH`. | S11 | "#!/usr/bin/env bash will find the first occurrence of bash in $PATH." |
| C9 | `./script` (an executable script) runs in a new instance of the shell, so variables set in it stay in the child. | S11 | "it creates a new instance of itself to execute it." (local check LC1 shows `after run: unset`) |
| C10 | `.` runs a file in the current shell. `source` is a synonym. | S35, S36 | S35: "The . command reads and execute commands from the filename argument in the current shell context." S36: (under `source`) "A synonym for ." |
| C11 | An exit status is a number from 0 to 255. Zero means success. | S12 | "Exit statuses fall between 0 and 255" / "a command which exits with a zero exit status has succeeded." |
| C12 | `$?` is the exit status of the last command. | S15 | "($?) Expands to the exit status of the most recently executed command." |
| C13 | A script returns the exit status of its last command. | S38 | "Bash’s exit status is the exit status of the last command executed in the script." |
| C14 | POSIX defines the portable shell language (the Shell Command Language). | S39 | "This chapter contains the definition of the Shell Command Language." |
| C15 | Debian policy lets a `sh` script in a Debian package assume POSIX plus a few extras. | S40 | "Scripts may assume that /bin/sh implements the POSIX.1-2017 Shell Command Language [7] plus the following additional features not mandated by POSIX.1-2017." (section 10.4, rules for scripts in Debian packages) |
| C15b | A package script that needs more must name its shell. | S40 | "the appropriate shell must be specified in the first line of the script" |
| C16 | The page no longer uses the word "bash-only". It says "not defined by POSIX", "a Bash form", or "POSIX leaves it unspecified" (fix round 1, F1). | S39 | Evidence for `[[`: see C57. Evidence for `base#n`: C48. Evidence for `ERR`: C91. |
| C17 | In a test with dash, `[[` and arrays gave errors. | local check | LC3: `dash: 1: [[: not found` and `Syntax error: "(" unexpected`. Not a cited claim. |
| C18 | ShellCheck finds mistakes before a run and reports through its exit status, so CI can run it. | S45, S49 | S45: "ShellCheck finds bugs in your shell scripts." S49: "It makes canonical use of exit codes" |
| C19 | (Tip) Start each CI script with a shebang, run ShellCheck, test the exit status. To find non-POSIX code, run under `dash` if installed, or use a `#!/bin/sh` shebang so ShellCheck warns. | S45 | S45 (editor example): "The shebang says 'sh' so shellcheck warns about portability". The rest is the tutorial's own advice. On a system where `sh` is bash, a run with `sh` does not find non-POSIX code (local test), so the page does not advise it. |

### Variables
| # | Claim | Source | Quote (≤ 25 words) |
|---|---|---|---|
| C20 | A variable is assigned with `name=value`. | S13 | "A variable is assigned to using a statement of the form name=[value]" |
| C21 | There are no spaces around `=`. | S13, local check | S13 gives the form `name=[value]` with no spaces. LC4: `a = b` runs the command `a` (not found). Not a quoted rule in the manual. |
| C22 | An unquoted `$name` is split into words and treated as a glob. Quote it: `"$name"`. | S46, S32 | S46: "Quoting variables prevents word splitting and glob expansion" S32: "splits the results of the other expansions into fields using these characters as field terminators." |
| C23 | `${name:-default}` gives a default when the variable is unset or empty. | S16 | "If parameter is unset or null, the expansion of word is substituted." |
| C24 | `${name:?message}` writes an error and a non-interactive shell exits. | S16 | "the shell writes the expansion of word ... to the standard error and, if it is not interactive, exits with a non-zero status." |
| C25 | `${#name}` is the length of the value. | S16 | "Substitutes the length in characters of the value of parameter." |
| C26 | Script arguments are positional parameters `$1`, `$2`. | S14 | "Positional parameters are assigned from the shell’s arguments when it is invoked" |
| C27 | `$#` is the count of positional parameters. `$0` is the name of the script. `"$@"` gives each argument as a separate word. | S15 | "($#) Expands to the number of positional parameters in decimal." / "$0 is set to the name of that file." / "\"$@\" is equivalent to \"$1\" \"$2\" …" |
| C28 | `export` marks a variable for the environment of later commands. Executed commands inherit the environment. | S35, S19 | S35: "Mark each name to be passed to subsequently executed commands in the environment." S19: "Executed commands inherit the environment." |
| C29 | The environment is a list of name-value pairs. | S19 | "This is a list of name-value pairs, of the form name=value." |
| C30 | `readonly` blocks later assignment. Assigning gives an error. | S35, S4 | S35: "The values of these names may not be changed by subsequent assignment or unset." S4: "bash: PI: readonly variable" |
| C31 | `$(command)` is replaced by the output of the command. | S17 | "Command substitution allows the output of a command to replace the command itself." |
| C32 | An array is a list of values. It works in bash, ksh, and zsh. | S18, S46 | S18: "Bash provides one-dimensional indexed and associative array variables." S46: "you should have used an array (bash, ksh, zsh)" |
| C33 | Dash rejected an array in a test. | local check | LC5: `Syntax error: "(" unexpected`. Not a cited claim. |
| C34 | (Tip) Keep base URL, browser, environment name in variables with defaults; do not print secrets. | none | Tutorial's own advice. |
| C35 | Code comment only: `set -- alpha "beta gamma"` fakes two arguments. | none | No cite on the page. (`set --` is described in S34: "Any arguments remaining after option processing replace the positional parameters.") |

### Literals
| # | Claim | Source | Quote (≤ 25 words) |
|---|---|---|---|
| C36 | Quoting removes the special meaning of characters. | S20 (the Quoting node) | Quoting node: "Quoting is used to remove the special meaning of certain characters or words to the shell." (node `A010.txt`, not a page source; the claim is the plain sense of S20-S23) |
| C37 | Single quotes keep every character literal. A single quote cannot appear inside. | S21 | "Enclosing characters in single quotes (‘'’) preserves the literal value of each character within the quotes. A single quote may not occur between single quotes" |
| C38 | To place a single quote: close the string, add `\'`, open it again. | S5 | "you can stop the literal string, include a literal single quote with a backslash, and start the literal string again." |
| C39 | Double quotes keep most characters literal. `$`, the backtick, and `\` stay active. | S22 | "preserves the literal value of all characters within the quotes, with the exception of ‘$’, ‘`’, ‘\’" |
| C40 | A backslash outside quotes makes the next character literal. | S20 | "It preserves the literal value of the next character that follows, removing any special meaning it has, with the exception of newline." |
| C41 | `$'...'` decodes escapes such as `\n` and `\t`. | S23 | "with backslash-escaped characters in string replaced as specified by the ANSI C standard." (table: `\n` newline, `\t` horizontal tab) |
| C42 | The 2024 POSIX standard defines dollar-single-quotes. Dash did not decode it in a test. | S39, local check | S39: "The various quoting mechanisms are the escape character, single-quotes, double-quotes, and dollar-single-quotes." LC6: dash printed `$tab:\there`. |
| C43 | A here-document gives lines to a command as input. The word after `<<` is the end marker. | S24 | "This type of redirection instructs the shell to read input from the current source until it reads a line containing only delimiter" |
| C44 | A quoted marker means no expansion. An unquoted marker means expansion of variables and `$(...)`. | S24 | "If any part of word is quoted ... the lines in the here-document are not expanded." |
| C45 | `<<-` strips leading tabs. | S24 | "the shell strips leading tab characters are stripped from input lines and the line containing delimiter." |
| C46 | `$((expression))` does arithmetic; whole numbers; C operators. | S26, S25 | S26: "Arithmetic expansion evaluates an arithmetic expression and substitutes the result." S25: "are the same as in the C language" |
| C47 | A leading `0` means octal. `0x` means hexadecimal. `base#n` writes a number in another base. | S25 | "Constants with a leading 0 are interpreted as octal numbers. A leading ‘0x’ or ‘0X’ denotes hexadecimal." / "numbers take the form [base#]n" |
| C48 | POSIX requires only decimal, octal, and hexadecimal constants, so other shells may reject `base#n`. Dash did in a test. | S25, S39 | S39: "Only the decimal-constant, octal-constant, and hexadecimal-constant constants ... are required to be recognized as constants." (dash rejected `2#101`, LC6) |
| C49 | `$((08))` is an error because `08` is not octal. | S25, local check | S25: "Constants with a leading 0 are interpreted as octal numbers." LC7: `08: value too great for base`. |
| C50 | `10 / 3` is 3 (whole numbers). | S25, local check | S25: "Evaluation is done in the largest fixed-width integers available". LC8 prints 3. |
| C51 | (Tip) Write test data with a quoted here-document; put regexes in single quotes. | none | Tutorial's own advice. |

### Conditionals
| # | Claim | Source | Quote (≤ 25 words) |
|---|---|---|---|
| C52 | `if` runs a command. Zero status runs the `then` part. `elif` and `else` add branches. | S27 | "The test-commands list is executed, and if its return status is zero, the consequent-commands list is executed." |
| C53 | Zero is success (true); non-zero is failure. | S12 | "a non-zero exit status indicates failure." |
| C54 | `[ ... ]` is the `test` command. Each operator and operand is a separate argument. The last argument of `[` is `]`. | S35, S43 | S35: "Each operator and operand must be a separate argument." / "When using the [ form, the last argument to the command must be a ]." S43 synopsis: `test EXPRESSION`, `[ EXPRESSION ]` |
| C55 | `[[ ... ]]` does not split words. | S27 | "The words between the [[ and ]] do not undergo word splitting and filename expansion." |
| C56 | In `[[`, `==` matches a pattern. `=~` matches a POSIX extended regular expression. | S27 | "the string to the right of the operator is considered a pattern" / "a POSIX extended regular expression pattern" |
| C57 | `[[ ... ]]` is a Bash keyword that POSIX leaves unspecified. | S27, S39 | S27: "[[ expression ]]" (a compound command of Bash). S39: "the following words may be recognized as reserved words, in which case the results are unspecified" (the list includes `[[`) |
| C58 | Use `=` with `test` for POSIX conformance. | S28 | "‘=’ should be used with the test command for POSIX conformance." |
| C59 | File tests `-f` (regular file), `-d` (directory), `-e` (exists), `-r` (readable). | S28 | "-f file True if file exists and is a regular file." / "-r file True if file exists and is readable." (`-d` and `-e` have the same form in the table) |
| C60 | Numeric operators `-eq -ne -lt -le -gt -ge`; string operators `=` `!=`. | S7, S28 | S28: "OP is one of ‘-eq’, ‘-ne’, ‘-lt’, ‘-le’, ‘-gt’, or ‘-ge’." S7 (string table): "!= not equal" |
| C61 | An empty unquoted variable vanishes (is removed) and leaves a broken test. | S32 | "Unquoted implicit null arguments, resulting from the expansion of parameters that have no values, are removed." (LC9: `[ $x = a ]` → `unary operator expected`) |
| C62 | `&&` runs the next command only if the first succeeds. `||` only if it fails. | S29 | "if, and only if, command1 returns an exit status of zero" / "if, and only if, command1 returns a non-zero exit status" |
| C63 | `a && b || c` is not if/else: `c` runs when `b` fails. | S29 | "AND and OR lists are executed with left associativity." (so `(a && b) || c`; LC10 shows `c` runs) |
| C64 | `cd "$dir" || exit 1` stops the script when `cd` fails. | S48 | "cd foo || exit as suggested to abort immediately, using exit code from failed cd command" |
| C65 | `case` compares a word with patterns. Each clause ends with `;;`. `*` is the default. | S27 | "execute the command-list corresponding to the first pattern that matches word" / "use ‘*’ as the final pattern to define the default case" |
| C66 | (Tip) Check preconditions at the top and print which check failed. | none | Tutorial's own advice. |

### Loops
| # | Claim | Source | Quote (≤ 25 words) |
|---|---|---|---|
| C67 | `for name in words; do ...; done` runs once for each word. | S30 | "Expand words (see Shell Expansions), and then execute commands once for each word in the resultant list, with name bound to the current word." |
| C68 | `while` repeats while the test succeeds. `until` repeats while it fails. | S30 | "Execute consequent-commands as long as test-commands has an exit status of zero." / "...has an exit status which is not zero." |
| C69 | `until` is a `while` with the test reversed. | S8 | "an until loop will keep running as long as test condition is false!" |
| C70 | Put `;` or a newline before `do`. | S9, S30 | S9: "Notice how again the ; is before the then, not after." S30: "it may be replaced with one or more newlines." |
| C71 | `break` leaves the loop. `continue` starts the next round. | S35 | "Exit from a for, while, until, or select loop." / "continue resumes the next iteration of an enclosing for, while, until, or select loop." |
| C72 | The C-style `for ((...))` loop is a Bash form. Dash rejected it in a test. | S30 | S30: "for (( expr1 ; expr2 ; expr3 )) [;] do commands ; done" (documented for Bash). Local check LC14: dash gives `Bad for loop variable`. |
| C73 | Do not loop over `$(ls)`. Names with spaces split. Use a glob. | S47 | "Using command expansion causes word splitting and glob expansion, which will cause problems for certain filenames" |
| C74 | A glob with no match stays as typed (nullglob off). | S31 | "If no matching filenames are found, and the shell option nullglob is disabled, the word is left unchanged." |
| C75 | Use `--` before names that may start with a dash. | S6 | "It indicates the end of options to the command so that the succeeding arguments will be treated as filenames" |
| C76 | `read -r` keeps backslashes. | S36 | "If this option is given, backslash does not act as an escape character. The backslash is considered to be part of the line." |
| C77 | An empty `IFS` keeps leading spaces when `read` splits. | S32, S6 | S32: "Word splitting begins by removing sequences of IFS whitespace characters from the beginning and end" S6: "we’ll need to nullify (empty) the IFS" |
| C78 | Each command of a pipeline runs in its own subshell, so variables set in a `while` after a pipe are lost. | S33 | "Each command in a multi-command pipeline, where pipes are created, is executed in its own subshell, which is a separate process" (LC11 shows `after pipe: 0`) |
| C79 | Code: `touch -- "my report.txt" "-odd.txt"` and a glob loop list both files. | local check | LC12. The local `touch` rejects `-odd.txt` without `--`. |
| C80 | (Tip) Poll with `until` and always add a counter or time limit. | none | Tutorial's own advice. |

### Debugging
| # | Claim | Source | Quote (≤ 25 words) |
|---|---|---|---|
| C81 | `bash -n` reads a script, checks syntax, and runs nothing. | S34, S10 | S34: "Read commands but do not execute them." S10: "it will not execute the script but it will read the script and validate the syntax" |
| C82 | `bash -x` prints each command after expansion. | S34 | "Print a trace of simple commands, ... after they are expanded and before they are executed." |
| C83 | `PS4` is the prefix of trace lines. | S37 | "the expanded value is the prompt printed before the command line is echoed when the -x option is set" |
| C84 | `BASH_SOURCE` and `LINENO` exist (file and line number). | S37 | "The line number in the script or shell function currently executing." (LINENO) / "An array variable whose members are the source filenames" (BASH_SOURCE) |
| C85 | `set -e` does not stop for a failure in an `if` test or in a `&&`/`||` list (except its last command). | S34 | "part of the test in an if statement" / "any command executed in a && or || list except the command following the final && or ||" |
| C85b | `set -e` does not stop for a failure in a pipeline before its last command (without `pipefail`). | S34 | "any command in a pipeline but the last" |
| C86 | `set -o pipefail` makes a pipeline return the rightmost non-zero status. | S34 | "the return value of a pipeline is the value of the last (rightmost) command to exit with a non-zero status" |
| C87 | `set -u` makes an unset variable an error. | S34 | "Treat unset variables and parameters other than the special parameters ‘@’ or ‘*’ ... as an error when performing parameter expansion." |
| C88 | A trap runs a command on an event. | S35 | "The action is a command that is read and executed when the shell receives any of the signals sigspec." |
| C89 | `trap ... ERR` runs when a command fails, with the same exceptions as `-e`. | S35 | "These are the same conditions obeyed by the errexit (-e) option." |
| C90 | `EXIT` trap runs when the shell exits. | S35 | "If a sigspec is 0 or EXIT, action is executed when the shell exits." |
| C90b | An EXIT trap does not run after SIGKILL, which no trap can catch. | S35, S50 | S50: "The signals SIGKILL and SIGSTOP cannot be caught, blocked, or ignored." Local check LC14: `trap "echo bye" EXIT; kill -9 $$` prints no `bye`, status 137. With `exit 3` it prints `bye`. |
| C91 | `ERR` is not a POSIX trap condition. POSIX lists `EXIT` and signals. | S39 | "The condition can be EXIT, 0 (equivalent to EXIT), or a signal specified using a symbolic name" (dash: `trap: ERR: bad trap`, LC14) |
| C92 | `>&2` sends output to the error stream (standard error). | S24 | "[n]>&word is used similarly to duplicate output file descriptors." (n omitted = standard output; `>&2` copies descriptor 2). The page says "Print to the error stream with `echo "x=$x" >&2`." |
| C93 | ShellCheck flags unquoted variables, `for f in $(ls)` loops, and unchecked `cd`. | S45, S46, S47, S48 | S46: "Double quote to prevent globbing and word splitting." S47: "Iterating over ls output is fragile. Use globs." S48: "Use cd ... || exit in case cd fails." |
| C94 | `mktemp -d` creates a temporary directory safely. | S44 | "Create a temporary file or directory, safely, and print its name." / "-d, --directory create a directory, not a file" |
| C95 | `${dir:?}` stops the script if `dir` is unset or empty. A path `"$dir/"` with an empty `dir` is `/`. | S16 | "If parameter is null or unset, the shell writes the expansion of word ... to the standard error and, if it is not interactive, exits" The second sentence is string logic. |
| C96 | (Tip) In CI trace with `set -x` only around the failing step; a trace can put tokens in the log. | none | Tutorial's own advice. (S34 says a trace shows commands "after they are expanded", which is why values show.) |

## Local checks (not a citable page)
Tools: GNU bash 5.3.9(1), dash as `sh`, GNU and uutils tools. Every code block of the page was extracted and run with `bash` in an empty directory. All six exited 0, and a second run also exited 0.

LC1 (Shell Programming block, bash and dash, same output):
```text
args: 1
status: 0
args: 1
status: 1
after run: unset
args: 0
after source: hello from setup.sh
```
`./nothere` gives status 127 and a file without `+x` gives status 126 (both seen, not on the page). I did not run `shellcheck`, so the `if command -v shellcheck` guard prints nothing. I could not run ShellCheck, so the page shows no ShellCheck output of its own.

LC2 (Variables block): prints `suite: smoke tests`, `env: staging`, `count: 2, first: alpha`, `arg: alpha`, `arg: beta gamma`, `child sees: qa`, `BASE_URL: readonly variable`, `BASE_URL is read-only`, `the date has 10 characters`, `2 urls, last: https://example.test/cart`.

LC3 (dash, `[[`): `dash: 1: [[: not found`, status 127. Dash on the arrays of the Variables block: `Syntax error: "(" unexpected` (LC5).

LC4: `name = x` is a command call (`name` not found) — not on the page as output.

LC6 (Literals block under dash): `printf '%s\n' $'tab:\there\nnew line'` printed `$tab:\there\nnew line`; `$((2#101))` failed with `arithmetic expression: expecting EOF: "2#101"`. Under bash: `43 3 1` and `31 5 8`.

LC7: `bash -c 'echo $((08))'` → `08: value too great for base (error token is "08")`, status 1. `10#$n` (n=08) gives 9.

LC8: `$((10 / 3))` → 3, `$((10 % 3))` → 1.

LC9: `x=; [ $x = a ]` → `[: =: unary operator expected`, status 2.

LC10: `true && false || echo ...` prints the echo text.

LC11: `printf "a\nb\n" | while read -r l; do c=$((c+1)); done; echo $c` → 0; with `done < <(printf ...)` → 2. A last line without a final newline is lost by `while IFS= read -r l` (read returns non-zero at EOF) unless the loop adds `|| [ -n "$l" ]`. The page does not state this.

LC12 (Loops block): output `file: ./my report.txt`, `file: ./-odd.txt` (bash order; dash lists `./-odd.txt` first), `[first]`, `[  indented \ line]`, `[last]`, `total: 8`, `tries: 3` (the `until` waits 3 s). `for f in $(ls)` over `my report.txt` gives two words `[my]` and `[report.txt]`.

LC13 (Debugging block): `bash -n` on a script with an open quote prints `unexpected EOF while looking for matching` and exits 2. The `set -euo pipefail` script prints `0` (the `grep -c` count), then `failed at line 7, status 1`, exit status 1, and the `-x` trace with the `PS4` prefix `+ flaky.sh:7:` and a final `+ flaky.sh:1: rm -rf -- /tmp/tmp.XXXXXXXXXX` (the EXIT trap, line number 1 because the trap string is its own line). No temporary directory stays behind after a complete run. One earlier try that cut the trace with `head -8` (SIGPIPE) left a temporary directory; the page uses `tail -5`, which reads the whole stream. `set -e` demo: `false || echo`, `if false`, and `false | true` do not stop the shell; with `pipefail`, `false | true` stops it (status 1).

LC14 (fix round 1): `dash -c 'for ((i=0;i<2;i++)); do echo $i; done'` → `Syntax error: Bad for loop variable`, status 2. `dash -c "trap 'echo x' ERR"` → `trap: ERR: bad trap`, status 1. `bash -c 'trap "echo bye" EXIT; kill -9 $$'` → no `bye`, status 137. `bash -c 'trap "echo bye" EXIT; exit 3'` → `bye`, status 3. A copy of bash named `sh` accepts `[[`, arrays, `2#101`, and `trap ... ERR` (reported by the fact-checker), so `sh script.sh` finds non-POSIX code only where `sh` is dash or another strict shell.

LC15 (fix round 1): after the edits, all six code blocks of the page were extracted and run with `TMPDIR` set to a sandbox directory, from a directory that held only the extracted scripts. Each exited 0 twice. No file was created in the working directory (every block starts with `cd "$(mktemp -d)" || exit 1`, except the Variables block, which writes no file). Blocks 1 and 5 also ran under dash with the same output as before.

## Fix round 1 (summary)
F1 "bash-only" removed from the page (words "not defined by POSIX", "a Bash form", "POSIX leaves it unspecified"). F2 array comment hedged. F3 EXIT trap sentence fixed (S35, S50). F4 tip and Debian sentence changed. F5 one code block per topic (outputs are comments). F6 scratch directory in blocks 1, 3, 4, 5, 6. F7 quotes cut to 25 words or fewer per row. F8 notes rows name the sources of the page cites; the page got extra cites where the notes had them (12, 28, 30, 35, 45).

## Open points
- Claim C21 ("no spaces around `=`"): the manual shows the form `name=[value]`; it has no sentence that forbids spaces. LC4 supports it.
- Claim C36 uses the Bash manual node "Quoting" (`A010.txt`), which is not a separate page source; the page cites S20, S21, S22 for the quoting rules.
- Claim C63 (`a && b || c`) is derived from the left-associativity sentence; LC10 shows the behavior.
- The page says "In a test with dash" for `[[`, arrays, `$'...'`, and `base#n` (LC3, LC5, LC6). These are local observations of one dash version, not statements of a source.
- ShellCheck output was not run. The page states what ShellCheck flags only from its wiki pages.
