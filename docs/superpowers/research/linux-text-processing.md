# Text Processing (Linux stage 3) — research notes (2026-10-19)

Fetch note: all pages were fetched with `scripts/linux_fetch.py` (robots.txt respected, 2 s host delay). Roadmap links come from `/home/nuruddin-kawsar/.cache/linux-roadmap-raw/` (re-fetched 2026-10-19). Official pages are in `/home/nuruddin-kawsar/.cache/linux-stage-text-processing/` (files 001-034). The man7.org pages are HTML renderings of man pages (coreutils 9.11, man-pages 6.19). The GNU manual pages are coreutils 9.12 and the current gawk, bash, and grep manuals. Quotes are at most 25 words. The index of a source in `page.sources` is the same as its S number. Part A (topics 1-10) is written first. Part B (topics 11-20) appends sources S26 and up and must not renumber S1-S25.

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
S13. Grep and Regular Expressions for Beginners — Ryan's Tutorials (roadmap #100) — https://ryanstutorials.net/linuxtutorial/grep.php — accessed 2026-10-19
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
| C3 | Each program starts with three streams: input, output, errors and diagnostics. | S3 | "every UNIX program has three streams opened for it when it starts up, one for input, one for output, and one for printing diagnostic or error messages" |
| C4 | The short names are stdin, stdout, stderr. | S3 | "namely stdin, stdout, and stderr" |
| C5 | The file descriptors are 0, 1, 2. | S3 | "the integer file descriptors associated with the streams stdin, stdout, and stderr are 0, 1, and 2, respectively" |
| C6 | Meaning of each descriptor (table). | S2 | "STDIN (0) - Standard input (data fed into the program)" / "STDERR (2) - Standard error (for error messages, also defaults to the terminal)" |
| C7 | The terminal is usually behind the streams; the shell can connect them to files or programs. | S4, S2, S3 | S4: "Streams are usually connected to the terminal in which they are executed, but that can be changed using redirection operators" / S2: "Piping and redirection is the means by which we may connect these streams between programs and files" |
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
| C23 | A pipeline is commands joined by `\|`; each command reads the output of the one before. | S9 | "A pipeline is a sequence of one or more commands separated by one of the control operators ‘\|’ or ‘\|&’." / "each command reads the previous command’s output" |
| C24 | A pipe is a one-way channel with a read end and a write end. | S10 | "provide a unidirectional interprocess communication channel. A pipe has a read end and a write end." |
| C25 | The pipe is connected before the redirects of the first command. | S9 | "This connection is performed before any redirections specified by command1." |
| C26 | `\|&` also sends stderr into the pipe (Bash). Only stdout goes through a plain pipe. | S9 | "command1’s standard error, in addition to its standard output, is connected to command2’s standard input through the pipe" |
| C27 | A pipeline returns the status of its last command. | S9 | "The exit status of a pipeline is the exit status of the last command in the pipeline, unless the pipefail option is enabled" |
| C28 | With `pipefail`, the status is that of the last failed command, or 0. | S8 | "the return value of a pipeline is the value of the last (rightmost) command to exit with a non-zero status, or zero if all commands in the pipeline exit successfully" |
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
| C35 | A regular expression is a pattern language. | S13 | "Regular expressions ... allow us to create a pattern." (Gloss in the tutorial's own words.) |
| C36 | Default is basic regex; `-E` extended; `-F` fixed strings. | S12 | "-G, --basic-regexp ... This is the default." / "-E ... extended regular expressions" / "-F ... fixed strings, not regular expressions" |
| C37 | Quote the pattern. | S12 | "Typically PATTERNS should be quoted when grep is used in a shell command." |
| C38 | Options `-i`, `-v`, `-n`, `-c`, `-o`, `-r`, `-q`, `-A/-B/-C`. | S12 | "Ignore case distinctions" / "Invert the sense of matching" / "Prefix each line of output with the 1-based line number" / "print a count of matching lines" / "Print only the matched (non-empty) parts" / "Read all files under each directory, recursively" / "Exit immediately with zero status if any match is found" / "Print NUM lines of trailing context" |
| C39 | Exit status 0, 1, 2. | S12 | "the exit status is 0 if a line is selected, 1 if no lines were selected, and 2 if an error occurred" |
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
| C47 | A regex between slashes is a pattern; comparisons are patterns. | S18 | "A regular expression can be used as a pattern by enclosing it in slashes." |
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
| C61 | `-n`, `-r`, `-u`, `-k`, `-t`, `-c`. | S24 | "Sort numerically." / "Reverse the result of comparison" / "output only the first of a sequence of lines that compare equal" / "Specify a sort field" / "Use character separator as the field separator" / "Check whether the given file is already sorted" |
| C62 | `-c` exits with status 1 if the input is not sorted. | S24 | "exit with a status of 1" |
| C63 | `-k 2,2n`, not `-k 2n`. | S24 | "If you had written -k 2n instead of -k 2,2n sort would have used all characters beginning in the second field and extending to the end of the line" |
| C64 | `-h`, `-V`: GNU extras. | S24 | "-h: Sort numerically, first by numeric sign ...; then by SI suffix" / "As a GNU extension, ... a ‘V’ version type" |
| C65 | `sort -o F F` works; safer to use another file. | S24 | "you can sort a file in place by using commands like sort -o F F ... it is often safer to output to an otherwise-unused file, as data may be lost if the system crashes" |

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
