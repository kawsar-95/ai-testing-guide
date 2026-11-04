# Independent fact-check: Text Processing (`lib/linux/sheets/text-processing.ts`)

Date: 2026-11-04. 2 rounds. In each round a checker that did not write the sheet (Claude Code, model claude-sonnet-5-5, a new session with read-only tools and no web access) got only the cards and the text of the pages that they cite. Round 1 checked the English gloss, the Bangla gloss, and the red "!" of every row. Round 2 checked the rows that the writer changed or answered after round 1, and the "!" of every row against its rule. The stage was checked in two parts, A and B, by two checkers in rounds where both parts had rows to check. Below are the checkers' reports as they wrote them, with each heading one level down.

Status: all rows are checked against the pages, and the report is below.

## Round 1: Text Processing (text-processing), part A

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows checked: 62.

### FAILs

- 2.2 `CMD 2> FILE`: !. It truncates FILE, so it can overwrite data, but the row has "!: no". Quote: "truncated to zero size" (bash). Fix: EN "send only errors to a file" with !: yes / BN "শুধু error file-এ পাঠায়" with !: yes
- 2.3 `CMD > FILE 2>&1`: !. It overwrites FILE, but the row has "!: no". Quote: "ls > dirlist 2>&1" and "truncated to zero size" (bash). Fix: EN "send output and errors to one file" with !: yes / BN "output ও error একই file-এ পাঠায়" with !: yes
- 3.5 `CMD &> FILE`: !. It overwrites FILE, but the row has "!: no". Quote: "&>word" (bash). Fix: EN "stdout and stderr to a file, replacing it" with !: yes / BN "stdout ও stderr দুটোই file-এ পাঠায়, আগের লেখা মুছে যায় (bash)" with !: yes
- 4.2 `ls | wc -l`: EN. Neither cited page (bash, xargs) describes `wc`, so nothing supports "count the entries". Quote: no match for `wc` (bash, xargs). Fix: EN "count the entries" after citing the wc page / BN "entry গোনে"
- 4.4 `CMD | less`: EN. Neither cited page describes `less`, so nothing supports "scroll long output". Quote: no match for `less` as a command (bash, xargs). Fix: EN "scroll long output" after citing the less page / BN "লম্বা output scroll করে দেখায়"
- 5.1 `CMD | tee FILE`: !. It overwrites FILE, but the row has "!: no". Quote: "append to the given FILEs, do not overwrite" (tee), which shows that the default overwrites. Fix: EN "show the output and save it" with !: yes / BN "output দেখায় ও save করে" with !: yes
- 5.4 `echo TEXT | sudo tee FILE`: !. It overwrites FILE, which is a root-owned file, but the row has "!: no". Quote: "append to the given FILEs, do not overwrite" (tee). Fix: EN "overwrite a root-owned file" with !: yes / BN "root-এর file-এ লেখে, আগের লেখা মুছে যায়" with !: yes

### Notes

- 5.4: the sudo page does not mention `tee` or redirect permissions. The EN gloss follows only from sudo running a command as root, and from tee writing files.
- 4.3 relies on `grep`, which is cited on card 6 and not on card 4. It also relies on the `history` builtin, which I did not quote. Consider citing both on card 4.
- 9.1 "alphabetically" is loose. The sort page does not say this. Locale collation order is closer to the truth.
- 9.8 `sort -R` shuffles, but identical keys stay grouped ("shuffle, but group identical keys"). The gloss is acceptable but not exact.
- 3.7 `set -o noclobber`: the "!: no" mark is correct, because the option protects files.
- Card 2 and card 3 are inconsistent. 3.1 is marked "!: yes", but 2.2, 2.3 and 3.5 also truncate a file and are marked "!: no". Fix them together.

### All rows

