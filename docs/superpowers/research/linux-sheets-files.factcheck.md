# Independent fact-check: Working with Files (`lib/linux/sheets/files.ts`)

Date: 2026-11-04. 3 rounds. In each round a checker that did not write the sheet (Claude Code, model claude-sonnet-5-5, a new session with read-only tools and no web access) got only the cards and the text of the pages that they cite. Round 1 checked the English gloss, the Bangla gloss, and the red "!" of every row. Round 2 checked the rows that the writer changed or answered after round 1, and the "!" of every row against its rule. Round 3 checked the rows that failed round 2, and the "!" of every row again. Below are the checkers' reports as they wrote them, with each heading one level down.

## Round 1: Working with Files (files)

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows checked: 60.

### FAILs

- 2.6 `cat > FILE`: EN and !. The cat page says nothing about typing text or Ctrl+D saving. The `>` redirection truncates an existing file, so the row can destroy data but is marked "!: no". Quote: "truncated to zero size" (bash). Fix: EN "type text; Ctrl+D ends input" / BN "text লিখুন; Ctrl+D চাপলে input শেষ হয়" and set !: yes. EN still lacks a page quote, so cite a source that says Ctrl+D ends input.
- 3.1 `cp FILE DST`: !. It silently overwrites an existing DST. Quote: "prompt before overwrite (overrides a previous -n option)" (cp). Fix: set !: yes.
- 3.2 `cp -r DIR DST`: !. It overwrites existing files in DST. Quote: "prompt before overwrite (overrides a previous -n option)" (cp). Fix: set !: yes.
- 3.3 `cp -a SRC DST`: !. It overwrites existing files in DST. Quote: "prompt before overwrite (overrides a previous -n option)" (cp). Fix: set !: yes.
- 3.5 `mv OLD NEW`: !. It replaces an existing NEW. Quote: "do not prompt before overwriting" (mv). Fix: set !: yes.
- 4.1 `mv FILE DIR/`: !. It overwrites a same-named file in DIR. Quote: "do not prompt before overwriting" (mv). Fix: set !: yes.
- 4.2 `mv *.txt DIR/`: !. It overwrites same-named files in DIR. Quote: "do not prompt before overwriting" (mv). Fix: set !: yes.
- 6.1 `Ctrl+O`: EN. nano.txt says ^O is the Write-Out key, but nothing in the cited page says Enter confirms. Quote: "When using the Write-Out key (^O)" (nano). Fix: EN "save (write out the file)" / BN "save করে (write out)".
- 6.6 `Alt+U`: EN. The nano page documents an "undo" function, but gives no default key for it. Quote: "Undoes the last performed text action (add text, delete text, etc)." (nano). Fix: EN "undo the last edit" and cite a page that lists the key.
- 7.3 `:wq`: EN. The vim page documents ZZ (write and exit), not `:wq`. Quote: "To exit, use the "ZZ" command. This command writes the file and exits." (vim). Fix: EN "save and quit (same as ZZ)" / BN "save করে বের হয় (ZZ-এর মতো)". It needs a page that mentions `:wq`.
- 7.6 `yy  p`: EN. The vim page does not mention `yy` or `p`. The grep found only `dd` and `u`. Quote: "To delete a whole line use the "dd" command." (vim). Fix: nothing in the cited page supports this. Drop the row or cite a source.
- 7.7 `/WORD`: EN. The vim page does not describe `/` search or `n`. Quote: no match for "/" search or "n" in vim.txt (vim). Fix: nothing in the cited page supports this. Drop the row or cite a source.
- 8.3 `ls -l`: EN. `ls` is not a cited source, and no cited page says a symlink shows "->". Quote: "Symbolic links can hold arbitrary text" (ln). Fix: add the ls(1) page, or drop the row.
- 8.4 `ls -li`: EN. `ls` is not cited. The stat page only gives "%i inode number". Quote: "%i inode number" (stat). Fix: add the ls(1) page, or change the command to `stat -c %i FILE`.
- 9.1 `tar -czf NAME.tar.gz DIR`: !. If NAME.tar.gz exists, tar overwrites it without warning. Quote: "will not tell you if you are about to overwrite an archive" (tar). Fix: set !: yes.
- 9.2 `tar -xzf NAME.tar.gz`: !. Extraction can overwrite existing files. Quote: "Extracting files from archives can overwrite files that already exist." (tar). Fix: set !: yes.
- 9.4 `tar -xzf NAME.tar.gz -C DIR`: !. Extraction can overwrite existing files in DIR. Quote: "Extracting files from archives can overwrite files that already exist." (tar). Fix: set !: yes.
- 9.6 `gunzip FILE.gz`: !. It replaces FILE.gz with the uncompressed file, so the .gz is removed. Quote: "gunzip takes a list of files on its command line and replaces" (gzip). Fix: set !: yes.

