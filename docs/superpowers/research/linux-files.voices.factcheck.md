# Voice fact-check: Working with Files (round 1, 2026-10-20)

Page: `content/linux/files.mdx`. I did not write this page.

Method: I read the 9 `<Voices>` blocks. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates (the text, the tables, the code comments, and the callouts). A claim that is not in the Technical panel, or that changes a number, a version, a flag, a command, a path, a scope, or a condition, is a FAIL. An omission is not a FAIL. For each `<Cite n>` in a voice panel, I checked that the Technical panel of the same section cites the same n for the same claim, and that the source n supports it (the sources are the ones in `page.sources`). I read the Bangla text for meaning and for natural use, and I checked that commands, flags, paths, product names, and common technical terms stay in English, with a hyphen between an English word and a Bangla suffix. A language problem is a FAIL only if it changes the meaning. The table has one row for each claim and each voice; a claim that one voice omits has a row for the other voice only.

Flagged items:

- The "Tutorial's own advice" text of each section is in the Technical tip callout ("Why it matters for testing"). Each Layman and Bangla version repeats it with no cite, and says that it is the tutorial's own advice. PASS.
- Layman and Bangla drop some Technical text: the `stat` `%h` line of "Soft and Hard Links" (Layman only), the `-%` option and the table of the `^` keys of "Nano" (the keys stay as a list), `gzip -d`, `mv -t`, and the `touch -d` example. These are omissions, not FAILs.
- "Nano": the Bangla panel puts the tutorial advice (`nano +42 file` and `-v`) in the same paragraph as the cited claim about `-v`. The advice has its own "Tutorial-এর নিজস্ব পরামর্শ" label and the cite follows only the manual sentence. PASS, see the rows of "Nano".
- "Moving Files and Directories": the Layman text states "A filesystem is a separate storage area, mounted at its own path". It restates the Technical gloss of "two filesystems". PASS.

