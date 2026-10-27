# Voice fact-check: Text Processing (Linux, round 1, 2026-10-20)

Page: `content/linux/text-processing.mdx`. I did not write this page.

Method: I read the 20 `<Voices>` blocks (one for each `##` section). For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a version, a flag, a command, a path, a product name, a scope, or a condition, is a FAIL. An omission is not a FAIL. I checked the `<Cite n>` of each voice panel with a script: in all 20 sections, the set of cites of the Layman panel and the set of cites of the Bangla panel are the same as the set of cites of the Technical panel, and no voice cites a source that the Technical panel does not cite. I also checked by reading that each cite follows the claim that the Technical panel supports with the same source. I did not re-check the Technical text against its sources, because `linux-text-processing.factcheck.md` does that. I read the Bangla text for meaning and for natural use: polite form (আপনি), common technical terms in English, and a hyphen between an English word and a Bangla suffix. A language problem is a FAIL only if it changes or hides the meaning. The code blocks and the tables are not repeated in the voices, and the voices do not add any code, flag, or number that is not in them.

Flagged items from my reading:

- Pipes, Layman: "The kernel, the core of the operating system, gives the pipe." The verb "gives" is loose for "provides". The meaning is the same. PASS, with a language note.
- tr, Layman: the sentence about single bytes and multibyte characters has no cite right after it. The Technical panel cites [36] for the same block of sentences, and the Layman paragraph ends with [36]. PASS.
- wc, Layman and Bangla: the Technical sentence "UTF-8 ... uses 1 to 4 bytes" is repeated with the same numbers. PASS.
- Bangla uses the number-and-suffix form "12টি" (head) without a hyphen, and "N-টি" with a hyphen (uniq, split). A number is not an English word, so the rule is not broken. Language note only.
- "Tutorial's own advice" tips: each Layman and Bangla panel that has such a tip keeps the label and has no cite, as in the Technical panel.
- The Key words tables of the Technical panels are not repeated. No section here has one.