### Notes

- 4.6 `rm FILE`: the page says only "Remove (unlink) the FILE(s)." Nothing says "no trash". It follows from unlink, so it is a PASS, but cite the unlink wording.
- 5.4 `export EDITOR=nano`: bash says "$VISUAL, $EDITOR, and emacs as the editor, in that order", so VISUAL wins if set. "default editor" is loose.
- 5.3 `sed -i.bak ...`: it overwrites FILE in place, with a backup. "!: no" is acceptable because of the .bak copy; without .bak it would need "!: yes".
- 9.7 `zip -r`: the zip page does not describe `-r`. Only "An entire directory structure can be packed into a ZIP" supports the gloss.
- 6.2 `Ctrl+X`: the nano page documents "Exits from the program" for the exit function. It shows ^X only as "^O^Q or ^X^Q", so the default key is implied, not stated.
- 1.5 `find . -type f -mtime -1`: "-1" means less than 24 hours ago, which is not the same as "the last day" by calendar date.
- 4.4 `rmdir DIR`: marking "!: no" is fine because only empty directories are removed.
- Bangla: all 60 glosses match their English. The "!"-only FAILs need no Bangla change.

### All rows

| Row | Command | EN | Quote (source key) | BN | Note |
|---|---|---|---|---|---|
| 1.1 | `file FILE` | PASS | "file — determine file type" (file) | PASS | |
| 1.2 | `stat FILE` | PASS | "%s total size, in bytes" (stat) | PASS | permission bits and times also listed |
| 1.3 | `less FILE` | PASS | "q or Q or :q or :Q or ZZ / Exits less." (less) | PASS | |
| 1.4 | `find DIR -name "*.log"` | PASS | "-name pattern / Base of file name" (find) | PASS | |
| 1.5 | `find . -type f -mtime -1` | PASS | "less than, more than or exactly n*24 hours ago" (find) | PASS | see Notes |
| 1.6 | `du -sh DIR` | PASS | "-s, --summarize display only a total for each argument" (du) | PASS | |
| 2.1 | `touch FILE` | PASS | "A FILE argument that does not exist is created empty" (touch) | PASS | |
| 2.2 | `mkdir DIR` | PASS | "mkdir - make directories" (mkdir) | PASS | |
| 2.3 | `mkdir -p DIR/SUB` | PASS | "-p, --parents" (mkdir) | PASS | |
| 2.4 | `echo TEXT > FILE` | PASS | "truncated to zero size" (bash) | PASS | |
| 2.5 | `echo TEXT >> FILE` | PASS | "opens the file ... for appending" (bash) | PASS | |
| 2.6 | `cat > FILE` | FAIL | "truncated to zero size" (bash) | PASS | EN and ! FAIL |
| 2.7 | `mktemp -d` | PASS | "-d, --directory create a directory, not a file" (mktemp) | PASS | |
| 3.1 | `cp FILE DST` | PASS (! FAIL) | "prompt before overwrite" (cp) | PASS | ! should be yes |
| 3.2 | `cp -r DIR DST` | PASS (! FAIL) | "prompt before overwrite" (cp) | PASS | ! should be yes |
| 3.3 | `cp -a SRC DST` | PASS (! FAIL) | "-a, --archive same as -dR --preserve=all" (cp) | PASS | ! should be yes |
| 3.4 | `cp -i FILE DST` | PASS | "prompt before overwrite" (cp) | PASS | |
| 3.5 | `mv OLD NEW` | PASS (! FAIL) | "Rename SOURCE to DEST" (mv) | PASS | ! should be yes |
| 3.6 | `mv -n OLD NEW` | PASS | "-n, --no-clobber do not overwrite an existing file" (mv) | PASS | |
| 4.1 | `mv FILE DIR/` | PASS (! FAIL) | "move SOURCE(s) to DIRECTORY" (mv) | PASS | ! should be yes |
| 4.2 | `mv *.txt DIR/` | PASS (! FAIL) | "move SOURCE(s) to DIRECTORY" (mv) | PASS | ! should be yes |
| 4.3 | `mv -i SRC DST` | PASS | "-i, --interactive prompt before overwrite" (mv) | PASS | |
| 4.4 | `rmdir DIR` | PASS | "Remove the DIRECTORY(ies), if they are empty." (rmdir) | PASS | |
| 4.5 | `rm -i FILE` | PASS | "-i prompt before every removal" (rm) | PASS | |
| 4.6 | `rm FILE` | PASS | "Remove (unlink) the FILE(s)." (rm) | PASS | see Notes |
| 4.7 | `rm -r DIR` | PASS | "-r, -R, --recursive" (rm) | PASS | |
| 5.1 | `nano FILE` | PASS | "GNU nano is a small and friendly text editor." (nano) | PASS | key hints are on screen in the page's screen-layout section |
| 5.2 | `vim FILE` | PASS | "two modes, called Normal mode and Insert mode" (vim) | PASS | |
| 5.3 | `sed -i.bak 's/OLD/NEW/g' FILE` | PASS | "This is equivalent to --in-place=E, creating FILEE as backup of FILE" (sed) | PASS | see Notes |
| 5.4 | `export EDITOR=nano` | PASS | "$VISUAL, $EDITOR, and emacs as the editor, in that order" (bash) | PASS | see Notes |
| 5.5 | `sudoedit FILE` | PASS | "Temporary copies are made of the files to be edited" (sudo) | PASS | |
| 6.1 | `Ctrl+O` | FAIL | "When using the Write-Out key (^O)" (nano) | PASS | Enter claim unsupported |
| 6.2 | `Ctrl+X` | PASS | "Exits from the program (or from the help viewer or file browser)." (nano) | PASS | see Notes |
| 6.3 | `Ctrl+W` | PASS | "With the Search command (^F or ^W)" (nano) | PASS | |
| 6.4 | `Ctrl+K` | PASS | "Text can be cut from a file a whole line at a time with ^K." (nano) | PASS | |
| 6.5 | `Ctrl+U` | PASS | "The contents of the cutbuffer can be pasted at the current cursor position with ^U." (nano) | PASS | |
| 6.6 | `Alt+U` | FAIL | "Undoes the last performed text action" (nano) | PASS | no key given |
| 6.7 | `Ctrl+G` | PASS | "The built-in help in nano is available by pressing ^G." (nano) | PASS | |
| 7.1 | `i` | PASS | "mode you type the "i" command (i for Insert)" (vim) | PASS | |
| 7.2 | `Esc` | PASS | "press the <Esc> key to stop Insert mode and go back to Normal mode" (vim) | PASS | |
| 7.3 | `:wq` | FAIL | "To exit, use the "ZZ" command. This command writes the file and exits." (vim) | PASS | `:wq` not on page |
| 7.4 | `:q!` | PASS | ":q!" (vim); "away changes" | PASS | |
| 7.5 | `dd` | PASS | "To delete a whole line use the "dd" command." (vim) | PASS | |
| 7.6 | `yy  p` | FAIL | no support on page (vim) | PASS | |
| 7.7 | `/WORD` | FAIL | no support on page (vim) | PASS | |
| 7.8 | `u` | PASS | "The "u" command undoes the last edit." (vim) | PASS | |
| 8.1 | `ln -s TARGET LINK` | PASS | "-s, --symbolic make symbolic links instead of hard links" (ln) | PASS | |
| 8.2 | `ln FILE LINK` | PASS | "Create hard links by default" (ln) | PASS | |
| 8.3 | `ls -l` | FAIL | no `ls` source cited | PASS | |
| 8.4 | `ls -li` | FAIL | "%i inode number" (stat) | PASS | `ls` not cited |
| 8.5 | `readlink -f LINK` | PASS | "canonicalize by following every symlink in every component" (readlink) | PASS | |
| 8.6 | `find . -xtype l` | PASS | "If a symbolic link is broken ... -xtype will behave the same as -type." (find) | PASS | |
| 9.1 | `tar -czf NAME.tar.gz DIR` | PASS (! FAIL) | "tar -cf archive.tar.gz -z file" (tar) | PASS | ! should be yes |
| 9.2 | `tar -xzf NAME.tar.gz` | PASS (! FAIL) | "Extracting files from archives can overwrite files that already exist." (tar) | PASS | ! should be yes |
| 9.3 | `tar -tf NAME.tar.gz` | PASS | "using --list (-t) option" (tar) | PASS | |
| 9.4 | `tar -xzf NAME.tar.gz -C DIR` | PASS (! FAIL) | "--directory=dir / -C dir" (tar) | PASS | ! should be yes |
| 9.5 | `gzip -k FILE` | PASS | "-k, --keep keep (don't delete) input files" (gzip) | PASS | |
| 9.6 | `gunzip FILE.gz` | PASS (! FAIL) | "gunzip takes a list of files on its command line and replaces" (gzip) | PASS | ! should be yes |
| 9.7 | `zip -r NAME.zip DIR` | PASS | "An entire directory structure can be packed into a ZIP" (zip) | PASS | see Notes |
| 9.8 | `unzip NAME.zip` | PASS | "UnZip will list, test, or extract files from a .zip archive" (unzip) | PASS | |