| # | Section | Voice | Claim (English gloss for Bangla) | Technical sentence (quoted) | Verdict | Language |
|---|---|---|---|---|---|---|
| 1 | Working with Files | Layman | Each file on a Linux filesystem (the structure that stores files on a disk) has an inode [1] | "Every file on a Linux filesystem (the structure that stores files on a disk) has an inode." | PASS | - |
| 2 | Working with Files | Bangla | Each file on a Linux filesystem (the structure that stores files on a disk) has an inode [1] | "Every file on a Linux filesystem (the structure that stores files on a disk) has an inode." | PASS | OK |
| 3 | Working with Files | Layman | An inode is a record of the file metadata: owner, size, timestamps [1] | "An inode is a record of the metadata of the file, such as its owner, size, and timestamps. [1]" | PASS | - |
| 4 | Working with Files | Bangla | An inode is a record of the file metadata: owner, size, timestamps [1] | "An inode is a record of the metadata of the file, such as its owner, size, and timestamps. [1]" | PASS | OK |
| 5 | Working with Files | Layman | The name of a file is a hard link: a reference to that inode number [2] | "The name of a file is a hard link: a reference to that inode number. [2]" | PASS | - |
| 6 | Working with Files | Bangla | The name of a file is a hard link: a reference to that inode number [2] | "The name of a file is a hard link: a reference to that inode number. [2]" | PASS | OK |
| 7 | Working with Files | Layman | `ls -l` lists files in the long format [3] | "`ls -l` lists files in the long format. [3]" | PASS | - |
| 8 | Working with Files | Bangla | `ls -l` lists files in the long format [3] | "`ls -l` lists files in the long format. [3]" | PASS | OK |
| 9 | Working with Files | Layman | `stat` shows the full status, and `-c` selects the fields [4] | "`stat` prints the full status, and `-c` chooses the fields. [4]" | PASS | - |
| 10 | Working with Files | Bangla | `stat` shows the full status, and `-c` selects the fields [4] | "`stat` prints the full status, and `-c` chooses the fields. [4]" | PASS | OK |
| 11 | Working with Files | Layman | `%s` is the size in bytes, `%h` the number of hard links, `%i` the inode number [4] | "The code `%s` is the size in bytes, `%h` is the number of hard links, and `%i` is the inode number. [4]" | PASS | - |
| 12 | Working with Files | Bangla | `%s` is the size in bytes, `%h` the number of hard links, `%i` the inode number [4] | "The code `%s` is the size in bytes, `%h` is the number of hard links, and `%i` is the inode number. [4]" | PASS | OK |
| 13 | Working with Files | Layman | `rm` has no recycle bin, so treat each removal as final [5] | "`rm` has no recycle bin, so treat each removal as final. [5]" | PASS | - |
| 14 | Working with Files | Bangla | `rm` has no recycle bin, so treat each removal as final [5] | "`rm` has no recycle bin, so treat each removal as final. [5]" | PASS | OK |
| 15 | Working with Files | Layman | Tutorial advice: after a test run, use `stat` to check size and modification time of each output file | "Tutorial's own advice: after a test run, use `stat` to check the size and the modification time of each output file." | PASS | - |
| 16 | Working with Files | Bangla | Tutorial advice: after a test run, use `stat` to check size and modification time of each output file | "Tutorial's own advice: after a test run, use `stat` to check the size and the modification time of each output file." | PASS | OK |
| 17 | Working with Files | Layman | A report of 0 bytes often means the step crashed before it wrote data | "A report of 0 bytes often means that the step crashed before it wrote any data." | PASS | - |
| 18 | Working with Files | Bangla | A report of 0 bytes often means the step crashed before it wrote data | "A report of 0 bytes often means that the step crashed before it wrote any data." | PASS | OK |
| 19 | Working with Files | Bangla | One `ls -l` of the artifact folder in a CI log is a cheap check | "In a CI log ..., one `ls -l` of the artifact folder is a cheap check." | PASS | OK. "সস্তা check" is a little blunt for "cheap check"; "কম খরচের check" reads more naturally (note only). |
| 20 | Creating Files and Directories | Layman | `touch` makes an empty file when the name does not exist [6] | "`touch` creates an empty file when the name does not exist. If the file exists, `touch` only updates its access and modification times. [6]" | PASS | - |
| 21 | Creating Files and Directories | Bangla | `touch` makes an empty file when the name does not exist [6] | "`touch` creates an empty file when the name does not exist. If the file exists, `touch` only updates its access and modification times. [6]" | PASS | OK |
| 22 | Creating Files and Directories | Layman | If the file exists, `touch` only updates its access and modification times | "If the file exists, `touch` only updates its access and modification times. [6]" | PASS | - |
| 23 | Creating Files and Directories | Bangla | If the file exists, `touch` only updates its access and modification times | "If the file exists, `touch` only updates its access and modification times. [6]" | PASS | OK |
| 24 | Creating Files and Directories | Layman | `-c` stops `touch` from creating a file; `-d` sets a time that you choose [6] | "The option `-c` stops `touch` from creating a file, and `-d` sets a chosen time. [6]" | PASS | - |
| 25 | Creating Files and Directories | Bangla | `-c` stops `touch` from creating a file; `-d` sets a time that you choose [6] | "The option `-c` stops `touch` from creating a file, and `-d` sets a chosen time. [6]" | PASS | OK |
| 26 | Creating Files and Directories | Layman | `mkdir` makes a directory; if it exists, `mkdir` gives an error unless you add `-p` [7] | "`mkdir` makes a directory and reports an error if the directory exists, unless you add `-p`. [7]" | PASS | - |
| 27 | Creating Files and Directories | Bangla | `mkdir` makes a directory; if it exists, `mkdir` gives an error unless you add `-p` [7] | "`mkdir` makes a directory and reports an error if the directory exists, unless you add `-p`. [7]" | PASS | OK |
| 28 | Creating Files and Directories | Layman | With `-p`, `mkdir` also makes the missing parent directories [7] | "With `-p`, `mkdir` also makes the missing parent directories. [7]" | PASS | - |
| 29 | Creating Files and Directories | Bangla | With `-p`, `mkdir` also makes the missing parent directories [7] | "With `-p`, `mkdir` also makes the missing parent directories. [7]" | PASS | OK |
| 30 | Creating Files and Directories | Layman | The `>` redirection (a shell feature that sends output to a file) also makes a file [8] | "A redirection (a shell feature that sends output to a file) with `>` also makes a file. [8]" | PASS (The Layman text puts the gloss in a full sentence: "sends output to a file, so it also makes a file". Same meaning.) | - |
| 31 | Creating Files and Directories | Bangla | The `>` redirection (a shell feature that sends output to a file) also makes a file [8] | "A redirection (a shell feature that sends output to a file) with `>` also makes a file. [8]" | PASS | OK |
| 32 | Creating Files and Directories | Layman | `cat > file` reads your text until you press Ctrl+D [9] | "The command `cat > file` reads your text until you press Ctrl+D. [9]" | PASS | - |
| 33 | Creating Files and Directories | Bangla | `cat > file` reads your text until you press Ctrl+D [9] | "The command `cat > file` reads your text until you press Ctrl+D. [9]" | PASS | OK |
| 34 | Creating Files and Directories | Layman | `rm` deletes files and needs `-r` for a directory [10] | "`rm` deletes files, and it needs `-r` for a directory. [10]" | PASS | - |
| 35 | Creating Files and Directories | Bangla | `rm` deletes files and needs `-r` for a directory [10] | "`rm` deletes files, and it needs `-r` for a directory. [10]" | PASS | OK |
| 36 | Creating Files and Directories | Layman | `rmdir` removes only empty directories [9] | "`rmdir` removes only empty directories. [9]" | PASS | - |
| 37 | Creating Files and Directories | Bangla | `rmdir` removes only empty directories [9] | "`rmdir` removes only empty directories. [9]" | PASS | OK |
| 38 | Creating Files and Directories | Layman | `rm -r` deletes a directory and all of its contents; `-f` never asks first [10] | "`rm -r` deletes a directory and all of its contents. `-f` never prompts. [10]" | PASS | - |
| 39 | Creating Files and Directories | Bangla | `rm -r` deletes a directory and all of its contents; `-f` never asks first [10] | "`rm -r` deletes a directory and all of its contents. `-f` never prompts. [10]" | PASS | OK |
| 40 | Creating Files and Directories | Layman | `>` cuts an existing file to zero size [8] | "The `>` operator cuts an existing file to zero size. [8]" | PASS | - |
| 41 | Creating Files and Directories | Bangla | `>` cuts an existing file to zero size [8] | "The `>` operator cuts an existing file to zero size. [8]" | PASS | OK |
| 42 | Creating Files and Directories | Layman | Run `ls` on the path first | "Run `ls` on the path first." | PASS | - |
| 43 | Creating Files and Directories | Bangla | Run `ls` on the path first | "Run `ls` on the path first." | PASS | OK |
| 44 | Creating Files and Directories | Layman | Use `rm -I` to get one prompt before a recursive removal [10] | "Use `rm -I` to get one prompt before a recursive removal. [10]" | PASS | - |
| 45 | Creating Files and Directories | Bangla | Use `rm -I` to get one prompt before a recursive removal [10] | "Use `rm -I` to get one prompt before a recursive removal. [10]" | PASS | OK |
| 46 | Creating Files and Directories | Layman | Tutorial advice: start each test setup with `mkdir -p`; it succeeds when the folder exists, so a second run of the job does not fail | "Tutorial's own advice: start each test setup with `mkdir -p`. It succeeds when the folder exists, so a second run of the job does not fail." | PASS | - |
| 47 | Creating Files and Directories | Bangla | Tutorial advice: start each test setup with `mkdir -p`; it succeeds when the folder exists, so a second run of the job does not fail | "Tutorial's own advice: start each test setup with `mkdir -p`. It succeeds when the folder exists, so a second run of the job does not fail." | PASS | OK |
| 48 | Copying and Renaming | Layman | `cp` makes a copy that is independent of the original [11] | "`cp` makes a copy that is independent of the original. [11]" | PASS | - |
| 49 | Copying and Renaming | Bangla | `cp` makes a copy that is independent of the original [11] | "`cp` makes a copy that is independent of the original. [11]" | PASS | OK |
| 50 | Copying and Renaming | Layman | `cp` copies a directory only with `-r`, `-R`, or `-a` [11] | "It copies a directory only with `-r`, `-R`, or `-a`. [11]" | PASS | - |
| 51 | Copying and Renaming | Bangla | `cp` copies a directory only with `-r`, `-R`, or `-a` [11] | "It copies a directory only with `-r`, `-R`, or `-a`. [11]" | PASS (Bangla says "লাগে" (is needed) and drops the word "only". The meaning is the same.) | OK |
| 52 | Copying and Renaming | Layman | If the last argument is a directory, `cp` puts each source inside it [11] | "If the last argument is a directory, `cp` puts each source inside it. [11]" | PASS | - |
| 53 | Copying and Renaming | Bangla | If the last argument is a directory, `cp` puts each source inside it [11] | "If the last argument is a directory, `cp` puts each source inside it. [11]" | PASS | OK |
| 54 | Copying and Renaming | Layman | To rename a file, use `mv` with a new name [12] | "To rename a file, use `mv` with a new name. [12]" | PASS | - |
| 55 | Copying and Renaming | Bangla | To rename a file, use `mv` with a new name [12] | "To rename a file, use `mv` with a new name. [12]" | PASS | OK |
| 56 | Copying and Renaming | Layman | By default, `cp` replaces an existing destination file without a prompt [11] | "By default, `cp` replaces an existing destination file without a prompt. [11]" | PASS | - |
| 57 | Copying and Renaming | Bangla | By default, `cp` replaces an existing destination file without a prompt [11] | "By default, `cp` replaces an existing destination file without a prompt. [11]" | PASS | OK |
| 58 | Copying and Renaming | Layman | `mv` does the same [13] | "`mv` does the same. [13]" | PASS | - |
| 59 | Copying and Renaming | Bangla | `mv` does the same [13] | "`mv` does the same. [13]" | PASS | OK |
| 60 | Copying and Renaming | Layman | `-i` asks before each overwrite [11] | "`-i` | Ask before each overwrite. [11]" | PASS | - |
| 61 | Copying and Renaming | Bangla | `-i` asks before each overwrite [11] | "`-i` | Ask before each overwrite. [11]" | PASS | OK |
| 62 | Copying and Renaming | Layman | `-n` skips a file that exists | "`-n` | Skip a file that exists. [11]" | PASS | - |
| 63 | Copying and Renaming | Bangla | `-n` skips a file that exists | "`-n` | Skip a file that exists. [11]" | PASS | OK |
| 64 | Copying and Renaming | Layman | The manual marks `-n` as deprecated (the Bangla text also gives the reason: its exit status differs from other platforms) | "The manual marks `-n` as deprecated, because its exit status (the number that a command returns to the shell) differs from other platforms. [11]" | PASS (The Layman text gives the deprecation but drops the reason. This is an omission, not a new fact.) | - |
| 65 | Copying and Renaming | Bangla | The manual marks `-n` as deprecated (the Bangla text also gives the reason: its exit status differs from other platforms) | "The manual marks `-n` as deprecated, because its exit status (the number that a command returns to the shell) differs from other platforms. [11]" | PASS | OK |
| 66 | Copying and Renaming | Layman | In newer versions, `--update=none` also skips existing files | "In newer versions, `--update=none` also skips existing files. [11]" | PASS | - |
| 67 | Copying and Renaming | Bangla | In newer versions, `--update=none` also skips existing files | "In newer versions, `--update=none` also skips existing files. [11]" | PASS | OK |
| 68 | Copying and Renaming | Layman | `-p` keeps the mode (permission bits), owner, and times [11] | "`-p` | Keep the mode (permission bits), owner, and times. [11]" | PASS | - |
| 69 | Copying and Renaming | Bangla | `-p` keeps the mode (permission bits), owner, and times [11] | "`-p` | Keep the mode (permission bits), owner, and times. [11]" | PASS | OK |
| 70 | Copying and Renaming | Layman | `-a` copies a tree and keeps as much as possible [11] | "`-a` | Archive mode: copy a tree and keep as much as possible. [11]" | PASS | - |
| 71 | Copying and Renaming | Bangla | `-a` copies a tree and keeps as much as possible [11] | "`-a` | Archive mode: copy a tree and keep as much as possible. [11]" | PASS | OK |
| 72 | Copying and Renaming | Layman | `-v` shows what happens [11] | "`-v` | Print what happens. [11]" | PASS | - |
| 73 | Copying and Renaming | Bangla | `-v` shows what happens [11] | "`-v` | Print what happens. [11]" | PASS | OK |
| 74 | Copying and Renaming | Layman | The old content of the destination is lost at once; run `ls` on the destination first | "`cp` and `mv` destroy the old content of a destination file at once. ... Run `ls` on the destination first. [11]" | PASS | - |
| 75 | Copying and Renaming | Bangla | The old content of the destination is lost at once; run `ls` on the destination first | "`cp` and `mv` destroy the old content of a destination file at once. ... Run `ls` on the destination first. [11]" | PASS | OK |
| 76 | Copying and Renaming | Layman | Tutorial advice: copy a fixture before a test changes it and compare the two files afterwards; use `cp -p` or `cp -a` so the copy keeps mode and times | "Tutorial's own advice: copy a fixture before a test changes it, and compare the two files afterwards. Use `cp -p` or `cp -a`, so that the copy keeps the mode and times of the original." | PASS | - |
| 77 | Copying and Renaming | Bangla | Tutorial advice: copy a fixture before a test changes it and compare the two files afterwards; use `cp -p` or `cp -a` so the copy keeps mode and times | "Tutorial's own advice: copy a fixture before a test changes it, and compare the two files afterwards. Use `cp -p` or `cp -a`, so that the copy keeps the mode and times of the original." | PASS | OK |
| 78 | Moving Files and Directories | Layman | `mv` moves a file or directory; if the last argument is a directory, it moves each source into it [12] | "`mv` moves a file or directory. If the last argument is a directory, `mv` moves each source into it. [12]" | PASS | - |
| 79 | Moving Files and Directories | Bangla | `mv` moves a file or directory; if the last argument is a directory, it moves each source into it [12] | "`mv` moves a file or directory. If the last argument is a directory, `mv` moves each source into it. [12]" | PASS | OK |
| 80 | Moving Files and Directories | Layman | A shell pattern such as `*.log` moves many files in one command [13] | "A shell pattern such as `*.log` moves many files in one command. [13]" | PASS | - |
| 81 | Moving Files and Directories | Bangla | A shell pattern such as `*.log` moves many files in one command [13] | "A shell pattern such as `*.log` moves many files in one command. [13]" | PASS | OK |
| 82 | Moving Files and Directories | Layman | To rename a directory, use a new name; if that name exists, the directory moves inside it [13] | "To rename a directory, use a new name. If that name exists, the directory moves inside it. [13]" | PASS | - |
| 83 | Moving Files and Directories | Bangla | To rename a directory, use a new name; if that name exists, the directory moves inside it [13] | "To rename a directory, use a new name. If that name exists, the directory moves inside it. [13]" | PASS | OK |
| 84 | Moving Files and Directories | Layman | A filesystem is a separate storage area, mounted at its own path | "Between two filesystems (separate storage areas that are mounted at different paths) ..." | PASS (The Layman text turns the Technical gloss of "two filesystems" into a general sentence. Same words, same meaning, no new fact.) | - |
| 85 | Moving Files and Directories | Bangla | A filesystem is a separate storage area, mounted at its own path | "Between two filesystems (separate storage areas that are mounted at different paths) ..." | PASS | OK |
| 86 | Moving Files and Directories | Layman | On one filesystem, `mv` usually only renames the entry [12] | "On one filesystem, `mv` usually only renames the entry. [12]" | PASS | - |
| 87 | Moving Files and Directories | Bangla | On one filesystem, `mv` usually only renames the entry [12] | "On one filesystem, `mv` usually only renames the entry. [12]" | PASS | OK |
| 88 | Moving Files and Directories | Layman | Between two filesystems, `mv` copies like `cp -a` and then removes the original [12] | "Between two filesystems ..., `mv` copies like `cp -a` and then removes the original. [12]" | PASS | - |
| 89 | Moving Files and Directories | Bangla | Between two filesystems, `mv` copies like `cp -a` and then removes the original [12] | "Between two filesystems ..., `mv` copies like `cp -a` and then removes the original. [12]" | PASS | OK |
| 90 | Moving Files and Directories | Layman | If a copy fails, `mv` removes the partial copy; a move of many directories can stop halfway [12] | "If a copy fails, `mv` removes the partial copy. A move of many directories can stop halfway. [12]" | PASS | - |
| 91 | Moving Files and Directories | Bangla | If a copy fails, `mv` removes the partial copy; a move of many directories can stop halfway [12] | "If a copy fails, `mv` removes the partial copy. A move of many directories can stop halfway. [12]" | PASS | OK |
| 92 | Moving Files and Directories | Layman | Without `-i` or `-n`, `mv` replaces a writable destination file and gives no warning [13] | "Without `-i` or `-n`, `mv` replaces a writable destination file and gives no warning. [13]" | PASS | - |
| 93 | Moving Files and Directories | Bangla | Without `-i` or `-n`, `mv` replaces a writable destination file and gives no warning [13] | "Without `-i` or `-n`, `mv` replaces a writable destination file and gives no warning. [13]" | PASS | OK |
| 94 | Moving Files and Directories | Layman | The old content is lost; check the destination with `ls` first | "The old content is lost. Check the destination with `ls` first." | PASS | - |
| 95 | Moving Files and Directories | Bangla | The old content is lost; check the destination with `ls` first | "The old content is lost. Check the destination with `ls` first." | PASS | OK |
| 96 | Moving Files and Directories | Layman | Tutorial advice: a CI workspace and `/tmp` can be on different filesystems | "Tutorial's own advice: a CI workspace and `/tmp` can be on different filesystems." | PASS | - |
| 97 | Moving Files and Directories | Bangla | Tutorial advice: a CI workspace and `/tmp` can be on different filesystems | "Tutorial's own advice: a CI workspace and `/tmp` can be on different filesystems." | PASS | OK |
| 98 | Moving Files and Directories | Bangla | A `mv` between two filesystems is a slow copy that can stop halfway | "A `mv` between them is a slow copy that can stop halfway." | PASS | OK |
| 99 | Moving Files and Directories | Layman | Build your output on the same filesystem as its final place, so the move is a fast rename | "Build your output on the same filesystem as its final place, so that the move is a fast rename." | PASS | - |
| 100 | Moving Files and Directories | Bangla | Build your output on the same filesystem as its final place, so the move is a fast rename | "Build your output on the same filesystem as its final place, so that the move is a fast rename." | PASS | OK |
| 101 | Editing Files | Layman | You edit a text file in a terminal with a text editor; Vi, Vim, Nano, and Emacs are the common ones [14] | "You edit a text file in a terminal with a text editor. Vi, Vim, Nano, and Emacs are the common ones. [14]" | PASS | - |
| 102 | Editing Files | Bangla | You edit a text file in a terminal with a text editor; Vi, Vim, Nano, and Emacs are the common ones [14] | "You edit a text file in a terminal with a text editor. Vi, Vim, Nano, and Emacs are the common ones. [14]" | PASS | OK |
| 103 | Editing Files | Layman | A terminal editor such as Vim needs no X session (a graphical desktop) and works over SSH (a remote login to another machine) [15] | "A terminal editor such as Vim needs no X session (a graphical desktop) and works over SSH (a remote login to another machine). [15]" | PASS | - |
| 104 | Editing Files | Bangla | A terminal editor such as Vim needs no X session (a graphical desktop) and works over SSH (a remote login to another machine) [15] | "A terminal editor such as Vim needs no X session (a graphical desktop) and works over SSH (a remote login to another machine). [15]" | PASS | OK |
| 105 | Editing Files | Layman | You need an editor for files such as the config files in `/etc` [14] | "You need it for files such as the config files in `/etc`. [14]" | PASS | - |
| 106 | Editing Files | Bangla | You need an editor for files such as the config files in `/etc` [14] | "You need it for files such as the config files in `/etc`. [14]" | PASS | OK |
| 107 | Editing Files | Layman | For a small change, you may need no editor | "For a small change, you may need no editor." | PASS | - |
| 108 | Editing Files | Bangla | For a small change, you may need no editor | "For a small change, you may need no editor." | PASS | OK |
| 109 | Editing Files | Layman | `>>` adds text to the end of a file and makes the file if it does not exist [8] | "The `>>` operator adds text to the end of a file and makes the file if it does not exist. [8]" | PASS | - |
| 110 | Editing Files | Bangla | `>>` adds text to the end of a file and makes the file if it does not exist [8] | "The `>>` operator adds text to the end of a file and makes the file if it does not exist. [8]" | PASS | OK |
| 111 | Editing Files | Layman | A here document (text that follows the command, up to a delimiter line) feeds many lines to a command [8] | "A here document (text that follows the command, up to a delimiter line) feeds many lines to a command. [8]" | PASS | - |
| 112 | Editing Files | Bangla | A here document (text that follows the command, up to a delimiter line) feeds many lines to a command [8] | "A here document (text that follows the command, up to a delimiter line) feeds many lines to a command. [8]" | PASS | OK |
| 113 | Editing Files | Layman | `>` replaces the whole content of a file; `>>` adds to the end [8] | "`>` replaces the whole content of a file. `>>` adds to the end. [8]" | PASS | - |
| 114 | Editing Files | Bangla | `>` replaces the whole content of a file; `>>` adds to the end [8] | "`>` replaces the whole content of a file. `>>` adds to the end. [8]" | PASS | OK |
| 115 | Editing Files | Layman | A typo of `>` for `>>` erases your config | "A typo of `>` for `>>` erases your config." | PASS | - |
| 116 | Editing Files | Bangla | A typo of `>` for `>>` erases your config | "A typo of `>` for `>>` erases your config." | PASS | OK |
| 117 | Editing Files | Layman | Make a backup with `cp -p` first | "Make a backup with `cp -p` first." | PASS | - |
| 118 | Editing Files | Bangla | Make a backup with `cp -p` first | "Make a backup with `cp -p` first." | PASS | OK |
| 119 | Editing Files | Layman | Tutorial advice: a script cannot drive a full-screen editor, so a CI step must write files with redirection | "Tutorial's own advice: a script cannot drive a full-screen editor, so a CI step must write files with redirection." | PASS | - |
| 120 | Editing Files | Bangla | Tutorial advice: a script cannot drive a full-screen editor, so a CI step must write files with redirection | "Tutorial's own advice: a script cannot drive a full-screen editor, so a CI step must write files with redirection." | PASS | OK |
| 121 | Editing Files | Bangla | Keep editors for work on a live host | "Keep editors for work on a live host." | PASS | OK |
| 122 | Editing Files | Layman | A minimal container may have no nano or Vim; install one or use redirection | "A minimal container may have no nano or Vim, so install one or use redirection." | PASS | - |
| 123 | Editing Files | Bangla | A minimal container may have no nano or Vim; install one or use redirection | "A minimal container may have no nano or Vim, so install one or use redirection." | PASS | OK |
| 124 | Nano | Layman | Nano is a small editor with no modes: every key types text, except the Control and Meta keys [16] | "Nano is a small editor with no modes: every key types text, except the Control and Meta keys. [16]" | PASS | - |
| 125 | Nano | Bangla | Nano is a small editor with no modes: every key types text, except the Control and Meta keys [16] | "Nano is a small editor with no modes: every key types text, except the Control and Meta keys. [16]" | PASS | OK |
| 126 | Nano | Layman | `^` stands for Ctrl, and `M-` stands for Alt [14] | "The caret `^` stands for Ctrl, and `M-` stands for Alt. [14]" | PASS | - |
| 127 | Nano | Bangla | `^` stands for Ctrl, and `M-` stands for Alt [14] | "The caret `^` stands for Ctrl, and `M-` stands for Alt. [14]" | PASS | OK |
| 128 | Nano | Layman | Nano shows the main shortcuts on two lines at the bottom [16] | "Nano shows the main shortcuts on two lines at the bottom. [16]" | PASS | - |
| 129 | Nano | Bangla | Nano shows the main shortcuts on two lines at the bottom [16] | "Nano shows the main shortcuts on two lines at the bottom. [16]" | PASS | OK |
| 130 | Nano | Layman | It is the default editor in Ubuntu and many other distributions [14] | "It is the default editor in Ubuntu and many other distributions. [14]" | PASS | - |
| 131 | Nano | Bangla | It is the default editor in Ubuntu and many other distributions [14] | "It is the default editor in Ubuntu and many other distributions. [14]" | PASS | OK |
| 132 | Nano | Layman | `^O` opens the Write-Out menu, to save the file [16] | "`^O` | Open the Write-Out menu, to save the file. [16]" | PASS | - |
| 133 | Nano | Bangla | `^O` opens the Write-Out menu, to save the file [16] | "`^O` | Open the Write-Out menu, to save the file. [16]" | PASS | OK |
| 134 | Nano | Layman | `^X` exits; nano asks whether to save changed text [17] | "`^X` | Exit. Nano asks whether to save changed text. [17]" | PASS | - |
| 135 | Nano | Bangla | `^X` exits; nano asks whether to save changed text [17] | "`^X` | Exit. Nano asks whether to save changed text. [17]" | PASS | OK |
| 136 | Nano | Layman | `^K` cuts a line and `^U` pastes it; `^W` searches; `^G` opens the built-in help [16] | "`^K` and `^U` | Cut a line, and paste it. [16] / `^W` | Search. [16] / `^G` | Open the built-in help. [16]" | PASS | - |
| 137 | Nano | Bangla | `^K` cuts a line and `^U` pastes it; `^W` searches; `^G` opens the built-in help [16] | "`^K` and `^U` | Cut a line, and paste it. [16] / `^W` | Search. [16] / `^G` | Open the built-in help. [16]" | PASS | OK |
| 138 | Nano | Layman | At the save prompt, `Y` saves and `N` discards [14] | "At the save prompt, `Y` saves and `N` discards. [14]" | PASS | - |
| 139 | Nano | Bangla | At the save prompt, `Y` saves and `N` discards [14] | "At the save prompt, `Y` saves and `N` discards. [14]" | PASS | OK |
| 140 | Nano | Layman | In nano 8.7.1 the prompt shows `^C Cancel`, so Ctrl+C cancels it | "In nano 8.7.1 it shows `^C Cancel`, so Ctrl+C cancels it." | PASS | - |
| 141 | Nano | Bangla | In nano 8.7.1 the prompt shows `^C Cancel`, so Ctrl+C cancels it | "In nano 8.7.1 it shows `^C Cancel`, so Ctrl+C cancels it." | PASS | OK |
| 142 | Nano | Layman | The title bar shows "Modified" when the buffer (the text in memory) has unsaved changes [16] | "The title bar shows \"Modified\" when the buffer (the text in memory) has unsaved changes. [16]" | PASS | - |
| 143 | Nano | Bangla | The title bar shows "Modified" when the buffer (the text in memory) has unsaved changes [16] | "The title bar shows \"Modified\" when the buffer (the text in memory) has unsaved changes. [16]" | PASS | OK |
| 144 | Nano | Layman | `nano +42 file` opens the file at line 42 [16] | "Nano can open a file at a line, with `+LINE` before the name. [16] ... when an error names line 42, open the file with `nano +42 file`." | PASS | - |
| 145 | Nano | Bangla | `nano +42 file` opens the file at line 42 [16] | "Nano can open a file at a line, with `+LINE` before the name. [16] ... when an error names line 42, open the file with `nano +42 file`." | PASS | OK |
| 146 | Nano | Layman | `-v` is read-only mode [16] | "The option `-v` is read-only mode. [16]" | PASS | - |
| 147 | Nano | Bangla | `-v` is read-only mode [16] | "The option `-v` is read-only mode. [16]" | PASS | OK |
| 148 | Nano | Layman | The manual says that `-v` does not replace correct file permissions [16] | "The manual says that `-v` does not replace correct file permissions. [16]" | PASS | - |
| 149 | Nano | Bangla | The manual says that `-v` does not replace correct file permissions [16] | "The manual says that `-v` does not replace correct file permissions. [16]" | PASS | OK |
| 150 | Nano | Bangla | Tutorial advice: when an error names line 42, open the file with `nano +42 file`; use `-v` to read a shared config without a risk of a change | "Tutorial's own advice: when an error names line 42, open the file with `nano +42 file`. Use `-v` to read a shared config without a risk of a change." | PASS | OK |
| 151 | Vim | Layman | Vim is a modal editor: the same key does a different job in each mode [18] | "Vim is a modal editor: the same key does a different job in each mode. [18]" | PASS | - |
| 152 | Vim | Bangla | Vim is a modal editor: the same key does a different job in each mode [18] | "Vim is a modal editor: the same key does a different job in each mode. [18]" | PASS | OK |
| 153 | Vim | Layman | In Normal mode the keys are commands; in Insert mode they are text; Vim starts in Normal mode [18] | "In Normal mode, the keys you type are commands. In Insert mode, they are text. [18] Vim starts in Normal mode. [18]" | PASS | - |
| 154 | Vim | Bangla | In Normal mode the keys are commands; in Insert mode they are text; Vim starts in Normal mode [18] | "In Normal mode, the keys you type are commands. In Insert mode, they are text. [18] Vim starts in Normal mode. [18]" | PASS | OK |
| 155 | Vim | Layman | Press `i` to enter Insert mode and `Esc` to return [18] | "Press `i` to enter Insert mode and `Esc` to return. [18]" | PASS | - |
| 156 | Vim | Bangla | Press `i` to enter Insert mode and `Esc` to return [18] | "Press `i` to enter Insert mode and `Esc` to return. [18]" | PASS | OK |
| 157 | Vim | Layman | If you lose track of the mode, press `Esc`, sometimes twice [18] | "If you lose track of the mode, press `Esc`, sometimes twice. [18]" | PASS | - |
| 158 | Vim | Bangla | If you lose track of the mode, press `Esc`, sometimes twice [18] | "If you lose track of the mode, press `Esc`, sometimes twice. [18]" | PASS | OK |
| 159 | Vim | Layman | The `:` key opens Command-line mode for one-line commands [19] | "A `:` key opens Command-line mode for one-line commands. [19]" | PASS | - |
| 160 | Vim | Bangla | The `:` key opens Command-line mode for one-line commands [19] | "A `:` key opens Command-line mode for one-line commands. [19]" | PASS | OK |
| 161 | Vim | Layman | Vim reads the file into a buffer, changes the buffer, and writes it back [20] | "Vim reads the file into a buffer, changes the buffer, and writes it back. [20]" | PASS | - |
| 162 | Vim | Bangla | Vim reads the file into a buffer, changes the buffer, and writes it back [20] | "Vim reads the file into a buffer, changes the buffer, and writes it back. [20]" | PASS | OK |
| 163 | Vim | Layman | The buffer is the copy in memory; the file changes only when you write | "The buffer is the copy in memory. The file changes only when you write." | PASS | - |
| 164 | Vim | Bangla | The buffer is the copy in memory; the file changes only when you write | "The buffer is the copy in memory. The file changes only when you write." | PASS | OK |
| 165 | Vim | Layman | `:w` writes the buffer to the file; `:wq` or `ZZ` writes and quits [20] | "`:w` | Write the buffer to the file. [20] / `:wq`, `ZZ` | Write and quit. [20]" | PASS | - |
| 166 | Vim | Bangla | `:w` writes the buffer to the file; `:wq` or `ZZ` writes and quits [20] | "`:w` | Write the buffer to the file. [20] / `:wq`, `ZZ` | Write and quit. [20]" | PASS | OK |
| 167 | Vim | Layman | `:q!` quits and drops all changes [18] | "`:q!` | Quit and drop all changes. [18]" | PASS | - |
| 168 | Vim | Bangla | `:q!` quits and drops all changes [18] | "`:q!` | Quit and drop all changes. [18]" | PASS | OK |
| 169 | Vim | Layman | `dd` deletes a line, `u` undoes, `Ctrl-R` redoes [18] | "`dd`, `u`, `Ctrl-R` | Delete a line, undo, redo. [18]" | PASS | - |
| 170 | Vim | Bangla | `dd` deletes a line, `u` undoes, `Ctrl-R` redoes [18] | "`dd`, `u`, `Ctrl-R` | Delete a line, undo, redo. [18]" | PASS | OK |
| 171 | Vim | Layman | `/text` searches; `:help` opens the help [21] | "`/text` | Search for text. [21] / `:help` | Open the help. [21]" | PASS | - |
| 172 | Vim | Bangla | `/text` searches; `:help` opens the help [21] | "`/text` | Search for text. [21] / `:help` | Open the help. [21]" | PASS | OK |
| 173 | Vim | Layman | `:q` alone fails with error E37 when you have unsaved changes [18] | "`:q` alone fails with error E37 when you have unsaved changes. [18]" | PASS | - |
| 174 | Vim | Bangla | `:q` alone fails with error E37 when you have unsaved changes [18] | "`:q` alone fails with error E37 when you have unsaved changes. [18]" | PASS | OK |
| 175 | Vim | Layman | Vim makes no backup file unless you set it up [18] | "Vim makes no backup file unless you set it up. [18]" | PASS | - |
| 176 | Vim | Bangla | Vim makes no backup file unless you set it up [18] | "Vim makes no backup file unless you set it up. [18]" | PASS | OK |
| 177 | Vim | Bangla | After `ZZ`, there is no turning back [18] | "After `ZZ`, there is no turning back. [18]" | PASS | OK |
| 178 | Vim | Layman | The `vimtutor` command is a lesson that teaches by doing [18] | "The `vimtutor` command is a lesson that teaches by doing. [18]" | PASS | - |
| 179 | Vim | Bangla | The `vimtutor` command is a lesson that teaches by doing [18] | "The `vimtutor` command is a lesson that teaches by doing. [18]" | PASS | OK |
| 180 | Vim | Bangla | VIM Adventures is a browser game that teaches Vim commands [22] | "VIM Adventures is a browser game that teaches Vim commands. [22]" | PASS | OK |
| 181 | Vim | Bangla | Tutorial advice: a remote host or container may offer only `vi`; learn a small survival set (`i`, `Esc`, `:wq`, `:q!`, `dd`, `u`) | "Tutorial's own advice: a remote host or a container may offer only `vi`, which takes most of the keys above. Learn a small survival set (`i`, `Esc`, `:wq`, `:q!`, `dd`, `u`) ..." | PASS | OK |
| 182 | Soft and Hard Links | Layman | A hard link is another name for a file; the link and the original share one inode, so they are the same file [23] | "A hard link is another name for a file. The link and the original share one inode, so they are the same file. [23]" | PASS | - |
| 183 | Soft and Hard Links | Bangla | A hard link is another name for a file; the link and the original share one inode, so they are the same file [23] | "A hard link is another name for a file. The link and the original share one inode, so they are the same file. [23]" | PASS | OK |
| 184 | Soft and Hard Links | Layman | A hard link cannot point to a directory | "A hard link cannot point to a directory." | PASS | - |
| 185 | Soft and Hard Links | Bangla | A hard link cannot point to a directory | "A hard link cannot point to a directory." | PASS | OK |
| 186 | Soft and Hard Links | Layman | It cannot cross a filesystem, because inode numbers are unique only inside one filesystem [2] | "It cannot cross a filesystem either, because inode numbers are unique only inside one filesystem. [2]" | PASS | - |
| 187 | Soft and Hard Links | Bangla | It cannot cross a filesystem, because inode numbers are unique only inside one filesystem [2] | "It cannot cross a filesystem either, because inode numbers are unique only inside one filesystem. [2]" | PASS | OK |
| 188 | Soft and Hard Links | Layman | The inode keeps a link count [1] | "The inode keeps a link count. [1]" | PASS | - |
| 189 | Soft and Hard Links | Bangla | The inode keeps a link count [1] | "The inode keeps a link count. [1]" | PASS | OK |
| 190 | Soft and Hard Links | Layman | The data stays while at least one name remains [24] | "The data stays while at least one name remains. [24]" | PASS | - |
| 191 | Soft and Hard Links | Bangla | The data stays while at least one name remains [24] | "The data stays while at least one name remains. [24]" | PASS | OK |
| 192 | Soft and Hard Links | Layman | A symlink is a special file that holds the path of another file | "A symbolic link (symlink) is a special file that holds the path of another file. [2]" | PASS | - |
| 193 | Soft and Hard Links | Bangla | A symlink is a special file that holds the path of another file | "A symbolic link (symlink) is a special file that holds the path of another file. [2]" | PASS | OK |
| 194 | Soft and Hard Links | Layman | A symlink can point to a directory and cross filesystems [2] | "It can point to a directory and cross filesystems. [2]" | PASS | - |
| 195 | Soft and Hard Links | Bangla | A symlink can point to a directory and cross filesystems [2] | "It can point to a directory and cross filesystems. [2]" | PASS | OK |
| 196 | Soft and Hard Links | Layman | Its target may be missing; then the link is dangling [2] | "Its target may be missing. Then the link is dangling. [2]" | PASS | - |
| 197 | Soft and Hard Links | Bangla | Its target may be missing; then the link is dangling [2] | "Its target may be missing. Then the link is dangling. [2]" | PASS | OK |
| 198 | Soft and Hard Links | Layman | A relative symlink resolves from the directory that holds the link, not from your current directory [23] | "A relative symlink resolves from the directory that holds the link, not from your current directory. [23]" | PASS | - |
| 199 | Soft and Hard Links | Bangla | A relative symlink resolves from the directory that holds the link, not from your current directory [23] | "A relative symlink resolves from the directory that holds the link, not from your current directory. [23]" | PASS | OK |
| 200 | Soft and Hard Links | Layman | `ln -s` makes a symlink [23] | "`-s` makes a symlink, and `-r` with `-s` makes the path relative to the link. [23]" | PASS | - |
| 201 | Soft and Hard Links | Bangla | `ln -s` makes a symlink [23] | "`-s` makes a symlink, and `-r` with `-s` makes the path relative to the link. [23]" | PASS | OK |
| 202 | Soft and Hard Links | Layman | `ls -i` prints the inode number; two names with one number are hard links [3][24] | "`ls -i` prints the inode number, and two names with one number are hard links. [3] [24]" | PASS | - |
| 203 | Soft and Hard Links | Bangla | `ls -i` prints the inode number; two names with one number are hard links [3][24] | "`ls -i` prints the inode number, and two names with one number are hard links. [3] [24]" | PASS | OK |
| 204 | Soft and Hard Links | Bangla | `stat` with `%h` prints the link count [4] | "`stat` with `%h` prints the link count. [4]" | PASS | OK |
| 205 | Soft and Hard Links | Layman | `-f` removes an existing destination file before `ln` makes the link [23] | "`-f` removes an existing destination file before `ln` makes the link. [23]" | PASS | - |
| 206 | Soft and Hard Links | Bangla | `-f` removes an existing destination file before `ln` makes the link [23] | "`-f` removes an existing destination file before `ln` makes the link. [23]" | PASS | OK |
| 207 | Soft and Hard Links | Layman | A wrong link name can destroy a real file; run `ls -l` on the name first | "A wrong link name can destroy a real file. Run `ls -l` on the name first." | PASS (The Layman text has the first sentence only (the `ls -l` advice is omitted).) | - |
| 208 | Soft and Hard Links | Bangla | A wrong link name can destroy a real file; run `ls -l` on the name first | "A wrong link name can destroy a real file. Run `ls -l` on the name first." | PASS | OK |
| 209 | Soft and Hard Links | Layman | Tutorial advice: use a symlink such as `current` to switch builds, with `ln -sfn releases/v3 current` | "Tutorial's own advice: use a symlink such as `current` to switch builds without changing test paths. Switch it with `ln -sfn releases/v3 current`." | PASS (The Layman text drops "without changing test paths".) | - |
| 210 | Soft and Hard Links | Bangla | Tutorial advice: use a symlink such as `current` to switch builds, with `ln -sfn releases/v3 current` | "Tutorial's own advice: use a symlink such as `current` to switch builds without changing test paths. Switch it with `ln -sfn releases/v3 current`." | PASS | OK |
| 211 | Soft and Hard Links | Bangla | Without `-n`, `ln` makes the new link inside the old target directory [23] | "Without `-n`, `ln` makes the new link inside the old target directory. [23]" | PASS | OK |
| 212 | Archiving and Compressing | Layman | An archive is one file that holds many files; compression makes data smaller | "An archive is one file that holds many files. Compression makes data smaller." | PASS | - |
| 213 | Archiving and Compressing | Bangla | An archive is one file that holds many files; compression makes data smaller | "An archive is one file that holds many files. Compression makes data smaller." | PASS | OK |
| 214 | Archiving and Compressing | Layman | `tar` makes archives and `gzip` compresses [25][26] | "`tar` makes archives, and `gzip` compresses. [25] [26]" | PASS | - |
| 215 | Archiving and Compressing | Bangla | `tar` makes archives and `gzip` compresses [25][26] | "`tar` makes archives, and `gzip` compresses. [25] [26]" | PASS | OK |
| 216 | Archiving and Compressing | Layman | With `-z`, `tar` passes the archive through `gzip` [25] | "With `-z`, `tar` passes the archive through `gzip`. [25]" | PASS | - |
| 217 | Archiving and Compressing | Bangla | With `-z`, `tar` passes the archive through `gzip` [25] | "With `-z`, `tar` passes the archive through `gzip`. [25]" | PASS | OK |
| 218 | Archiving and Compressing | Layman | `-c` creates, `-x` extracts, `-t` lists an archive [25] | "`-c`, `-x`, `-t` | Create, extract, or list an archive. [25]" | PASS | - |
| 219 | Archiving and Compressing | Bangla | `-c` creates, `-x` extracts, `-t` lists an archive [25] | "`-c`, `-x`, `-t` | Create, extract, or list an archive. [25]" | PASS | OK |
| 220 | Archiving and Compressing | Layman | `-f FILE` gives the name of the archive [25] | "`-f FILE` | The name of the archive. [25]" | PASS | - |
| 221 | Archiving and Compressing | Bangla | `-f FILE` gives the name of the archive [25] | "`-f FILE` | The name of the archive. [25]" | PASS | OK |
| 222 | Archiving and Compressing | Layman | `-C DIR` changes to `DIR` before the work [25] | "`-C DIR` | Change to `DIR` before the work. [25]" | PASS | - |
| 223 | Archiving and Compressing | Bangla | `-C DIR` changes to `DIR` before the work [25] | "`-C DIR` | Change to `DIR` before the work. [25]" | PASS | OK |
| 224 | Archiving and Compressing | Layman | `gzip` replaces each file with a `.gz` file, and `-k` keeps the original [26] | "`gzip` replaces each file with a `.gz` file, and `-k` keeps the original. [26]" | PASS | - |
| 225 | Archiving and Compressing | Bangla | `gzip` replaces each file with a `.gz` file, and `-k` keeps the original [26] | "`gzip` replaces each file with a `.gz` file, and `-k` keeps the original. [26]" | PASS | OK |
| 226 | Archiving and Compressing | Layman | ZIP is another format: it packs and compresses in one step [27] | "ZIP is another format: it packs and compresses in one step. [27]" | PASS | - |
| 227 | Archiving and Compressing | Bangla | ZIP is another format: it packs and compresses in one step [27] | "ZIP is another format: it packs and compresses in one step. [27]" | PASS | OK |
| 228 | Archiving and Compressing | Layman | Use `unzip` for a ZIP file with many members [26] | "Use `unzip` for a ZIP file with many members. [26]" | PASS | - |
| 229 | Archiving and Compressing | Bangla | Use `unzip` for a ZIP file with many members [26] | "Use `unzip` for a ZIP file with many members. [26]" | PASS | OK |
| 230 | Archiving and Compressing | Layman | Extraction can overwrite files that exist; extract an unknown archive into a new empty directory [28] | "Extraction can overwrite files that exist. Extract an unknown archive into a new empty directory. [28]" | PASS | - |
| 231 | Archiving and Compressing | Bangla | Extraction can overwrite files that exist; extract an unknown archive into a new empty directory [28] | "Extraction can overwrite files that exist. Extract an unknown archive into a new empty directory. [28]" | PASS | OK |
| 232 | Archiving and Compressing | Layman | Names that are absolute or start with `../` are often unsafe to extract [28] | "It is often unsafe to extract names that are absolute or start with `../`. [28]" | PASS | - |
| 233 | Archiving and Compressing | Bangla | Names that are absolute or start with `../` are often unsafe to extract [28] | "It is often unsafe to extract names that are absolute or start with `../`. [28]" | PASS | OK |
| 234 | Archiving and Compressing | Layman | `tar -c` also erases an existing archive with the same name [28] | "`tar -c` also erases an existing archive of the same name. [28]" | PASS | - |
| 235 | Archiving and Compressing | Bangla | `tar -c` also erases an existing archive with the same name [28] | "`tar -c` also erases an existing archive of the same name. [28]" | PASS | OK |
| 236 | Archiving and Compressing | Layman | List with `-t` first | "List with `-t` first." | PASS | - |
| 237 | Archiving and Compressing | Bangla | List with `-t` first | "List with `-t` first." | PASS | OK |
| 238 | Archiving and Compressing | Layman | Tutorial advice: pack the logs and reports of a CI run into one `.tar.gz` for upload; later run `tar -tzf` to prove it holds the files you expect | "Tutorial's own advice: pack the logs and reports of a CI run into one `.tar.gz` for upload. In a later step, run `tar -tzf` on it to prove that it holds the files you expect." | PASS | - |
| 239 | Archiving and Compressing | Bangla | Tutorial advice: pack the logs and reports of a CI run into one `.tar.gz` for upload; later run `tar -tzf` to prove it holds the files you expect | "Tutorial's own advice: pack the logs and reports of a CI run into one `.tar.gz` for upload. In a later step, run `tar -tzf` on it to prove that it holds the files you expect." | PASS | OK |