| # | Section | Voice | Claim (English gloss for Bangla) | Technical sentence (quoted) | Verdict | Language |
|---|---|---|---|---|---|---|
| 1 | Text Processing | Layman | Linux tools mostly handle plain text | "Linux tools mostly handle plain text." | PASS | – |
| 2 | Text Processing | Bangla | Linux tools mostly handle plain text | "Linux tools mostly handle plain text." | PASS | OK |
| 3 | Text Processing | Layman | A filter is a program that takes text and changes it in one way [1] | "A filter is a program that takes textual data and transforms it in one particular way. [1]" | PASS | – |
| 4 | Text Processing | Bangla | A filter is a program that takes text and changes it in one way [1] | "A filter is a program that takes textual data and transforms it in one particular way. [1]" | PASS | OK |
| 5 | Text Processing | Layman | Each tool does one small job; you join tools for a larger job [1] | "Each tool does one small job, and you join the tools to do a larger job. [1]" | PASS | – |
| 6 | Text Processing | Bangla | Each tool does one small job; you join tools for a larger job [1] | "Each tool does one small job, and you join the tools to do a larger job. [1]" | PASS | OK |
| 7 | Text Processing | Layman | Three groups of topics: streams/redirects/pipes/tee; grep/awk/cut; sort/uniq and the commands after them | "This stage has three groups of topics: ..." | PASS | – |
| 8 | Text Processing | Bangla | Three groups of topics: streams/redirects/pipes/tee; grep/awk/cut; sort/uniq and the commands after them | "This stage has three groups of topics: ..." | PASS | OK |
| 9 | Text Processing | Layman | The examples make their own sample files; run them in an empty scratch directory, as the first example does | "The examples on this page create their own sample files. Run them in an empty scratch directory, as the first example does." | PASS | – |
| 10 | Text Processing | Bangla | The examples make their own sample files; run them in an empty scratch directory, as the first example does | "The examples on this page create their own sample files. Run them in an empty scratch directory, as the first example does." | PASS | OK |
| 11 | Text Processing | Layman | Tutorial's own advice: test logs, CSV exports, API responses are text; a few filters answer "how many tests failed, and which" in one line | "Tutorial's own advice: ... you can answer "how many tests failed, and which ones?" in one line, without a spreadsheet." | PASS ("without a spreadsheet" omitted) | – |
| 12 | Text Processing | Bangla | Tutorial's own advice: test logs, CSV exports, API responses are text; a few filters answer "how many tests failed, and which" in one line | "Tutorial's own advice: ... you can answer "how many tests failed, and which ones?" in one line, without a spreadsheet." | PASS | OK |
| 13 | Stdout, Stdin, and Stderr | Layman | A stream is a channel that carries bytes in one direction | "A stream is a channel that carries bytes in one direction." | PASS | – |
| 14 | Stdout, Stdin, and Stderr | Bangla | A stream is a channel that carries bytes in one direction | "A stream is a channel that carries bytes in one direction." | PASS | OK |
| 15 | Stdout, Stdin, and Stderr | Layman | Every program starts with three streams (input, normal output, error/diagnostic messages) [3] | "Every program starts with three streams: one for input, one for normal output, and one for error and diagnostic messages. [3]" | PASS (the Layman lists the three in bullets with the numbers; same facts) | – |
| 16 | Stdout, Stdin, and Stderr | Bangla | Every program starts with three streams (input, normal output, error/diagnostic messages) [3] | "Every program starts with three streams: one for input, one for normal output, and one for error and diagnostic messages. [3]" | PASS | OK |
| 17 | Stdout, Stdin, and Stderr | Layman | Short names stdin, stdout, stderr [3] | "Their short names are `stdin`, `stdout`, and `stderr`. [3]" | PASS (names appear in the bullets) | – |
| 18 | Stdout, Stdin, and Stderr | Bangla | Short names stdin, stdout, stderr [3] | "Their short names are `stdin`, `stdout`, and `stderr`. [3]" | PASS | OK |
| 19 | Stdout, Stdin, and Stderr | Layman | A file descriptor is a small number for an open file or channel [3] | "A file descriptor is a small number that stands for an open file or channel. [3]" | PASS | – |
| 20 | Stdout, Stdin, and Stderr | Bangla | A file descriptor is a small number for an open file or channel [3] | "A file descriptor is a small number that stands for an open file or channel. [3]" | PASS | OK |
| 21 | Stdout, Stdin, and Stderr | Layman | stdin = 0, stdout = 1, stderr = 2; what each carries | "The three streams use the numbers 0, 1, and 2. [3] (table)" | PASS | – |
| 22 | Stdout, Stdin, and Stderr | Bangla | stdin = 0, stdout = 1, stderr = 2; what each carries | "The three streams use the numbers 0, 1, and 2. [3] (table)" | PASS | OK |
| 23 | Stdout, Stdin, and Stderr | Layman | Usually the terminal is behind all three streams; the shell can connect them to files or other programs [2][4] | "Usually the terminal is behind all three streams. The shell can connect them to files or to other programs instead. [2] [4]" | PASS | – |
| 24 | Stdout, Stdin, and Stderr | Bangla | Usually the terminal is behind all three streams; the shell can connect them to files or other programs [2][4] | "Usually the terminal is behind all three streams. The shell can connect them to files or to other programs instead. [2] [4]" | PASS | OK |
| 25 | Stdout, Stdin, and Stderr | Layman | stderr is unbuffered (writes at once) | "The `stderr` stream is unbuffered, which means it writes at once. [3]" | PASS (the word "unbuffered" is dropped, the meaning is kept) | – |
| 26 | Stdout, Stdin, and Stderr | Bangla | stderr is unbuffered (writes at once) | "The `stderr` stream is unbuffered, which means it writes at once. [3]" | PASS | OK |
| 27 | Stdout, Stdin, and Stderr | Layman | stdout waits for a newline when it points to a terminal [3] | "The `stdout` stream is line-buffered when it points to a terminal, which means it waits for a newline before it writes. [3]" | PASS (the word "line-buffered" is dropped) | – |
| 28 | Stdout, Stdin, and Stderr | Bangla | stdout waits for a newline when it points to a terminal [3] | "The `stdout` stream is line-buffered when it points to a terminal, which means it waits for a newline before it writes. [3]" | PASS | OK |
| 29 | Stdout, Stdin, and Stderr | Layman | ls with one good and one bad path: listing goes to the file, error shows on the screen because it uses stderr | "In the next example, `ls` gets one good path and one bad path. The listing goes to the file. The error message still appears on the screen, because it uses `stderr`." | PASS | – |
| 30 | Stdout, Stdin, and Stderr | Bangla | ls with one good and one bad path: listing goes to the file, error shows on the screen because it uses stderr | "In the next example, `ls` gets one good path and one bad path. The listing goes to the file. The error message still appears on the screen, because it uses `stderr`." | PASS | OK |
| 31 | Stdout, Stdin, and Stderr | Layman | The exit status is the number a command returns when it ends; 0 means success | "The exit status is the number that a command returns when it ends. The value 0 means success." | PASS | – |
| 32 | Stdout, Stdin, and Stderr | Bangla | The exit status is the number a command returns when it ends; 0 means success | "The exit status is the number that a command returns when it ends. The value 0 means success." | PASS | OK |
| 33 | Stdout, Stdin, and Stderr | Layman | Tutorial advice: a test tool can print failures on stderr and a summary on stdout; capturing one stream can miss failures | "Tutorial's own advice: a test tool can print failures on `stderr` and a summary on `stdout`. If you capture only one stream, you can miss the failures." | PASS ("learn which stream your tool uses" omitted) | – |
| 34 | Stdout, Stdin, and Stderr | Bangla | Tutorial advice: a test tool can print failures on stderr and a summary on stdout; capturing one stream can miss failures | "Tutorial's own advice: a test tool can print failures on `stderr` and a summary on `stdout`. If you capture only one stream, you can miss the failures." | PASS | OK |
| 35 | Redirects | Layman | A redirect changes where a command reads from or writes to; the shell sets it up before the command runs [5] | "A redirect changes where a command reads from or writes to. The shell sets it up before the command runs. [5]" | PASS | – |
| 36 | Redirects | Bangla | A redirect changes where a command reads from or writes to; the shell sets it up before the command runs [5] | "A redirect changes where a command reads from or writes to. The shell sets it up before the command runs. [5]" | PASS | OK |
| 37 | Redirects | Layman | The shell handles redirects from left to right [5] | "The shell handles redirects from left to right. [5]" | PASS | – |
| 38 | Redirects | Bangla | The shell handles redirects from left to right [5] | "The shell handles redirects from left to right. [5]" | PASS | OK |
| 39 | Redirects | Layman | > file: stdout to file; the shell creates it or empties it | "Send `stdout` to `file`. The shell creates the file, or empties it if it exists. [5]" | PASS | – |
| 40 | Redirects | Bangla | > file: stdout to file; the shell creates it or empties it | "Send `stdout` to `file`. The shell creates the file, or empties it if it exists. [5]" | PASS | OK |
| 41 | Redirects | Layman | >> file: append stdout; (Bangla also: create if missing) | "Append `stdout` to `file`. The shell creates the file if it is missing. [5]" | PASS ("creates if missing" omitted) | – |
| 42 | Redirects | Bangla | >> file: append stdout; (Bangla also: create if missing) | "Append `stdout` to `file`. The shell creates the file if it is missing. [5]" | PASS | OK |
| 43 | Redirects | Layman | < file reads stdin from file | "Read `stdin` from `file`. [5]" | PASS | – |
| 44 | Redirects | Bangla | < file reads stdin from file | "Read `stdin` from `file`. [5]" | PASS | OK |
| 45 | Redirects | Layman | 2> file sends stderr (descriptor 2) to file | "Send `stderr` (descriptor 2) to `file`. [5]" | PASS | – |
| 46 | Redirects | Bangla | 2> file sends stderr (descriptor 2) to file | "Send `stderr` (descriptor 2) to `file`. [5]" | PASS | OK |
| 47 | Redirects | Layman | 2>&1 makes stderr a copy of stdout | "Make `stderr` a copy of `stdout`. [5]" | PASS | – |
| 48 | Redirects | Bangla | 2>&1 makes stderr a copy of stdout | "Make `stderr` a copy of `stdout`. [5]" | PASS | OK |
| 49 | Redirects | Layman | &> file sends both streams to file; a Bash form | "Send both streams to `file`. This is a Bash form. [5]" | PASS | – |
| 50 | Redirects | Bangla | &> file sends both streams to file; a Bash form | "Send both streams to `file`. This is a Bash form. [5]" | PASS | OK |
| 51 | Redirects | Layman | cmd > out.txt 2>&1 puts both streams in the file; cmd 2>&1 > out.txt puts only stdout (Bangla adds the reason: stderr was copied first) [5] | "`cmd > out.txt 2>&1` sends both streams to the file. `cmd 2>&1 > out.txt` sends only `stdout` to the file, because `stderr` was copied first. [5]" | PASS (reason omitted) | – |
| 52 | Redirects | Bangla | cmd > out.txt 2>&1 puts both streams in the file; cmd 2>&1 > out.txt puts only stdout (Bangla adds the reason: stderr was copied first) [5] | "`cmd > out.txt 2>&1` sends both streams to the file. `cmd 2>&1 > out.txt` sends only `stdout` to the file, because `stderr` was copied first. [5]" | PASS | OK |
| 53 | Redirects | Layman | POSIX has no &>; use > file 2>&1 in scripts that run under sh [6] | "The POSIX text has no `&>`, so use `> file 2>&1` in scripts that run under `sh`. [6]" | PASS | – |
| 54 | Redirects | Bangla | POSIX has no &>; use > file 2>&1 in scripts that run under sh [6] | "The POSIX text has no `&>`, so use `> file 2>&1` in scripts that run under `sh`. [6]" | PASS | OK |
| 55 | Redirects | Layman | /dev/null discards all data written to it [7] | "The special file `/dev/null` discards all data that you write to it. [7]" | PASS | – |
| 56 | Redirects | Bangla | /dev/null discards all data written to it [7] | "The special file `/dev/null` discards all data that you write to it. [7]" | PASS | OK |
| 57 | Redirects | Layman | sort data.txt > data.txt empties data.txt before sort starts; the data is lost [2][5] | "The shell empties the target file before the command starts. [2] [5] So `sort data.txt > data.txt` leaves `data.txt` empty, and the data is gone." | PASS | – |
| 58 | Redirects | Bangla | sort data.txt > data.txt empties data.txt before sort starts; the data is lost [2][5] | "The shell empties the target file before the command starts. [2] [5] So `sort data.txt > data.txt` leaves `data.txt` empty, and the data is gone." | PASS | OK |
| 59 | Redirects | Layman | In Bash, set -C stops > from replacing an existing file; >\| overrides it [8] | "In Bash, `set -C` stops `>` from replacing an existing file, and `>\|` overrides it. [8]" | PASS | – |
| 60 | Redirects | Bangla | In Bash, set -C stops > from replacing an existing file; >\| overrides it [8] | "In Bash, `set -C` stops `>` from replacing an existing file, and `>\|` overrides it. [8]" | PASS | OK |
| 61 | Redirects | Layman | Tutorial advice: send the output of each test run to a new file, for example run-1.log | "Tutorial's own advice: send test output to a new file for each run, for example `run-1.log`." | PASS ("an old log is never lost" omitted) | – |
| 62 | Redirects | Bangla | Tutorial advice: send the output of each test run to a new file, for example run-1.log | "Tutorial's own advice: send test output to a new file for each run, for example `run-1.log`." | PASS | OK |
| 63 | Pipes | Layman | A pipe, written \|, connects stdout of one command to stdin of the next [9] | "A pipe connects the `stdout` of one command to the `stdin` of the next command. You write it as `\|`. [9]" | PASS | – |
| 64 | Pipes | Bangla | A pipe, written \|, connects stdout of one command to stdin of the next [9] | "A pipe connects the `stdout` of one command to the `stdin` of the next command. You write it as `\|`. [9]" | PASS | OK |
| 65 | Pipes | Layman | A pipeline is a chain of commands joined by pipes; each reads the output of the one before [9] | "A pipeline is a chain of commands joined by pipes. Each command reads the output of the one before it. [9]" | PASS | – |
| 66 | Pipes | Bangla | A pipeline is a chain of commands joined by pipes; each reads the output of the one before [9] | "A pipeline is a chain of commands joined by pipes. Each command reads the output of the one before it. [9]" | PASS | OK |
| 67 | Pipes | Layman | The kernel provides the pipe: a one-way channel with a write end and a read end [10] | "The kernel (the core of the operating system) provides the pipe as a one-way channel with a write end and a read end. [10]" | PASS | note: "gives the pipe" is a loose word for "provides"; the meaning holds |
| 68 | Pipes | Bangla | The kernel provides the pipe: a one-way channel with a write end and a read end [10] | "The kernel (the core of the operating system) provides the pipe as a one-way channel with a write end and a read end. [10]" | PASS | OK |
| 69 | Pipes | Bangla | The shell connects the pipe before it applies the redirects of the first command [9] | "The shell connects the pipe before it applies the redirects of the first command. [9]" | PASS | OK |
| 70 | Pipes | Layman | Only stdout goes through the pipe; stderr still goes to the terminal; in Bash \|& also sends stderr into the pipe [9] | "Only `stdout` goes through the pipe. The `stderr` stream still goes to the terminal. In Bash, `\|&` also sends `stderr` into the pipe. [9]" | PASS | – |
| 71 | Pipes | Bangla | Only stdout goes through the pipe; stderr still goes to the terminal; in Bash \|& also sends stderr into the pipe [9] | "Only `stdout` goes through the pipe. The `stderr` stream still goes to the terminal. In Bash, `\|&` also sends `stderr` into the pipe. [9]" | PASS | OK |
| 72 | Pipes | Layman | A pipeline returns the status of its last command [9] | "A pipeline returns the status of its last command. [9]" | PASS | – |
| 73 | Pipes | Bangla | A pipeline returns the status of its last command [9] | "A pipeline returns the status of its last command. [9]" | PASS | OK |
| 74 | Pipes | Layman | With pipefail the status is that of the last command that failed, or 0 if all succeeded [8] | "If the option `pipefail` is set, the status is that of the last command that failed, or 0 if all commands succeeded. [8]" | PASS | – |
| 75 | Pipes | Bangla | With pipefail the status is that of the last command that failed, or 0 if all succeeded [8] | "If the option `pipefail` is set, the status is that of the last command that failed, or 0 if all commands succeeded. [8]" | PASS | OK |
| 76 | Pipes | Layman | Bash and the 2024 POSIX standard both have pipefail [6] | "Bash and the 2024 POSIX standard both define this option. [6]" | PASS | – |
| 77 | Pipes | Bangla | Bash and the 2024 POSIX standard both have pipefail [6] | "Bash and the 2024 POSIX standard both define this option. [6]" | PASS | OK |
| 78 | Pipes | Layman | Check that the CI runner's shell supports it | "Check that the shell of your CI runner supports it." | PASS | – |
| 79 | Pipes | Bangla | Check that the CI runner's shell supports it | "Check that the shell of your CI runner supports it." | PASS | OK |
| 80 | Pipes | Layman | In pytest \| tee test.log the status comes from tee, so a failed run can look green; turn on pipefail in CI scripts | "Tutorial's own advice: in a pipeline such as `pytest \| tee test.log`, the status comes from `tee`, so a failing test run can look green. Turn on `pipefail` in CI scripts." | PASS | – |
| 81 | Pipes | Bangla | In pytest \| tee test.log the status comes from tee, so a failed run can look green; turn on pipefail in CI scripts | "Tutorial's own advice: in a pipeline such as `pytest \| tee test.log`, the status comes from `tee`, so a failing test run can look green. Turn on `pipefail` in CI scripts." | PASS | OK |
| 82 | Tee | Layman | tee copies its input to each named file and also to stdout [11] | "The `tee` command copies `stdin` to each file you name, and also to `stdout`. [11]" | PASS | – |
| 83 | Tee | Bangla | tee copies its input to each named file and also to stdout [11] | "The `tee` command copies `stdin` to each file you name, and also to `stdout`. [11]" | PASS | OK |
| 84 | Tee | Layman | Use it to see the data and also keep a copy | "You use it when you want to see the data and also save a copy." | PASS | – |
| 85 | Tee | Bangla | Use it to see the data and also keep a copy | "You use it when you want to see the data and also save a copy." | PASS | OK |
| 86 | Tee | Layman | tee creates a missing file and overwrites an existing one unless -a [11] | "It creates a file that does not exist. It overwrites a file that exists, unless you use `-a`. [11]" | PASS | – |
| 87 | Tee | Bangla | tee creates a missing file and overwrites an existing one unless -a [11] | "It creates a file that does not exist. It overwrites a file that exists, unless you use `-a`. [11]" | PASS | OK |
| 88 | Tee | Layman | The shell sets up redirects, not sudo; so sudo echo text > file fails on a protected file [5] | "Your shell sets up redirects, not `sudo`. [5] So `sudo echo text > file` fails on a protected file." | PASS | – |
| 89 | Tee | Bangla | The shell sets up redirects, not sudo; so sudo echo text > file fails on a protected file [5] | "Your shell sets up redirects, not `sudo`. [5] So `sudo echo text > file` fails on a protected file." | PASS | OK |
| 90 | Tee | Layman | Use echo text \| sudo tee -a file instead | "Run `tee` under `sudo` instead: `echo text \| sudo tee -a file`." | PASS | – |
| 91 | Tee | Bangla | Use echo text \| sudo tee -a file instead | "Run `tee` under `sudo` instead: `echo text \| sudo tee -a file`." | PASS | OK |
| 92 | Tee | Layman | GNU -p (--output-error) controls what tee does when a write fails; other versions may lack it [11] | "GNU option: `-p` (long form `--output-error`) controls what `tee` does when a write fails. Other versions of `tee` may not have it. [11]" | PASS | – |
| 93 | Tee | Bangla | GNU -p (--output-error) controls what tee does when a write fails; other versions may lack it [11] | "GNU option: `-p` (long form `--output-error`) controls what `tee` does when a write fails. Other versions of `tee` may not have it. [11]" | PASS | OK |
| 94 | Tee | Layman | Each tee file replaces the old content; -a keeps it [11] | "Each `tee file` replaces the old content of `file`. [11] Add `-a` to keep the old content." | PASS (Layman states the replace rule in the first paragraph; no separate sentence) | – |
| 95 | Tee | Bangla | Each tee file replaces the old content; -a keeps it [11] | "Each `tee file` replaces the old content of `file`. [11] Add `-a` to keep the old content." | PASS | OK |
| 96 | Tee | Layman | Tutorial advice: never give tee the name of a file that an earlier command in the same pipeline still reads | "Tutorial's own advice: never give `tee` the name of a file that an earlier command in the same pipeline still reads." | PASS | – |
| 97 | Tee | Bangla | Tutorial advice: never give tee the name of a file that an earlier command in the same pipeline still reads | "Tutorial's own advice: never give `tee` the name of a file that an earlier command in the same pipeline still reads." | PASS | OK |
| 98 | Tee | Layman | make test 2>&1 \| tee test.log shows output live and keeps a log; turn on pipefail so a failed make still fails the job | "`make test 2>&1 \| tee test.log` shows the output live and also keeps a log for the CI job. Turn on `pipefail` so a failed `make` still fails the job." | PASS | – |
| 99 | Tee | Bangla | make test 2>&1 \| tee test.log shows output live and keeps a log; turn on pipefail so a failed make still fails the job | "`make test 2>&1 \| tee test.log` shows the output live and also keeps a log for the CI job. Turn on `pipefail` so a failed `make` still fails the job." | PASS | OK |
| 100 | grep | Layman | grep prints the lines that match a pattern [12] | "The `grep` command prints the lines that match a pattern. [12]" | PASS | – |
| 101 | grep | Bangla | grep prints the lines that match a pattern [12] | "The `grep` command prints the lines that match a pattern. [12]" | PASS | OK |
| 102 | grep | Layman | A regular expression is a short pattern that can match many different strings [12] | "A regular expression is a short pattern that can match many different strings. [12]" | PASS | – |
| 103 | grep | Bangla | A regular expression is a short pattern that can match many different strings [12] | "A regular expression is a short pattern that can match many different strings. [12]" | PASS | OK |
| 104 | grep | Layman | It can do more than a wildcard [13] | "It is more powerful than a wildcard. [13]" | PASS | – |
| 105 | grep | Bangla | It can do more than a wildcard [13] | "It is more powerful than a wildcard. [13]" | PASS | OK |
| 106 | grep | Layman | Default is basic regular expressions; -E extended; -F fixed text [12] | "By default `grep` reads basic regular expressions. Use `-E` for extended ones, and `-F` to match fixed text. [12]" | PASS | – |
| 107 | grep | Bangla | Default is basic regular expressions; -E extended; -F fixed text [12] | "By default `grep` reads basic regular expressions. Use `-E` for extended ones, and `-F` to match fixed text. [12]" | PASS | OK |
| 108 | grep | Layman | Quote the pattern so the shell does not change it [12] | "Quote the pattern, so that the shell does not change it. [12]" | PASS | – |
| 109 | grep | Bangla | Quote the pattern so the shell does not change it [12] | "Quote the pattern, so that the shell does not change it. [12]" | PASS | OK |
| 110 | grep | Layman | -i ignore case; -v select non-matching lines [12] | "`-i` Ignore case. / `-v` Select the lines that do not match. [12]" | PASS | – |
| 111 | grep | Bangla | -i ignore case; -v select non-matching lines [12] | "`-i` Ignore case. / `-v` Select the lines that do not match. [12]" | PASS | OK |
| 112 | grep | Layman | -n line numbers; -c count matching lines [12] | "`-n` Show the line number. / `-c` Count the matching lines. [12]" | PASS | – |
| 113 | grep | Bangla | -n line numbers; -c count matching lines [12] | "`-n` Show the line number. / `-c` Count the matching lines. [12]" | PASS | OK |
| 114 | grep | Layman | -o only the matching part; -r all files under a directory [12] | "`-o` Print only the matching part. / `-r` Search all files under a directory. [12]" | PASS | – |
| 115 | grep | Bangla | -o only the matching part; -r all files under a directory [12] | "`-o` Print only the matching part. / `-r` Search all files under a directory. [12]" | PASS | OK |
| 116 | grep | Layman | -q prints nothing; only the exit status gives the result [12] | "`-q` Print nothing. Use the exit status only. [12]" | PASS | – |
| 117 | grep | Bangla | -q prints nothing; only the exit status gives the result [12] | "`-q` Print nothing. Use the exit status only. [12]" | PASS | OK |
| 118 | grep | Layman | -A, -B, -C add lines after, before, or around each match [12] | "`-A`, `-B`, `-C` Add lines after, before, or around each match. [12]" | PASS | – |
| 119 | grep | Bangla | -A, -B, -C add lines after, before, or around each match [12] | "`-A`, `-B`, `-C` Add lines after, before, or around each match. [12]" | PASS | OK |
| 120 | grep | Layman | grep returns 0 when it selects a line, 1 when none, 2 on an error [12] | "`grep` returns 0 when it selects a line, 1 when it selects none, and 2 on an error. [12]" | PASS | – |
| 121 | grep | Bangla | grep returns 0 when it selects a line, 1 when none, 2 on an error [12] | "`grep` returns 0 when it selects a line, 1 when it selects none, and 2 on an error. [12]" | PASS | OK |
| 122 | grep | Layman | -P (Perl-style) and -H are GNU options that other versions may lack [12] | "`-P` (Perl-style patterns) and `-H` are GNU options. Other versions of `grep` may lack them. [12]" | PASS ("Perl-style" omitted) | – |
| 123 | grep | Bangla | -P (Perl-style) and -H are GNU options that other versions may lack [12] | "`-P` (Perl-style patterns) and `-H` are GNU options. Other versions of `grep` may lack them. [12]" | PASS | OK |
| 124 | grep | Layman | Tutorial advice: in a script, status 1 means "no match", not "failure"; status 2 is a real error, for example a missing file | "Tutorial's own advice: in a script, exit status 1 means "no match", not "failure". Status 2 is a real error, for example a missing file." | PASS (the one-line CI example is omitted) | – |
| 125 | grep | Bangla | Tutorial advice: in a script, status 1 means "no match", not "failure"; status 2 is a real error, for example a missing file | "Tutorial's own advice: in a script, exit status 1 means "no match", not "failure". Status 2 is a real error, for example a missing file." | PASS | OK |
| 126 | awk | Layman | awk runs rules of the form pattern { action }; for each input line it runs the action if the pattern matches [14] | "The `awk` language runs rules of the form `pattern { action }`. For each input line, awk checks the pattern and runs the action if it matches. [14]" | PASS | – |
| 127 | awk | Bangla | awk runs rules of the form pattern { action }; for each input line it runs the action if the pattern matches [14] | "The `awk` language runs rules of the form `pattern { action }`. For each input line, awk checks the pattern and runs the action if it matches. [14]" | PASS | OK |
| 128 | awk | Layman | A line is a record [15] | "A line is a record. [15]" | PASS | – |
| 129 | awk | Bangla | A line is a record [15] | "A line is a record. [15]" | PASS | OK |
| 130 | awk | Layman | A field is one piece of a record; whitespace separates fields by default [16] | "A field is one piece of a record. By default, whitespace separates fields. [16]" | PASS | – |
| 131 | awk | Bangla | A field is one piece of a record; whitespace separates fields by default [16] | "A field is one piece of a record. By default, whitespace separates fields. [16]" | PASS | OK |
| 132 | awk | Layman | $1 first field, $0 whole record, NF number of fields, $NF last field [16] | "`$1` is the first field, `$0` is the whole record, `NF` is the number of fields, and `$NF` is the last field. [16]" | PASS | – |
| 133 | awk | Bangla | $1 first field, $0 whole record, NF number of fields, $NF last field [16] | "`$1` is the first field, `$0` is the whole record, `NF` is the number of fields, and `$NF` is the last field. [16]" | PASS | OK |
| 134 | awk | Layman | NR counts the records read so far [15] | "`NR` counts the records read so far. [15]" | PASS | – |
| 135 | awk | Bangla | NR counts the records read so far [15] | "`NR` counts the records read so far. [15]" | PASS | OK |
| 136 | awk | Layman | FS holds the field separator [17] | "The variable `FS` holds the field separator. [17]" | PASS | – |
| 137 | awk | Bangla | FS holds the field separator [17] | "The variable `FS` holds the field separator. [17]" | PASS | OK |
| 138 | awk | Layman | -F sets it; -v name=value sets any variable [21] | "Option `-F` sets it, and `-v name=value` sets any variable. [21]" | PASS | – |
| 139 | awk | Bangla | -F sets it; -v name=value sets any variable [21] | "Option `-F` sets it, and `-v name=value` sets any variable. [21]" | PASS | OK |
| 140 | awk | Layman | A pattern can be a regular expression between slashes [18], or a comparison [44] | "A pattern can be a regular expression between slashes. [18] It can also be a comparison. [44]" | PASS | – |
| 141 | awk | Bangla | A pattern can be a regular expression between slashes [18], or a comparison [44] | "A pattern can be a regular expression between slashes. [18] It can also be a comparison. [44]" | PASS | OK |
| 142 | awk | Layman | Input that looks like a number compares as a number; a quoted string compares as text [19] | "Input that looks like a number compares as a number, but a quoted string compares as text. [19]" | PASS | – |
| 143 | awk | Bangla | Input that looks like a number compares as a number; a quoted string compares as text [19] | "Input that looks like a number compares as a number, but a quoted string compares as text. [19]" | PASS | OK |
| 144 | awk | Layman | BEGIN rule runs before the input, END rule after it [20] | "A `BEGIN` or `END` rule runs before or after the input. [20]" | PASS | – |
| 145 | awk | Bangla | BEGIN rule runs before the input, END rule after it [20] | "A `BEGIN` or `END` rule runs before or after the input. [20]" | PASS | OK |
| 146 | awk | Layman | Use -v to pass a shell variable to awk; easier than quoting the value into the program text [22] | "To pass a shell variable into awk, use `-v` ... This is easier than quoting the value into the program text. [22]" | PASS | – |
| 147 | awk | Bangla | Use -v to pass a shell variable to awk; easier than quoting the value into the program text [22] | "To pass a shell variable into awk, use `-v` ... This is easier than quoting the value into the program text. [22]" | PASS | OK |
| 148 | awk | Bangla | The examples use only basic awk features; gawk has extras that other awks may lack [21] | "The examples use only basic awk features. The gawk manual also describes extras that other awk programs may lack. [21]" | PASS | OK |
| 149 | awk | Layman | Tutorial advice: use awk for logs with aligned columns, such as a response time; it can filter by a number and add up a column in one command | "Tutorial's own advice: use awk when a log has aligned columns, such as a response time. It can filter by a number and sum a column in one command." | PASS | – |
| 150 | awk | Bangla | Tutorial advice: use awk for logs with aligned columns, such as a response time; it can filter by a number and add up a column in one command | "Tutorial's own advice: use awk when a log has aligned columns, such as a response time. It can filter by a number and sum a column in one command." | PASS | OK |
| 151 | cut | Layman | cut prints selected parts of each line [23] | "The `cut` command prints selected parts of each line. [23]" | PASS | – |
| 152 | cut | Bangla | cut prints selected parts of each line [23] | "The `cut` command prints selected parts of each line. [23]" | PASS | OK |
| 153 | cut | Layman | A delimiter is the character between fields; with -f, cut splits lines at a delimiter | "A delimiter is the character that separates fields. With `-f`, `cut` splits lines at a delimiter." | PASS | – |
| 154 | cut | Bangla | A delimiter is the character between fields; with -f, cut splits lines at a delimiter | "A delimiter is the character that separates fields. With `-f`, `cut` splits lines at a delimiter." | PASS | OK |
| 155 | cut | Layman | Default delimiter is TAB; -d sets another [23] | "The default delimiter is TAB, and `-d` sets another one. [23]" | PASS | – |
| 156 | cut | Bangla | Default delimiter is TAB; -d sets another [23] | "The default delimiter is TAB, and `-d` sets another one. [23]" | PASS | OK |
| 157 | cut | Layman | Fields, characters, and bytes are numbered from 1 [23] | "Fields, characters, and bytes are numbered from 1. [23]" | PASS | – |
| 158 | cut | Bangla | Fields, characters, and bytes are numbered from 1 [23] | "Fields, characters, and bytes are numbered from 1. [23]" | PASS | OK |
| 159 | cut | Layman | A list names what to keep: 2, 1,3, 2-4, 3-, -2 [23] | "A list names what to keep: `2`, `1,3`, `2-4`, `3-`, or `-2`. [23]" | PASS | – |
| 160 | cut | Bangla | A list names what to keep: 2, 1,3, 2-4, 3-, -2 [23] | "A list names what to keep: `2`, `1,3`, `2-4`, `3-`, or `-2`. [23]" | PASS | OK |
| 161 | cut | Layman | cut prints the parts in input order, so -f3,1 prints field 1 first [23] | "`cut` always prints the selected parts in the order of the input. So `-f3,1` prints field 1 first. [23]" | PASS | – |
| 162 | cut | Bangla | cut prints the parts in input order, so -f3,1 prints field 1 first [23] | "`cut` always prints the selected parts in the order of the input. So `-f3,1` prints field 1 first. [23]" | PASS | OK |
| 163 | cut | Layman | A line with no delimiter is printed whole unless -s [23] | "A line without a delimiter is printed whole, unless you add `-s`. [23]" | PASS | – |
| 164 | cut | Bangla | A line with no delimiter is printed whole unless -s [23] | "A line without a delimiter is printed whole, unless you add `-s`. [23]" | PASS | OK |
| 165 | cut | Layman | --complement is a GNU extension [23] | "`--complement` is a GNU extension. Other versions of `cut` may lack it. [23]" | PASS ("may lack it" omitted) | – |
| 166 | cut | Bangla | --complement is a GNU extension [23] | "`--complement` is a GNU extension. Other versions of `cut` may lack it. [23]" | PASS | OK |
| 167 | cut | Layman | cut splits at every delimiter and does not know CSV quotes, so a comma in quotes breaks fields [23] | "`cut` splits at every delimiter. It does not know about CSV quotes, so a quoted comma breaks the fields." | PASS | – |
| 168 | cut | Bangla | cut splits at every delimiter and does not know CSV quotes, so a comma in quotes breaks fields [23] | "`cut` splits at every delimiter. It does not know about CSV quotes, so a quoted comma breaks the fields." | PASS | OK |
| 169 | cut | Layman | For columns with runs of blanks, or a new field order, use awk [23] | "For columns that are aligned with runs of blanks, or for a new field order, use awk. [23]" | PASS ("aligned" dropped) | – |
| 170 | cut | Bangla | For columns with runs of blanks, or a new field order, use awk [23] | "For columns that are aligned with runs of blanks, or for a new field order, use awk. [23]" | PASS | OK ("Blank-এর সারি" is slightly stiff; meaning kept) |
| 171 | cut | Layman | Tutorial advice: cut -d, -f2 for one column of a simple CSV; for quoted values use a real CSV parser | "Tutorial's own advice: use `cut -d, -f2` to take one column from a simple CSV of test data. For a CSV with quoted values, use a real CSV parser." | PASS | – |
| 172 | cut | Bangla | Tutorial advice: cut -d, -f2 for one column of a simple CSV; for quoted values use a real CSV parser | "Tutorial's own advice: use `cut -d, -f2` to take one column from a simple CSV of test data. For a CSV with quoted values, use a real CSV parser." | PASS | OK |
| 173 | sort | Layman | sort writes the lines of its input in order [24] | "The `sort` command writes the lines of its input in sorted order. [24]" | PASS | – |
| 174 | sort | Bangla | sort writes the lines of its input in order [24] | "The `sort` command writes the lines of its input in sorted order. [24]" | PASS | OK |
| 175 | sort | Layman | By default it compares whole lines; the locale sets the order of characters [24] | "By default it compares whole lines, and the locale sets the order of characters. [24]" | PASS | – |
| 176 | sort | Bangla | By default it compares whole lines; the locale sets the order of characters [24] | "By default it compares whole lines, and the locale sets the order of characters. [24]" | PASS | OK |
| 177 | sort | Layman | The locale is the language and encoding setting of the shell | "The locale is the language and encoding setting of your shell. [24]" | PASS | – |
| 178 | sort | Bangla | The locale is the language and encoding setting of the shell | "The locale is the language and encoding setting of your shell. [24]" | PASS | OK |
| 179 | sort | Layman | If the order is unexpected, set LC_ALL=C [24] | "Set `LC_ALL=C` if the locale gives an order that you do not expect. [24]" | PASS | – |
| 180 | sort | Bangla | If the order is unexpected, set LC_ALL=C [24] | "Set `LC_ALL=C` if the locale gives an order that you do not expect. [24]" | PASS | OK |
| 181 | sort | Layman | -n numbers; -r reverse [24] | "`-n` Compare numbers, not text. / `-r` Reverse the order. [24]" | PASS | – |
| 182 | sort | Bangla | -n numbers; -r reverse [24] | "`-n` Compare numbers, not text. / `-r` Reverse the order. [24]" | PASS | OK |
| 183 | sort | Layman | -u keeps only the first of equal lines [24] | "`-u` Keep only the first of equal lines. [24]" | PASS | – |
| 184 | sort | Bangla | -u keeps only the first of equal lines [24] | "`-u` Keep only the first of equal lines. [24]" | PASS | OK |
| 185 | sort | Layman | -k 2,2 sorts by the second field only; -t : uses : as separator [24] | "`-k 2,2` Sort by the second field only. / `-t :` Use `:` as the field separator. [24]" | PASS | – |
| 186 | sort | Bangla | -k 2,2 sorts by the second field only; -t : uses : as separator [24] | "`-k 2,2` Sort by the second field only. / `-t :` Use `:` as the field separator. [24]" | PASS | OK |
| 187 | sort | Layman | -c checks if input is sorted; exits with status 1 if not [24] | "`-c` Check whether the input is sorted. Exit with status 1 if it is not. [24]" | PASS | – |
| 188 | sort | Bangla | -c checks if input is sorted; exits with status 1 if not [24] | "`-c` Check whether the input is sorted. Exit with status 1 if it is not. [24]" | PASS | OK |
| 189 | sort | Layman | Write -k 2,2n, not -k 2n; the second form uses the rest of the line as the key [24] | "Write `-k 2,2n`, not `-k 2n`. The second form uses the rest of the line as the key. [24]" | PASS | – |
| 190 | sort | Bangla | Write -k 2,2n, not -k 2n; the second form uses the rest of the line as the key [24] | "Write `-k 2,2n`, not `-k 2n`. The second form uses the rest of the line as the key. [24]" | PASS | OK |
| 191 | sort | Layman | -h (human numbers such as 2K) and -V (version numbers) are GNU extras [24] | "`-h` (human numbers such as 2K) and `-V` (version numbers) are GNU extras. Other versions of `sort` may lack them. [24]" | PASS (the glosses and "may lack" omitted) | – |
| 192 | sort | Bangla | -h (human numbers such as 2K) and -V (version numbers) are GNU extras [24] | "`-h` (human numbers such as 2K) and `-V` (version numbers) are GNU extras. Other versions of `sort` may lack them. [24]" | PASS | OK |
| 193 | sort | Layman | sort data.txt > data.txt empties the file [5] | "`sort data.txt > data.txt` empties the file. [5]" | PASS | – |
| 194 | sort | Bangla | sort data.txt > data.txt empties the file [5] | "`sort data.txt > data.txt` empties the file. [5]" | PASS | OK |
| 195 | sort | Layman | -o can name the input file because sort reads all input first; a crash during the write can lose data, so use a different file [24] | "The option `-o` can name the input file, because `sort` reads all input first. But a crash during the write can lose data, so output to a different file instead. [24]" | PASS | – |
| 196 | sort | Bangla | -o can name the input file because sort reads all input first; a crash during the write can lose data, so use a different file [24] | "The option `-o` can name the input file, because `sort` reads all input first. But a crash during the write can lose data, so output to a different file instead. [24]" | PASS | OK |
| 197 | sort | Layman | Tutorial advice: sort -n on response times finds the slowest; sort two result lists then compare with diff | "Tutorial's own advice: sort response times with `sort -n` to find the slowest ones. Sort two test result lists, and then compare them with `diff`." | PASS (the diff idea is omitted) | – |
| 198 | sort | Bangla | Tutorial advice: sort -n on response times finds the slowest; sort two result lists then compare with diff | "Tutorial's own advice: sort response times with `sort -n` to find the slowest ones. Sort two test result lists, and then compare them with `diff`." | PASS | OK |
| 199 | uniq | Layman | uniq removes repeated lines, but only neighbouring ones [25] | "The `uniq` command removes repeated lines, but only lines that are next to each other. [25]" | PASS | – |
| 200 | uniq | Bangla | uniq removes repeated lines, but only neighbouring ones [25] | "The `uniq` command removes repeated lines, but only lines that are next to each other. [25]" | PASS | OK |
| 201 | uniq | Layman | It does not find far-apart repeats; sort first or use sort -u [25] | "It does not find repeated lines that are far apart. So sort the input first, or use `sort -u`. [25]" | PASS | – |
| 202 | uniq | Bangla | It does not find far-apart repeats; sort first or use sort -u [25] | "It does not find repeated lines that are far apart. So sort the input first, or use `sort -u`. [25]" | PASS | OK |
| 203 | uniq | Layman | -c puts the number of occurrences before each line [25] | "`-c` Put the number of occurrences before each line. [25]" | PASS | – |
| 204 | uniq | Bangla | -c puts the number of occurrences before each line [25] | "`-c` Put the number of occurrences before each line. [25]" | PASS | OK |
| 205 | uniq | Layman | -d shows each repeated line once and no other line [25] | "`-d` Show each repeated line one time, and show no other line. [25]" | PASS | – |
| 206 | uniq | Bangla | -d shows each repeated line once and no other line [25] | "`-d` Show each repeated line one time, and show no other line. [25]" | PASS | OK |
| 207 | uniq | Layman | -u prints only lines that are not repeated [25] | "`-u` Print only the lines that are not repeated. [25]" | PASS | – |
| 208 | uniq | Bangla | -u prints only lines that are not repeated [25] | "`-u` Print only the lines that are not repeated. [25]" | PASS | OK |
| 209 | uniq | Layman | -i ignores case [25] | "`-i` Ignore differences in case. [25]" | PASS | – |
| 210 | uniq | Bangla | -i ignores case [25] | "`-i` Ignore differences in case. [25]" | PASS | OK |
| 211 | uniq | Layman | -f N skips the first N fields before comparison [25] | "`-f N` Skip the first N fields before the comparison. [25]" | PASS | – |
| 212 | uniq | Bangla | -f N skips the first N fields before comparison [25] | "`-f N` Skip the first N fields before the comparison. [25]" | PASS | OK |
| 213 | uniq | Layman | For plain lines sort -u and sort \| uniq give the same result, but not with every sort option [24] | "For plain lines, `sort -u` and `sort \| uniq` give the same result. This is not true with every sort option. [24]" | PASS | – |
| 214 | uniq | Bangla | For plain lines sort -u and sort \| uniq give the same result, but not with every sort option [24] | "For plain lines, `sort -u` and `sort \| uniq` give the same result. This is not true with every sort option. [24]" | PASS | OK |
| 215 | uniq | Layman | sort -n -u checks only the number at the start of each line [24] | "For example, `sort -n -u` checks only the leading number of each line. [24]" | PASS | – |
| 216 | uniq | Bangla | sort -n -u checks only the number at the start of each line [24] | "For example, `sort -n -u` checks only the leading number of each line. [24]" | PASS | OK |
| 217 | uniq | Layman | Tutorial advice: sort \| uniq -c \| sort -rn counts the most common error lines; shows which failure to fix first; can show a flaky test | "Tutorial's own advice: `sort \| uniq -c \| sort -rn` counts the most common error lines in a log. It shows which failure to fix first, and it can show a flaky test that fails again and again." | PASS | – |
| 218 | uniq | Bangla | Tutorial advice: sort \| uniq -c \| sort -rn counts the most common error lines; shows which failure to fix first; can show a flaky test | "Tutorial's own advice: `sort \| uniq -c \| sort -rn` counts the most common error lines in a log. It shows which failure to fix first, and it can show a flaky test that fails again and again." | PASS | OK |
| 219 | wc | Layman | wc counts lines, words, bytes; reads named files or stdin if none [26] | "The `wc` command counts lines, words, and bytes. It reads the files you name, or `stdin` if you name none. [26]" | PASS | – |
| 220 | wc | Bangla | wc counts lines, words, bytes; reads named files or stdin if none [26] | "The `wc` command counts lines, words, and bytes. It reads the files you name, or `stdin` if you name none. [26]" | PASS | OK |
| 221 | wc | Layman | A word is a run of non-blank characters | "A word is a run of non-blank characters. [26]" | PASS | – |
| 222 | wc | Bangla | A word is a run of non-blank characters | "A word is a run of non-blank characters. [26]" | PASS | OK |
| 223 | wc | Layman | A line is counted by its newline character; a last line without newline is not counted [26] | "A line is counted by its newline character, so a last line without a newline is not counted. [26]" | PASS | – |
| 224 | wc | Bangla | A line is counted by its newline character; a last line without newline is not counted [26] | "A line is counted by its newline character, so a last line without a newline is not counted. [26]" | PASS | OK |
| 225 | wc | Layman | -l lines, -w words, -c bytes, -m characters (current locale), -L width of the longest line [26] | "(table) `-l` Lines / `-w` Words / `-c` Bytes / `-m` Characters, as the current locale reads them / `-L` The width of the longest line [26]" | PASS | – |
| 226 | wc | Bangla | -l lines, -w words, -c bytes, -m characters (current locale), -L width of the longest line [26] | "(table) `-l` Lines / `-w` Words / `-c` Bytes / `-m` Characters, as the current locale reads them / `-L` The width of the longest line [26]" | PASS | OK |
| 227 | wc | Layman | Bytes and characters can differ; UTF-8 uses 1 to 4 bytes per character; é takes two bytes [45] | "Bytes and characters can differ, because one character can use several bytes. UTF-8 is a common text encoding that uses 1 to 4 bytes for each character. A letter such as é takes two bytes. [45]" | PASS ("because one character can use several bytes" omitted) | – |
| 228 | wc | Bangla | Bytes and characters can differ; UTF-8 uses 1 to 4 bytes per character; é takes two bytes [45] | "Bytes and characters can differ, because one character can use several bytes. UTF-8 is a common text encoding that uses 1 to 4 bytes for each character. A letter such as é takes two bytes. [45]" | PASS | OK |
| 229 | wc | Layman | The output order is always lines, words, characters, bytes, longest line [26] | "The output order is always lines, words, characters, bytes, longest line. [26]" | PASS | – |
| 230 | wc | Bangla | The output order is always lines, words, characters, bytes, longest line [26] | "The output order is always lines, words, characters, bytes, longest line. [26]" | PASS | OK |
| 231 | wc | Layman | --total=only prints only the grand total for several files; --total is a GNU extension [26] | "`--total=only` prints only the grand total for several files. `--total` is a GNU extension, so other versions of `wc` may lack it. [26]" | PASS | – |
| 232 | wc | Bangla | --total=only prints only the grand total for several files; --total is a GNU extension [26] | "`--total=only` prints only the grand total for several files. `--total` is a GNU extension, so other versions of `wc` may lack it. [26]" | PASS | OK |
| 233 | wc | Layman | Tutorial advice: check a count in CI, for example [ "$(wc -l < results.txt)" -eq 3 ]; a test that must give three lines fails when it gives two; count matches with grep ... \| wc -l [42] | "Tutorial's own advice: assert a count in a CI script ... A test that must produce three result lines then fails when it produces two. Also count matches with `grep ... \| wc -l`. [42]" | PASS | – |
| 234 | wc | Bangla | Tutorial advice: check a count in CI, for example [ "$(wc -l < results.txt)" -eq 3 ]; a test that must give three lines fails when it gives two; count matches with grep ... \| wc -l [42] | "Tutorial's own advice: assert a count in a CI script ... A test that must produce three result lines then fails when it produces two. Also count matches with `grep ... \| wc -l`. [42]" | PASS | OK |
| 235 | head | Layman | head prints the first part of its input; default 10 lines [27] | "The `head` command prints the first part of its input. The default is 10 lines. [27]" | PASS | – |
| 236 | head | Bangla | head prints the first part of its input; default 10 lines [27] | "The `head` command prints the first part of its input. The default is 10 lines. [27]" | PASS | OK |
| 237 | head | Layman | With several files it prints a header line ==> name <== before each; -q hides, -v always shows [27] | "If you name several files, it prints a header line `==> name <==` before each one. [27] Use `-q` to hide the headers and `-v` to always show them. [27]" | PASS | – |
| 238 | head | Bangla | With several files it prints a header line ==> name <== before each; -q hides, -v always shows [27] | "If you name several files, it prints a header line `==> name <==` before each one. [27] Use `-q` to hide the headers and `-v` to always show them. [27]" | PASS | OK |
| 239 | head | Layman | -n N sets lines; -c N sets bytes; both accept size suffixes such as K for 1024 bytes [27] | "`-n N` sets the number of lines. `-c N` sets the number of bytes. Both accept size suffixes, such as `K` for 1024 bytes. [27]" | PASS | – |
| 240 | head | Bangla | -n N sets lines; -c N sets bytes; both accept size suffixes such as K for 1024 bytes [27] | "`-n N` sets the number of lines. `-c N` sets the number of bytes. Both accept size suffixes, such as `K` for 1024 bytes. [27]" | PASS | OK |
| 241 | head | Layman | GNU: head -n -12 prints all lines except the last 12 [27] | "GNU option: a minus sign before the number, as in `head -n -12`, prints all lines except the last 12. [27]" | PASS | – |
| 242 | head | Bangla | GNU: head -n -12 prints all lines except the last 12 [27] | "GNU option: a minus sign before the number, as in `head -n -12`, prints all lines except the last 12. [27]" | PASS | OK (note: "12টি" has no hyphen; "12-টি" would match the pattern of "N-টি" elsewhere; the meaning is clear) |
| 243 | head | Layman | POSIX allows only a positive number [47]; other versions may reject this form | "This form is not in the POSIX standard, which allows only a positive number. [47] Other versions of `head` may reject it." | PASS | – |
| 244 | head | Bangla | POSIX allows only a positive number [47]; other versions may reject this form | "This form is not in the POSIX standard, which allows only a positive number. [47] Other versions of `head` may reject it." | PASS | OK |
| 245 | head | Layman | Tutorial advice: head -n 1 results.csv checks the header row; sort -k2,2nr timings.txt \| head -n 3 lists the three slowest steps | "Tutorial's own advice: use `head -n 1 results.csv` to check the header row of an export. Use `sort -k2,2nr timings.txt \| head -n 3` to list the three slowest steps." | PASS | – |
| 246 | head | Bangla | Tutorial advice: head -n 1 results.csv checks the header row; sort -k2,2nr timings.txt \| head -n 3 lists the three slowest steps | "Tutorial's own advice: use `head -n 1 results.csv` to check the header row of an export. Use `sort -k2,2nr timings.txt \| head -n 3` to list the three slowest steps." | PASS | OK |
| 247 | tail | Layman | tail prints the last part of its input; default 10 lines; -n N sets the count [28] | "The `tail` command prints the last part of its input. The default is 10 lines. [28] `-n N` sets the line count. [28]" | PASS | – |
| 248 | tail | Bangla | tail prints the last part of its input; default 10 lines; -n N sets the count [28] | "The `tail` command prints the last part of its input. The default is 10 lines. [28] `-n N` sets the line count. [28]" | PASS | OK |
| 249 | tail | Layman | -n +2 starts at line 2 and prints the rest; tail -n +2 removes a header line [28] | "A plus sign, as in `-n +2`, starts at line 2 and prints the rest. So `tail -n +2` removes a header line. [28]" | PASS | – |
| 250 | tail | Bangla | -n +2 starts at line 2 and prints the rest; tail -n +2 removes a header line [28] | "A plus sign, as in `-n +2`, starts at line 2 and prints the rest. So `tail -n +2` removes a header line. [28]" | PASS | OK |
| 251 | tail | Layman | -f keeps reading and prints new lines as the file grows; you must stop it, for example Ctrl-C [28] | "With `-f`, `tail` keeps reading and prints new lines as the file grows. It never ends on its own. You must stop it yourself, for example with Ctrl-C. [28]" | PASS | – |
| 252 | tail | Bangla | -f keeps reading and prints new lines as the file grows; you must stop it, for example Ctrl-C [28] | "With `-f`, `tail` keeps reading and prints new lines as the file grows. It never ends on its own. You must stop it yourself, for example with Ctrl-C. [28]" | PASS | OK |
| 253 | tail | Layman | Log rotation: a tool renames a full log and starts a new file with the same name [43] | "Log rotation is the case where a tool renames a full log and starts a new file with the same name. [43]" | PASS | – |
| 254 | tail | Bangla | Log rotation: a tool renames a full log and starts a new file with the same name [43] | "Log rotation is the case where a tool renames a full log and starts a new file with the same name. [43]" | PASS | OK (note: "ভরা log" for "full log" is informal; the meaning is clear) |
| 255 | tail | Layman | Plain -f follows the old file; -F follows the name and opens the file again [28] | "Plain `-f` follows the old file and misses the new one. `-F` follows the name and opens the file again. [28]" | PASS | – |
| 256 | tail | Bangla | Plain -f follows the old file; -F follows the name and opens the file again [28] | "Plain `-f` follows the old file and misses the new one. `-F` follows the name and opens the file again. [28]" | PASS | OK |
| 257 | tail | Layman | Journal is the log store of systemd; it collects what a service writes to stdout and stderr, so some services have no file in /var/log [46] | "The journal is the log store of systemd. It collects what a service writes to `stdout` and `stderr`, so some services have no file in `/var/log`. [46]" | PASS (the Bangla defines "systemd host"; the Layman starts with "On a systemd host") | – |
| 258 | tail | Bangla | Journal is the log store of systemd; it collects what a service writes to stdout and stderr, so some services have no file in /var/log [46] | "The journal is the log store of systemd. It collects what a service writes to `stdout` and `stderr`, so some services have no file in `/var/log`. [46]" | PASS | OK |
| 259 | tail | Layman | journalctl -f shows the newest entries and follows new ones [41] | "`journalctl -f` shows the newest entries and follows new ones. [41]" | PASS | – |
| 260 | tail | Bangla | journalctl -f shows the newest entries and follows new ones [41] | "`journalctl -f` shows the newest entries and follows new ones. [41]" | PASS | OK |
| 261 | tail | Bangla | A minimal container may have no journalctl | "A minimal container may have no `journalctl`." | PASS | OK |
| 262 | tail | Layman | -F and --pid are not in the POSIX standard [48] | "`-F` and `--pid` are not in the POSIX standard, whose `tail` has only `-f`, `-c`, `-n`, and `-r`. [48]" | PASS (the list of POSIX options omitted) | – |
| 263 | tail | Bangla | -F and --pid are not in the POSIX standard [48] | "`-F` and `--pid` are not in the POSIX standard, whose `tail` has only `-f`, `-c`, `-n`, and `-r`. [48]" | PASS | OK |
| 264 | tail | Layman | Tutorial advice: a CI step with tail -f never ends and hangs the job; add --pid; then tail stops when the process ends [28] | "Tutorial's own advice: a CI step that runs `tail -f` never ends and hangs the job. Add `--pid` ... `tail` then stops when the process ends. [28]" | PASS (the exact command is omitted) | – |
| 265 | tail | Bangla | Tutorial advice: a CI step with tail -f never ends and hangs the job; add --pid; then tail stops when the process ends [28] | "Tutorial's own advice: a CI step that runs `tail -f` never ends and hangs the job. Add `--pid` ... `tail` then stops when the process ends. [28]" | PASS | OK |
| 266 | nl | Layman | nl writes its input with line numbers [29] | "The `nl` command writes its input with line numbers. [29]" | PASS | – |
| 267 | nl | Bangla | nl writes its input with line numbers [29] | "The `nl` command writes its input with line numbers. [29]" | PASS | OK |
| 268 | nl | Layman | By default it numbers only non-empty lines; a line with no number does not use up a number [29] | "By default it numbers only non-empty lines. A line that gets no number does not use up a number. [29]" | PASS | – |
| 269 | nl | Bangla | By default it numbers only non-empty lines; a line with no number does not use up a number [29] | "By default it numbers only non-empty lines. A line that gets no number does not use up a number. [29]" | PASS | OK |
| 270 | nl | Layman | A plain text file counts as one section because nl splits pages only at special marker lines [29] | "A plain text file counts as one section, because `nl` splits pages only at special marker lines. [29]" | PASS | – |
| 271 | nl | Bangla | A plain text file counts as one section because nl splits pages only at special marker lines [29] | "A plain text file counts as one section, because `nl` splits pages only at special marker lines. [29]" | PASS | OK |
| 272 | nl | Layman | -b a numbers all lines [29] | "`-b a` Number all lines. [29]" | PASS | – |
| 273 | nl | Bangla | -b a numbers all lines [29] | "`-b a` Number all lines. [29]" | PASS | OK |
| 274 | nl | Layman | -b pREGEX numbers only lines that match a basic regular expression [29] | "`-b pREGEX` Number only lines that match a basic regular expression. [29]" | PASS | – |
| 275 | nl | Bangla | -b pREGEX numbers only lines that match a basic regular expression [29] | "`-b pREGEX` Number only lines that match a basic regular expression. [29]" | PASS | OK |
| 276 | nl | Layman | -w N uses N characters for the number; default 6 [29] | "`-w N` Use N characters for the number. The default is 6. [29]" | PASS | – |
| 277 | nl | Bangla | -w N uses N characters for the number; default 6 [29] | "`-w N` Use N characters for the number. The default is 6. [29]" | PASS | OK |
| 278 | nl | Layman | -s STR puts STR between number and text; default TAB [29] | "`-s STR` Put STR between the number and the text. The default is TAB. [29]" | PASS | – |
| 279 | nl | Bangla | -s STR puts STR between number and text; default TAB [29] | "`-s STR` Put STR between the number and the text. The default is TAB. [29]" | PASS | OK |
| 280 | nl | Layman | -v N starts at N; -i N adds N for each numbered line [29] | "`-v N` Start at N. / `-i N` Add N for each numbered line. [29]" | PASS | – |
| 281 | nl | Bangla | -v N starts at N; -i N adds N for each numbered line [29] | "`-v N` Start at N. / `-i N` Add N for each numbered line. [29]" | PASS | OK |
| 282 | nl | Layman | Not every nl has long option names; use short options in portable scripts [29] | "Not every version of `nl` has the long names, such as `--body-numbering=a`. Use the short options in portable scripts. [29]" | PASS | – |
| 283 | nl | Bangla | Not every nl has long option names; use short options in portable scripts [29] | "Not every version of `nl` has the long names, such as `--body-numbering=a`. Use the short options in portable scripts. [29]" | PASS | OK |
| 284 | nl | Layman | Tutorial advice: number a log excerpt with nl -ba before pasting it into a bug report so the team can say "see line 42" | "Tutorial's own advice: number a log excerpt with `nl -ba` before you paste it into a bug report. Then your team can say "see line 42" and everyone looks at the same line." | PASS | – |
| 285 | nl | Bangla | Tutorial advice: number a log excerpt with nl -ba before pasting it into a bug report so the team can say "see line 42" | "Tutorial's own advice: number a log excerpt with `nl -ba` before you paste it into a bug report. Then your team can say "see line 42" and everyone looks at the same line." | PASS | OK |
| 286 | paste | Layman | paste puts the lines of several files side by side; line 1 of each becomes one output line; delimiter default TAB; a shorter file leaves its column empty [30] | "The `paste` command joins the lines of several files side by side. Line 1 of each file becomes one output line ... The default delimiter is TAB. [30] If one file is shorter, its column stays empty. [30]" | PASS | – |
| 287 | paste | Bangla | paste puts the lines of several files side by side; line 1 of each becomes one output line; delimiter default TAB; a shorter file leaves its column empty [30] | "The `paste` command joins the lines of several files side by side. Line 1 of each file becomes one output line ... The default delimiter is TAB. [30] If one file is shorter, its column stays empty. [30]" | PASS | OK |
| 288 | paste | Layman | -d sets the delimiter; a list is used in turn, then starts again [30] | "`-d` sets the delimiter. Give it a list, and `paste` uses the characters in turn and starts again at the beginning. [30]" | PASS | – |
| 289 | paste | Bangla | -d sets the delimiter; a list is used in turn, then starts again [30] | "`-d` sets the delimiter. Give it a list, and `paste` uses the characters in turn and starts again at the beginning. [30]" | PASS | OK |
| 290 | paste | Layman | -s is serial mode: one file per output line [30] | "`-s` is serial mode: it pastes one file per output line. [30]" | PASS | – |
| 291 | paste | Bangla | -s is serial mode: one file per output line [30] | "`-s` is serial mode: it pastes one file per output line. [30]" | PASS | OK |
| 292 | paste | Layman | A - as file name means stdin; repeat it to take several lines from one stream [30] | "A `-` as a file name means `stdin`. Repeat it to take several lines from one stream. [30]" | PASS | – |
| 293 | paste | Bangla | A - as file name means stdin; repeat it to take several lines from one stream [30] | "A `-` as a file name means `stdin`. Repeat it to take several lines from one stream. [30]" | PASS | OK |
| 294 | paste | Bangla | In the -d list, \b \f \r \v are GNU extensions [30] | "GNU option: in the `-d` list, the escapes `\b`, `\f`, `\r`, and `\v` are GNU extensions. [30]" | PASS | OK |
| 295 | paste | Layman | paste matches lines only by position; for a key use join | "`paste` matches lines by position only. It does not look at the content. To match lines by a key, use `join`." | PASS | – |
| 296 | paste | Bangla | paste matches lines only by position; for a key use join | "`paste` matches lines by position only. It does not look at the content. To match lines by a key, use `join`." | PASS | OK |
| 297 | paste | Layman | Tutorial advice: paste -d, ids names > cases.csv builds a small CSV; paste -s -d, failed.txt makes one comma-separated argument for a rerun | "Tutorial's own advice: build a small CSV of test data from two column files with `paste -d, ids names > cases.csv`. Use `paste -s -d, failed.txt` to turn a list of failed test names into one comma-separated argument for a rerun." | PASS | – |
| 298 | paste | Bangla | Tutorial advice: paste -d, ids names > cases.csv builds a small CSV; paste -s -d, failed.txt makes one comma-separated argument for a rerun | "Tutorial's own advice: build a small CSV of test data from two column files with `paste -d, ids names > cases.csv`. Use `paste -s -d, failed.txt` to turn a list of failed test names into one comma-separated argument for a rerun." | PASS | OK |
| 299 | join | Layman | join combines the lines of two files with the same value in a key field; like a database join [31] | "The `join` command combines the lines of two files that have the same value in a key field. This is like a database join. [31]" | PASS | – |
| 300 | join | Bangla | join combines the lines of two files with the same value in a key field; like a database join [31] | "The `join` command combines the lines of two files that have the same value in a key field. This is like a database join. [31]" | PASS | OK |
| 301 | join | Layman | Default key is the first field; blanks separate fields; output is key, rest of file 1, rest of file 2 [31] | "By default, the key is the first field of each line. Blanks separate the fields. The output is the key, then the other fields of file 1, then those of file 2. [31]" | PASS | – |
| 302 | join | Bangla | Default key is the first field; blanks separate fields; output is key, rest of file 1, rest of file 2 [31] | "By default, the key is the first field of each line. Blanks separate the fields. The output is the key, then the other fields of file 1, then those of file 2. [31]" | PASS | OK |
| 303 | join | Layman | Both files must be sorted on the key field [31] | "Both files must be sorted on the key field. [31]" | PASS | – |
| 304 | join | Bangla | Both files must be sorted on the key field [31] | "Both files must be sorted on the key field. [31]" | PASS | OK |
| 305 | join | Layman | Sort with sort -k 1b,1; same locale for sort and join; the C locale avoids surprises [32] | "Sort them with `sort -k 1b,1`, and use the same locale for `sort` and `join`. The `C` locale avoids surprises. [32]" | PASS | – |
| 306 | join | Bangla | Sort with sort -k 1b,1; same locale for sort and join; the C locale avoids surprises [32] | "Sort them with `sort -k 1b,1`, and use the same locale for `sort` and `join`. The `C` locale avoids surprises. [32]" | PASS | OK |
| 307 | join | Layman | -1 N, -2 N, -j N choose the key field of file 1, file 2, or both [33] | "`-1 N`, `-2 N`, `-j N` Choose the key field of file 1, of file 2, or of both. [33]" | PASS | – |
| 308 | join | Bangla | -1 N, -2 N, -j N choose the key field of file 1, file 2, or both [33] | "`-1 N`, `-2 N`, `-j N` Choose the key field of file 1, of file 2, or of both. [33]" | PASS | OK |
| 309 | join | Bangla | -t CHAR uses CHAR as field separator [33] | "`-t CHAR` Use CHAR as the field separator. [33]" | PASS | OK |
| 310 | join | Layman | -a 1 also prints lines of file 1 with no partner; -v 1 prints only those [33] | "`-a 1` Also print the lines of file 1 that have no partner. / `-v 1` Print only those lines. [33]" | PASS | – |
| 311 | join | Bangla | -a 1 also prints lines of file 1 with no partner; -v 1 prints only those [33] | "`-a 1` Also print the lines of file 1 that have no partner. / `-v 1` Print only those lines. [33]" | PASS | OK |
| 312 | join | Layman | -e STR with -o auto fills missing fields with STR [33] | "`-e STR` with `-o auto` Fill missing fields with STR. [33]" | PASS | – |
| 313 | join | Bangla | -e STR with -o auto fills missing fields with STR [33] | "`-e STR` with `-o auto` Fill missing fields with STR. [33]" | PASS | OK |
| 314 | join | Bangla | --check-order and -o auto are GNU options [33] | "`--check-order` and `-o auto` are GNU options. Other versions of `join` may lack them. [33]" | PASS | OK |
| 315 | join | Layman | Unsorted input can give missing or wrong lines; join may not warn [33] | "Unsorted input can give missing or wrong lines. `join` may not warn you. [33]" | PASS | – |
| 316 | join | Bangla | Unsorted input can give missing or wrong lines; join may not warn [33] | "Unsorted input can give missing or wrong lines. `join` may not warn you. [33]" | PASS | OK |
| 317 | join | Bangla | join diagnoses unsorted input only when some lines have no partner [33] | "It diagnoses unsorted input only when some lines have no partner. [33]" | PASS | OK |
| 318 | join | Layman | --check-order makes it fail; do not use the output of a failed run [33] | "Add `--check-order` to make it fail, and do not use the output of a failed run. [33]" | PASS | – |
| 319 | join | Bangla | --check-order makes it fail; do not use the output of a failed run [33] | "Add `--check-order` to make it fail, and do not use the output of a failed run. [33]" | PASS | OK |
| 320 | join | Layman | Tutorial advice: join test case IDs with results by ID; join -v 1 shows tests that never ran | "Tutorial's own advice: join a list of test case IDs with a list of results by ID. Then `join -v 1` shows the cases that have no result, which are the tests that never ran." | PASS | – |
| 321 | join | Bangla | Tutorial advice: join test case IDs with results by ID; join -v 1 shows tests that never ran | "Tutorial's own advice: join a list of test case IDs with a list of results by ID. Then `join -v 1` shows the cases that have no result, which are the tests that never ran." | PASS | OK |
| 322 | split | Layman | split cuts a file into pieces; default 1000 lines per piece [34] | "The `split` command cuts a file into pieces. The default is 1000 lines per piece. [34]" | PASS | – |
| 323 | split | Bangla | split cuts a file into pieces; default 1000 lines per piece [34] | "The `split` command cuts a file into pieces. The default is 1000 lines per piece. [34]" | PASS | OK |
| 324 | split | Layman | Names are a prefix and a suffix: x plus aa, ab, ... [34] | "The names are a prefix and a suffix: `x` plus `aa`, `ab`, and so on. [34]" | PASS | – |
| 325 | split | Bangla | Names are a prefix and a suffix: x plus aa, ab, ... [34] | "The names are a prefix and a suffix: `x` plus `aa`, `ab`, and so on. [34]" | PASS | OK |
| 326 | split | Layman | Joining the pieces in name order gives the original file [34] | "If you join the pieces in name order, you get the original file. [34]" | PASS | – |
| 327 | split | Bangla | Joining the pieces in name order gives the original file [34] | "If you join the pieces in name order, you get the original file. [34]" | PASS | OK |
| 328 | split | Layman | The last argument is your own prefix | "The last argument is your own prefix." | PASS | – |
| 329 | split | Bangla | The last argument is your own prefix | "The last argument is your own prefix." | PASS | OK |
| 330 | split | Layman | -l N lines per piece [34] | "`-l N` N lines in each piece. [34]" | PASS | – |
| 331 | split | Bangla | -l N lines per piece [34] | "`-l N` N lines in each piece. [34]" | PASS | OK |
| 332 | split | Layman | -b SIZE bytes per piece; can cut a line in two [34] | "`-b SIZE` SIZE bytes in each piece. It can cut a line in two. [34]" | PASS | – |
| 333 | split | Bangla | -b SIZE bytes per piece; can cut a line in two [34] | "`-b SIZE` SIZE bytes in each piece. It can cut a line in two. [34]" | PASS | OK |
| 334 | split | Layman | -n l/N makes N pieces without cutting lines [34] | "`-n l/N` N pieces, without cutting lines. [34]" | PASS | – |
| 335 | split | Bangla | -n l/N makes N pieces without cutting lines [34] | "`-n l/N` N pieces, without cutting lines. [34]" | PASS | OK |
| 336 | split | Layman | -d digits in the suffix, not letters [34] | "`-d` Digits in the suffix, not letters. [34]" | PASS | – |
| 337 | split | Bangla | -d digits in the suffix, not letters [34] | "`-d` Digits in the suffix, not letters. [34]" | PASS | OK |
| 338 | split | Layman | --additional-suffix=.txt adds an extension to each name [34] | "`--additional-suffix=.txt` Add an extension to each name. [34]" | PASS | – |
| 339 | split | Bangla | --additional-suffix=.txt adds an extension to each name [34] | "`--additional-suffix=.txt` Add an extension to each name. [34]" | PASS | OK |
| 340 | split | Layman | -d, --additional-suffix, -n are GNU options; for portable scripts use letter suffixes with -l or -b | "`-d`, `--additional-suffix`, and `-n` are GNU options. Other versions of `split` may lack them. For portable scripts, use letter suffixes with `-l` or `-b`." | PASS | – |
| 341 | split | Bangla | -d, --additional-suffix, -n are GNU options; for portable scripts use letter suffixes with -l or -b | "`-d`, `--additional-suffix`, and `-n` are GNU options. Other versions of `split` may lack them. For portable scripts, use letter suffixes with `-l` or `-b`." | PASS | OK |
| 342 | split | Layman | split writes all pieces into the current directory; without a prefix names start with x | "`split` writes all pieces into the current directory. Without a prefix, the names start with `x`." | PASS ("Without a prefix" omitted; the first paragraph gives the x prefix) | – |
| 343 | split | Bangla | split writes all pieces into the current directory; without a prefix names start with x | "`split` writes all pieces into the current directory. Without a prefix, the names start with `x`." | PASS | OK |
| 344 | split | Layman | In our test a second run with the same prefix replaced earlier pieces without a warning | "In our test, a second run with the same prefix replaced the earlier pieces without a warning." | PASS | – |
| 345 | split | Bangla | In our test a second run with the same prefix replaced earlier pieces without a warning | "In our test, a second run with the same prefix replaced the earlier pieces without a warning." | PASS | OK |
| 346 | split | Layman | If the second run makes fewer pieces, old pieces stay behind | "If the second run makes fewer pieces, old pieces stay behind." | PASS | – |
| 347 | split | Bangla | If the second run makes fewer pieces, old pieces stay behind | "If the second run makes fewer pieces, old pieces stay behind." | PASS | OK ("পুরনো কিছু টুকরা": "some" is a small addition; the meaning holds) |
| 348 | split | Layman | Tutorial advice: always give a prefix and run split in an empty scratch directory | "Tutorial's own advice: always give a prefix, and run `split` in an empty scratch directory." | PASS | – |
| 349 | split | Bangla | Tutorial advice: always give a prefix and run split in an empty scratch directory | "Tutorial's own advice: always give a prefix, and run `split` in an empty scratch directory." | PASS | OK |
| 350 | split | Bangla | Tutorial advice: split -n l/4 gives four files with whole lines; give each parallel test worker one piece | "Tutorial's own advice: split a large test-data file with `split -n l/4` to get four files with whole lines. Give each parallel test worker one piece." | PASS | OK |
| 351 | tr | Layman | tr translates, squeezes, or deletes characters; reads stdin and writes stdout; takes no file names, so use < or a pipe [35] | "The `tr` command translates, squeezes, or deletes characters. It reads `stdin` and writes `stdout`. It takes no file names, so use `<` or a pipe. [35]" | PASS | – |
| 352 | tr | Bangla | tr translates, squeezes, or deletes characters; reads stdin and writes stdout; takes no file names, so use < or a pipe [35] | "The `tr` command translates, squeezes, or deletes characters. It reads `stdin` and writes `stdout`. It takes no file names, so use `<` or a pipe. [35]" | PASS | OK |
| 353 | tr | Layman | Operands are lists of characters, not regular expressions [36] | "Its operands are lists of characters, not regular expressions. [36]" | PASS | – |
| 354 | tr | Bangla | Operands are lists of characters, not regular expressions [36] | "Its operands are lists of characters, not regular expressions. [36]" | PASS | OK |
| 355 | tr | Layman | Translate: tr '[:lower:]' '[:upper:]' [37] | "Translate `tr '[:lower:]' '[:upper:]'` [37]" | PASS | – |
| 356 | tr | Bangla | Translate: tr '[:lower:]' '[:upper:]' [37] | "Translate `tr '[:lower:]' '[:upper:]'` [37]" | PASS | OK |
| 357 | tr | Layman | Delete: tr -d '\r' [38] | "Delete `tr -d '\r'` [38]" | PASS | – |
| 358 | tr | Bangla | Delete: tr -d '\r' [38] | "Delete `tr -d '\r'` [38]" | PASS | OK |
| 359 | tr | Layman | Squeeze repeats: tr -s ' ' [38] | "Squeeze repeats `tr -s ' '` [38]" | PASS | – |
| 360 | tr | Bangla | Squeeze repeats: tr -s ' ' [38] | "Squeeze repeats `tr -s ' '` [38]" | PASS | OK |
| 361 | tr | Layman | Keep only some characters: tr -cd '0-9\n' [35] | "Keep only some characters `tr -cd '0-9\n'` [35]" | PASS | – |
| 362 | tr | Bangla | Keep only some characters: tr -cd '0-9\n' [35] | "Keep only some characters `tr -cd '0-9\n'` [35]" | PASS | OK |
| 363 | tr | Layman | -c uses all characters that are not in the list [35] | "`-c` uses all characters that are not in the list. [35]" | PASS | – |
| 364 | tr | Bangla | -c uses all characters that are not in the list [35] | "`-c` uses all characters that are not in the list. [35]" | PASS | OK |
| 365 | tr | Layman | Escapes \n, \t, \r work in the lists [36] | "The escapes `\n` (newline), `\t` (tab), and `\r` (carriage return) work in the lists. [36]" | PASS | – |
| 366 | tr | Bangla | Escapes \n, \t, \r work in the lists [36] | "The escapes `\n` (newline), `\t` (tab), and `\r` (carriage return) work in the lists. [36]" | PASS | OK |
| 367 | tr | Layman | Classes such as [:lower:] are safer than ranges such as a-z [37] (Bangla adds: ranges are not portable outside the C locale) | "Classes such as `[:lower:]` are safer than ranges such as `a-z`, which are not portable outside the C locale. [37]" | PASS (reason omitted) | – |
| 368 | tr | Bangla | Classes such as [:lower:] are safer than ranges such as a-z [37] (Bangla adds: ranges are not portable outside the C locale) | "Classes such as `[:lower:]` are safer than ranges such as `a-z`, which are not portable outside the C locale. [37]" | PASS | OK |
| 369 | tr | Layman | GNU tr works on single bytes; it does not treat a multibyte character such as ö as you may expect | "GNU `tr` works on single bytes. It does not treat a multibyte character, such as `ö`, as you may expect. [36]" | PASS (no cite right after the sentence; the Technical [36] comes one sentence later, and [36] is cited at the end of the Layman paragraph) | – |
| 370 | tr | Bangla | GNU tr works on single bytes; it does not treat a multibyte character such as ö as you may expect | "GNU `tr` works on single bytes. It does not treat a multibyte character, such as `ö`, as you may expect. [36]" | PASS | OK |
| 371 | tr | Bangla | LC_ALL=C tr runs it in a safe single-byte locale [36] | "`LC_ALL=C tr` runs it in a safe single-byte locale. [36]" | PASS | OK |
| 372 | tr | Layman | Do not write tr -d '[0-9]' (it also deletes the brackets); write tr -d '0-9' [36] | "Do not write `tr -d '[0-9]'`. It also deletes the brackets. Write `tr -d '0-9'`. [36]" | PASS | – |
| 373 | tr | Bangla | Do not write tr -d '[0-9]' (it also deletes the brackets); write tr -d '0-9' [36] | "Do not write `tr -d '[0-9]'`. It also deletes the brackets. Write `tr -d '0-9'`. [36]" | PASS | OK |
| 374 | tr | Layman | tr ... < file > file empties file before tr starts [5]; write to a new file, then move it | "`tr ... < file > file` empties `file` before `tr` starts. [5] Write to a new file, and then move it ..." | PASS (the example command and "Check f.new first" are omitted) | – |
| 375 | tr | Bangla | tr ... < file > file empties file before tr starts [5]; write to a new file, then move it | "`tr ... < file > file` empties `file` before `tr` starts. [5] Write to a new file, and then move it ..." | PASS | OK |
| 376 | tr | Layman | Tutorial advice: remove carriage returns with tr -d '\r' from both expected and actual output before comparing; Windows file | "Tutorial's own advice: before you compare expected and actual output, remove carriage returns from both with `tr -d '\r'`. A file from a Windows tool then does not fail the comparison for an invisible character." | PASS (the Windows sentence is omitted) | – |
| 377 | tr | Bangla | Tutorial advice: remove carriage returns with tr -d '\r' from both expected and actual output before comparing; Windows file | "Tutorial's own advice: before you compare expected and actual output, remove carriage returns from both with `tr -d '\r'`. A file from a Windows tool then does not fail the comparison for an invisible character." | PASS | OK |
| 378 | expand | Layman | expand changes tabs into spaces; reads files or stdin; writes stdout [39] | "The `expand` command changes tab characters into spaces. It reads files, or `stdin`, and writes `stdout`. [39]" | PASS | – |
| 379 | expand | Bangla | expand changes tabs into spaces; reads files or stdin; writes stdout [39] | "The `expand` command changes tab characters into spaces. It reads files, or `stdin`, and writes `stdout`. [39]" | PASS | OK |
| 380 | expand | Layman | A tab is not a fixed number of spaces; it moves the text to the next tab stop [39] | "A tab does not stand for a fixed number of spaces. It moves the text to the next tab stop ... [39]" | PASS | – |
| 381 | expand | Bangla | A tab is not a fixed number of spaces; it moves the text to the next tab stop [39] | "A tab does not stand for a fixed number of spaces. It moves the text to the next tab stop ... [39]" | PASS | OK |
| 382 | expand | Layman | A tab stop is a column that is a multiple of the tab width; default width 8 [39] | "... a column that is a multiple of the tab width. The default width is 8. [39]" | PASS | – |
| 383 | expand | Bangla | A tab stop is a column that is a multiple of the tab width; default width 8 [39] | "... a column that is a multiple of the tab width. The default width is 8. [39]" | PASS | OK |
| 384 | expand | Layman | -t N sets the tab width; -i converts only tabs at the start of a line [39] | "`-t N` sets the tab width to N. `-i` converts only the tabs at the start of a line. [39]" | PASS | – |
| 385 | expand | Bangla | -t N sets the tab width; -i converts only tabs at the start of a line [39] | "`-t N` sets the tab width to N. `-i` converts only the tabs at the start of a line. [39]" | PASS | OK |
| 386 | expand | Layman | A tab list ending with /N (width of all later stops), as in --tabs=2,4,/8, is a GNU extension [39] | "GNU option: a tab list can end with `/N`, the width of all later stops, as in `--tabs=2,4,/8`. This form is a GNU extension. [39]" | PASS (the meaning of /N is omitted) | – |
| 387 | expand | Bangla | A tab list ending with /N (width of all later stops), as in --tabs=2,4,/8, is a GNU extension [39] | "GNU option: a tab list can end with `/N`, the width of all later stops, as in `--tabs=2,4,/8`. This form is a GNU extension. [39]" | PASS | OK |
| 388 | expand | Layman | expand f > f empties f before expand starts [5]; write to a new file, then move it | "`expand f > f` empties `f` before `expand` starts. [5] Write to a new file and then move it: `expand -t 4 f > f.new && mv f.new f`." | PASS (the example command is omitted) | – |
| 389 | expand | Bangla | expand f > f empties f before expand starts [5]; write to a new file, then move it | "`expand f > f` empties `f` before `expand` starts. [5] Write to a new file and then move it: `expand -t 4 f > f.new && mv f.new f`." | PASS | OK |
| 390 | expand | Layman | Tutorial advice: tab-aligned reports look different in each viewer because tab width varies; run expand -t 8 before pasting into a ticket or CI log; columns stay aligned | "Tutorial's own advice: tab-aligned reports look different in each viewer, because the tab width varies. Run `expand -t 8` on such a report before you paste it into a ticket or a CI log. The columns then stay aligned." | PASS | – |
| 391 | expand | Bangla | Tutorial advice: tab-aligned reports look different in each viewer because tab width varies; run expand -t 8 before pasting into a ticket or CI log; columns stay aligned | "Tutorial's own advice: tab-aligned reports look different in each viewer, because the tab width varies. Run `expand -t 8` on such a report before you paste it into a ticket or a CI log. The columns then stay aligned." | PASS | OK |
| 392 | unexpand | Layman | unexpand does the reverse of expand: changes spaces into tabs [40] | "The `unexpand` command does the reverse of `expand`. It changes spaces into tab characters. [40]" | PASS | – |
| 393 | unexpand | Bangla | unexpand does the reverse of expand: changes spaces into tabs [40] | "The `unexpand` command does the reverse of `expand`. It changes spaces into tab characters. [40]" | PASS | OK |
| 394 | unexpand | Layman | By default it converts only the blanks at the start of a line; tab stops every 8 columns [40] | "By default it converts only the blanks at the start of a line. The tab stops are every 8 columns. [40]" | PASS | – |
| 395 | unexpand | Bangla | By default it converts only the blanks at the start of a line; tab stops every 8 columns [40] | "By default it converts only the blanks at the start of a line. The tab stops are every 8 columns. [40]" | PASS | OK |
| 396 | unexpand | Layman | An indent of 4 spaces stays as it is because it does not reach a tab stop | "So an indent of 4 spaces stays as it is, because it does not reach a tab stop." | PASS | – |
| 397 | unexpand | Bangla | An indent of 4 spaces stays as it is because it does not reach a tab stop | "So an indent of 4 spaces stays as it is, because it does not reach a tab stop." | PASS | OK |
| 398 | unexpand | Layman | -t N sets the tab width and also turns on -a [40] | "`-t N` sets the tab width. It also turns on `-a`. [40]" | PASS | – |
| 399 | unexpand | Bangla | -t N sets the tab width and also turns on -a [40] | "`-t N` sets the tab width. It also turns on `-a`. [40]" | PASS | OK |
| 400 | unexpand | Layman | With -a it converts any run of two or more blanks that ends at a tab stop, also after text [40] | "With `-a`, `unexpand` converts any run of two or more blanks that ends at a tab stop, also after text. [40]" | PASS | – |
| 401 | unexpand | Bangla | With -a it converts any run of two or more blanks that ends at a tab stop, also after text [40] | "With `-a`, `unexpand` converts any run of two or more blanks that ends at a tab stop, also after text. [40]" | PASS | OK |
| 402 | unexpand | Layman | --first-only limits the work to leading blanks again [40] | "`--first-only` limits the work to leading blanks again. [40]" | PASS | – |
| 403 | unexpand | Bangla | --first-only limits the work to leading blanks again [40] | "`--first-only` limits the work to leading blanks again. [40]" | PASS | OK |
| 404 | unexpand | Layman | --first-only is not in the POSIX standard [49] (Bangla adds: POSIX unexpand has only -a and -t) | "GNU option: `--first-only` is not in the POSIX standard, whose `unexpand` has only `-a` and `-t`. [49]" | PASS (the -a/-t list omitted) | – |
| 405 | unexpand | Bangla | --first-only is not in the POSIX standard [49] (Bangla adds: POSIX unexpand has only -a and -t) | "GNU option: `--first-only` is not in the POSIX standard, whose `unexpand` has only `-a` and `-t`. [49]" | PASS | OK |
| 406 | unexpand | Layman | tr -cd '\t' \| wc -c counts the tab characters in the output | "The pipe `tr -cd '\t' \| wc -c` counts the tab characters in the output." | PASS | – |
| 407 | unexpand | Bangla | tr -cd '\t' \| wc -c counts the tab characters in the output | "The pipe `tr -cd '\t' \| wc -c` counts the tab characters in the output." | PASS | OK |
| 408 | unexpand | Layman | unexpand f > f empties f before unexpand starts [5]; write to a new file, then move it | "`unexpand f > f` empties `f` before `unexpand` starts. [5] Write to a new file, and then move it." | PASS | – |
| 409 | unexpand | Bangla | unexpand f > f empties f before unexpand starts [5]; write to a new file, then move it | "`unexpand f > f` empties `f` before `unexpand` starts. [5] Write to a new file, and then move it." | PASS | OK |
| 410 | unexpand | Layman | -a also changes spaces inside text, such as the gap between two columns | "Use `-a` with care: it also changes spaces inside text, such as the gap between two columns." | PASS | – |
| 411 | unexpand | Bangla | -a also changes spaces inside text, such as the gap between two columns | "Use `-a` with care: it also changes spaces inside text, such as the gap between two columns." | PASS | OK |
| 412 | unexpand | Layman | Tutorial advice: change indentation in a separate commit so the diff of a test change is easy to read | "Tutorial's own advice: change indentation in a separate commit, so the diff of a test change stays easy to read." | PASS | – |
| 413 | unexpand | Bangla | Tutorial advice: change indentation in a separate commit so the diff of a test change is easy to read | "Tutorial's own advice: change indentation in a separate commit, so the diff of a test change stays easy to read." | PASS | OK |
| 414 | unexpand | Bangla | Tutorial advice: use unexpand --first-only -t 4 only when a project rule asks for tab indents | "Use `unexpand --first-only -t 4` only when a project rule asks for tab indents." | PASS | OK |