| Row | Command | EN | Quote (source key) | BN | Note |
|---|---|---|---|---|---|
| 1.1 | `sed 's/OLD/NEW/g' FILE` | PASS | "s/regexp/replacement/[flags]" (sed) | PASS | |
| 1.2 | `sed -n '2,4p' FILE` | PASS | "An address range is specified with two addresses separated by a comma" (sed) | PASS | |
| 1.3 | `diff OLD NEW` | PASS | "Compare FILES line by line." (diff) | PASS | |
| 1.4 | `xargs CMD` | PASS | "executes the command (default is echo) one or more times with any initial-arguments followed by items read from standard input" (xargs) | PASS | |
| 1.5 | `column -t` | PASS | "a table. This mode is enabled with the -t/--table option." (column) | PASS | |
| 2.1 | `0  1  2` | PASS | "standard error output (file descriptor 2)" (bash) | PASS | |
| 2.2 | `CMD 2> FILE` | PASS (! FAIL) | "truncated to zero size" (bash) | PASS | ! should be yes |
| 2.3 | `CMD > FILE 2>&1` | PASS (! FAIL) | "ls > dirlist 2>&1" (bash) | PASS | ! should be yes |
| 2.4 | `CMD 2>/dev/null` | PASS | "/dev/null" with 2>&1 usage, ">/dev/null 2>&1" (bash) | PASS | |
| 2.5 | `read VAR` | PASS | "Read one line from the standard input" (bash) | PASS | |
| 2.6 | `echo TEXT >&2` | PASS | "[n]>&word" (bash) | PASS | |
| 3.1 | `CMD > FILE` | PASS | "truncated to zero size" (bash) | PASS | ! yes is correct |
| 3.2 | `CMD >> FILE` | PASS | "The format for appending standard output and standard error is" (bash) | PASS | |
| 3.3 | `CMD < FILE` | PASS | "standard input (file descriptor 0) if n is not specified" (bash) | PASS | |
| 3.4 | `CMD 2>&1` | PASS | "ls 2>&1 > dirlist" (bash) | PASS | |
| 3.5 | `CMD &> FILE` | PASS (! FAIL) | "&>word" (bash) | PASS | ! should be yes |
| 3.6 | `CMD <<EOF` | PASS | "read input from the current source until it reads a line containing only delimiter" (bash) | PASS | |
| 3.7 | `set -o noclobber` | PASS | "the redirection fails if the" (bash) | PASS | |
| 4.1 | `CMD / CMD` | PASS | "command1's standard error, in" … "standard input through the pipe" (bash) | PASS | pipe shown as / in this table |
| 4.2 | `ls / wc -l` | FAIL | no `wc` in bash or xargs | PASS | not supported by cited pages |
| 4.3 | `history / grep WORD` | PASS | "standard input through the pipe" (bash) | PASS | grep cited elsewhere |
| 4.4 | `CMD / less` | FAIL | no `less` command in bash or xargs | PASS | not supported by cited pages |
| 4.5 | `CMD /& CMD` | PASS | "shorthand for 2>&1 \|" (bash) | PASS | |
| 4.6 | `CMD / xargs CMD` | PASS | "reads items from the standard input … newlines" (xargs) | PASS | |
| 4.7 | `set -o pipefail` | PASS | "unless the pipefail option is enabled" (bash) | PASS | |
| 5.1 | `CMD / tee FILE` | PASS (! FAIL) | "append to the given FILEs, do not overwrite" (tee) | PASS | ! should be yes |
| 5.2 | `CMD / tee -a FILE` | PASS | "-a, --append" (tee) | PASS | |
| 5.3 | `CMD / tee FILE / CMD` | PASS | "read from standard input and write to standard output and files" (tee) | PASS | |
| 5.4 | `echo TEXT / sudo tee FILE` | PASS (! FAIL) | "append to the given FILEs, do not overwrite" (tee) | PASS | ! should be yes |
| 6.1 | `grep PATTERN FILE` | PASS | "print lines that match patterns" (grep) | PASS | |
| 6.2 | `grep -i PATTERN FILE` | PASS | "Ignore case distinctions in patterns and input data" (grep) | PASS | |
| 6.3 | `grep -v PATTERN FILE` | PASS | "Invert the sense of matching, to select non-matching lines." (grep) | PASS | |
| 6.4 | `grep -n PATTERN FILE` | PASS | "Prefix each line of output with the 1-based line number" (grep) | PASS | |
| 6.5 | `grep -r PATTERN DIR` | PASS | "Read all files under each directory, recursively" (grep) | PASS | |
| 6.6 | `grep -c PATTERN FILE` | PASS | "print a count of matching lines for each input file" (grep) | PASS | |
| 6.7 | `grep -l PATTERN DIR/*` | PASS | "print the name of each input file from which output would normally have been" (grep) | PASS | |
| 6.8 | `grep -E "ERROR/WARN" FILE` | PASS | "Interpret PATTERNS as extended regular expressions" (grep) | PASS | `\|` shown as / here |
| 7.1 | `awk '{print $1}' FILE` | PASS | "$1, is 'This'" (gawk) | PASS | |
| 7.2 | `awk -F: '{print $1}' FILE` | PASS | "-F fs … --field-separator fs" (gawk) | PASS | |
| 7.3 | `awk 'NR==5' FILE` | PASS | "NR, records the total number of input records" (gawk) | PASS | |
| 7.4 | `awk '/PATTERN/' FILE` | PASS | "awk '/li/ { print $0 }' mail-list" (gawk) | PASS | |
| 7.5 | `awk '$3 > 100' FILE` | PASS | "$6 == "Nov" { sum += $5 }" (gawk) | PASS | pattern on a field, same idea |
| 7.6 | `awk '{print NF}' FILE` | PASS | "NF is a predefined variable whose value is the number of fields" (gawk) | PASS | |
| 7.7 | `awk '{s+=$1} END{print s}' FILE` | PASS | "sum += $5 … END rule executes and prints the value of sum" (gawk) | PASS | |
| 8.1 | `cut -d, -f1 FILE` | PASS | "use DELIM instead of TAB for field delimiter" (cut) | PASS | |
| 8.2 | `cut -d: -f1,3 FILE` | PASS | "select only these fields" (cut) | PASS | |
| 8.3 | `cut -d' ' -f2- FILE` | PASS | "select only these fields" (cut) | PASS | |
| 8.4 | `cut -c1-5 FILE` | PASS | "select only these character positions" (cut) | PASS | |
| 9.1 | `sort FILE` | PASS | "sort lines of text files" (sort) | PASS | |
| 9.2 | `sort -n FILE` | PASS | "compare according to string numerical value" (sort) | PASS | |
| 9.3 | `sort -rn FILE` | PASS | "reverse the result of comparisons" (sort) | PASS | |
| 9.4 | `sort -u FILE` | PASS | "output only the first of lines with equal keys" (sort) | PASS | |
| 9.5 | `sort -k2 FILE` | PASS | "sort via a key; KEYDEF gives location and type" (sort) | PASS | |
| 9.6 | `sort -t, -k2n FILE` | PASS | "use SEP instead of non-blank to blank transition" (sort) | PASS | |
| 9.7 | `sort -h FILE` | PASS | "compare human readable numbers (e.g., 2K 1G)" (sort) | PASS | |
| 9.8 | `sort -R FILE` | PASS | "shuffle, but group identical keys" (sort) | PASS | |
| 10.1 | `uniq FILE` | PASS | "'uniq' does not detect repeated lines unless they are adjacent." (uniq) | PASS | |
| 10.2 | `sort FILE / uniq` | PASS | "does not detect repeated lines unless they are adjacent" (uniq) | PASS | |
| 10.3 | `uniq -c FILE` | PASS | "prefix lines by the number of occurrences" (uniq) | PASS | |
| 10.4 | `uniq -d FILE` | PASS | "-d, --repeated" (uniq) | PASS | |
| 10.5 | `uniq -u FILE` | PASS | "-u, --unique" (uniq) | PASS | |
| 10.6 | `sort FILE / uniq -c / sort -rn` | PASS | "prefix lines by the number of occurrences" (uniq); "reverse the result of comparisons" (sort) | PASS | |