Open FAILs: 0

## Round 4 (2026-10-27): the lesson rewrite

Checker: independent voices checker (Sonnet 5.5, 2026-10-27). I did not write these voices. Page: `content/linux/files.mdx` at commit dccf5be, compared with its parent (`git diff dccf5be^ dccf5be -- content/linux/files.mdx`).

Method: I read all 9 sections (Goal, Core, Try it, tip, Go deeper) in Technical, Layman, and Bangla, and compared each sentence, number, command, flag, and path of a voice with the Technical panel of the same section as it is now (Try-it and Go deeper included). A script listed the `<Cite n>` set, the tip length (without `<Cite />`), and the Try-it code block equality of each panel. I read the old Layman and Bangla panels and checked each old fact against the new voice and the new Technical. `node --test tests/voice-source.test.ts` passes (22 of 22).

Script result: no voice cites an `n` that the Technical panel of the same section does not cite. Each voice Try-it code block (commands, comments, and output) equals the Technical one in all 9 sections, including Nano (`nano --version | head -n 1`) and Vim (`vi -es -c '1d' -c 'q!'`, then `-c 'wq'`). The largest tip is 150 characters (Technical Moving, Bangla Working with Files). No voice has a Markdown heading. Each voice has the same parts and order as Technical, with bold labels `**Goal:**` / `**লক্ষ্য:**` and `**Try it:**` / `**চেষ্টা করুন:**`.