Open FAILs: 0

## Round 4 (2026-10-27): the lesson rewrite

The check ran in two parts by two independent agents (topics 1-10 and topics 11-20) on commit f91c93c. Part 1 is first, part 2 second.

### Part 1 (topics 1-10)

Checker: independent voices checker (Sonnet 5.5). I did not write these voices. Part 1 (topics 1-10) of `content/linux/text-processing.mdx` at commit f91c93c, compared with f91c93c^.

Method: I read Technical, Layman, and Bangla of topics 1-10 and compared each sentence, number, command, flag, and path with the Technical panel of the same topic. A script listed the tip length (without `<Cite />`) and the Try-it code block of each panel. All tips are 160 characters or fewer (largest: Technical Stdout, Stdin, and Stderr, 151). Each Try-it block of a voice equals the Technical one. `node --test tests/voice-source.test.ts` passes (22 of 22). The 3 Core data-loss sentences in this part (Redirects, Tee, sort) are in both voices.

| # | Topic | Voice | Verdict | Evidence / Fix |
|---|---|---|---|---|
| 1 | Text Processing | Layman | PASS | Same Goal, Core, Try-it, tip, Go deeper. Cites {1,2,6} equal Technical. No new fact. Tip 130 chars. |
| 2 | Text Processing | Bangla | PASS | Same facts and cites {1,2,6}. Commands and code stay in English. Correct Bangla. Tip 129 chars. |
| 3 | Stdout, Stdin, and Stderr | Layman | PASS | Same facts: 3 streams, descriptors 0/1/2, shell can connect them, `$?`, buffering. Cites {3,2,4}. The table is merged into the Core. Tip 141. |
| 4 | Stdout, Stdin, and Stderr | Bangla | PASS | Same facts and cites. Correct Bangla ("unbuffered", "line-buffered" glossed). Tip 129. |
| 5 | Redirects | Layman | PASS | Data-loss sentence kept in the Core (`sort data.txt > data.txt` leaves it empty). Go deeper has `<`, `&>`, left-to-right, POSIX, `/dev/null`, `set -C`. Cites {5,2,6,7,8}. Tip 138. |
| 6 | Redirects | Bangla | PASS | Data-loss sentence kept ("সাবধান ... data হারিয়ে যায়"). Same facts and cites. Correct Bangla. Tip 126. |
| 7 | Pipes | Layman | PASS | Same facts: only stdout goes through, status of last command, `pipefail`, `|&`, POSIX 2024. Cites {9,8,10,6}. Diagram description equals Technical. Tip 133. |
| 8 | Pipes | Bangla | PASS | Same facts and cites. Diagram and code equal Technical. Correct Bangla. Tip 135. |
| 9 | Tee | Layman | PASS | Overwrite-without-`-a` data-loss sentence kept in the Core. `sudo tee -a`, `-p`, and the same-file rule kept. Cites {11,5}. Tip 143. |
| 10 | Tee | Bangla | PASS | Data-loss sentence kept ("সাবধান ... পুরনো content হারিয়ে যায়"). Same facts and cites. Tip 147. |
| 11 | grep | Layman | PASS | Same facts: exit status 0/1/2, quoting, `-n`, `-q`, `-E`, `-F`, option list incl. GNU `-P`/`-H`. Cites {12,13}. Tip 127. |
| 12 | grep | Bangla | PASS | Same facts and cites. Correct Bangla. Tip 126. |
| 13 | awk | Layman | PASS | Same facts: rule form, record, field, `$0`, `$1`, `END`, `NF`, `NR`, `FS`, `-F`, `-v`, `BEGIN`. Cites {14,15,16,20,17,21,18,44,19,22}. Omits the "basic features" note and the `limit=300` example. Tip 133. |
| 14 | awk | Bangla | PASS | Same facts and cites. Includes the `-v limit=300` and gawk notes. Correct Bangla. Tip 134. |
| 15 | cut | Layman | PASS | Same facts: `-f`, `-d`, TAB default, numbering from 1, list forms, order, `-s`, `--complement`, CSV quotes. Cites {23}. Omits `-c1-3` (see observations). Tip 133. |
| 16 | cut | Bangla | PASS | Same facts and cite {23}, incl. `-c1-3`. Correct Bangla. Tip 131. |
| 17 | sort | Layman | PASS | Data-loss sentence kept in the Core (`>` to the input file; shell empties it first). Go deeper has `-r`, `-u`, `-t`, `-c`, `-k 2,2n`, `-h`/`-V`, and the `-o` crash risk. Cites {24,5}. Tip 134. |
| 18 | sort | Bangla | PASS | Data-loss sentence kept ("সাবধান: `>` দিয়ে ... খালি করে দেয়"). Same facts and cites. `-o` crash risk kept. Tip 125. |
| 19 | uniq | Layman | PASS | Same facts: adjacent only, sort first, `-c`, `-d`, `-u`, `-i`, `-f N`, `sort -u`, `sort -n -u`, flaky test. Cites {25,24}. Try-it equal. Tip 128. |
| 20 | uniq | Bangla | PASS | Same facts and cites. Correct Bangla. Tip 136. |

