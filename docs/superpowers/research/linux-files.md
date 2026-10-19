# Working with Files (Linux stage 2) — research notes (2026-10-19)

Fetch note: the official pages were fetched with `scripts/linux_fetch.py` (robots.txt respected, 2 s host delay) into `<scratch dir>/stage-files/` (`NNN.txt`, list in `report.tsv`). The roadmap pages were fetched into `<scratch dir>/roadmap-raw/`. The man7.org pages are HTML renderings of man pages. The GNU Coreutils manual pages say "GNU Coreutils 9.12"; the man7.org pages say coreutils 9.11. Quotes are at most 25 words. `…` marks a cut inside a quote. The index of a source in `page.sources` is the same as its S number.

## Sources
S1. inode(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/inode.7.html — accessed 2026-10-19
S2. symlink(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/symlink.7.html — accessed 2026-10-19
S3. ls(1) — man7.org (GNU coreutils) — https://man7.org/linux/man-pages/man1/ls.1.html — accessed 2026-10-19
S4. stat(1) — man7.org (GNU coreutils) — https://man7.org/linux/man-pages/man1/stat.1.html — accessed 2026-10-19
S5. Linux Basics – Part 4: Creating, Moving, and Deleting Files and Folders — DEV Community — https://dev.to/alkesh009/linux-basics-part-4-creating-moving-and-deleting-files-and-folders-5hip — accessed 2026-10-19 (roadmap #050). Page title shortened in `page.sources`.
S6. touch invocation — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/touch-invocation.html — accessed 2026-10-19
S7. mkdir invocation — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/mkdir-invocation.html — accessed 2026-10-19
S8. Redirections — Bash Reference Manual (GNU) — https://www.gnu.org/software/bash/manual/html_node/Redirections.html — accessed 2026-10-19
S9. Creating and Deleting Files / Directories in Linux — Useful Codes — https://useful.codes/creating-and-deleting-files-directories-in-linux/ — accessed 2026-10-19 (roadmap #049)
S10. rm invocation — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/rm-invocation.html — accessed 2026-10-19
S11. cp invocation — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html — accessed 2026-10-19
S12. mv invocation — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/mv-invocation.html — accessed 2026-10-19
S13. mv Command Examples in Linux: Move Files and Directories — Linux Handbook — https://linuxhandbook.com/mv-command/ — accessed 2026-10-19 (roadmap #134)
S14. Chapter 9: Editing Files in Linux Terminal — It's FOSS — https://itsfoss.com/edit-files-linux/ — accessed 2026-10-19 (roadmap #071, #290)
S15. The Complete Guide to Text Editing in Linux with Nano and Vim — TheLinuxCode — https://thelinuxcode.com/how-to-edit-file-in-linux/ — accessed 2026-10-19 (roadmap #072). Page title shortened in `page.sources` (the overlap check flags a long copy of a source title).
S16. The GNU nano text editor (manual, version 9.2) — GNU nano project — https://www.nano-editor.org/dist/latest/nano.html — accessed 2026-10-19
S17. Editing Files With Nano in Linux — It's FOSS — https://itsfoss.com/nano-editor-guide/ — accessed 2026-10-19 (roadmap #137)
S18. usr_02.txt, The first steps in Vim — Vim help (vimhelp.org) — https://vimhelp.org/usr_02.txt.html — accessed 2026-10-19
S19. intro.txt, Introduction to Vim — Vim help (vimhelp.org) — https://vimhelp.org/intro.txt.html — accessed 2026-10-19
S20. editing.txt, Editing files — Vim help (vimhelp.org) — https://vimhelp.org/editing.txt.html — accessed 2026-10-19
S21. Learn Vim Progressively — Yannesposito — https://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/ — accessed 2026-10-19 (roadmap #283)
S22. VIM Adventures — Doron Linder — https://vim-adventures.com/ — accessed 2026-10-19 (roadmap #284)
S23. ln invocation — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/ln-invocation.html — accessed 2026-10-19
S24. Hard links and soft links in Linux explained — Red Hat — https://www.redhat.com/en/blog/linking-linux-explained — accessed 2026-10-19 (roadmap #210)
S25. tar(1) — man7.org (GNU tar) — https://man7.org/linux/man-pages/man1/tar.1.html — accessed 2026-10-19
S26. GNU Gzip: General file (de)compression — GNU Project — https://www.gnu.org/software/gzip/manual/gzip.html — accessed 2026-10-19
S27. Info-ZIP's Zip — Info-ZIP — https://infozip.sourceforge.net/Zip.html — accessed 2026-10-19
S28. GNU tar: an archiver tool (manual) — GNU Project — https://www.gnu.org/software/tar/manual/tar.html — accessed 2026-10-19

Local checks (not a citable page): I ran every example of the page in an empty scratch directory with GNU coreutils, GNU tar 1.35, and gzip, and each one worked as written (`mv --no-copy` was removed from the page after the fact-check: it needs coreutils 9.2 or newer, and no fetched source gives the version. `gzip -d` needs a `.gz` file whose plain name does not exist, so the page uses `old-run.log.gz`). `nano` 8.7.1 was used; `vimtutor` was not run, so the `vimtutor` claim rests on S18 only.

Not usable as sources (no text): #293 Linux Basic Files Operations, #043 Linux cp Command, #044 and #136 Linux mv Command, #212 hard and symbolic links, #003 Linux File Packaging and Compression (labex.io, `http-403`); #294 and #048 What is the Difference Between Cat and Touch Command (linuxways.net, `robots`: 45 bytes of text, no content).
Read, but not cited: #041 mv and cp (Linux.org forum thread; it says that cp and mv "usually" prompt before an overwrite, which disagrees with S11 and S13, so the page follows the GNU manual); #135 mv Cheat Sheet (the page is mostly advertisement); #138 Nano in Linux (the host says "The IOFlood blog is temporarily unavailable"); #139 nano homepage (title and version only; S16 is the manual of the same project); #211 Difference between hard link and soft link (it calls a hard link a "mirror copy", which disagrees with S2 and S23: a hard link is another name, not a copy; the page follows S2 and S23); #291/#042 Mastering cp and mv (its cp and mv option lists agree with S11 and S12, and the page cites the official manual for each option); #073/#292 Vim Tutorial for Beginners (its `:q!` and `:wq` facts agree with S18 and S20; the page cites the Vim help).
Further reading (title only, not cited): #074 Vim Introduction (webterm.app course); #140 Nano editor fundamentals (video); #285 Learn Vimscript The Hard Way (course); #286 Vim Basics (video).
Overlap of two topics: the roadmap links of "Editing Files" and "Working with Files" are the same pages (#071 = #290, #073 = #292). The "Working with Files" section therefore covers the file model (inode, `ls`, `stat`), and the "Editing Files" section covers the choice of editor and the redirection methods. Nano and Vim have their own sections.
Source disagreements: the Linux.org thread (#041) and the kerneltalks page (#211) disagree with the official docs, as noted above.

## Working with Files
| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Each file on a filesystem has an inode number that is unique inside the filesystem. | S1 | "Each file in a filesystem has a unique inode number." |
| C2 | The inode holds metadata such as size, owner, and timestamps. | S1 | "This field gives the size of the file (if it is a regular file or a symbolic link) in bytes." |
| C2b | The inode holds the owner and the times (same page). | S1 | "This field records the user ID of the owner of the file." |
| C3 | A file name is a hard link: a reference to the inode number. | S2 | "each of the hard links to a file is a reference to the same inode number" |
| C4 | `ls -l` uses the long listing format. | S3 | "-l use a long listing format" |
| C5 | `stat -c` takes a format; `%s` is the size in bytes, `%h` the number of hard links, `%i` the inode number. | S4 | "-c, --format=FORMAT use the specified FORMAT instead of the default" / "%s total size, in bytes" / "%h number of hard links" / "%i inode number" |
| C6 | `rm` has no recycle bin. | S5 | "Be careful—there’s no “Recycle Bin” here!" |

## Creating Files and Directories
| # | Claim | Source | Quote |
|---|---|---|---|
| C7 | `touch` creates a missing file empty, and changes timestamps. | S6 | "Any file argument that does not exist is created empty" / "touch changes the access and/or modification timestamps of the specified files." |
| C8 | `-c` stops creation; `-d` sets a chosen time. | S6 | "Do not warn about or create files that do not exist." / "Use time instead of the current time." |
| C8b | The standard `-d` format is `yyyy-mm-ddThh:mm:ss`. | S6 | "yyyy-mm-ddThh:mm:ss[.frac][Z]" |
| C9 | `mkdir` reports an error if the directory exists, unless `-p`. | S7 | "It reports an error if name already exists, unless the -p option is given and name is a directory." |
| C10 | `-p` makes missing parents. | S7 | "Make any missing parent directories for each argument" |
| C11 | A `>` redirection creates the file if missing and truncates it if it exists. | S8 | "If the file does not exist it is created; if it does exist it is truncated to zero size." |
| C12 | `cat > file` reads text until Ctrl+D. | S9 | "After executing the command, you can type your content. To save and exit, press Ctrl + D." |
| C13 | `rm` does not remove directories by default; `-r` removes them and their contents. | S10 | "By default, it does not remove directories." / "Remove the listed directories and their contents recursively." |
| C14 | `rmdir` removes only empty directories. | S9 | "This command is specifically designed for removing empty directories." |
| C15 | `rm -f` never prompts. | S10 | "Ignore nonexistent files and missing operands, and never prompt the user." |
| C16 | `rm -I` prompts once for a recursive removal. | S10 | "Prompt once whether to proceed with the command, if more than three files are named or if a recursive removal is requested." |
| C16b | Redirection with `>` truncates (danger callout). | S8 | "if it does exist it is truncated to zero size" |

## Copying and Renaming
| # | Claim | Source | Quote |
|---|---|---|---|
| C17 | A `cp` copy is independent of the original. | S11 | "The copy is completely independent of the original." |
| C18 | `cp` copies a directory only with `-r`, `-R`, or `-a`. | S11 | "By default, cp does not copy directories. However, the -R, -a, and -r options cause cp to copy recursively" |
| C19 | If the last argument is a directory, `cp` puts each source inside it. | S11 | "if the last file is a directory and the --no-target-directory (-T) option is not given, cp copies each source file to the specified directory" |
| C20 | `mv` renames files. | S12 | "mv moves or renames files (or directories)." |
| C21 | By default `cp` replaces all existing destination files (no prompt without `-i`). | S11 | (under `all`) "This is the default operation when an --update option is not specified, and results in all existing files in the destination being replaced." |
| C22 | By default `mv` overwrites an existing target. | S13 | "By default, mv command overwrites if the target file already exists." |
| C23 | `cp -i` prompts before an overwrite. | S11 | "prompt whether to overwrite an existing destination file, and fail if the response is not affirmative" |
| C24 | `cp -n` skips an existing file. | S11 | "Do not overwrite an existing file; silently skip instead." |
| C25 | `cp -p` keeps mode, ownership, and timestamps. | S11 | "Using --preserve with no attribute_list is equivalent to --preserve=mode,ownership,timestamps." |
| C26 | `cp -a` keeps as much as possible. | S11 | "Preserve as much as possible of the structure and attributes of the original files in the copy" |
| C27 | `cp -v` prints each file. | S11 | "Print the name of each file before copying it." |
| C28 | `-n` is deprecated; `--update=none` is like it. | S11 | "This option is deprecated due to having a different exit status from other platforms." / "This is like the deprecated --no-clobber option" |

## Moving Files and Directories
| # | Claim | Source | Quote |
|---|---|---|---|
| C29 | If the last argument is a directory, `mv` moves each source into it. | S12 | "if the last file is a directory and the --no-target-directory (-T) option is not given, mv moves each source file to the specified directory" |
| C30 | A glob such as `*.txt` moves many files. | S13 | "You can also use glob to move multiple files matching a pattern." |
| C31 | Renaming a directory needs a new name; an existing name makes the directory move inside it. | S13 | "if the target_directory exists, the entire source_directory will be moved inside the target_directory" |
| C32 | On one filesystem `mv` ordinarily just renames. | S12 | "To move a file, mv ordinarily simply renames it." |
| C33 | Across filesystems `mv` copies as with `cp -a` and removes the original. | S12 | "if renaming does not work because the destination’s file system differs, mv falls back on copying as if by cp -a" |
| C34 | If a copy fails, `mv` removes the partial copy; a multi-directory move can stop halfway. | S12 | "If the copy fails, then mv removes any partially created copy in the destination." / "the first would be left on the destination file system" |
| C35 | `mv -t DIRECTORY SOURCE...` is a valid form. | S12 | "mv [option]... -t directory source..." |
| C37 | `mv` overwrites an existing file at once. | S13 | "the contents of the existing file will be overwritten immediately." |
| C38 | `mv -n` and `mv -i` prevent or prompt for an overwrite. | S13 | "To prevent overwriting existing files, you can use the -n option." |
| C38b | `mv` prompts only when the destination is unwritable (so the page says "writable destination"). | S12 | "If a destination file exists but is normally unwritable, standard input is a terminal, and the -f or --force option is not given, mv prompts" |

## Editing Files
| # | Claim | Source | Quote |
|---|---|---|---|
| C39 | Vi, Vim, Nano, Emacs are common terminal editors. | S14 | "Vi, Vim, Nano, Emacs are just a few of the most popular ones out there." |
| C40 | Vim needs no X session and works over SSH. | S15 | "Doesn‘t require an active X session – Works over SSH or the console" |
| C41 | Editing config files in `/etc` is a use for a terminal editor. | S14 | "modifying config files located in the /etc directory" |
| C42 | `>>` appends and creates the file if missing. | S8 | "opens the file … for appending" / "If the file does not exist it is created." |
| C43 | A here document feeds lines to a command until a delimiter line. | S8 | "read input from the current source until it reads a line containing only delimiter" |
| C44 | `>` replaces the content, `>>` appends (danger callout). | S8 | "it is truncated to zero size" / "opens the file whose name results from the expansion of word for appending" |

## Nano
| # | Claim | Source | Quote |
|---|---|---|---|
| C45 | Nano is modeless: all keys type text except Control and Meta keys. | S16 | "nano is a "modeless" editor. This means that all keystrokes, with the exception of Control and Meta sequences, enter text" |
| C45b | Nano is a small editor. | S16 | "GNU nano is a small and friendly text editor." |
| C46 | `^` means Ctrl and `M-` means Alt. | S14 | "The caret symbol (^) means Ctrl key" / "The M character mean the Alt key" |
| C47 | Two help lines at the bottom show shortcuts. | S16 | "The two help lines at the bottom of the screen show some of the most essential functions of the editor." |
| C48 | Nano is the default editor in Ubuntu and many distributions. | S14 | "It is the default text editor in Ubuntu and many other Linux distributions." |
| C49 | `^O` opens the Write-Out menu. | S16 | "Write-Out menu (^O)" |
| C50 | `^X` exits and asks whether to save. | S17 | "When you exit the editor using Ctrl+X keyboard shortcut, you’ll be asked whether you want to save your modified text" |
| C51 | `^K` cuts a line; `^U` pastes. | S16 | "Text can be cut from a file a whole line at a time with ^K." / "can be pasted at the current cursor position with ^U." |
| C52 | `^W` searches. | S16 | "With the Search command (^F or ^W) you can search the current buffer" |
| C53 | `^G` opens the help. | S16 | "The built-in help in nano is available by pressing ^G." |
| C54 | At the save prompt Y saves and N discards. | S14 | "Y to save the file and exit the editor" / "N to discard changes" |
| C54b | Ctrl+C cancels the save prompt. This is the tutorial's own observation, not a cited claim: the page has no cite for it. The S14 tutorial says "C" cancels; that is wrong. The nano manual (S16) does not name the key (it names only a cancel function: "Cancels the current command."). Local test by the fact-checker: nano 8.7.1 shows `^C Cancel`, typing c or C leaves the prompt open, and Ctrl+C cancels. | none | no quote |
| C55 | The title bar shows "Modified" on the right for unsaved changes. | S16 | "displays "Modified" if the file has been modified since it was last saved or opened." |
| C55c | With `-%` (`--stateflags`), a star after the file name shows the state instead; a nanorc file may set this option. | S16 | "When the buffer is modified, a star (*) is shown after the filename in the center of the title bar." |
| C55b | A buffer is the text in memory. | S14 | "a new, unsaved file in the memory buffer" |
| C56 | `+LINE` before the file name opens at that line. | S16 | "The cursor can be put on a specific line of a file by adding the line number with a plus sign before the filename" |
| C57 | `-l` shows line numbers; `-v` is read-only. | S16 | "Display line numbers to the left of the text area." / "Don’t allow the contents of the file to be altered: read-only mode." |
| C58 | `-v` is not a replacement for file permissions. | S16 | "this option should NOT be used in place of correct file permissions to implement a read-only file" |

## Vim
| # | Claim | Source | Quote |
|---|---|---|---|
| C59 | Vim is modal. | S18 | "The Vim editor is a modal editor. That means that the editor behaves differently, depending on which mode you are in." |
| C60 | Normal mode keys are commands; Insert mode keys are text. | S18 | "In Normal mode the characters you type are commands. In Insert mode the characters are inserted as text." |
| C61 | Vim starts in Normal mode; `i` starts Insert mode; `Esc` leaves it. | S18 | "it will be in Normal mode." / "To start Insert mode you type the "i" command" / "press the <Esc> key to stop Insert mode" |
| C62 | `Esc` returns to Normal mode, sometimes twice. | S18 | "press the <Esc> key. Sometimes you have to press it twice." |
| C63 | `:` opens Command-line mode (one line at the bottom). | S19 | "In Command-line mode (also called Cmdline mode) you … can enter one line of text at the bottom of the window." |
| C64 | Vim reads the file into a buffer, changes it, and writes it. | S20 | "reading the file into a buffer" / "changing the buffer with editor commands" / "writing the buffer into a file" |
| C65 | `:w` writes the buffer to the file. | S20 | "Write the whole buffer to the current file." |
| C66 | `:wq` writes and closes; `ZZ` writes if modified and closes. | S20 | "Write the current file and close the window." / "Write current file, if modified, and close the current window" |
| C67 | `:q!` quits and throws changes away. | S18 | "Vim has a quit-and-throw-things-away command. It is:" |
| C68 | `dd` deletes a line; `u` undoes; `CTRL-R` redoes. | S18 | "To delete a whole line use the "dd" command." / "The "u" command undoes the last edit." / "you can press CTRL-R (redo)" |
| C69 | `/pattern` searches; `:help` opens help. | S21 | "/pattern → search for pattern" / "Show help about <command>." |
| C70 | `:q` with unsaved changes fails with E37. | S18 | "E37: No write since last change (use ! to override)" |
| C71 | `vimtutor` is a learn-by-doing lesson. | S18 | "The vimtutor is also a nice way to learn by doing." |
| C72 | VIM Adventures is a browser game. | S22 | "VIM Adventures is an online game based on VIM's keyboard shortcuts" |
| C73 | Vim makes no automatic backup; after `ZZ` there is no way back. | S18 | "Unlike many other editors, Vim does not automatically make a backup file." / "your changes are committed and there's no turning back." |

## Soft and Hard Links
| # | Claim | Source | Quote |
|---|---|---|---|
| C74 | A hard link is another name for a file; link and original share the inode. | S23 | "A hard link is another name for an existing file; the link and the original are indistinguishable." / "they share the same inode" |
| C75 | A hard link cannot refer to a directory or to a file on another filesystem; the filesystem reason is that inode numbers are not unique across filesystems. | S2 | "Hard links may not refer to directories" / "may not refer to files on different filesystems (because inode numbers are not unique across filesystems)" |
| C76 | The inode keeps the number of hard links. | S1 | "This field contains the number of hard links to the file." |
| C77 | Data stays until all links are removed. | S24 | "The data is only removed from your drive when all links to the data have been removed." |
| C78 | A symlink holds the pathname of another file. | S2 | "A symbolic link is a special type of file whose contents are a string that is the pathname of another file" |
| C79 | A symlink may refer to a directory and cross filesystems. | S2 | "symbolic links may refer to directories and may cross filesystem boundaries." |
| C80 | A symlink to a missing path is dangling. | S2 | "A symbolic link that refers to a pathname that does not exist is said to be a dangling link." |
| C81 | A relative symlink resolves from the directory that holds the link. | S23 | "A relative symbolic link is resolved in relation to the directory that contains the link" |
| C82 | `-s` makes a symlink; `-r` makes it relative to the link location. | S23 | "Make symbolic links instead of hard links." / "Make symbolic links relative to the link location." |
| C83 | `ls -i` prints the inode number; hard-linked files share it. | S3, S24 | "print the index number of each file" / "Files that are hard-linked together share the same inode number." |
| C84 | `stat` format `%h` is the number of hard links. | S4 | "%h number of hard links" |
| C85 | `ln TARGET LINK_NAME` is the first form. | S23 | "ln [option]... [-T] target linkname" |
| C86 | `ln -f` removes existing destination files. | S23 | "Remove existing destination files." |

## Archiving and Compressing
| # | Claim | Source | Quote |
|---|---|---|---|
| C87 | `tar` stores many files in one file (an archive). | S25 | "GNU tar is an archiving program designed to store multiple files in a single file (an archive)" |
| C88 | `gzip` compresses. | S26 | "gzip reduces the size of the named files using Lempel–Ziv coding (LZ77)." |
| C89 | `tar -z` filters through gzip. | S25 | "Filter the archive through gzip(1)." |
| C90 | `-c`, `-x`, `-t` create, extract, list. | S25 | "Create a new archive." / "Extract files from an archive." / "List the contents of an archive." |
| C91 | `-f` names the archive. | S25 | "Use archive file or device ARCHIVE." |
| C92 | `-C DIR` changes to DIR first. | S25 | "Change to DIR before performing any operations." |
| C93 | `gzip` replaces a file with a `.gz` file; `-k` keeps the original; `-d` decompresses. | S26 | "each file is replaced by one with the extension ‘.gz’" / "Keep (don’t delete) input files during compression or decompression." / "Decompress." |
| C94 | ZIP packs compressed files in one archive. | S27 | "Zip puts one or more compressed files into a single ZIP archive" |
| C95 | Use `unzip` for a ZIP file with many members. | S26 | "To extract zip files with several members, use unzip instead of gunzip." |
| C96 | Extraction can overwrite files; extract an untrusted archive in a new directory. | S28 | "Extracting files from archives can overwrite files that already exist." / "you should make a new directory and extract into that directory" |
| C97 | Absolute names and `../` names are often unsafe to extract. | S28 | "it is often unsafe to extract archive members with absolute file names or those that begin with a ../." |
| C98 | `tar -c` erases an existing archive of the same name. | S28 | "tar will erase the current contents of the file named by --file=archive-name" |