Data-loss warnings (the old danger callouts, now Core sentences): all are present in Layman and Bangla.
- Working with Files: `rm` has no recycle bin ([5]).
- Creating: `rm -r` deletes everything inside, `-f` never asks, `>` cuts a file to zero ("Be careful." / "সাবধান থাকুন।").
- Copying and Moving: `cp` and `mv` replace the destination with no prompt, check with `ls` or use `-i`.
- Editing: `>` in place of `>>` erases the config, make a backup with `cp -p`.
- Vim: `:q!` drops all changes, and no backup file unless you set it up.
- Links: `ln -f` removes the destination file.
- Archiving: extraction can overwrite files, use a new empty directory. The `tar -c` erase is in Go deeper in all 3 voices, as in Technical.

| # | Topic | Voice | Verdict | Evidence / Fix |
|---|---|---|---|---|
| 1 | Working with Files | Layman | PASS | Same Goal, Core (inode, hard link, `stat -c`, no recycle bin), Try-it, and tip. Cites {1,2,3,4,5} equal Technical. Go deeper has `ls -l`/`ls -li` and `%i`. It omits the CI `ls -l` clause (observation). |
| 2 | Working with Files | Bangla | PASS | Same facts and cites. Correct Bangla. Keeps the CI `ls -l` clause ("একটি সস্তা check"). Tip 150 characters. |
| 3 | Creating Files and Directories | Layman | PASS | Same facts: `touch`, `mkdir -p`, `>`. The warning "Be careful." keeps `rm -r`, `-f`, `>` to zero size, and the `ls` advice. Cites {6,7,8,9,10}. Go deeper restates the Technical table as 3 bullets with the same cites. |
| 4 | Creating Files and Directories | Bangla | PASS | Same facts and cites. Warning kept. "`-p` দিলে ... parent directory-গুলোও তৈরি করে" is correct. Omits the `touch -d` tip, as Layman does (observation). |
| 5 | Copying and Renaming | Layman | PASS | Same facts: independent copy, last argument a directory, silent overwrite for `cp` and `mv`, `-i`. Cites {11,12,13}. Go deeper lists `-i`, `-n` (deprecated, `--update=none`), `-p`, `-a`, `-v` with cite [11]. The tip omits "Use `cp -p` or `cp -a`" (observation). |
| 6 | Copying and Renaming | Bangla | PASS | Same facts, cites, and tip (with `cp -p` / `cp -a`). Correct Bangla: "পুরোনো content সাথে সাথে হারিয়ে যায়". `-n` exit-status reason kept. |
| 7 | Moving Files and Directories | Layman | PASS | Same facts: `mv` into a directory, `*.log`, no warning on overwrite, check with `ls`. The filesystem gloss restates the Technical gloss. Cites {12,13}. The tip keeps the point (same filesystem, fast rename). Omits `mv -t` and `mv -i` (observation). |
| 8 | Moving Files and Directories | Bangla | PASS | Same facts and cites. Correct Bangla. Go deeper keeps the cross-filesystem copy, the partial-copy removal, and the `/tmp` note. |
| 9 | Editing Files | Layman | PASS | Same facts: editors, `>>` vs `>`, the typo warning and `cp -p` backup, here document. Cites {8,14,15}. Go deeper has no new fact. The tip keeps "a CI step must write files with redirection". |
| 10 | Editing Files | Bangla | PASS | Same facts and cites. "`>>`-এর জায়গায় ভুল করে `>` লিখলে আপনার config মুছে যায়" keeps the warning. Correct Bangla. The "live host" tip is kept. |
| 11 | Nano | Layman | PASS | Same Goal, keys (`^`, `^O`, `^X`, `Y`/`N`), and Try-it (`nano --version`, with the "command not found" comment). Cites {14,16,17}. Go deeper has `M-`, `^K`/`^U`/`^W`/`^G`, `^C Cancel`, "Modified", `+42`, `-v`. Omits `-%` and the nanorc remark (observation). Tip 126. |
| 12 | Nano | Bangla | PASS | Same facts and cites. Correct Bangla ("Caret `^` মানে Ctrl", "Buffer-এ (memory-তে থাকা text)"). Keys and `-v` stay in English. The `^C Cancel` sentence is kept. |
| 13 | Vim | Layman | PASS | Same facts: modes, `i`/`Esc`, `:`, buffer, "no backup file unless you set it up", `:q!` drops all changes. The Try-it block equals Technical (`vi -es -c '1d' -c 'q!'`, then `-c 'wq'`), and "Your `vi` must be Vim." is kept. Cites {18,19,20,21} are a subset of Technical ({22} is the VIM Adventures sentence, left out). Omits "After `ZZ`, there is no turning back" (Go deeper in Technical). The old Layman also did not have it. Observation. |
| 14 | Vim | Bangla | PASS | Same facts and cites {18,19,20,21,22}. "`:q!` সব পরিবর্তন বাদ দেয়, আর আপনি set up না করলে Vim কোনো backup file তৈরি করে না" keeps both warnings. "`ZZ`-এর পরে ফেরার পথ নেই" is kept. Correct Bangla. |
| 15 | Soft and Hard Links | Layman | PASS | Same facts: hard link shares the inode, data stays while one name remains, symlink holds a path, dangling, `ln -f` warning. Cites {1,2,3,4,23,24} equal Technical. `ln -sfn releases/v3 current` is in the Technical code block. The Try-it text keeps `%i` and `%h`. |
| 16 | Soft and Hard Links | Bangla | PASS | Same facts and cites. `ln -f` warning kept. Correct Bangla. Go deeper keeps the "without `-n`" sentence with [23]. |
| 17 | Archiving and Compressing | Layman | PASS | Same facts: `tar`, `gzip`, `-z`, `-c`/`-t`/`-x`/`-f`, `-C DIR`, the extraction overwrite warning with [28], `gzip -k`, ZIP, `unzip`, unsafe names, `tar -c` erase. Cites {25,26,27,28}. The tip drops "for upload" (observation). |
| 18 | Archiving and Compressing | Bangla | PASS | Same facts and cites. Warning kept in Core. Correct Bangla ("Absolute নাম বা `../` দিয়ে শুরু হওয়া নাম extract করা প্রায়ই unsafe"). Commands and flags stay in English. |