Observations (not FAILs):
- The voices of Redirects, Tee, awk, and uniq leave out the short illustration code block that Technical shows before Try it (`cmd > out.txt 2>&1`, `make test 2>&1 | tee test.log`, `awk '{ print $1 }' times.txt`, `sort events.txt | uniq -c`). No fact is lost: each command is in the Try-it or the tip.
- Go deeper tables of Technical (Stdout, Redirects, grep, sort, uniq) are bullet lists in the voices. The Layman `-o` bullet of sort says "`-o` can name the input file" without the Technical table row "`-o FILE` writes the result to FILE". Optional: add "`-o FILE` writes the result to FILE." (also in Bangla).
- Layman cut omits `-c1-3` and the explanation of `--complement`; Layman awk omits the `limit=300` example and the "basic features" note. Omissions only.
- Old to new: I found no old Layman or Bangla fact that is lost and also missing from the new Technical text.

Part 1 FAILs: 0


### Part 2 (topics 11-20)

Part 2 (topics 11-20: wc, head, tail, nl, paste, join, split, tr, expand, unexpand). Checker: an independent agent, 2026-10-27, commit f91c93c. Method: I read each Layman and Bangla panel against the Technical panel of the same topic as it is now. A script checked the `<Cite n>` sets, the tip lengths (without the cite tags), the headings, and the Try-it code (commands and output). I read the old Layman panels (f91c93c^) for lost facts. `node --test tests/voice-source.test.ts` passes (22 of 22).

