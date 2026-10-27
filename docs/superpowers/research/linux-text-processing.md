# Text Processing (Linux stage 3) — research notes (2026-10-19)

Fetch note: all pages were fetched with `scripts/linux_fetch.py` (robots.txt respected, 2 s host delay). Roadmap links come from `<scratch dir>/roadmap-raw/` (re-fetched 2026-10-19). Official pages are in `<scratch dir>/stage-text-processing/` (files 001-034). The man7.org pages are HTML renderings of man pages (coreutils 9.11, man-pages 6.19). The GNU manual pages are coreutils 9.12 and the current gawk, bash, and grep manuals. Quotes are at most 25 words. The index of a source in `page.sources` is the same as its S number. Part A (topics 1-10) is written first. Part B (topics 11-20) appends sources S26 and up and must not renumber S1-S25.

## Sources
S1. Linux Tutorial - 9. Discover Filters — Ryan's Tutorials (roadmap #247) — https://ryanstutorials.net/linuxtutorial/filters.php — accessed 2026-10-19
S2. Piping and Redirection — Ryan's Tutorials (roadmap #175) — https://ryanstutorials.net/linuxtutorial/piping.php — accessed 2026-10-19
S3. stdin(3) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man3/stdin.3.html — accessed 2026-10-19
S4. Linux Fundamentals - I/O, Standard Streams, and Redirection — Putorius (roadmap #224) — https://www.putorius.net/linux-io-file-descriptors-and-redirection.html — accessed 2026-10-19
S5. Redirections (Bash Reference Manual) — GNU Project (roadmap #188) — https://www.gnu.org/software/bash/manual/html_node/Redirections.html — accessed 2026-10-19
S6. Shell Command Language (POSIX.1-2024) — The Open Group — https://pubs.opengroup.org/onlinepubs/9799919799/utilities/V3_chap02.html — accessed 2026-10-19
S7. null(4) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man4/null.4.html — accessed 2026-10-19
S8. The Set Builtin (Bash Reference Manual) — GNU Project — https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html — accessed 2026-10-19
S9. Pipelines (Bash Reference Manual) — GNU Project (also the official page of roadmap topic Pipes, not a roadmap link) — https://www.gnu.org/software/bash/manual/html_node/Pipelines.html — accessed 2026-10-19
S10. pipe(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/pipe.7.html — accessed 2026-10-19
S11. tee invocation (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/tee-invocation.html — accessed 2026-10-19
S12. grep(1) — man7.org (GNU grep) — https://man7.org/linux/man-pages/man1/grep.1.html — accessed 2026-10-19
S13. Linux Tutorial - 10. Grep and Regular Expressions (the page heading; the roadmap link text is "Grep and Regular Expressions for Beginners") — Ryan's Tutorials (roadmap #100) — https://ryanstutorials.net/linuxtutorial/grep.php — accessed 2026-10-19
S14. Getting Started with awk (The GNU Awk User's Guide) — GNU Project — https://www.gnu.org/software/gawk/manual/html_node/Getting-Started.html — accessed 2026-10-19
S15. How Input Is Split into Records (GNU Awk User's Guide) — GNU Project — https://www.gnu.org/software/gawk/manual/html_node/Records.html — accessed 2026-10-19
S16. Examining Fields (GNU Awk User's Guide) — GNU Project — https://www.gnu.org/software/gawk/manual/html_node/Fields.html — accessed 2026-10-19
S17. Specifying How Fields Are Separated (GNU Awk User's Guide) — GNU Project — https://www.gnu.org/software/gawk/manual/html_node/Field-Separators.html — accessed 2026-10-19
S18. How to Use Regular Expressions (GNU Awk User's Guide) — GNU Project — https://www.gnu.org/software/gawk/manual/html_node/Regexp-Usage.html — accessed 2026-10-19
S19. Variable Typing and Comparison Expressions (GNU Awk User's Guide) — GNU Project — https://www.gnu.org/software/gawk/manual/html_node/Variable-Typing.html — accessed 2026-10-19
S20. The BEGIN and END Special Patterns (GNU Awk User's Guide) — GNU Project — https://www.gnu.org/software/gawk/manual/html_node/BEGIN_002fEND.html — accessed 2026-10-19
S21. Command-Line Options (GNU Awk User's Guide) — GNU Project — https://www.gnu.org/software/gawk/manual/html_node/Options.html — accessed 2026-10-19
S22. Using Shell Variables in Programs (GNU Awk User's Guide) — GNU Project — https://www.gnu.org/software/gawk/manual/html_node/Using-Shell-Variables.html — accessed 2026-10-19
S23. cut invocation (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/cut-invocation.html — accessed 2026-10-19
S24. sort invocation (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/sort-invocation.html — accessed 2026-10-19
S25. uniq invocation (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/uniq-invocation.html — accessed 2026-10-19

Local checks (not citable pages): I ran every example of the page in a scratch directory with GNU coreutils, GNU grep, GNU awk, and Bash on Linux. The outputs match the comments of the page. `ls` printed `cannot access '/does-not-exist': No such file or directory` and exit status 2.

Read but not cited: roadmap #246 (commandinline.com; the dump holds only page chrome), #248 (earthly.dev), #176, #174 (pipes articles), #187, #244, #245, #008, #009, #053, #213, #214, #266, #268 (command articles), #102 (ripgrep README).
Official pages fetched but not used: grep manual (gnu.org/software/grep/manual/grep.html), tee(1), cut(1), sort(1), uniq(1) man7 pages (same facts as the GNU manual nodes), gawk(1) man page (replaced by S21 because its text holds gawk manual URLs that the overlap check flags), gawk Print and Comparison Operators nodes.
Not usable as sources (no text): #249 everythingdevops.dev and #226 opensource.com (`robots`); #101, #054, #215, #267, #010 (labex.io, `http-403`).
Further reading (title only, not cited): #177 Terminal Fundamentals (webterm.app course); #011 Learning Awk Is Essential For Linux Users (video).

## Topic 1: Text Processing
| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | A filter is a program that accepts text and transforms it. | S1 | "A filter, in the context of the Linux command line, is a program that accepts textual data and then transforms it in a particular way." |
| C2 | Each tool does one job, and you join tools for larger jobs. | S1 | "every item should do one thing and one thing only and that we can easily join these items together" |

The three topic groups and the first example are the tutorial's own structure. The example output (`      2 fail login`) comes from a local run.

## Topic 2: Stdout, Stdin, and Stderr
| # | Claim | Source | Quote |
|---|---|---|---|
| C3 | Each program starts with three streams: input, output, errors and diagnostics. | S3 | "three streams opened for it when it starts up, one for input, one for output, and one for printing diagnostic or error messages" |
| C4 | The short names are stdin, stdout, stderr. | S3 | "namely stdin, stdout, and stderr" |
| C5 | The file descriptors are 0, 1, 2. | S3 | "the integer file descriptors associated with the streams stdin, stdout, and stderr are 0, 1, and 2, respectively" |
| C6 | Meaning of each descriptor (table). | S2 | "STDIN (0) - Standard input (data fed into the program)" / "STDERR (2) - Standard error (for error messages, also defaults to the terminal)" |
| C7 | The terminal is usually behind the streams; the shell can connect them to files or programs. | S4, S2 | S4: "Streams are usually connected to the terminal in which they are executed" / S2: "Piping and redirection is the means by which we may connect these streams" |
| C8 | stderr is unbuffered. stdout is line-buffered on a terminal. | S3 | "The stream stderr is unbuffered. The stream stdout is line-buffered when it points to a terminal." |

The gloss of "stream", "file descriptor", and "line-buffered" is the tutorial's own wording. The meaning of "line-buffered" ("waits for a newline") follows the S3 sentence "Partial lines will not appear until fflush(3) or exit(3) is called, or a newline is printed". The `ls` example (status 2 with one bad path) is a local run; GNU `ls` documents exit status 2 for serious trouble, but the page does not state that claim.

## Topic 3: Redirects
| # | Claim | Source | Quote |
|---|---|---|---|
| C9 | The shell sets up redirects before the command runs. | S5 | "Before a command is executed, its input and output may be redirected using a special notation interpreted by the shell." |
| C10 | Redirects are handled left to right. | S5 | "Redirections are processed in the order they appear, from left to right." |
| C11 | `>` creates the file or empties it. | S5 | "If the file does not exist it is created; if it does exist it is truncated to zero size." |
| C12 | `>>` appends and creates the file if missing. | S5 | "opens the file ... for appending ... If the file does not exist it is created." |
| C13 | `<` reads stdin from a file. | S5 | "Redirecting input opens the file whose name results from the expansion of word for reading on file descriptor n, or the standard input" |
| C14 | A descriptor number before `>` selects the stream (`2>`). | S5 | "if the first character of the redirection operator is ‘>’, the redirection refers to the standard output (file descriptor 1)" (omitted number means 1, so a number selects another) |
| C15 | `2>&1` makes stderr a copy of stdout. | S5 | "[n]>&word is used to duplicate output file descriptors" / "the standard error was made a copy of the standard output" |
| C16 | `&>` sends both streams to a file (Bash form). | S5 | "There are two formats for redirecting standard output and standard error: &>word and >&word. Of the two forms, the first is preferred." |
| C17 | Order matters: `> f 2>&1` versus `2>&1 > f`. | S5 | "ls 2>&1 > dirlist directs only the standard output to file dirlist, because the standard error was made a copy of the standard output" |
| C18 | The POSIX text has no `&>`. | S6 | Absence claim: 0 matches of `&>` in the fetched page (233 KB). The page lists `[n]>word`, `[n]>|word`, `>>`, `<&`, `>&`, `<>`. |
| C19 | `/dev/null` discards written data. | S7 | "Data written to the /dev/null and /dev/zero special files is discarded." |
| C20 | The shell empties the target file before the command starts. | S2, S5 | S2: "the file is created first (if it does not exist already) and then the program is run" / "then it's contents will be cleared" |
| C21 | `sort data.txt > data.txt` leaves the file empty. | S2, S5 | Follows from C11 and C20. Local run: the file was empty afterwards. |
| C22 | `set -C` stops `>` from overwriting; `>|` overrides. | S8 | "Prevent output redirection using ‘>’, ‘>&’, and ‘<>’ from overwriting existing files. Using the redirection operator ‘>|’ ... force the creation of an output file." |

Local check: with `set -C`, `echo hi > names.txt` printed `cannot overwrite existing file` (status 1), and `>|` worked.

## Topic 4: Pipes
| # | Claim | Source | Quote |
|---|---|---|---|
| C23 | A pipeline is commands joined by `\|`; each command reads the output of the one before. | S9 | "A pipeline is a sequence of one or more commands separated by one of the control operators" / "each command reads the previous command’s output" |
| C24 | A pipe is a one-way channel with a read end and a write end. | S10 | "provide a unidirectional interprocess communication channel. A pipe has a read end and a write end." |
| C25 | The pipe is connected before the redirects of the first command. | S9 | "This connection is performed before any redirections specified by command1." |
| C26 | `\|&` also sends stderr into the pipe (Bash). Only stdout goes through a plain pipe. | S9 | "command1’s standard error, in addition to its standard output, is connected to command2’s standard input through the pipe" |
| C27 | A pipeline returns the status of its last command. | S9 | "The exit status of a pipeline is the exit status of the last command in the pipeline, unless the pipefail option is enabled" |
| C28 | With `pipefail`, the status is that of the last failed command, or 0. | S8 | "the value of the last (rightmost) command to exit with a non-zero status, or zero if all commands in the pipeline exit successfully" |
| C29 | The 2024 POSIX standard defines `pipefail`. | S6 | "The exit status of a pipeline shall depend on whether or not the pipefail option (see set) is enabled" |

Local checks: `false | true; echo $?` printed 0; with `set -o pipefail` in a subshell it printed 1. The advice "check that your CI shell supports pipefail" is the tutorial's own. The `pytest | tee` advice follows from C27.

## Topic 5: Tee
| # | Claim | Source | Quote |
|---|---|---|---|
| C30 | `tee` copies stdin to stdout and to files. | S11 | "The tee command copies standard input to standard output and also to any files given as arguments." |
| C31 | `tee` creates a missing file and overwrites an existing file unless `-a`. | S11 | "If a file being written to already exists, the data it previously contained is overwritten unless the -a option is used." |
| C32 | `-p` / `--output-error` adjusts the behavior on write errors. | S11 | "Adjust the behavior with errors on the outputs." |
| C33 | The shell, not `sudo`, sets up a redirect. | S5 | Follows from C9. `sudo echo text > file` runs `echo` under sudo, but the redirect in your own shell. |

The `sudo tee -a` advice is the tutorial's own, based on C9. The danger and tip texts are the tutorial's own advice.

## Topic 6: grep
| # | Claim | Source | Quote |
|---|---|---|---|
| C34 | `grep` prints lines that match a pattern. | S12 | "grep prints each line that matches a pattern" |
| C35 | A regular expression is a pattern that describes a set of strings. | S12 | "A regular expression is a pattern that describes a set of strings." (the page says it in its own words) |
| C35b | A regular expression is more powerful than a wildcard. | S13 | "They are a bit more powerful however." |
| C36 | Default is basic regex; `-E` extended; `-F` fixed strings. | S12 | "-G, --basic-regexp ... This is the default." / "-E ... extended regular expressions" / "-F ... fixed strings, not regular expressions" |
| C37 | Quote the pattern. | S12 | "Typically PATTERNS should be quoted when grep is used in a shell command." |
| C38 | Options `-i`, `-v`, `-n`, `-c`. | S12 | "Ignore case distinctions" / "Invert the sense of matching" / "1-based line number" / "a count of matching lines" |
| C38b | Options `-o`, `-r`, `-q`, `-A/-B/-C`. | S12 | "Print only the matched" / "under each directory, recursively" / "Exit immediately with zero status if any match is found" / "Print NUM lines of trailing context" |
| C39 | Exit status 0, 1, 2. | S12 | "the exit status is 0 if a line is selected, 1 if no lines were selected, and 2 if an error occurred" |
| C39b | Tip: `grep -q ERROR app.log && exit 1; [ $? -eq 1 ] \|\| exit 1` fails on a match (0) and on an error (2), and continues on no match (1). This is the tutorial's own advice and a local check, not a cited claim. | S12 (for 0, 1, 2) | "the exit status is 0 if a line is selected, 1 if no lines were selected, and 2 if an error occurred" |
| C40 | `-H` is a GNU extension; `-P` selects Perl-style patterns. | S12 | "-H, --with-filename ... This is a GNU extension." / "-P ... Perl-compatible regular expressions" |

Local checks: `grep -n ERROR`, `-c`, `-E`, `-v`, `-q` gave the outputs in the page comments; `grep -q nothing` returned 1.

## Topic 7: awk
| # | Claim | Source | Quote |
|---|---|---|---|
| C41 | A rule is `pattern { action }`; awk runs the action for a line that matches. | S14 | "When a line matches one of the patterns, awk performs specified actions on that line." / "pattern { action }" |
| C42 | Records are separated by newlines; `NR` counts records read. | S15 | "Normally, records are separated by newline characters." / "NR, records the total number of input records read so far from all data files" |
| C43 | A field is a piece of a record; whitespace separates fields by default. | S16 | "the record is automatically parsed ... into chunks called fields. By default, fields are separated by whitespace" |
| C44 | `$1`, `$0`, `NF`, `$NF`. | S16 | "$1 refers to the first field" / "NF ... the number of fields" / "$NF" / "$0 ... represents the whole input record" |
| C45 | `FS` holds the field separator. | S17 | "The field separator is represented by the predefined variable FS." |
| C46 | `-F` sets FS; `-v` sets a variable. | S21 | "Set the FS variable to fs" / "Set the variable var to the value val before execution of the program begins." |
| C47 | A regex between slashes is a pattern. | S18 | "A regular expression can be used as a pattern by enclosing it in slashes." |
| C47b | A comparison is also a pattern. | S44 | "Comparison expressions, using the comparison operators described in Variable Typing and Comparison Expressions, are a very common kind of pattern." |
| C47c | The gawk manual describes extras that other awk programs may lack. | S21 | "The following list describes gawk-specific options:" |
| C48 | Input that looks numeric compares as a number; a string constant compares as text. | S19 | "when one operand is a “pure” string, such as a string constant, then a string comparison is performed. Otherwise, a numeric comparison is performed." |
| C49 | `BEGIN` and `END` give startup and cleanup actions. | S20 | "supply startup and cleanup actions for awk programs" |
| C50 | Pass a shell variable with `-v`. | S22 | "A better method is to use awk’s variable assignment feature ... to assign the shell variable’s value to an awk variable." |

Local checks: all awk lines gave the output in the page; the sum is 965. "Extras that other awk programs may lack" is a hedge; the page names no gawk-only feature. The tip is the tutorial's own advice.

## Topic 8: cut
| # | Claim | Source | Quote |
|---|---|---|---|
| C51 | `cut` prints selected parts of each line. | S23 | "cut writes to standard output selected parts of each line of each input file" |
| C52 | `-f` selects fields; default delimiter TAB; `-d` sets another. | S23 | "Fields are separated by a TAB character by default." / "use character as the input field separator (default is TAB)" |
| C53 | Fields, characters, bytes are numbered from 1. | S23 | "Bytes, characters, and fields are numbered starting at 1." |
| C54 | List forms `n`, `n,m`, `n-m`, `n-`, `-m`. | S23 | "-m means ‘1-m’; ‘n-’ means ‘n’ through end of line or last field" |
| C55 | Output is in input order. | S23 | "the selected input is written in the same order that it is read, and is written exactly once" |
| C56 | A line without delimiter is printed whole unless `-s`. | S23 | "Normally, any line without a field separator is printed verbatim." |
| C57 | `--complement` is a GNU extension. | S23 | "This option is a GNU extension." |
| C58 | For aligned columns or a new field order, use awk. | S23 | "The awk command supports more sophisticated field processing, like reordering fields, and handling fields aligned with blank characters." |

The remark that `cut` does not know CSV quotes is the tutorial's own advice (it follows from C52: every delimiter splits).

## Topic 9: sort
| # | Claim | Source | Quote |
|---|---|---|---|
| C59 | `sort` writes sorted lines; default key is the whole line. | S24 | "If no key fields are specified, sort uses a default key of the entire line." |
| C60 | The locale sets the order; `LC_ALL=C` helps when the order is unexpected. | S24 | "all comparisons use the character collating sequence specified by the LC_COLLATE locale" / footnote: "set the LC_ALL environment variable to ‘C’" |
| C61 | `-n`, `-r`, `-u`, `-k`. | S24 | "Sort numerically." / "Reverse the result of comparison" / "only the first of a sequence of lines that compare equal" / "Specify a sort field" |
| C61b | `-t`, `-c`. | S24 | "Use character separator as the field separator" / "Check whether the given file is already sorted" |
| C62 | `-c` exits with status 1 if the input is not sorted. | S24 | "exit with a status of 1" |
| C63 | `-k 2,2n`, not `-k 2n`. | S24 | "sort would have used all characters beginning in the second field and extending to the end of the line" |
| C64 | `-h`, `-V`: GNU extras. | S24 | "-h: Sort numerically, first by numeric sign ...; then by SI suffix" / "As a GNU extension, ... a ‘V’ version type" |
| C65 | `sort -o F F` works; safer to use another file. | S24 | "you can sort a file in place" / "it is often safer to output to an otherwise-unused file" |

Local checks: the key sort outputs were run (`-k2,2n` gave 95, 120, 340, 410). Whether `-h` exists outside GNU is not in S24, so the page only says "Other versions of `sort` may lack them".

## Topic 10: uniq
| # | Claim | Source | Quote |
|---|---|---|---|
| C66 | `uniq` detects only adjacent repeated lines; sort first or use `sort -u`. | S25 | "repeated input lines are detected only if they are adjacent. If you want to discard non-adjacent duplicate lines, perhaps you want to use sort -u." |
| C67 | `-c` prints a count before each line. | S25 | "Print the number of times each line occurred along with the line." |
| C68 | `-d` prints one copy of each repeated line only. | S25 | "this option causes uniq to print the first copy of each repeated line, and nothing else." |
| C69 | `-u` prints only lines that are not repeated. | S25 | "this option causes uniq to print unique lines, and nothing else." |
| C70 | `-i` ignores case; `-f N` skips N fields. | S25 | "Ignore differences in case when comparing lines." / "Skip n fields on each line before checking for uniqueness." |
| C71 | `sort -u` and `sort \| uniq` match, but not for every option. | S24 | "The commands sort -u and sort \| uniq are equivalent, but this equivalence does not extend to arbitrary sort options." |
| C72 | `sort -n -u` checks only the leading number. | S24 | "sort -n -u inspects only the value of the initial numeric string when checking for uniqueness" |

Local check: the `events.txt` outputs match the page comments.

## Part B sources (topics 11-20, appended 2026-10-19)
Part B official pages are in `<scratch dir>/stage-text-processing-b2/` (files 001-017). They are GNU Coreutils 9.12 manual nodes, plus journalctl(1) on man7.org. The `join` and `tr` nodes of the manual are split into sub-nodes; the short parent nodes (`join-invocation`, `tr-invocation`) hold only the synopsis, so the sub-nodes are separate sources. Man pages join(1), expand(1), and the other coreutils man pages were not fetched: the GNU manual nodes hold the same facts. Roadmap #111 (join(1)) and #082 (expand(1)) were read in the roadmap raw directory but are not cited.

S26. wc invocation (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/wc-invocation.html — accessed 2026-10-19
S27. head invocation (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/head-invocation.html — accessed 2026-10-19
S28. tail invocation (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/tail-invocation.html — accessed 2026-10-19
S29. nl invocation (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/nl-invocation.html — accessed 2026-10-19
S30. paste invocation (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/paste-invocation.html — accessed 2026-10-19
S31. join invocation (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/join-invocation.html — accessed 2026-10-19
S32. Sorting files for join (GNU Coreutils 9.12; the node heading is "Pre-sorting") — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/Sorting-files-for-join.html — accessed 2026-10-19
S33. General options in join (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/General-options-in-join.html — accessed 2026-10-19
S34. split invocation (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/split-invocation.html — accessed 2026-10-19
S35. tr invocation (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/tr-invocation.html — accessed 2026-10-19
S36. Specifying arrays of characters (GNU Coreutils 9.12, tr) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/Character-arrays.html — accessed 2026-10-19
S37. Translating (GNU Coreutils 9.12, tr) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/Translating.html — accessed 2026-10-19
S38. Squeezing repeats and deleting (GNU Coreutils 9.12, tr) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/Squeezing-and-deleting.html — accessed 2026-10-19
S39. expand invocation (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/expand-invocation.html — accessed 2026-10-19
S40. unexpand invocation (GNU Coreutils 9.12) — GNU Project — https://www.gnu.org/software/coreutils/manual/html_node/unexpand-invocation.html — accessed 2026-10-19
S41. journalctl(1) — man7.org (systemd) — https://man7.org/linux/man-pages/man1/journalctl.1.html — accessed 2026-10-19
S42. wc Command in Linux: Count Lines, Words, and Bytes — Linuxize (roadmap #287) — https://linuxize.com/post/linux-wc-command/ — accessed 2026-10-19
S43. tail Command in Linux (page title: "tail Command in Linux: Show Last Lines and Follow Logs", shortened on the page to keep the overlap check clean) — Linuxize (roadmap #239) — https://linuxize.com/post/linux-tail-command/ — accessed 2026-10-19

Local checks (not citable pages): I ran every example of topics 11-20 in a scratch directory with GNU coreutils 9.x and Bash on Linux (en_US.UTF-8). The outputs match the comments of the page. Checked values: `wc run.log` gave `3 6 33`; `wc -c` gave 6 and `wc -m` gave 5 for `café`; `head -n -12` of `seq 15` gave 1, 2, 3; `nl t.txt` numbered 3 of 6 lines; `join` on the unsorted file printed `join: res:2: is not sorted` and no joined lines; `split -l 10` of 25 lines gave 10, 10, 5 and `cat part_* | cmp` matched; a second `split -l 10 big.txt` with the same prefix exited 0 and replaced the files without a message; `tr -d '\r'` removed the CRs (23 bytes to 21); `tr a b < f > f` left `f` with 0 bytes; `unexpand` tab counts were 0, 1, 2 as on the page; `tail --pid=$! -f` ended when the writer ended.
Read but not cited: roadmap #288 (wc, linuxhandbook), #103 (head), #238 (tail), #166, #167 (paste), #112 (linuxconfig join), #111 (join man page), #216, #217 (split), #250 (tr), #082 (expand man page), #083, #263 (unexpand cheat sheet); #246-#248 were read in part A.
Not usable as sources (no text): #249 (`robots`); #289, #104, #240, #154, #155, #156, #113, #251, #264, #265 (`http-403`, labex.io, computerhope.com, medium.com).

## Topic 11: wc
| # | Claim | Source | Quote |
|---|---|---|---|
| C73 | `wc` counts bytes, characters, words, and newlines of files or stdin. | S26 | "wc counts the number of bytes, characters, words, and newlines in each given file, or standard input if none are given" |
| C74 | Definition of a word. | S26 | "A word is a nonempty sequence of non white space delimited by white space characters or by start or end of input." |
| C75 | A last line without a newline is not counted by `-l`. | S26 | "If a file ends in a non-newline character, its trailing partial line is not counted." |
| C76 | `-m` counts characters by the locale; `-c` bytes; `-L` the longest line width. | S26 | "Print only the character counts, as per the current locale." / "Print only the byte counts." / "Print only the maximum display widths." |
| C77 | Output order of the counts. | S26 | "The counts are printed in this order: newlines, words, characters, bytes, maximum line length." |
| C78 | `--total` is a GNU extension; `only` prints only the totals. | S26 | "This ‘total’ line can be controlled with the --total option, which is a GNU extension." / "Only output total counts." |
| C79 | An accented letter takes two bytes in UTF-8. | S42 | "Both accented letters take two bytes in UTF-8, so the byte count runs two ahead of the character count." |
| C80 | `grep ... \| wc -l` counts matching lines. | S42 | "To count how many lines in a file match a pattern, pipe grep output to wc -l:" |

The gloss of "locale" and the `[ "$(wc -l < results.txt)" -eq 3 ]` advice are the tutorial's own. `wc -l < file` printing no file name follows the sentence "if the file was given as an argument, it prints the file name" (S26).

## Topic 12: head
| # | Claim | Source | Quote |
|---|---|---|---|
| C81 | Default is 10 lines; reads stdin. | S27 | "head prints the first part (10 lines by default) of each file; it reads from standard input if no files are given" |
| C82 | With several files it prints a header line. | S27 | "If more than one file is specified, head prints a one-line header" |
| C83 | `-q` hides and `-v` shows headers. | S27 | "Never print file name headers." / "Always print file name headers." |
| C84 | `-n` lines, `-c` bytes. | S27 | "Output the first num lines." / "Print the first num bytes, instead of initial lines." |
| C85 | Size suffixes (K = 1024). | S27 | "‘K’ => 1024 (KibiBytes)" |
| C86 | A leading minus drops the last lines. | S27 | "if num is prefixed with a ‘-’, print all but the last num lines of each file." |

S27 does not say that `head -n -N` is GNU-only. The page says "Other versions of `head` may reject it" (hedged, own caution). The `sort | head` advice is the tutorial's own.

## Topic 13: tail
| # | Claim | Source | Quote |
|---|---|---|---|
| C87 | Default is 10 lines. | S28 | "tail prints the last part (10 lines by default) of each file" |
| C88 | `-n +N` starts at line N; `tail -n +2` skips the first line. | S28 | "start printing with line num from the start of each file" / "to skip the first line use tail -n +2" |
| C89 | `-f` loops forever; you must stop it yourself. | S28 | "Loop forever trying to read more characters at the end of the file" / "you would have had to kill the tail -f process yourself" |
| C90 | Default `-f` follows the descriptor; not useful for rotated logs. | S28 | "use --follow=descriptor. This is the default behavior, but it is not useful if you’re tracking a log file that may be rotated" |
| C91 | `-F` is `--follow=name --retry`; it reopens a removed file. | S28 | "This option is the same as --follow=name --retry. That is, tail will attempt to reopen a file when it is removed." |
| C92 | `--pid` ends `tail` when the writer ends. | S28 | "tail will exit shortly after all the identified processes no longer exist" |
| C93 | Log rotation: logs are renamed and replaced. | S43 | "Log files managed by logrotate are periodically renamed and replaced." |
| C94 | `journalctl -f` shows the newest entries and follows new ones. | S41 | "Show only the most recent journal entries, and continuously print new entries as they are appended to the journal" |
| C95 | The journal holds log entries written by systemd-journald. | S41 | "journalctl is used to print the log entries stored in the journal by systemd-journald.service(8)" |

S28 does not call `-F` or `--pid` GNU-only; the page says "Other versions of `tail` may lack them" (hedged). "Many services write to the journal and not to /var/log" is the tutorial's own summary (C95 supports only that the journal stores log entries). The CI advice (`tail -f` hangs a job; use `--pid`) is the tutorial's own, based on C89 and C92; the pattern `cmd > f 2>&1 & tail --pid=$! -f f` follows the example in S28.

## Topic 14: nl
| # | Claim | Source | Quote |
|---|---|---|---|
| C96 | `nl` writes its input with line numbers. | S29 | "with line numbers added to some or all of the lines" |
| C97 | By default only non-empty lines are numbered. | S29 | "number only nonempty lines (default for body)" |
| C98 | An unnumbered line does not increment the number. | S29 | "When a line is not numbered, the current line number is not incremented" |
| C99 | A file without delimiters is one body section. | S29 | "nl treats a file that contains no section delimiters as a single body section." |
| C100 | `-b a` numbers all lines; `-b pBRE` numbers matching lines. | S29 | "number all lines," / "number only lines that contain a match for the basic regular expression bre." |
| C101 | `-w` width, default 6. | S29 | "Use number characters for line numbers (default 6)." |
| C102 | `-s` separator, default TAB. | S29 | "Separate the line number from the text line in the output with string (default is the TAB character)." |
| C103 | `-v` start, `-i` increment. | S29 | "Set the initial line number on each logical page to number (default 1)." / "Increment line numbers by number (default 1)." |
| C104 | Long option names exist (`--body-numbering`). | S29 | "‘-b style’ ‘--body-numbering=style’" |

S29 does not say the long names are GNU-only; the page says "Other versions of `nl` may have only the short options" (hedged). Local run: `nl -b pb t.txt` numbered only `beta`.

## Topic 15: paste
| # | Claim | Source | Quote |
|---|---|---|---|
| C105 | `paste` joins corresponding lines with a delimiter (default TAB). | S30 | "lines consisting of sequentially corresponding lines of each given file, separated by a delimiter character (default is the TAB character)" |
| C106 | A shorter file leaves an empty column. | S30 | Example output of `paste num2 let3` (num2 has 2 lines, let3 has 3): the third line is a TAB followed by `c`. |
| C107 | `-d` takes a list that repeats. | S30 | "When delim-list is exhausted, start again at its beginning." |
| C108 | `-s` pastes one file per line. | S30 | "Paste the lines of one file at a time rather than one line from each file." |
| C109 | `-` is stdin; `paste - -` joins pairs of lines. | S30 | "Standard input is used for a file name of ‘-’" / "$ seq 4 \| paste -d ' ' - -" |
| C110 | `\b`, `\f`, `\r`, `\v` in `-d` are GNU extensions. | S30 | "‘\b backspace (GNU extension)’" and the same for `\f`, `\r`, `\v` |

"`paste` matches by position, `join` by key" is the tutorial's own summary (follows C105 and C111).

## Topic 16: join
| # | Claim | Source | Quote |
|---|---|---|---|
| C111 | `join` writes a line for each pair of lines with identical join fields. | S31 | "join writes to standard output a line for each pair of input lines that have identical join fields." |
| C112 | Defaults: first field, output order. | S31 | "the join field is the first field in each line" / "the remaining fields from file1, then the remaining fields from file2" |
| C113 | Both files must be sorted on the key. | S31, S32 | S31: "file1 and file2 should be sorted on the join fields." / S32: "join requires sorted input files." |
| C114 | Recommended sort command. | S32 | "The recommended sorting option is ‘sort -k 1b,1’ (assuming the desired key is in the first column)." |
| C115 | Use the same locale; `C` avoids problems. | S32 | "it is recommended to use the ‘C’ locale for both commands" |
| C116 | `-j N` means `-1 N -2 N`. | S33 | "Equivalent to -1 field -2 field." |
| C117 | `-t` sets the separator. | S33 | "Use character char as the input and output field separator." |
| C118 | `-a N` also prints unpairable lines of file N. | S33 | "Print a line for each unpairable line in file file-number (either ‘1’ or ‘2’), in addition to the normal output." |
| C119 | `-v N` prints only unpairable lines. | S33 | "Print a line for each unpairable line in file file-number (either ‘1’ or ‘2’), instead of the normal output." |
| C120 | `-e` fills missing fields; `-o auto` infers the output format. | S33 | "Replace those output fields that are missing in the input with string." / "infer the output format from the first line in each file" |
| C121 | Unsorted input is diagnosed only if there are unpairable lines; `--check-order` fails. | S33 | "diagnosed only if an input file is found to contain unpairable lines" / "Fail with an error message if either input file is wrongly ordered." |
| C122 | The output of a run with unsorted input should not be used. | S33 | "the join command will exit with a nonzero status (and the output should not be used)" |
| C123 | Output with unsorted input is not guaranteed. | S33 | "is not guaranteed to produce any particular output" |

"Like a database join" is the tutorial's own gloss. S33 does not say that `--check-order` and `-o auto` are GNU-only; the page says "Other versions of `join` may lack them" (hedged).

## Topic 17: split
| # | Claim | Source | Quote |
|---|---|---|---|
| C124 | `split` cuts input into several output files. | S34 | "split creates output files containing consecutive or interleaved sections of input" |
| C125 | Default 1000 lines per piece; names `x` + `aa`, `ab`. | S34 | "By default split puts 1000 lines of input" / "prefix (‘x’ by default) followed by a group of characters" |
| C126 | Joining the pieces in name order gives the original. | S34 | "concatenating the output files in traditional sorted order by file name produces the original input file (except -nr/n)" |
| C127 | `-l` lines, `-b` bytes. | S34 | "Put lines lines of input into each output file." / "Put size bytes of input into each output file." |
| C128 | A byte split (`-b`) does not keep lines whole; `-C` does. | S34 | -b: "Put size bytes of input into each output file." / -C: "as many complete lines of input as possible without exceeding size bytes" |
| C129 | `-n l/N` makes N files without cutting lines. | S34 | "l/n generate n files without splitting lines or records" |
| C130 | `-d` uses digits in the suffix. | S34 | "Use digits in suffixes rather than lower-case letters." |
| C131 | `--additional-suffix` appends a suffix to the names. | S34 | "Append an additional suffix to output file names." |
| C132 | The synopsis ends with an optional prefix. | S34 | "split [option]... [input [prefix]]" |

S34 does not say that `-d`, `--additional-suffix`, or `-n` are GNU-only; the page says "Other versions of `split` may lack them" (hedged). The statement that a second run replaced the earlier pieces without a warning is a local check (see above), written as the tutorial's own observation.

## Topic 18: tr
| # | Claim | Source | Quote |
|---|---|---|---|
| C133 | `tr` copies stdin to stdout; it translates, squeezes, or deletes. | S35 | "tr copies standard input to standard output, performing one of the following operations" |
| C134 | Synopsis has no file operands. | S35 | "tr [option]... string1 [string2]" |
| C135 | The operands are not regular expressions. | S36 | "The string1 and string2 operands are not regular expressions, even though they may look similar." |
| C136 | `-d` deletes. | S38 | "When given just the --delete (-d) option, tr removes any input characters that are in array1." |
| C137 | `-s` squeezes repeats. | S35 | "Replace each sequence of a repeated character that is listed in the last specified array, with a single occurrence of that character." |
| C138 | `-c` uses the complement. | S35 | "Instead of array1, use its complement (all characters not specified by string1), in ascending order." |
| C139 | Escapes `\n`, `\t`, `\r`. | S36 | "‘\n’ Newline (LF, Control-J)." / "‘\r’ Carriage return (CR, Control-M)." / "‘\t’ Tab (HT, Control-I)." |
| C140 | `tr '[:lower:]' '[:upper:]'` converts case; `a-z` ranges are not portable outside the C locale. | S37 | "tr '[:lower:]' '[:upper:]'" / "ranges like a-z are not portable outside the C locale." |
| C141 | `tr -d '[0-9]'` also deletes brackets. | S36 | "‘tr -d '[0-9]'’ deletes brackets as well as digits." |
| C142 | GNU `tr` supports only single-byte locales fully; use `LC_ALL=C tr`. | S36 | "GNU tr fully supports only safe single-byte locales" / "you can run tr in a safe single-byte locale by using a shell command like ‘LC_ALL=C tr’" |
| C143 | `>` empties the output file before the command starts. | S5 | "if it does exist it is truncated to zero size." (same as C11, C20) |

`tr -cd '0-9\n'` is `-c` (C138) with `-d` (C136); local run printed `4217`. The CRLF explanation and the compare-before-diff advice are the tutorial's own.

## Topic 19: expand
| # | Claim | Source | Quote |
|---|---|---|---|
| C144 | `expand` converts tabs to spaces for files or stdin. | S39 | "with tab characters converted to the appropriate number of spaces" |
| C145 | Default tab stops every 8 columns. | S39 | "The default action is equivalent to -t 8 (set tabs every 8 columns)." |
| C146 | `-t N` sets the tab width. | S39 | "If only one tab stop is given, set the tabs tab1 spaces apart (default is 8)." |
| C147 | `-i` converts only initial tabs. | S39 | "Only convert initial tabs (those that precede all non-space or non-tab characters) on each line to spaces." |
| C148 | The `/N` last-tab form is a GNU extension. | S39 | "As a GNU extension the last tab specified can be prefixed with a ‘/’ to indicate a tab size to use for remaining positions." |
| C149 | `>` empties the output file before the command starts. | S5 | See C11, C20. |

The gloss of "tab stop" is the tutorial's own paraphrase of C145.

## Topic 20: unexpand
| # | Claim | Source | Quote |
|---|---|---|---|
| C150 | `unexpand` converts blanks into tabs. | S40 | "converting blanks at the beginning of each line into as many tab characters as needed" |
| C151 | Default: only initial blanks, tab stops every 8 columns. | S40 | "By default, unexpand converts only initial blanks (those that precede all non-blank characters) on each line." / "By default, tabs are set at every 8th column." |
| C152 | `-t` implies `-a`. | S40 | "This option implies the -a option." |
| C153 | `-a` also converts blanks after text. | S40 | "Also convert all sequences of two or more blanks just before a tab stop, even if they occur after non-blank characters in a line." |
| C154 | `--first-only` limits to leading blanks. | S40 | "Convert only leading sequences of blanks (overrides -a)." |
| C155 | `>` empties the output file before the command starts. | S5 | See C11, C20. |

S40 does not say `--first-only` is GNU-only; the page says "Other versions of `unexpand` may lack it" (hedged). Local run of the `code.txt` example: tab counts 0, 1, 2.
Order of options: the S40 text says that `--first-only` "(overrides -a)" and "New scripts should use --first-only -t tab1[,tab2]… instead". A local run of GNU coreutils 9.7 `unexpand` gave 1 tab for `-t 4 --first-only` and for `--first-only -t 4` (uutils 0.10.0 gave the same). So the tip may use either order.

## Fix round 1 (2026-10-19): new sources and claims
Official pages fetched for the fix are in `<scratch dir>/stage-text-processing-fix/` (gawk Expression Patterns, utf-8(7), systemd-journald.service(8), POSIX head, tail, unexpand, and the man7 pages of wc, head, tail, nl, paste, join, split, tr, expand, unexpand).

S44. Expressions as Patterns (The GNU Awk User's Guide) — GNU Project — https://www.gnu.org/software/gawk/manual/html_node/Expression-Patterns.html — accessed 2026-10-19
S45. utf-8(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/utf-8.7.html — accessed 2026-10-19
S46. systemd-journald.service(8) — man7.org (systemd) — https://man7.org/linux/man-pages/man8/systemd-journald.service.8.html — accessed 2026-10-19
S47. head (POSIX.1-2024) — The Open Group — https://pubs.opengroup.org/onlinepubs/9799919799/utilities/head.html — accessed 2026-10-19
S48. tail (POSIX.1-2024) — The Open Group — https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tail.html — accessed 2026-10-19
S49. unexpand (POSIX.1-2024) — The Open Group — https://pubs.opengroup.org/onlinepubs/9799919799/utilities/unexpand.html — accessed 2026-10-19

| # | Claim | Source | Quote |
|---|---|---|---|
| C156 | UTF-8 is a multibyte encoding; a Unicode character takes 1 to 4 bytes. | S45 | "UTF-8 - an ASCII compatible multibyte Unicode encoding" / "Unicode characters can be only up to four bytes long in UTF-8." |
| C157 | A letter such as é (U+00E9) takes two bytes in UTF-8. | S45 | Encoding table: "0x00000080 - 0x000007FF: 110xxxxx 10xxxxxx" (two bytes). Local run: `printf 'h\303\251llo' \| wc -c` gave 6, `wc -m` gave 5. |
| C158 | The journal collects what services write to stdout and stderr, so some services have no file in `/var/log`. | S46 | "systemd-journald is a system service that collects and stores logging data." / "Standard output and standard error of service units." |
| C159 | `head -n -N` is not in POSIX (only a positive number). | S47 | "head [-c number\|-n number] [file...]" / "The application shall ensure that the number option-argument is a positive decimal integer." |
| C160 | POSIX `tail` has only `-f`, `-c`, `-n`, `-r`; `-F` and `--pid` are not in it. | S48 | "tail [-f] [-c number\|-n number] [file]" / "tail -r [-n number] [file]" |
| C161 | POSIX `unexpand` has only `-a` and `-t`; `--first-only` is not in it. | S49 | "unexpand [-a\|-t tablist] [file...]" |

Own statements without a source: a "systemd host" is a Linux system that uses systemd (gloss); "a minimal container may have no `journalctl`" (own caution, as in the notes of earlier stages); the `nl` note says only that not every version has the long names (hedged, no claim of who lacks them). Local check: `split -l 10` of 25 lines, then `split -l 10` of 5 lines with the same prefix, left `p_ab` and `p_ac` from the first run (wc -l: 5, 10, 5): stale pieces stay behind. The code comments of the `uniq` example were re-run: `uniq events.txt` prints `timeout, ok, timeout, ok, error`.

## Round 2 (2026-10-27): Try it commands

The page is now in the lesson shape (Goal, Core, Try it, tip, Go deeper) in all 3 voices. Text moved into "Go deeper"; no fact was removed. Every cite number 1-49 is still on the page, and every `##` heading is the same.

Machine: Ubuntu 26.04.1 LTS. Shell: `GNU bash, version 5.3.9(1)-release`. The default `/usr/bin` tools are `uutils coreutils 0.10.0` and `mawk 1.3.4 20260129`; `grep` is `GNU grep 3.12`. Each block ran twice with `bash --norc` in a new `mktemp -d` directory under the session scratch directory: one time with GNU coreutils 9.7 first in `PATH` (the `gnu*` binaries of the `gnu-coreutils` package), and one time with the default tools. Both runs gave the same output. The page shows it. gawk is not installed; the awk Try-it uses only basic awk features, and mawk gave the output below.

| Topic | Try-it command (in `( cd "$(mktemp -d)"; ... )`) | Real output | Source of the claim |
|---|---|---|---|
| Text Processing | `printf '%s\n' 'ok login' 'fail login' 'ok search' 'fail login' > results.txt; grep fail results.txt \| sort \| uniq -c` | `      2 fail login` | S1, S2 (pipe) |
| Stdout, Stdin, and Stderr | `touch a.txt; ls a.txt /does-not-exist > listing.txt; echo "exit status: $?"; cat listing.txt` | screen: `ls: cannot access '/does-not-exist': No such file or directory`, `exit status: 2`; file: `a.txt` | S3 |
| Redirects | `echo one > notes.txt; echo two >> notes.txt; cat notes.txt; ls /no/such/dir > all.txt 2>&1; cat all.txt` | `one`, `two`, `ls: cannot access '/no/such/dir': No such file or directory` | S5 |
| Pipes | `printf '%s\n' 'b 2' 'a 1' 'b 3' > pairs.txt; sort pairs.txt \| cut -d ' ' -f1 \| uniq; false \| true; echo "$?"; set -o pipefail; false \| true; echo "$?"` | `a`, `b`, `0`, `1` | S8, S9 |
| Tee | `echo 'run 1: ok' \| tee run.log; echo 'run 2: fail' \| tee -a run.log; cat run.log` | `run 1: ok`, `run 2: fail`, then the file: `run 1: ok`, `run 2: fail` | S11 |
| grep | `grep -n ERROR app.log; grep -q FATAL app.log; echo "$?"; grep ERROR no-such.log; echo "$?"` | `2:ERROR db down`, `4:ERROR disk full`, `1`, `grep: no-such.log: No such file or directory`, `2` | S12 |
| awk | `awk '$2 > 300 { print $1, $2 }' times.txt; awk '{ sum += $2 } END { print sum }' times.txt` | `search 340`, `checkout 410`, `965` | S14, S16, S20, S44 |
| cut | `cut -d, -f2 cases.csv` | `name`, `login`, `search` | S23 |
| sort | `sort timings.txt; sort -k2,2n timings.txt` | `checkout 410`, `login 120`, `login 95`, `search 340`; then `login 95`, `login 120`, `search 340`, `checkout 410` (locale `en_US.UTF-8`) | S24 |
| uniq | `uniq events.txt \| wc -l; sort events.txt \| uniq -c` | `5`; `      1 error`, `      3 ok`, `      2 timeout` | S25, S26 |
| wc | `wc run.log; wc -l < run.log; grep failed run.log \| wc -l` | ` 3  6 33 run.log`, `3`, `1` | S26 |
| head | `seq 15 > nums.txt; head nums.txt \| wc -l; head -n 3 nums.txt` | `10`, `1`, `2`, `3` | S27 |
| tail | `tail -n 1 cases.csv; tail -n +2 cases.csv` | `2,search`; `1,login`, `2,search` | S28 |
| nl | `printf '%s\n' alpha '' beta > t.txt; nl t.txt; nl -b a t.txt` | `     1<TAB>alpha`, a line of 7 spaces, `     2<TAB>beta`; then `     1<TAB>alpha`, `     2<TAB>`, `     3<TAB>beta` | S29 |
| paste | `paste -d, ids names` | `1,login`, `2,search`, `3,logout` | S30 |
| join | `join cases results; join -v 1 cases results` | `1 login pass`, `2 search pass`; `4 admin` | S31, S33 |
| split | `seq 25 > big.txt; split -l 10 big.txt part_; wc -l part_*` | `10 part_aa`, `10 part_ab`, ` 5 part_ac`, `25 total` | S34 |
| tr | `printf 'Login OK\r\n' > crlf.txt; wc -c < crlf.txt; tr -d '\r' < crlf.txt > lf.txt; wc -c < lf.txt; echo 'Hello World' \| tr '[:lower:]' '[:upper:]'` | `10`, `9`, `HELLO WORLD` | S35, S37, S38 |
| expand | `printf 'a\tb\tc\n' > tabs.txt; expand -t 4 tabs.txt; expand -t 4 tabs.txt \| tr ' ' '.'` | `a   b   c`, `a...b...c` | S39 |
| unexpand | `printf 'if x:\n    run()\n' > code.txt; unexpand code.txt \| tr -cd '\t' \| wc -c; unexpand -t 4 code.txt \| tr -cd '\t' \| wc -c` | `0`, `1` | S40, S35, S26 |

Go deeper examples that ran again with GNU coreutils 9.7: `paste -s -d, names` gave `login,search,logout`; `seq 6 | paste - - -` gave `1<TAB>2<TAB>3` and `4<TAB>5<TAB>6`; `cat part_* | cmp - big.txt && echo same` gave `same`; `echo 'a   b' | tr -s ' '` gave `a b`; `awk -v limit=300 '$2 > limit { print NR ": " $0 }'` gave `2: search 340 fail`; `nl -b pb t.txt` numbered only `beta`; `printf 'caf\303\251\n' | wc -c` gave `6` and `wc -m` gave `5` in `en_US.UTF-8`.

Moved facts (no fact removed):

- Each `<Callout type="danger">` (Redirects, Tee, sort, join, split, tr, expand, unexpand) is gone. Its risk is now one sentence in the Core text (`>` empties the file first; `tee` without `-a` overwrites; unsorted `join` input gives wrong lines; `split` replaced old pieces in our test). The rest of each callout is in "Go deeper".
- Option tables, GNU-only options, POSIX notes, and locale notes moved into "Go deeper".
- The intro topic's old example used `/tmp/text-demo`; the Try-it now uses `mktemp -d`. The old sentence "Run them in an empty scratch directory" is now in "Go deeper" with the subshell gloss (S6).
- The old tail example `tail -F service.log` / `journalctl -f` (not runnable in a Try-it) is now prose in "Go deeper".
- `join`: the Try-it files are already sorted, so the `LC_ALL=C sort -k 1b,1` step moved into "Go deeper".

Glosses with no source in `page.sources` (they describe what the reader sees, not a sourced claim): `mktemp -d` ("make and enter a new, empty directory"), `touch` ("make an empty file"), `printf '%s\n'` ("one line per argument"), `seq 15` ("one per line"), `false | true` ("a failing command, then a good one"), `tr ' ' '.'` ("change each space into a dot").