Observations (not FAILs):
- Omissions in Layman and Bangla, all of them not warnings: the `touch -d` tip (both), the CI `ls -l` clause (Layman), "Use `cp -p` or `cp -a`" in the tip (Layman), `mv -t` and `mv -i` and the code blocks of Go deeper (both), `-%` and the nanorc remark (both), "for upload" in the Archiving tip (both), `gzip -d` (both; Technical gives it only in a code comment), and VIM Adventures [22] (Layman).
- Vim, both voices: "Vim reads the file into a buffer" uses the word "reads". Technical says "changes a buffer, the copy of the file in memory". The meaning is the same, and the old Technical text had "reads". Optional: no change.
- Vim Try-it comments (`-es`, `-c`, `1d`) are the same in all 3 voices and have no cite. This is the writer's note in the report. A source for `-es`/`-c` is not in `page.sources`; this concerns the Technical fact-check, not the voices.
- The Bangla Try-it comments stay in English (the same as Technical). Allowed.
- Layman jargon: "inode", "hard link", "buffer", "here document", and "filesystem" are explained in the text. "fixture" is explained in the page lede only.
- All tips are at most 150 characters in all 3 voices. A flag that a Try-it explains (`%n %s %h`, `-p`, `-C DIR`, `--version`, `-es`, `%i`) is explained in the Try-it text or comment of each voice.

