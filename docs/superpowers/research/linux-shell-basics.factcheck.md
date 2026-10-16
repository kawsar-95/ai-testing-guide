# Fact-check: Shell Basics (Linux stage 1, round 1, 2026-10-16)

Checker: an independent agent that did not write the page. Page: `content/linux/shell-basics.mdx` (writer's commit 32c2e95). Branch: `feat/linux-module`.

Sources fetched by the checker on 2026-10-16 with `scripts/linux_fetch.py` (list file outside the repo). Cite numbers are the S numbers of `page.sources`:

- S1 bash(1), S2 ls(1), S3 pwd(1), S4 man(1), S5 whereis(1), S6 hier(7), S7 environ(7), S8 env(1), S9 printenv(1): status `ok`.
- S11 linuxcommand.org, S12 linuxsimply.com, S13 linuxconfig.org (filesystem-basics), S14 linuxbash.sh, S15 linuxhandbook.com (help), S16 itsfoss.com, S17 tldr-pages (GitHub), S18 linuxconfig.org (PATH), S19 linuxhandbook.com (directory structure), S20 computernetworkingnotes.com, S21 linuxize.com: status `ok`.
- S10 FHS 3.0 chapter 3: the polite fetcher did not return it (first run `error:TimeoutError`, second run `robots`). The checker read it with the `WebFetch` tool, which returns a summary of the page and not the raw text. That gave the title, the full list of section headings, and one verbatim sentence of section 3.1. Claims that rest on S10 are marked PASS only for what that output shows. The overlap script could not run on the text of S10.

Counts: 21 sources, 67 cites. Every cite number 1 to 21 exists, and every source is cited at least once (counts: S1 18, S2 8, S3 1, S4 3, S5 1, S6 11, S7 7, S8 1, S9 1, S10 2, S11 3, S12 1, S13 2, S14 1, S15 1, S16 1, S17 1, S18 1, S19 1, S20 1, S21 1).

Headings: the seven `##` headings are the roadmap topic titles (Shell Basics, Basic Commands, Navigation Basics, Command Help, Command Path, Directory Hierarchy, Environment Variables). No other `##` heading.

Local runs (bash 5.3.9, uutils coreutils 0.10.0 `ls`, sample data in the scratchpad `factcheck-shell-basics/sample`, no sudo, no system change): all code blocks of the page were run or split into their commands. Results are in the Evidence column ("ran").

Overlap check: `python3 scripts/linux_overlap.py content/linux/shell-basics.mdx <raw dir>`. The writer's raw dir holds only the roadmap pages (no man pages), so it printed nothing. Against the 20 pages the checker fetched, including the man pages, the script finds 11 runs. 3 of them are copied sentences in the body (rows 4, 54, 68). 2 are the source title of S5 in `page.sources` (a title may copy its source). The run "an interactive shell that is not a login shell" is the standard term, so it is not a FAIL.

Focus items that the controller named:

- "almost all commands have --help": the page does not say "almost all". It says "Many other commands do, but the rule is not fixed" (row 41), which S16 supports. Local test: `python3`, `git`, `curl`, `tar` return 0 for `--help`. `ssh` and `ip` print usage but return 255. S16 is a blog. No official source in the list states it.
- `~/.bash_profile` and `~/.bashrc`: the startup-file facts (rows 10 to 12) match S1. The persistence advice (rows 54 and 82) matches S18 and S20 (PASS), but the two sentences give two different files. See the note after the table.
- `cd "$(dirname "$0")"` (row 37): ran. It works when the script is run (directly, with `bash`, or by a name in `PATH`). It does not work when the script is sourced. See the note after the table.
- FHS facts: only the purpose of the root filesystem and the existence of the per-directory sections come from the FHS (rows 59, 60). The directory table comes from hier(7) (rows 61 to 70) and each row matches it.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | Shell Basics | The shell is a program that takes typed commands and gives them to the operating system | 11 | PASS | S11: "the shell is a program that takes commands from the keyboard and gives them to the operating system to perform" |
| 2 | Shell Basics | On most Linux systems the shell is bash | 11 | PASS | S11: "On most Linux systems a program called bash ... acts as the shell program" |
| 3 | Shell Basics | Bash is a reimplementation and extension of the Bourne shell | 1, 11 | PASS | S1: "It is a reimplementation and extension of the Bourne shell". S11: "an enhanced version of the original Unix shell program, sh, written by Steve Bourne". The fact is right. The wording is a copy (row 4). |
| 4 | Shell Basics | Wording of row 3 | 1 | FAIL | Overlap script: 8 words in a row ("is a reimplementation and extension of the Bourne") are the same as S1. Fix: write it in your own words, for example "Bash is a newer shell that extends the old Bourne shell." |
| 5 | Shell Basics | Other shells: ksh, tcsh, zsh | 11 | PASS | S11: "Besides bash, there are other shell programs available for Linux systems. These include: ksh, tcsh and zsh." |
| 6 | Shell Basics | A terminal is not a shell | 12 | PASS | S12: "Some people think terminal and shell are the same. But they are different from one another." |
| 7 | Shell Basics | "The terminal is the window" | 12 | FAIL | S12 says: "Terminal: It can be physical or virtual. It is a text based interface". S12 never says "window". S11 does: "a terminal emulator ... opens a window". Fix: add `<Cite n={11} />` to this sentence, or write "The terminal is the text interface where you type". |
| 8 | Shell Basics | The shell is the program that reads your commands inside the terminal | 12 | PASS | S12: "Shell: It is a program that interprets the commands entered via the terminal" |
| 9 | Shell Basics | Bash reads different startup files in different modes | 1 | PASS | S1 INVOCATION section describes login, interactive, and non-interactive start. |
| 10 | Shell Basics (bullet 1) | A login shell reads `/etc/profile`, then the first of `~/.bash_profile`, `~/.bash_login`, `~/.profile` | 1 | PASS | S1: "it first reads and executes commands from the file /etc/profile ... looks for ~/.bash_profile, ~/.bash_login, and ~/.profile, in that order ... the first one that exists and is readable" |
| 11 | Shell Basics (bullet 2) | An interactive shell that is not a login shell reads `~/.bashrc` | 1 | PASS | S1: "When an interactive shell that is not a login shell is started, bash reads and executes commands from ~/.bashrc, if that file exists." |
| 12 | Shell Basics (bullet 3) | A non-interactive shell, for example a script, reads the file named by `BASH_ENV` | 1 | PASS | S1: "When bash is started non-interactively, to run a shell script, for example, it looks for the variable BASH_ENV in the environment" |
| 13 | Shell Basics (code) | `echo "$SHELL"`, `echo "$-"` (contains i in an interactive shell), `bash --version` | 1, 7 | EXAMPLE-OK | Ran: `bash -c 'echo "$-"'` prints `hBc` (no i). `bash -ic 'echo "$-"'` prints `hiBHc` (has i). `bash --version` prints the version. |
| 14 | Shell Basics | `SHELL` holds the absolute path of the login shell of the user | 7 | PASS | S7: "SHELL  The absolute pathname of the user's login shell." |
| 15 | Shell Basics | Bash puts `i` in `$-` when the shell is interactive | 1 | PASS | S1: "Bash sets PS1 and $- includes i if the shell is interactive" |
| 16 | Shell Basics (callout) | CI job often runs a non-interactive shell, so it does not read `~/.bashrc`; print `$-` and `$PATH` | none | OPINION-OK | Marked as the tutorial's own advice. The fact is true for a script (rows 11, 12; ran: `bash -c` does not read `~/.bashrc`). One exception in S1: "If bash determines it is being run non-interactively in this fashion [by rshd or sshd], it reads and executes commands from ~/.bashrc". The word "often" covers it. Advice (not a FAIL): add "except a command that runs over ssh". |
| 17 | Basic Commands | `pwd` prints the absolute path of the current directory | 1 | PASS | S1: "pwd [-LP] Print the absolute pathname of the current working directory." |
| 18 | Basic Commands | `cd` changes the current directory | 1 | PASS | S1: "Change the current directory to dir." |
| 19 | Basic Commands | `ls` lists the entries of a directory; with no path, the current directory | 2 | PASS | S2: "List information about the FILEs (the current directory by default)." |
| 20 | Basic Commands | `ls` hides names that start with a dot; `-a` shows them | 2 | PASS | S2: "-a, --all do not ignore entries starting with ." Ran: `ls` hides `.hid`, `ls -a` shows it. |
| 21 | Basic Commands (table) | `-l` long format | 2 | PASS | S2: "-l use a long listing format" |
| 22 | Basic Commands (table) | `-a` do not ignore entries that start with a dot | 2 | PASS | S2: "do not ignore entries starting with ." |
| 23 | Basic Commands (table) | `-h` with `-l`, sizes such as 1K, 234M, 2G | 2 | PASS | S2: "-h, --human-readable with -l and -s, print sizes like 1K 234M 2G etc." Ran: `ls -lh` on a 2048-byte file shows `2.0K`. |
| 24 | Basic Commands (table) | `-t` sort by time, newest first | 2 | PASS | S2: "-t sort by time, newest first; see --time" |
| 25 | Basic Commands (table) | `-r` reverse the sort order | 2 | PASS | S2: "-r, --reverse reverse order while sorting" |
| 26 | Basic Commands (code) | `pwd`, `ls -l`, `ls -lah /var/log`, `ls -ltr # oldest first, newest last` | 2 | EXAMPLE-OK | Ran in a sample folder: `ls -lt` lists new.log, mid.log, old.log. `ls -ltr` lists old.log, mid.log, new.log. The comment is right. |
| 27 | Basic Commands | Without an argument, `cd` goes to the directory in `HOME` | 1 | PASS | S1: "if dir is not supplied, the value of the HOME shell variable is used as dir" |
| 28 | Basic Commands (callout) | Print `pwd` and `ls -la` before a failing step; `ls -ltr` puts the newest file last | none | OPINION-OK | Tutorial's own advice. The `ls -ltr` order was confirmed (row 26). |
| 29 | Navigation Basics | Absolute path starts with `/`, the root of the tree; relative path starts from the current directory | 13 | PASS | S13: "An absolute path name is one beginning with the / character, which signifies the root of the file system tree." "A relative path is one which starts with the name of a directory connected to the current directory." |
| 30 | Navigation Basics | `.` is the current directory and `..` the parent directory | 13 | PASS | S13: "The relative pathname of the current working directory is called . (the full stop)". Also: "the directory containing the current working directory (also called the parent directory)" with `cd ..`. |
| 31 | Navigation Basics | `~` expands to the value of `HOME` | 1 | PASS | S1: "If this login name is the null string, the tilde is replaced with the value of the shell parameter HOME." |
| 32 | Navigation Basics | `cd -` goes to the directory in `OLDPWD`, the previous working directory | 1 | PASS | S1: "An argument of - is converted to $OLDPWD before attempting the directory change." "OLDPWD The previous working directory as set by the cd command." |
| 33 | Navigation Basics | `cd` with no argument goes to your home directory | 14 | PASS | S14: "If you do not specify a directory after cd, it will by default take you to your home directory." |
| 34 | Navigation Basics (code) | `cd /usr/local/bin`, `cd ..` (now in /usr/local), `cd ~`, `cd -` (back in /usr/local), `pwd -P` | 1 | EXAMPLE-OK | Ran: after `cd ..` the shell is in `/usr/local`. `cd ~` goes to home. `cd -` prints and returns to `/usr/local`. In a sample folder with a symlink, `pwd` prints the link path and `pwd -P` prints the real path. |
| 35 | Navigation Basics | `cd` follows symbolic links logically (`-L`) by default; `-P` uses the physical directory structure | 1 | PASS | S1: "If neither -L nor -P is supplied, cd behaves as if -L had been supplied." "The -P option causes cd to use the physical directory structure" |
| 36 | Navigation Basics | `pwd -P` prints a path with no symbolic links | 1 | PASS | S1: "The pathname printed contains no symbolic links if the -P option is supplied" |
| 37 | Navigation Basics (callout) | Use absolute paths in test scripts, or `cd "$(dirname "$0")"` at the top; a relative path works only from the start directory | none | OPINION-OK | Marked as the tutorial's own advice. Ran in the scratchpad with `proj/t.sh` (`cd "$(dirname "$0")"; pwd`): run as `../proj/t.sh` from another folder prints the script folder. `bash ../proj/t.sh` prints the script folder. By a name in `PATH` prints the script folder. When the script is sourced (`source ../proj/t.sh`), `$0` is the caller shell and the command stays in the old folder. Advice (not a FAIL): add "when you run the script, not when you `source` it", and use `|| exit` after `cd`. |
| 38 | Command Help | `man name` shows the manual page of a program | 4 | PASS | S4: "Each page argument given to man is normally the name of a program, utility or function. The manual page ... is then found and displayed." |
| 39 | Command Help | `help name` shows help for a bash builtin such as `cd` | 1 | PASS | S1: "help [-dms] [pattern] Display helpful information about builtin commands." Ran: `help cd` prints the help of `cd`. |
| 40 | Command Help | `name --help` prints a short usage text; `ls` and `pwd` accept it | 2, 3 | PASS | S2: "--help display this help and exit". S3: "--help display this help and exit". Ran: `/usr/bin/pwd --help` and `bash -c 'pwd --help'` (builtin) both print usage. Note: S3 says "Your shell may have its own version of pwd". The builtin prints its own text with status 2. |
| 41 | Command Help | Many other commands accept `--help`, but the rule is not fixed | 16 | PASS | S16: "Almost all Linux commands provide a --help option ... However, it's not a hard and fast rule." The page is weaker than the source. Ran: python3, git, curl, tar return 0; ssh and ip print usage and return 255. S16 is a blog, so this is the weakest source of the page. A stronger source would be the GNU coding standards (`--help`), but the claim is hedged and true. |
| 42 | Command Help | `tldr name` shows short examples; tldr-pages is a community collection simpler than a man page | 17 | PASS | S17: "a collection of community-maintained help pages for command-line tools, that aims to be a simpler, more approachable complement to traditional man pages" and "typing tldr tar" |
| 43 | Command Help | Manual sections: 1 programs, 5 file formats, 7 conventions, 8 administration commands | 4 | PASS | S4 table: "1 Executable programs or shell commands", "5 File formats and conventions", "7 Miscellaneous (including macro packages and conventions)", "8 System administration commands" |
| 44 | Command Help | `man -k word` searches the short descriptions; `man -f name` prints the short description of a page | 4 | PASS | S4: "-k, --apropos ... Search the short manual page descriptions for keywords". "-f, --whatis ... Display a short description from the manual page". Ran: `man -f ls` and `man -k printf` print one-line descriptions. |
| 45 | Command Help | `help -d` short description; `help -s` usage line only | 1, 15 | PASS | S1: "-d Display a short description of each pattern", "-s Display only a short usage synopsis for each pattern". S15: "use the -d flag" for a short description, "-s flag" for syntax. Ran both for `cd`. |
| 46 | Command Help (code) | `man ls`, `man 5 passwd` (file format), `man -k printf`, `help -s cd`, `ls --help`, `type -t cd # builtin` | 1, 4 | EXAMPLE-OK | Ran: `man 5 passwd` opens PASSWD(5) "File Formats". `type -t cd` prints `builtin`. The other commands run (rows 39, 40, 44, 45). |
| 47 | Command Help (callout) | Read help on the machine that runs the tests; tool options differ between versions | none | OPINION-OK | Tutorial's own advice. |
| 48 | Command Path | For a name without a slash bash tries a function, then a builtin, then the directories of `PATH` | 1 | PASS | S1: "If there exists a shell function by that name, that function is invoked ... searches for it in the list of shell builtins ... bash searches each element of the PATH" |
| 49 | Command Path | `PATH` is a colon-separated list; searched first to last | 7 | PASS | S7: "The prefixes are separated by colons (:). The list of prefixes is searched from beginning to end" |
| 50 | Command Path | Bash remembers the full path of a command; `hash -r` clears it | 1 | PASS | S1: "Bash uses a hash table to remember the full pathnames of executable files". "The -r option causes the shell to forget all remembered locations." |
| 51 | Command Path | If bash finds no command it prints an error and returns 127 | 1 | PASS | S1: "the shell prints an error message and returns an exit status of 127" Ran: status=127, "command not found". |
| 52 | Command Path (code) | `echo "$PATH" \| tr ':' '\n'`, `type -a ls` (all places), `command -v python3` (the one that would run), `whereis ls`, `export PATH=...`, `hash -r` | 1, 5 | EXAMPLE-OK | S1: "If the -a option is used, type prints all of the places that contain a command named name". "-v option displays a single word indicating the command or filename used to invoke command". Ran: `type -a ls` printed 2 paths, `command -v python3` printed `/usr/bin/python3`, `whereis ls` printed binary and man file. |
| 53 | Command Path | `whereis` locates the binary, source, and manual files of a command | 5 | PASS | S5: "whereis locates the binary, source and manual files for the specified command names." The fact is right. The wording is a copy (row 54). |
| 54 | Command Path | Wording of row 53 | 5 | FAIL | Overlap script: "whereis locates the binary source and manual files" (8 words) is the same as S5. Fix: write it in your own words, for example "`whereis` shows where a command keeps its program, its source, and its manual page." |
| 55 | Command Path | To keep a `PATH` change, put the `export` line in `~/.bashrc` | 18 | PASS | S18: "To add a directory to $PATH permanently, we'll need to edit the .bashrc file of the user you want to change." S21 agrees for interactive terminals. See the note on persistence after the table. |
| 56 | Command Path (warning) | A zero-length `PATH` entry means the current directory; made by two colons, or a colon at the start or end | 1 | PASS | S1: "A zero-length (null) directory name in the value of PATH indicates the current directory. ... two adjacent colons, or as an initial or trailing colon." |
| 57 | Command Path (warning) | POSIX says an application must use an explicit `.`; the legacy form is deprecated | 7 | PASS | S7: "use of this feature is deprecated, and POSIX notes that a conforming application shall use an explicit pathname (e.g., .)" |
| 58 | Command Path (callout) | "command not found" with status 127 usually means `PATH` lacks the tool's directory; first match wins, so an old copy can hide a new one | none | OPINION-OK | Tutorial's own advice. The facts under it are in rows 49 and 51. |
| 59 | Directory Hierarchy | All files sit under one root `/`; the absolute path of each file goes through the root | 19 | PASS | S19: "Since all other directories or files are descended from root, the absolute path of any file is traversed through root." |
| 60 | Directory Hierarchy | The FHS defines what the main directories hold | 10 | PASS | FHS 3.0 chapter 3 (WebFetch output): each root directory has its own section with a Purpose part (3.4 /bin, 3.6 /dev, 3.7 /etc, 3.8 /home, 3.13 /opt, 3.14 /root, 3.18 /tmp). S19 also says "This FHS defines the directory structure and the content/purpose of the directories". The chapter covers only the root-level directories. |
| 61 | Directory Hierarchy | The root filesystem must be enough to boot, restore, recover, and repair the system | 10 | PASS | FHS 3.1 (WebFetch output, verbatim): "The contents of the root filesystem must be adequate to boot, restore, recover, and/or repair the system." Cannot run the overlap script on S10. |
| 62 | Directory Hierarchy (table) | `/etc` configuration files for this machine | 6 | PASS | S6: "/etc Contains configuration files which are local to the machine." |
| 63 | Directory Hierarchy (table) | `/home` home directories of users | 6 | PASS | S6: "/home On machines with home directories for users, these are usually beneath this directory". The source says "usually"; the page is a fair summary. |
| 64 | Directory Hierarchy (table) | `/root` home directory of the root user | 6 | PASS | S6: "/root This directory is usually the home directory for the root user (optional)." |
| 65 | Directory Hierarchy (table) | `/usr/bin` main directory for executable programs | 6 | PASS | S6: "/usr/bin This is the primary directory for executable programs." |
| 66 | Directory Hierarchy (table) | `/usr/local` programs local to the site | 6 | PASS | S6: "/usr/local This is where programs which are local to the site typically go." |
| 67 | Directory Hierarchy (table) | `/var` files that change in size, such as spool and log files | 6 | PASS | S6: "/var This directory contains files which may change in size, such as spool and log files." The fact is right. The wording is a copy (row 68). |
| 68 | Directory Hierarchy (table) | Wording of row 67 | 6 | FAIL | Overlap script: "change in size such as spool and log files" (8 words) is the same as S6. Fix: write it in your own words, for example "Data that grows while the system runs, such as logs and queues." |
| 69 | Directory Hierarchy (table) | `/tmp` temporary files; the system may delete them without notice | 6 | PASS | S6: "/tmp This directory contains temporary files which may be deleted with no notice, such as by a regular job or at system boot up." |
| 70 | Directory Hierarchy (table) | `/dev` special files that refer to devices | 6 | PASS | S6: "/dev Special or device files, which refer to physical devices." |
| 71 | Directory Hierarchy (table) | `/proc` information about running processes and the kernel | 6 | PASS | S6: "/proc This is a mount point for the proc filesystem, which provides information about running processes and the kernel." |
| 72 | Directory Hierarchy (table) | `/opt` add-on application packages | 6 | PASS | S6: "/opt This directory should contain add-on packages that contain static files." |
| 73 | Directory Hierarchy (code) | `ls /`, `ls -ld /tmp /var /etc`, `man 7 hier` | 6 | EXAMPLE-OK | Ran: the commands list the folders. `man 7 hier` is the page S6. |
| 74 | Directory Hierarchy (callout) | Do not keep test evidence in `/tmp`; look in `/var/log` for logs, in `/etc` for configuration | 6 | OPINION-OK | Tutorial's own advice. Facts: row 69 (`/tmp`), row 62 (`/etc`), and S6: "/var/log Miscellaneous log files." |
| 75 | Environment Variables | The environment is a list of strings `name=value`; a new program gets it at start | 7 | PASS | S7: "By convention, the strings in environ have the form "name=value"." "made available to the process by the execve(2) call when a new program is started" |
| 76 | Environment Variables | A child process gets a copy of the environment of its parent | 7 | PASS | S7: "When a child process is created via fork(2), it inherits a copy of its parent's environment." |
| 77 | Environment Variables | The name is case-sensitive | 7 | PASS | S7: "The name is case-sensitive and may not contain the character "="." |
| 78 | Environment Variables | A normal assignment makes a shell variable that a child does not see; `export` marks the name for the environment of later commands | 1, 21 | PASS | S1: "The supplied names are marked for automatic export to the environment of subsequently executed commands." S21: "A shell variable is not passed to child processes unless you export it." |
| 79 | Environment Variables | `unset` removes a variable | 1 | PASS | S1: "unset ... For each name, remove the corresponding variable or function." |
| 80 | Environment Variables (code) | `printenv HOME`; assignment without export prints `[]`; after `export` prints `[http://localhost:8080]`; `NAME=value command`; `unset`; `env -i HOME=/tmp printenv` | 1, 7, 8, 9 | EXAMPLE-OK | Ran: output `[]`, then `[http://localhost:8080]`, then `http://staging.example.test`, then the old value `http://localhost:8080` after that command, then `[]` after `unset`. `env -i HOME=/tmp printenv` prints only `HOME=/tmp`. The comments in the page are right. |
| 81 | Environment Variables | `printenv` prints the named variables, or all of them | 9 | PASS | S9: "Print the values of the specified environment VARIABLE(s). If no VARIABLE is specified, print name and value pairs for them all." |
| 82 | Environment Variables | `NAME=value command` sets a variable only for that command | 7 | PASS | S7: "NAME=value command to create an environment variable definition only in the scope of the process that executes command." |
| 83 | Environment Variables | With `env -i` a command starts with an empty environment | 8 | PASS | S8: "-i, --ignore-environment start with an empty environment" |
| 84 | Environment Variables | To keep a variable for each login, add it to `~/.bash_profile` | 20 | PASS | S20: "~/.bash_profile ... Shell executes it every time the user logs in. Add your custom environmental variable at the end of this file." Matches S1 for login shells (row 10). See the note on persistence after the table. |
| 85 | Environment Variables | Common names: `HOME`, `PATH`, `PWD`, `SHELL`, `USER`, `LANG`, `TMPDIR` | 7 | PASS | S7 lists HOME, LANG, PATH, PWD, SHELL, USER, and "TMPDIR influences the path prefix of names created by tempnam(3)". |
| 86 | Environment Variables (callout) | Env can differ between laptop and runner; use `env -i`; do not run `printenv` in a shared CI log (secrets) | none | OPINION-OK | Tutorial's own advice. |
| 87 | Intro lede | CI logs, test runners, and server checks start at a shell prompt; many failures come from a wrong directory, command, or variable | none | OPINION-OK | Framing for the reader, not a claim about a command. |

## Notes (advice, not FAIL)

1. Persistence (rows 55 and 84). Both sentences are right for their sources, but they name two files: `PATH` in `~/.bashrc`, other variables in `~/.bash_profile`. A reader may not see why. S21 explains it: "Bash login shells first read /etc/profile, then read the first available file from ~/.bash_profile ... Bash does not do that [source ~/.bashrc] automatically." A desktop terminal often starts a non-login shell. In that case a variable in `~/.bash_profile` does not show in a new terminal window until the next login. A short sentence that joins the two rules, with `<Cite n={21} />`, would remove the doubt.
2. The `cd "$(dirname "$0")"` idiom (row 37) fails when the script is sourced (tested).
3. The CI callout (row 16) leaves out the sshd case that S1 describes.

## Cite and source checks

- Each of the 67 cites points to a source that supports its sentence, except row 7 (cite 12). The cite on the paragraph about the Bourne shell (rows 3, 5) is placed after each sentence and is right.
- All 21 `page.sources` entries are cited (counts above). Source titles and publishers match the fetched pages. The S1 to S9 titles are the man page NAME lines.
- No `##` heading other than the topic titles.

## Result

87 rows: PASS 68, FAIL 4, EXAMPLE-OK 7 (code blocks that the checker ran), OPINION-OK 8 (advice only).

FAILs (all minor):

- Row 4: copied wording from S1 (Bourne shell sentence).
- Row 7: "The terminal is the window" is not in cite 12.
- Row 54: copied wording from S5 (`whereis` sentence).
- Row 68: copied wording from S6 (`/var` table cell).

Open FAILs: 4

## Round 2 (2026-10-16)

Checked commit b415ef9 (page and notes only) against 32c2e95 with `git diff 32c2e95 b415ef9 -- content/linux/shell-basics.mdx docs/superpowers/research/linux-shell-basics.md`. Sources: the same fetched text as round 1. For the S5 title the checker also fetched the live page `<title>`.

What changed: 6 sentences or titles in the MDX (rows R2-1 to R2-6) and 1 line in the notes (the S5 entry). One new cite was added (`<Cite n={11} />`), so the page has 68 cites. All 21 sources are cited and every cite number 1 to 21 has a source. The page has exactly the 7 topic `##` headings (Shell Basics, Basic Commands, Navigation Basics, Command Help, Command Path, Directory Hierarchy, Environment Variables).

Overlap: `linux_overlap.py content/linux/shell-basics.mdx` prints nothing and exits 0 against the roadmap raw dir. It also prints nothing and exits 0 against the checker's official-pages dir (man pages and the web pages of round 1).

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| R2-1 | Shell Basics | "Bash is a newer shell that builds on the old Bourne shell." (was row 4) | 1, 11 | PASS | S1: "It is a reimplementation and extension of the Bourne shell". S11: "an enhanced version of the original Unix shell program, sh". True, and no copied run. Row 4 is fixed. |
| R2-2 | Shell Basics | "The terminal is the program that opens a window for you." (was row 7) | 11 | PASS | S11: "It's a program called a terminal emulator. This is a program that opens a window and lets you interact with the shell." Row 7 is fixed. |
| R2-3 | Shell Basics | "The shell is the program inside it that reads your commands." | 12 | PASS | S12: "Shell: It is a program that interprets the commands entered via the terminal" |
| R2-4 | Shell Basics (bullet 2) | "A shell that you open at a prompt, but not as a login, reads `~/.bashrc`." | 1 | FAIL | New error. S1: "When an interactive shell that is not a login shell is started, bash reads ... ~/.bashrc". The new wording drops "interactive". A shell that you start at a prompt can be non-interactive: `bash script.sh` or `bash -c 'cmd'` do not read `~/.bashrc` (S1: BASH_ENV is read instead, and the page's own bullet 3 says so). So the bullet can be read as wrong, and it no longer links to the `$-` and `i` text below. Fix: use the standard term, "An interactive shell that is not a login shell reads `~/.bashrc`." (round 1 judged this term as not a copy), or say "A shell that reads its input from a terminal and is not a login shell". |
| R2-5 | Command Path | "`whereis` shows where the program, the source, and the manual page of a command are." (was row 54) | 5 | PASS | S5: "whereis locates the binary, source and manual files for the specified command names." True, and no copied run. Row 54 is fixed. |
| R2-6 | Directory Hierarchy (table) | `/var`: "Data that grows and shrinks while the system runs, for example logs and spool files." (was row 68) | 6 | PASS | S6: "/var This directory contains files which may change in size, such as spool and log files." "Grows and shrinks" is "change in size". True, and no copied run. Row 68 is fixed. |
| R2-7 | Sources (S5 title) | Title of source 5 is now "whereis(1) - find files of a command"; the notes say this is the "page title on the site" | 5 | FAIL | The live page `<title>` is "whereis(1) - Linux manual page", and the NAME line is "whereis - locate the binary, source, and manual page files for a command". "find files of a command" is on neither, so the title is invented and the note is false. A source title may copy its source (round 1 did not flag the old title as a copy). Fix: restore the NAME title ("whereis(1) - locate the binary, source, and manual page files for a command"), or use the site title "whereis(1) - Linux manual page", and correct the S5 line of the notes. |

Row 4, row 7, row 54, and row 68 of round 1 are fixed. Two new FAILs (R2-4 and R2-7) came from the rewording.

Open FAILs: 2
