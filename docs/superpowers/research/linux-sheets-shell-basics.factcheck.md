# Independent fact-check: Shell Basics (`lib/linux/sheets/shell-basics.ts`)

Date: 2026-11-04. 2 rounds. In each round a checker that did not write the sheet (Claude Code, model claude-sonnet-5-5, a new session with read-only tools and no web access) got only the cards and the text of the pages that they cite. Round 1 checked the English gloss, the Bangla gloss, and the red "!" of every row. Round 2 checked the rows that the writer changed or answered after round 1, and the "!" of every row against its rule. Below are the checkers' reports as they wrote them, with each heading one level down.

## Round 1: Shell Basics

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows checked: 50.

### FAILs

- 1.2 `Tab`: EN. The bash page does not say that a second Tab press lists the matches. It only says what `show-all-if-ambiguous` does when set to On, and what the separate `possible-completions` function (M-?) does. Quote: "words which have more than one possible completion cause the matches to be listed immediately instead of ringing the bell" (bash). Fix: EN "complete a name" / BN "নাম সম্পূর্ণ করে"
- 4.6 `/WORD`: EN. The cited man and bash pages do not document the `/` search key or `n` for the next match in the pager. Only quitting with `q` is mentioned. Quote: "(press h for help or q to quit)" (man). Fix: EN "inside man: q quits the page" / BN "man-এর ভেতরে q চাপলে বের হয়"

### Notes

- 1.1: The bash page says only "the full pathname to the shell". The login-shell meaning is clearer in `environ` ("The absolute pathname of the user's login shell"), and that page is not cited on this card. Consider citing `environ`.
- 1.2: If the site keeps "press twice to list", cite a page that states it, or set the readline option `show-all-if-ambiguous`.
- 4.3: `CMD --help` is not a rule of the cited pages. It is documented per command (ls, cat, date, pwd, man), so "short usage summary" is loose.
- 6.6: `hier` calls `/usr` "shareable, read-only data" and `/usr/bin` the main place for programs. "Installed programs and libraries" is a fair summary.
- 7.7: `~/.bashrc` is read only by interactive non-login shells. Login shells need a profile file that sources it.

### All rows