Open FAILs after round 1: 7

## Round 1: Text Processing (text-processing), part B

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows checked: 47.

### FAILs

- 17.2 `split -b 10M FILE NAME`: EN. The page says `M` is a power of 1024 and `MB` is a power of 1000, so `10M` is 10 MiB, not 10 MB. The gloss is misleading, and the BN has the same error. Quote: "Units are K,M,G,T,P,E,Z,Y,R,Q (powers of 1024) or KB,MB,... (powers of 1000)" (split). Fix: EN "pieces of 10 MiB" / BN "১০ MiB-এর টুকরো"
- 17.5 `cat NAME* > FILE`: !. The `>` redirect overwrites FILE if it already exists, so the row can overwrite a file, but it has "!: no". Quote: "Concatenate FILE(s) to standard output." (cat). The pages do not describe `>`; this verdict comes from the shell redirect, not from the cited pages. Fix: set "!: yes"

### Notes

- 11.6 `wc -L`: the page says "print the maximum display width". "Length of the longest line" is close, but "display width" is more exact, for example for tabs and wide characters.
- 13.3 `tail -f`: the pages do not mention "Ctrl+C stops". The page only says "output appended data as the file grows". The Ctrl+C claim is general knowledge.
- 15.5 `CMD / paste - -`: the pages say `-` means standard input and paste joins "sequentially corresponding lines" with TABs. Pairing lines from one stream is an inference, not an explicit statement.
- 17.4 `split -d`: the page says "use numeric suffixes starting at 0". The default suffix length is 2, so NAME00 and NAME01 are correct.
- 20.3 `unexpand -t 4`: the page says "(enables -a)". The gloss is true but leaves this out, so it also converts non-leading blanks.
- 18.6 `tr ... /dev/urandom`: `/dev/urandom` is not on the tr page. The `-dc` and `head -c` parts are supported.