| # | Topic | Voice | Verdict | Evidence / Fix |
|---|---|---|---|---|
| 11 | wc | Layman | PASS | Same facts, cites {26,42,45}. Try-it code and output equal. Tip 126 chars. The `-w -c -m -L` table is now one sentence with the same facts. |
| 11 | wc | Bangla | PASS | Same facts and cites. Try-it equal (comments in English). Tip 132 chars. Terms natural. |
| 12 | head | Layman | PASS | Same facts, cites {27,47}. Try-it equal. Tip 148 chars (the same as Technical). GNU `-n -12` form and POSIX note kept. |
| 12 | head | Bangla | PASS | Same facts and cites. Tip 146 chars. "ধীর step" for "slowest" is correct. |
| 13 | tail | Layman | PASS | Same facts, cites {28,43,46,41,48}. Try-it equal. Tip 136 chars keeps the `--pid` point. The `--pid=$!` form is only in Technical (omission, no new fact). |
| 13 | tail | Bangla | PASS | All Technical facts kept, including the `--pid` form and the minimal-container note. Tip 129 chars. |
| 14 | nl | Layman | PASS | Same facts, cite {29}. Try-it equal (TAB sentence kept). Tip 135 chars. Option table is now bullets; the `-b pb` example and the `-s` default TAB are only in Technical (omission). |
| 14 | nl | Bangla | PASS | Same facts. Tip 130 chars. Defaults 6 and TAB kept. |
| 15 | paste | Layman | PASS | Same facts, cite {30}. Try-it equal. Tip 131 chars. The `-s` example, the `seq 6 | paste - - -` example, and the GNU escapes line are only in Technical (omission). |
| 15 | paste | Bangla | PASS | Same facts, GNU escapes line kept. Tip 136 chars. |
| 16 | join | Layman | PASS | Same facts, cites {31,33,32}. Try-it equal. Tip 126 chars. The safety fact (unsorted input, no warning) is in Core. `-t`, "diagnoses only when a line has no partner", and the GNU-option note are only in Technical (omission). |
| 16 | join | Bangla | PASS | Same facts, `-t` and the GNU note kept. The warning "সাবধান: unsorted input ... সতর্ক না-ও করতে পারে" is correct. Tip 120 chars. |
| 17 | split | Layman | PASS | Core keeps the data-loss sentence (second run replaced old pieces with no warning, use an empty directory). Cite {34}. Try-it equal. Tip 112 chars. |
| 17 | split | Bangla | PASS | Core keeps the data-loss sentence. All Go deeper facts kept. Tip 125 chars. |
| 18 | tr | Layman | PASS | Core keeps the data-loss sentence (`tr ... < file > file` empties `file`, cite 5) and "Write to a new file". Cites {35,38,5,36,37}. Try-it equal. Tip 109 chars. |
| 18 | tr | Bangla | PASS | Core keeps the sentence and the cite. All Go deeper facts kept, including the `[0-9]` bracket warning. Tip 105 chars. |
| 19 | expand | Layman | PASS | Core keeps the data-loss sentence (cite 5). Cites {39,5}. Try-it equal. Tip 145 chars (Technical 142). The in-place `mv` command is only in Technical. |
| 19 | expand | Bangla | PASS | Core keeps the sentence. `--tabs=2,4,/8` and the `mv` command kept. Tip 130 chars. |
| 20 | unexpand | Layman | PASS | Core keeps the data-loss sentence (cite 5). Cites {40,5,49,35,26}. Try-it (0 and 1 tab) equal. Tip 117 chars. `-a` changes spaces inside text: kept. |
| 20 | unexpand | Bangla | PASS | Core keeps the sentence. `-a` warning and "সাবধানে ব্যবহার করুন" kept. POSIX note kept. Tip 102 chars. |