| Row | Command | EN | Quote (source key) | BN | Note |
|---|---|---|---|---|---|
| 1.1 | `echo $SHELL` | PASS | "assigns to it the full pathname of the current user's login shell" (bash) | PASS | see Notes |
| 1.2 | `Tab` | FAIL | "listed immediately instead of ringing the bell" (bash) | PASS | "press twice" unsupported |
| 1.3 | `↑  ↓` | PASS | "Fetch the previous command from the history list" (bash) | PASS | |
| 1.4 | `Ctrl+R` | PASS | "type C-r to search backward in the history" (bash) | PASS | |
| 1.5 | `Ctrl+C` | PASS | "^C sends SIGINT to all processes in that process group" (bash) | PASS | |
| 1.6 | `Ctrl+D` | PASS | "end-of-file (usually C-d)… no characters on the line… end of input" (bash) | PASS | |
| 1.7 | `!!` | PASS | "Refer to the previous entry." (bash) | PASS | |
| 2.1 | `pwd` | PASS | "pwd - print name of current/working directory" (pwd) | PASS | |
| 2.2 | `ls` | PASS | "List information about the FILEs (the current directory by default)" (ls) | PASS | |
| 2.3 | `cd DIR` | PASS | "Change the current directory to dir." (bash) | PASS | |
| 2.4 | `echo TEXT` | PASS | "echo [-neE] [arg ...]" (bash) | PASS | |
| 2.5 | `cat FILE` | PASS | "Concatenate FILE(s) to standard output." (cat) | PASS | |
| 2.6 | `whoami` | PASS | "print effective user name" (whoami) | PASS | |
| 2.7 | `date` | PASS | "print or set the system date and time" (date) | PASS | |
| 2.8 | `history` | PASS | "display the command history list with numbers" (bash) | PASS | |
| 3.1 | `cd` | PASS | "if dir is not supplied, the value of the HOME shell variable is used" (bash) | PASS | |
| 3.2 | `cd ..` | PASS | "If .. appears in dir, cd processes it by removing the immediately previous pathname component" (bash) | PASS | |
| 3.3 | `cd -` | PASS | "An argument of - is converted to $OLDPWD" (bash) | PASS | |
| 3.4 | `ls -lah` | PASS | "-a, --all"; "-l use a long listing format"; "-h… print sizes like 1K 234M 2G" (ls) | PASS | |
| 3.5 | `ls -ltr` | PASS | "-t sort by time, newest first"; "-r, --reverse reverse order while sorting" (ls) | PASS | |
| 3.6 | `pwd -P` | PASS | "-P, --physical resolve all symlinks" (pwd) | PASS | |
| 3.7 | `. .. ~ /` | PASS | "the current directory, i.e., “.”" (bash); "This is the root directory." (hier) | PASS | |
| 4.1 | `man CMD` | PASS | "man is the system's manual pager." (man) | PASS | |
| 4.2 | `man -k WORD` | PASS | "-k, --apropos… manual page descriptions for keywords" (man) | PASS | |
| 4.3 | `CMD --help` | PASS | "--help display this help and exit" (ls) | PASS | see Notes |
| 4.4 | `help cd` | PASS | "Display helpful information about builtin commands." (bash) | PASS | |
| 4.5 | `whatis CMD` | PASS | "whatis - display one-line manual page descriptions" (whatis) | PASS | |
| 4.6 | `/WORD` | FAIL | "(press h for help or q to quit)" (man) | PASS | search and `n` unsupported |
| 5.1 | `which CMD` | PASS | "returns the pathnames of the files… which would be executed" (which) | PASS | |
| 5.2 | `type CMD` | PASS | "alias, keyword, function, builtin, or file" (bash) | PASS | |
| 5.3 | `command -v CMD` | PASS | "exit status is zero if command was found, and non-zero if not" (bash) | PASS | |
| 5.4 | `whereis CMD` | PASS | "locate the binary, source, and manual page files for a command" (whereis) | PASS | |
| 5.5 | `echo $PATH` | PASS | "PATH The search path for commands." (bash) | PASS | |
| 5.6 | `export PATH="$PATH:DIR"` | PASS | "marked for automatic export to the environment of subsequently executed commands" (bash) | PASS | |
| 5.7 | `hash -r` | PASS | "The -r option causes the shell to forget all remembered locations." (bash) | PASS | |
| 6.1 | `/` | PASS | "This is the root directory. This is where the whole tree starts." (hier) | PASS | |
| 6.2 | `/home` | PASS | "these are usually beneath this directory" (hier) | PASS | |
| 6.3 | `/etc` | PASS | "Contains configuration files which are local to the machine." (hier) | PASS | |
| 6.4 | `/var` | PASS | "files which may change in size, such as spool and log files"; "/var/cache Data cached for programs." (hier) | PASS | |
| 6.5 | `/tmp` | PASS | "This directory contains temporary files" (hier) | PASS | |
| 6.6 | `/usr` | PASS | "/usr/bin This is the primary directory for executable programs." (hier) | PASS | see Notes |
| 6.7 | `/dev /proc /sys` | PASS | "/dev Special or device files"; "/proc… information about running processes and the kernel"; "/sys… information about the kernel" (hier) | PASS | |
| 6.8 | `man hier` | PASS | "hier(7) - description of the filesystem hierarchy" (hier) | PASS | |
| 7.1 | `printenv` | PASS | "If no VARIABLE is specified, print name and value pairs for them all." (printenv) | PASS | |
| 7.2 | `echo $HOME` | PASS | "HOME A user's login directory." (environ) | PASS | |
| 7.3 | `export NAME=VALUE` | PASS | "marked for automatic export to the environment of subsequently executed commands" (bash) | PASS | |
| 7.4 | `NAME=VALUE CMD` | PASS | "These assignment statements affect only the environment seen by that command." (bash) | PASS | |
| 7.5 | `unset NAME` | PASS | "remove the corresponding variable or function" (bash) | PASS | |
| 7.6 | `env -i CMD` | PASS | "-i, --ignore-environment start with an empty environment" (env) | PASS | |
| 7.7 | `~/.bashrc` | PASS | "bash reads and executes commands from ~/.bashrc" (bash) | PASS | see Notes |

Open FAILs after round 1: 2
Not checked: the "!" marks follow the rule only. I found no row that destroys data, so all "!: no" marks stand. I judged the Bangla by reading, not against any reference.

I have the evidence for both changed rows and am writing the report now.

## Round 2: Shell Basics

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 2.

### FAILs

none

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 1.2 | `Tab` | PASS: complete a command or file name | "complete (TAB) Attempt to perform completion on the text before point." and "or command (including aliases, functions, and builtins) in turn. If none of these produces a match, it falls back to filename completion." (bash) | PASS | PASS |
| 4.6 | `/WORD` | PASS: inside man: search; n next, q quit | "/pattern Search forward in the file for the N-th line containing the pattern." / "n Repeat previous search" / "q or Q or :q or :Q or ZZ" (less); "By default, man uses less" (man) | PASS | PASS |

### The "!" of every row

All rows follow the rule.

Open FAILs after round 2: 0

Open FAILs: 0