### All rows

| Row | Command | EN | Quote (source key) | BN | Note |
|---|---|---|---|---|---|
| 11.1 | `wc FILE` | PASS | "Print newline, word, and byte counts for each FILE" (wc) | PASS | |
| 11.2 | `wc -l FILE` | PASS | "-l, --lines print the newline counts" (wc) | PASS | |
| 11.3 | `wc -w FILE` | PASS | "-w, --words print the word counts" (wc) | PASS | |
| 11.4 | `wc -c FILE` | PASS | "-c, --bytes print the byte counts" (wc) | PASS | |
| 11.5 | `wc -m FILE` | PASS | "-m, --chars print the character counts" (wc) | PASS | |
| 11.6 | `wc -L FILE` | PASS | "-L, --max-line-length print the maximum display width" (wc) | PASS | See note |
| 12.1 | `head FILE` | PASS | "Print the first 10 lines of each FILE" (head) | PASS | |
| 12.2 | `head -n 5 FILE` | PASS | "print the first NUM lines instead of the first 10" (head) | PASS | |
| 12.3 | `head -n -2 FILE` | PASS | "with the leading '-', print all but the last NUM lines" (head) | PASS | |
| 12.4 | `head -c 100 FILE` | PASS | "print the first NUM bytes of each file" (head) | PASS | |
| 12.5 | `CMD / head -n 3` | PASS | "With no FILE, or when FILE is -, read standard input." (head) | PASS | |
| 13.1 | `tail FILE` | PASS | "Print the last 10 lines of each FILE" (tail) | PASS | |
| 13.2 | `tail -n 5 FILE` | PASS | "output the last NUM lines, instead of the last 10" (tail) | PASS | |
| 13.3 | `tail -f FILE` | PASS | "output appended data as the file grows" (tail) | PASS | See note |
| 13.4 | `tail -F FILE` | PASS | "-F same as --follow=name --retry" (tail) | PASS | |
| 13.5 | `tail -n +2 FILE` | PASS | "-n +NUM to skip NUM-1 lines at the start" (tail) | PASS | |
| 14.1 | `nl FILE` | PASS | "t number only nonempty lines" and "Default options are: -bt" (nl) | PASS | |
| 14.2 | `nl -ba FILE` | PASS | "a number all lines" (nl) | PASS | |
| 14.3 | `nl -s': ' FILE` | PASS | "add STRING after (possible) line number" (nl) | PASS | |
| 14.4 | `nl -w3 FILE` | PASS | "use NUMBER columns for line numbers" (nl) | PASS | |
| 14.5 | `cat -n FILE` | PASS | "-n, --number number all output lines" (cat) | PASS | |
| 15.1 | `paste FILE FILE` | PASS | "sequentially corresponding lines from each FILE, separated by TABs" (paste) | PASS | |
| 15.2 | `paste -d, FILE FILE` | PASS | "reuse characters from LIST instead of TABs" (paste) | PASS | |
| 15.3 | `paste -s FILE` | PASS | "paste one file at a time instead of in parallel" (paste) | PASS | |
| 15.4 | `paste -sd, FILE` | PASS | "-s, --serial paste one file at a time"; "-d ... reuse characters from LIST" (paste) | PASS | |
| 15.5 | `CMD / paste - -` | PASS | "when FILE is -, read standard input" (paste) | PASS | See note |
| 16.1 | `join FILE FILE` | PASS | "The default join field is the first"; "FILE1 and FILE2 must be sorted" (join) | PASS | |
| 16.2 | `join -t, FILE FILE` | PASS | "-t CHAR use CHAR as input and output field separator" (join) | PASS | |
| 16.3 | `join -1 2 -2 1 FILE FILE` | PASS | "-1 FIELD join on this FIELD of file 1"; "-2 FIELD ... file 2" (join) | PASS | |
| 16.4 | `join -a1 FILE FILE` | PASS | "also print unpairable lines from file FILENUM" (join) | PASS | |
| 17.1 | `split -l 100 FILE NAME` | PASS | "-l, --lines=NUMBER put NUMBER lines/records per output file" (split) | PASS | |
| 17.2 | `split -b 10M FILE NAME` | FAIL | "Units are K,M,G,T,P,E,Z,Y,R,Q (powers of 1024) or KB,MB,... (powers of 1000)" (split) | PASS | Same error in BN; see FAILs |
| 17.3 | `split -n 4 FILE NAME` | PASS | "-n, --number=CHUNKS generate CHUNKS output files" (split) | PASS | |
| 17.4 | `split -d -l 100 FILE NAME` | PASS | "-d use numeric suffixes starting at 0" and "suffixes of length N (default 2)" (split) | PASS | |
| 17.5 | `cat NAME* > FILE` | FAIL (!) | "Concatenate FILE(s) to standard output." (cat) | PASS | `>` can overwrite FILE; "!" should be yes |
| 18.1 | `tr a-z A-Z` | PASS | "CHAR1-CHAR2 all characters from CHAR1 to CHAR2 in ascending order" (tr) | PASS | |
| 18.2 | `tr ' ' '\n'` | PASS | "\n new line"; "Translation occurs if -d is not given and both STRING1 and STRING2 appear" (tr) | PASS | |
| 18.3 | `tr -d '\r'` | PASS | "\r return"; "-d, --delete delete characters in ARRAY1" (tr) | PASS | |
| 18.4 | `tr -d '0-9'` | PASS | "-d, --delete delete characters in ARRAY1" (tr) | PASS | |
| 18.5 | `tr -s ' '` | PASS | "replace each sequence of a repeated character ... with a single occurrence" (tr) | PASS | |
| 18.6 | `tr -dc 'a-z0-9' </dev/urandom / head -c 16` | PASS | "-c ... use the complement of ARRAY1"; "print the first NUM bytes" (tr, head cited elsewhere) | PASS | See note |
| 19.1 | `expand FILE` | PASS | "Convert tabs in each FILE to spaces"; "have tabs N characters apart, not 8" (expand) | PASS | |
| 19.2 | `expand -t 4 FILE` | PASS | "-t, --tabs=N have tabs N characters apart, not 8" (expand) | PASS | |
| 19.3 | `expand -i FILE` | PASS | "-i, --initial do not convert tabs after non blanks" (expand) | PASS | |
| 20.1 | `unexpand FILE` | PASS | "-a, --all convert all blanks, instead of just initial blanks" (unexpand) | PASS | |
| 20.2 | `unexpand -a FILE` | PASS | "-a, --all convert all blanks" (unexpand) | PASS | |
| 20.3 | `unexpand -t 4 FILE` | PASS | "have tabs N characters apart instead of 8 (enables -a)" (unexpand) | PASS | See note |