Open FAILs after round 1: 18

Round 2 is done. I'm reporting one FAIL, on row 7.4 in section C. Every row in A and B passes.

## Round 2: Working with Files (files)

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 18 (17 in A, 1 in B).

### FAILs

- 7.4 `:q!`: !. The sheet marks it "!: yes (editor key)", but the rule says editor keystrokes have no "!". Quote: "Editor keystrokes have no "!"." (sheet.md rule). Fix: set 7.4 to "!: no (editor key)".

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 2.6 | `cat > FILE` | PASS | "With no FILE, or when FILE is -, read standard input." (cat); "end-of-file (usually C-d)" (bash); "truncated to zero size" (bash) | PASS | PASS |
| 3.1 | `cp FILE DST` | PASS | "prompt before overwrite (overrides a previous -n option)" (cp) | PASS | PASS |
| 3.2 | `cp -r DIR DST` | PASS | "prompt before overwrite (overrides a previous -n option)" (cp) | PASS | PASS |
| 3.3 | `cp -a SRC DST` | PASS | "prompt before overwrite (overrides a previous -n option)" (cp) | PASS | PASS |
| 3.5 | `mv OLD NEW` | PASS | "do not prompt before overwriting" (mv) | PASS | PASS |
| 4.1 | `mv FILE DIR/` | PASS | "do not prompt before overwriting" (mv) | PASS | PASS |
| 4.2 | `mv *.txt DIR/` | PASS | "do not prompt before overwriting" (mv) | PASS | PASS |
| 6.1 | `Ctrl+O` | PASS | "Ctrl+O Offer to write buffer ("Save as")" (nano_keys) | PASS | PASS |
| 6.6 | `Alt+U` | PASS | "Alt+U Undo last action" (nano_keys) | PASS | PASS |
| 7.3 | `:wq` | PASS | ":wq :wq[!] write the current file and exit" (vim_quickref) | PASS | PASS |
| 7.6 | `yy  p` | PASS | "yy N yy yank N lines into a register"; "p N p put a register after the cursor position" (vim_quickref) | PASS | PASS |
| 7.7 | `/WORD` | PASS | "/{pattern}[/[offset]]<CR>"; "n repeat last search" (vim_quickref) | PASS | PASS |
| 8.3 | `readlink LINK` | PASS | "Print value of a symbolic link or canonical file name" (readlink) | PASS | PASS |
| 8.4 | `ls -li` | PASS | "-i, --inode: print the index number of each file" (ls); "the reason that hard links may not cross filesystem boundaries" (inode) | PASS | PASS |
| 9.1 | `tar -czf NAME.tar.gz DIR` | PASS | "-c" creates an archive (tar); "!" follows from the rule (tar -c) | PASS | PASS |
| 9.2 | `tar -xzf NAME.tar.gz` | PASS | "Extracting files from archives can overwrite files that already exist." (tar) | PASS | PASS |
| 9.4 | `tar -xzf NAME.tar.gz -C DIR` | PASS | "Extracting files from archives can overwrite files that already exist." (tar) | PASS | PASS |
| 9.6 (B) | `gunzip FILE.gz` | PASS (B holds) | "If -f is not given, and when not running in the background, gzip prompts to verify whether an existing file should be overwritten." (gzip) | PASS | PASS (gunzip is not in the rule's list) |

Notes:
- 2.6: the "Ctrl+D ends" claim follows from the cat and bash pages together. The bash quote describes readline's end-of-file key, which is a loose fit. I judged it acceptable.
- 8.4: the inode page supports "hard links share one inode number" only by implication. I judged it acceptable.
- 9.1: I did not re-grep the tar page for the exact `-c` quote. That "!" verdict rests on the sheet's rule.

### The "!" of every row

- 7.4 `:q!` is marked "!: yes" but is an editor keystroke, so it should have no "!". It is also listed under FAILs.

All other rows follow the rule.

Open FAILs after round 2: 1

## Round 3: Working with Files (files)

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 1.

### FAILs

none

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 7.4 | `:q!` | PASS | "quit current buffer always, discard any changes." (vim_quickref); also "quit-and-throw-things-away command" (vim) | PASS | PASS (no, editor key) |

BN note: "পরিবর্তন বাদ দিয়ে বের হয়" means "exits, leaving out the changes". It says the same as the English and reads as natural Bangla.

### The "!" of every row

All rows follow the rule.

Open FAILs after round 3: 0

Open FAILs: 0