Observations (none is a FAIL):
- wc and head: the Core one-line code block (`wc -l run.log`, `head -n 1 results.csv`) is only in Technical, in both voices. It adds no fact. The Try-it block is equal in all 20 voice panels.
- split Layman and Bangla Core say "use an empty directory", but only Technical Go deeper says that `split` writes all pieces into the current directory. Optional: no change needed.
- unexpand Layman drops the Technical "Use it with care" after the `-a` warning. The warning fact stays.
- tail Layman has `--pid` in the tip without the `--pid=$!` form (the form is in Technical and Bangla). Optional.
- Each voice has no Markdown heading. Cites in every voice are a subset of the Technical cites of the same block. No fact was lost from the old voices that is not also in the new Technical text.

Part 2 FAILs: 0


Open FAILs: 0


## Round 5 (2026-10-27): the fix rounds

Checker: an independent agent that did not write or fix the page, 2026-10-27, HEAD c8cd682. Scope: the 8 changed Layman and Bangla lines of `git diff -U2 f91c93c HEAD -- content/linux/text-processing.mdx` (3 topics). Round 4 of the voices report had 0 FAILs, so no FAIL is re-checked; the Technical-mirroring fixes are checked against the Technical text of the same topic (fixed and checked in the Technical report, R5-1 to R5-4).