Open FAILs after round 1: 2

## Round 2: Text Processing (text-processing), part A: cards 1 to 10 of 20

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 9 in A (2.2, 2.3, 3.5, 4.2, 4.4, 5.1, 5.3, 5.4, and no rows in B).

### FAILs

none

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 2.2 | `CMD 2> FILE` | PASS | "Redirecting output opens the file ... for writing on file descriptor n" (bash) | PASS | PASS (yes; truncates FILE) |
| 2.3 | `CMD > FILE 2>&1` | PASS | "ls > dirlist 2>&1" (bash) | PASS | PASS (yes) |
| 3.5 | `CMD &> FILE` | PASS | "This construct redirects both the standard output (file descriptor 1) and the standard error output (file descriptor 2) to the file" (bash) | PASS | PASS (yes; same as `>word 2>&1`) |
| 4.2 | `ls | wc -l` | PASS | "print the newline counts" (wc) | PASS | PASS (no) |
| 4.4 | `CMD | less` | PASS | "Scroll forward N lines, default one window" (less) | PASS | PASS (no) |
| 5.1 | `CMD | tee FILE` | PASS | "Copy standard input to each FILE, and also to standard output." (tee) | PASS | PASS (yes; the default overwrites) |
| 5.3 | `CMD | tee FILE | CMD` | PASS | "Copy standard input to each FILE, and also to standard output." (tee) | PASS | PASS (yes) |
| 5.4 | `echo TEXT | sudo tee FILE` | PASS | "defaults to root unless" (sudo); "append to the given FILEs, do not overwrite" (tee) | PASS | PASS (yes) |