Open FAILs: 0

## Round 5 (2026-10-27): the fix rounds

Checker: an independent agent (Sonnet 5.5, 2026-10-27), commit c8cd682, amended at commit 251997e (HEAD) for R5-8 and R5-9. I did not write or fix these voices. Diff base: dccf5be (`git diff -U2 dccf5be HEAD -- content/linux/files.mdx`). `node --test tests/voice-source.test.ts` passes (22 of 22). `lessoncheck.mjs files`: 0 problems. A script counted the words before `<details>` and the tip characters (without `<Cite />`) of every panel, and the `<Cite n>` sets.

Changed hunks: the 24 Try-it cleanup blocks (code equal in the 3 voices of each topic), the Nano Goal, the Vim Try-it sentence (and the deleted comment line), and the Archiving Core and Go deeper. Round 4 had 0 open voices FAILs, so there is no voices FAIL to re-check. The Round 4 Technical FAILs that touch the voices (R4-50, R4-60 to R4-62, R4-84, R4-85, R4-86) were applied in the same way to Layman and Bangla (rows below).

| # | Topic | Voice | Verdict | Evidence / Fix |
|---|---|---|---|---|
| R5-1 | Nano | Layman | PASS | Goal "Check that nano is installed, and learn the keys that save and exit." The Core gives `^O`, `^X`, `Y`, `N` with cites 16, 17, 14 (all cited by Technical). 124 words. |
| R5-2 | Nano | Bangla | PASS | Goal "দেখুন nano install করা আছে কিনা, আর save করে বের হওয়ার key-গুলো শিখুন।" Correct and natural. Cites {14,16,17}. 116 words. |
| R5-3 | Vim | Layman | PASS | The Try-it sentence "delete line 1 with batch commands, then quit with `:q!` or with `:wq`" equals Technical. The comment line with `-es` is deleted. The code equals Technical. Cites {18,19,20,21} are a subset of Technical. 150 words (the limit). |
| R5-4 | Vim | Bangla | PASS | "batch command দিয়ে line 1 মুছুন, তারপর `:q!` অথবা `:wq` দিয়ে বের হন।" Correct. Commands stay in English. 138 words. |
| R5-5 | Archiving and Compressing | Layman | PASS | Core has the unsafe names (`../`, absolute) and "`tar -c` erases an existing archive with the same name", cite 28 (in Technical). The `-z` and compression sentence is in Go deeper with cite 25 (Technical cites 25). No new fact. 139 words, tip 110. |
| R5-6 | Archiving and Compressing | Bangla | PASS | "Absolute নাম বা `../` দিয়ে শুরু হওয়া নাম extract করা প্রায়ই unsafe" and "`tar -c` একই নামের existing archive মুছে দেয়।" are correct. Go deeper has the `-z` sentence with cite 25. 132 words. |
| R5-7 | All changed topics | Layman and Bangla | PASS | 16 Try-it blocks (8 topics x 2 voices): standard pattern, equal to Technical. I ran the 8 different blocks: all as the page shows (see the Technical report). Tips: Layman 105 to 135 characters; the Bangla tips (titled "টেস্টিং-এ কেন দরকার") are 223 to 288 bytes, which is at most about 96 characters, and the tips did not change. |
| R5-8 | Working with Files | Layman | FIXED | Commit 251997e (HEAD): "`rm` has no recycle bin, so a removal is final." (cite 5 kept) and "Each file has an inode. It is a record of the metadata of the file, such as its owner, size, and timestamps." (cite 1). "It" points to the inode, so the sentence is correct and no fact is lost. The count is now 150 words (was 152). |
| R5-9 | Soft and Hard Links | Layman | FIXED | Commit 251997e: "If its target is missing, the link is "dangling"." (cite 2 kept). Same meaning as before. The count is now 150 words (was 151). |
| R5-10 | All changed topics | Bangla | PASS | No new Cite number; no Bangla block cites an `n` that Technical does not cite. The Bangla Vim set {18..22} equals Technical. |

Observation (not a FAIL): the Archiving Core and Go deeper both give the two warnings in all 3 voices. Optional: delete the two repeated Go deeper bullets.

Re-count at 251997e with the same counter: every Layman and Bangla panel of the stage is 150 words or fewer (Layman 118 to 150, Bangla 108 to 140). `lessoncheck.mjs files`: 9 topics, 0 problems. `node --test tests/voice-source.test.ts`: 22 of 22 pass.

Open FAILs: 0