| # | Topic | Voice | Verdict | Evidence / Fix |
|---|---|---|---|---|
| R5-V1 | Stdout, Stdin, and Stderr | Layman | PASS | Try it (line 235): `$?` sentence now has `<Cite n={6} />` and `<Cite n={9} />`, same as Technical (line 193), which cites 6 and 9. Go deeper bullet (line 257): "A stream is a channel for input or output between a program and its environment. <Cite n={4} />", the same fact and cite as Technical (line 221). No new fact. Layman Core is 142 words before `<details>`, the tip is 141 characters. |
| R5-V2 | Stdout, Stdin, and Stderr | Bangla | PASS | Try it (line 271): `$?` ... exit status `<Cite n={6} />`, আর 0 মানে সফল। `<Cite n={9} />`. Go deeper (line 293): "Stream হলো একটি program আর তার environment-এর মধ্যে input বা output-এর একটি channel। `<Cite n={4} />`". Correct and natural; `$?`, `stderr`, program, environment, input, output stay in English. Cites 6, 9, 4 are in the Technical block. 134 words, tip 129 characters. |
| R5-V3 | join | Layman | PASS | `<Cite n={33} />` after "no partner." (line 1993); Technical cites 33 in the same block. No new fact. 135 words, tip 126 characters. |
| R5-V4 | join | Bangla | PASS | `<Cite n={33} />` after "সেগুলো print করুন।" (line 2030); 33 is in the Technical block. `-v 1` stays in English. 122 words, tip 120 characters. |
| R5-V5 | split | Layman | PASS | "If you also name an input file, the last argument is your own prefix." (line 2116). Same fact as Technical (line 2071; S34 synopsis `split [option]... [input [prefix]]`). The "Be careful: use an empty directory" data-loss warning is still there. 134 words, tip 112 characters. |
| R5-V6 | split | Bangla | PASS | "Input file-এর নামও দিলে, শেষ argument হলো আপনার নিজের prefix।" (line 2156). Correct and natural; the "সাবধান: একটি খালি directory-তে চালান" warning is still visible. 117 words, tip 125 characters. |
| R5-V7 | all | both | PASS | No other voice line changed (12-line diff: 4 Technical, 4 Layman, 4 Bangla). `<Voices>` structure: `node --test tests/voice-source.test.ts` pass 22, fail 0; `lessoncheck.mjs text-processing` 0 problems. Every `<Cite n>` in a voice is cited by the same block's Technical. |

Open FAILs: 0