Section B has "none", so there are no B rows. The row count above is therefore 8, not 9: the "9" in the header line was a miscount. The correct number of rows re-checked is 8.

### The "!" of every row

All rows follow the rule.

Open FAILs after round 2: 0
Not checked: the exact wording of the `sudo` page for 5.4 is only a loose support. It says that sudo runs the command as root by default, so `tee` writes as root. I accepted that as following directly from the pages.

## Round 2: Text Processing (text-processing), part B: cards 11 to 20 of 20

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 2 (A: 2, B: 0).

### FAILs

none

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 17.2 | `split -b 10M FILE NAME` | PASS | "Binary prefixes can be used, too: KiB=K, MiB=M, and so on." (split) | PASS | PASS |
| 17.5 | `cat NAME* > FILE` | PASS | "Concatenate FILE(s) to standard output." (cat) | PASS | PASS |

Notes:
- 17.2: The page says `M` is a power of 1024 and `MiB=M`, so `10M` is 10 MiB. The new EN and BN are correct. The command writes pieces and has no "!" under the rule, which does not list split.
- 17.5: The row joins the pieces, as the page says for cat. The `>` redirect to a file can overwrite FILE, so "!: yes" follows the rule.

### The "!" of every row

All rows follow the rule.

Open FAILs after round 2: 0

Open FAILs: 0
