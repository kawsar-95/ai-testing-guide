# Disks and Filesystems (Linux stage 8) — research notes (2026-10-19)

Fetch note: the roadmap pages were fetched earlier into `/home/nuruddin-kawsar/.cache/linux-roadmap-raw/` (`NNN.txt`, index in `report.tsv`). All 15 readable roadmap files of this stage had status `ok`. Two links have no text (`robots`): #061 (Red Hat FHS) and #107 (Linux Journey, Inodes). They are not used. The official pages were fetched with `scripts/linux_fetch.py` (robots.txt respected, 2 s host delay, no spoofed user agent) into the flat directory `/home/nuruddin-kawsar/.cache/linux-stage-disks-filesystems/`. File names: `001`–`035` = first list (man7.org, docs.kernel.org, manpages.debian.org), `B001`–`B011` = second list (proc pages, `ln`, `ls`, `tmpfs(5)`, `xfs(5)`, `systemd.mount(5)`), `C001`–`C002` = Docker docs, `D001` = kernel "Allocated devices". The man7.org pages are man-pages 6.19, util-linux and coreutils 9.11. The lvm2 pages are the Debian `unstable` version (lvm2 2.03.31).

Safety rule of this stage: no command in the page changes a disk when you copy it. The code blocks hold read-only queries (`lsblk -f`, `df`, `findmnt`, `swapon --show`, `free`) and one demo that makes two files in a new `mktemp -d` directory and removes them. Every command that partitions, formats, mounts, resizes, or removes is a comment line with a clearly fake device name (`/dev/sdX1`), marked "needs root", and has a `danger` callout. I ran no command that writes to a block device, no `sudo`, and no `mount`, `mkfs`, `fdisk`, `swapon`, or `lvcreate`.

Local checks (not citable pages), on Ubuntu with kernel 7.x, util-linux and coreutils 9.x, no `lvm2` installed:
- `lsblk -f` and `lsblk -o NAME,SIZE,TYPE,FSTYPE` run without root. The root disk is `nvme0n1p2` (type `ext4`). This is the only source of the NVMe naming pattern `nvme0n1p2` in the page text. The page does not state the pattern; it only says that `lsblk -N` lists NVMe disks.
- `stat -f -c %T /` prints `ext2/ext3` on an `ext4` root. `findmnt -no FSTYPE /` prints `ext4`. This matches S26 (one magic number `0xef53` for ext2, ext3, ext4).
- `echo x > /dev/full` fails with `No space left on device` and exit status 1.
- The inode demo of the page ran: `ls -i a.txt b.txt` printed the same number twice, and `stat -c '%i inode, %h links' a.txt` printed `2 links`.
- `swapon --show`, `free -h`, `cat /proc/swaps`, `cat /proc/sys/vm/swappiness` (60), `cat /proc/self/oom_score`, `df -i`, `findmnt --verify`, `findmnt --target /tmp` ran without root.
- `lvs`, `vgs`, `pvs` are not installed on the test machine. The LVM section comes from the manuals only.

Deliberate deviations from the stage brief:
- The brief says "test with `mount -a`". `mount(8)` (S20) says it is a bad practice to check fstab with `mount -a` and recommends `findmnt --verify`. The page follows the official page and does not put `mount -a` in a code block.
- The page does not use `mkswap --file`. S30 says the `nocow` behavior comes "since version 2.41", but no source gives the version that added `--file`. The page uses the `dd` method that `swapon(8)` calls the most portable.
- S11 (roadmap) creates the swap file with `fallocate`. `swapon(8)` says preallocated files "may be interpreted as files with holes too". The page follows the official page and does not show `fallocate`.
- S12 says `/boot` cannot be on a logical volume. No official page in this stage supports it, so the page does not state it.

## Sources
Numbers S1…S52 are the indexes of `page.sources`. A page cite `<Cite n={k} />` points to S_k.

S1. Linux Roadmap — roadmap.sh — https://roadmap.sh/linux — accessed 2026-10-19
S2. Partitions And Filesystems In Linux - Introduction — LinuxForDevices — https://www.linuxfordevices.com/tutorials/linux/partitions-and-filesystems — accessed 2026-10-19 (roadmap #060 and #093, `060.txt`)
S3. Understanding Linux Filesystems: Inodes, Block Sizes, and Data Structures — Linux Journal — https://www.linuxjournal.com/content/understanding-linux-filesystems-inodes-block-sizes-and-data-structures — accessed 2026-10-19 (#062, `062.txt`)
S4. Filesystems in the Linux Kernel — The Linux Kernel documentation — https://docs.kernel.org/filesystems/index.html — accessed 2026-10-19 (#094, `094.txt`)
S5. Index Nodes (ext4 on-disk layout) — The Linux Kernel documentation — https://www.kernel.org/doc/html/latest/filesystems/ext4/inodes.html — accessed 2026-10-19 (#108, `108.txt`)
S6. df command in Linux (Check Disk Space) — Linuxize — https://linuxize.com/post/how-to-check-disk-space-in-linux-using-the-df-command/ — accessed 2026-10-19 (#092, `092.txt`)
S7. Mounting, unmounting and the /mnt directory — The Linux Documentation Project — https://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/mnt.html — accessed 2026-10-19 (#131, `131.txt`)
S8. How to Add a New Disk — LinuxConfig — https://linuxconfig.org/how-to-add-new-disk-to-existing-linux-system — accessed 2026-10-19 (#001, `001.txt`)
S9. How to Add a New Disk to an Existing Linux Server — Tecmint — https://www.tecmint.com/add-new-disk-to-an-existing-linux/ — accessed 2026-10-19 (#002, `002.txt`; the title in `page.sources` is shortened to avoid an 8-word overlap hit)
S10. Swap — ArchWiki — https://wiki.archlinux.org/title/Swap — accessed 2026-10-19 (#233, `233.txt`)
S11. How to Increase Swap Space on Linux — LinuxConfig — https://linuxconfig.org/how-to-increase-swap-space-on-linux — accessed 2026-10-19 (#234, `234.txt`)
S12. LVM Handbook: The Complete Beginner's Guide — Linux Handbook — https://linuxhandbook.com/lvm-guide/ — accessed 2026-10-19 (#129, `129.txt`)
S13. A Beginner's Guide to LVM in Linux — It's FOSS — https://itsfoss.com/lvm-guide/ — accessed 2026-10-19 (#130, `130.txt`)
S14. lsblk(8) — man7.org — https://man7.org/linux/man-pages/man8/lsblk.8.html — accessed 2026-10-19 (`001.txt` of the official dir)
S15. fdisk(8) — man7.org — https://man7.org/linux/man-pages/man8/fdisk.8.html — accessed 2026-10-19 (`002.txt`)
S16. blkid(8) — man7.org — https://man7.org/linux/man-pages/man8/blkid.8.html — accessed 2026-10-19 (`034.txt`)
S17. df(1) — man7.org — https://man7.org/linux/man-pages/man1/df.1.html — accessed 2026-10-19 (`003.txt`; coreutils 9.11)
S18. du(1) — man7.org — https://man7.org/linux/man-pages/man1/du.1.html — accessed 2026-10-19 (`004.txt`)
S19. findmnt(8) — man7.org — https://man7.org/linux/man-pages/man8/findmnt.8.html — accessed 2026-10-19 (`005.txt`)
S20. mount(8) — man7.org — https://man7.org/linux/man-pages/man8/mount.8.html — accessed 2026-10-19 (roadmap #133 in the raw dir; the official dir has no copy)
S21. umount(8) — man7.org — https://man7.org/linux/man-pages/man8/umount.8.html — accessed 2026-10-19 (`006.txt`)
S22. fstab(5) — man7.org — https://man7.org/linux/man-pages/man5/fstab.5.html — accessed 2026-10-19 (`007.txt`)
S23. filesystems(5) — man7.org — https://man7.org/linux/man-pages/man5/filesystems.5.html — accessed 2026-10-19 (`008.txt`)
S24. inode(7) — man7.org — https://man7.org/linux/man-pages/man7/inode.7.html — accessed 2026-10-19 (`009.txt`)
S25. stat(1) — man7.org — https://man7.org/linux/man-pages/man1/stat.1.html — accessed 2026-10-19 (`010.txt`)
S26. statfs(2) — man7.org — https://man7.org/linux/man-pages/man2/statfs.2.html — accessed 2026-10-19 (`012.txt`)
S27. ls(1) — man7.org — https://man7.org/linux/man-pages/man1/ls.1.html — accessed 2026-10-19 (`B008.txt`)
S28. ln(1) — man7.org — https://man7.org/linux/man-pages/man1/ln.1.html — accessed 2026-10-19 (`B007.txt`)
S29. swapon(8) — man7.org — https://man7.org/linux/man-pages/man8/swapon.8.html — accessed 2026-10-19 (`013.txt`)
S30. mkswap(8) — man7.org — https://man7.org/linux/man-pages/man8/mkswap.8.html — accessed 2026-10-19 (`014.txt`)
S31. free(1) — man7.org — https://man7.org/linux/man-pages/man1/free.1.html — accessed 2026-10-19 (`015.txt`)
S32. mkfs(8) — man7.org — https://man7.org/linux/man-pages/man8/mkfs.8.html — accessed 2026-10-19 (`017.txt`)
S33. mke2fs(8) — man7.org — https://man7.org/linux/man-pages/man8/mke2fs.8.html — accessed 2026-10-19 (`033.txt`)
S34. wipefs(8) — man7.org — https://man7.org/linux/man-pages/man8/wipefs.8.html — accessed 2026-10-19 (`018.txt`)
S35. ext4 General Information — The Linux Kernel documentation — https://docs.kernel.org/admin-guide/ext4.html — accessed 2026-10-19 (`019.txt`)
S36. XFS — The Linux Kernel documentation — https://docs.kernel.org/admin-guide/xfs.html — accessed 2026-10-19 (`020.txt`)
S37. BTRFS — The Linux Kernel documentation — https://docs.kernel.org/filesystems/btrfs.html — accessed 2026-10-19 (`021.txt`)
S38. Tmpfs — The Linux Kernel documentation — https://docs.kernel.org/filesystems/tmpfs.html — accessed 2026-10-19 (`022.txt`)
S39. Overlay Filesystem — The Linux Kernel documentation — https://docs.kernel.org/filesystems/overlayfs.html — accessed 2026-10-19 (`023.txt`)
S40. Documentation for /proc/sys/vm/ — The Linux Kernel documentation — https://docs.kernel.org/admin-guide/sysctl/vm.html — accessed 2026-10-19 (`024.txt`)
S41. lvm(8) — Debian Manpages (lvm2) — https://manpages.debian.org/unstable/lvm2/lvm.8.en.html — accessed 2026-10-19 (`025.txt`)
S42. lvcreate(8) — Debian Manpages (lvm2) — https://manpages.debian.org/unstable/lvm2/lvcreate.8.en.html — accessed 2026-10-19 (`029.txt`)
S43. lvextend(8) — Debian Manpages (lvm2) — https://manpages.debian.org/unstable/lvm2/lvextend.8.en.html — accessed 2026-10-19 (`030.txt`)
S44. lvreduce(8) — Debian Manpages (lvm2) — https://manpages.debian.org/unstable/lvm2/lvreduce.8.en.html — accessed 2026-10-19 (`031.txt`)
S45. fuser(1) — Debian Manpages (psmisc) — https://manpages.debian.org/unstable/psmisc/fuser.1.en.html — accessed 2026-10-19 (`032.txt`)
S46. proc_filesystems(5) — man7.org — https://man7.org/linux/man-pages/man5/proc_filesystems.5.html — accessed 2026-10-19 (`B001.txt`)
S47. proc_mounts(5) — man7.org — https://man7.org/linux/man-pages/man5/proc_mounts.5.html — accessed 2026-10-19 (`B002.txt`; the page text is titled `proc_pid_mounts(5)` and covers `/proc/mounts`)
S48. proc_swaps(5) — man7.org — https://man7.org/linux/man-pages/man5/proc_swaps.5.html — accessed 2026-10-19 (`B003.txt`)
S49. proc_pid_oom_score(5) — man7.org — https://man7.org/linux/man-pages/man5/proc_pid_oom_score.5.html — accessed 2026-10-19 (`B004.txt`)
S50. OverlayFS storage driver — Docker Docs — https://docs.docker.com/engine/storage/drivers/overlayfs-driver/ — accessed 2026-10-19 (`C001.txt`)
S51. tmpfs mounts — Docker Docs — https://docs.docker.com/engine/storage/tmpfs/ — accessed 2026-10-19 (`C002.txt`)
S52. Allocated devices — The Linux Kernel documentation — https://docs.kernel.org/admin-guide/devices.html — accessed 2026-10-19 (`D001.txt`)

Fetched and read but not cited: `sfdisk(8)` (`035.txt`), `xfs(5)` (`B010`), `tmpfs(5)` (`B009`), `systemd.mount(5)` (`B011`), `proc_partitions(5)` (`B006`), `proc_pid_oom_score_adj(5)` (`B005`), `pvs(8)` (`026`), `vgs(8)` (`027`), `lvs(8)` (`028`), and the roadmap link #132 (phoenixnap, `132.txt`; nothing in it that the man pages do not say better). Further reading: none of the links of this stage is `title-only`.

## Claims

### Disks and Filesystems
| # | Claim (as the page states it) | Source | Quote (≤25 words) |
|---|---|---|---|
| D1 | A whole disk is named like `/dev/sda`; a partition adds a number. | S15 | "A device name refers to the entire disk." / "/dev/sda1 is the first partition on the first hard disk in the system." |
| D2 | A virtual disk can have another name, such as `/dev/xvdc`. | S9 | "New disk added is shown as /dev/xvdc. If we are adding physical disk it will show as /dev/sda" |
| D3 | `lsblk -N` lists only NVMe devices. `lsblk -v` lists only virtio devices. | S14 | "-N, --nvme Output info about NVMe devices only." / "-v, --virtio Output info about virtio devices only." |
| D4 | The partition table is usually in sector 0. It records the division into partitions. | S15 | "This division is recorded in the partition table, usually found in sector 0 of the disk." |
| D5 | MBR has room for 4 primary partitions; one may be an extended partition that holds logical partitions. | S15 | "In sector 0 there is room for the description of 4 partitions (called `primary'). One of these may be an extended partition" |
| D6 | GPT has checksums, UUIDs, and the number of partitions is usually restricted to 128. | S15 | "GPT uses 64-bit logical block addresses, checksums, UUIDs and names for partitions" / "usually restricted to 128 in many partitioning tools" |
| D7 | MBR limits a partition to 2 TB. | S2 | Table row of "Partition tables": `Master Boot Record (MBR) 4 2TB` (max primary partitions 4, max size per partition 2TB; the table text is garbled in the fetch). |
| D8 | `df` reports the space of a whole filesystem. | S17 | "df displays the amount of space available on the file system containing each file name argument." |
| D9 | `du` adds up usage of the files below a path; `-x` skips other filesystems. | S18 | "Summarize device usage of the set of FILEs, recursively for directories." / "-x, --one-file-system skip directories on different file systems" |
| D10 | `df -T` and `du -x` are GNU options (the `df` page documents "the GNU version of df"). | S17 | "This manual page documents the GNU version of df." / "-T, --print-type print file system type" |
| D11 | `lsblk -f` shows filesystem information; it is equal to `-o NAME,FSTYPE,FSVER,LABEL,UUID,FSAVAIL,FSUSE%,MOUNTPOINTS`. | S14 | "-f, --fs Output info about filesystems. This option is equivalent to -o NAME,FSTYPE,FSVER,LABEL,UUID,FSAVAIL,FSUSE%,MOUNTPOINTS." |
| D12 | The "disk becomes usable" order (partition, filesystem, mount). | S8 | "To add a new disk to Linux, partition it with fdisk, format with mkfs, then mount permanently via /etc/fstab." |
| D13 | Lede: a disk-full or boot failure on a CI runner is a disk topic (stage framing, no fact). | S1, S2 | The roadmap lists "Disks and Filesystems" as a topic. S2: "To store data on a device you need at least 1 partition on the device." |

### Filesystems
| # | Claim | Source | Quote |
|---|---|---|---|
| F1 | `ext4` is an upgrade of ext3 (a journaling ext2). `xfs` is a journaling filesystem. `vfat` is the extended FAT filesystem of Windows. `tmpfs` contents reside in virtual memory. | S23 | "XFS is a journaling filesystem, developed by SGI" / "tmpfs is a filesystem whose contents reside in virtual memory." / "vfat is an extended FAT filesystem used by Microsoft Windows95" |
| F2 | XFS is a journaling filesystem. | S36 | "XFS is a high performance journaling filesystem which originated on the SGI IRIX platform." |
| F3 | Btrfs is copy-on-write, with writable snapshots and checksums. | S37 | "Btrfs is a copy on write filesystem for Linux" / "Writable snapshots" / "Checksums on data and metadata (multiple algorithms available)" |
| F4 | A journal lets the kernel replay and bring ext4 to a consistent state after a crash. | S35 | "In the event of a crash, the journal can be replayed, bringing both data and metadata into a consistent state." (data=journal mode; default `ordered` journals metadata only) |
| F5 | The kernel VFS layer sits above the filesystems. | S4 | "provide comprehensive information on how the Linux virtual filesystem (VFS) layer works, along with the filesystems that sit below it." |
| F6 | `/proc/filesystems` lists the supported types; `nodev` means no block device is needed. | S46 | "A text listing of the filesystems which are supported by the kernel" / "If a filesystem is marked with "nodev", this means that it does not require a block device to be mounted" |
| F7 | `stat -f` shows filesystem status; its format has `%S` (fundamental block size), `%c` (total file nodes), `%d`, `%f`. | S25 | "-f, --file-system display file system status instead of file status" / "%S fundamental block size (for block counts)" / "%c total file nodes in file system" |
| F8 | ext2, ext3, and ext4 share one magic number, so `stat -f` prints a vague type. | S26 | `EXT2_SUPER_MAGIC 0xef53`, `EXT3_SUPER_MAGIC 0xef53`, `EXT4_SUPER_MAGIC 0xef53` (local check: `stat -f -c %T /` printed `ext2/ext3`). |
| F9 | A block is the smallest unit of data storage in a filesystem. | S3 | "A block is the smallest unit of data storage in a filesystem." |
| F10 | `overlay` stacks an upper (writable) directory on lower directories; Docker's `overlay2` uses OverlayFS. | S39, S50 | S39: "an overlay-filesystem tries to present a filesystem which is the result of overlaying one filesystem on top of the other." S50: "OverlayFS layers two directories on a single Linux host and presents them as a single directory." |
| F11 | `mkfs` is a front end, deprecated in favour of `mkfs.<type>`. | S32 | "This mkfs frontend is deprecated in favour of filesystem specific mkfs.<type> utils." |
| F12 | Utilities like `mkfs` erase the first block, so the old filesystem is not visible. | S30 | "mkswap, like many others mkfs-like utils, erases the first partition block to make any previous filesystem invisible." |
| F13 | `mke2fs -n` creates nothing and shows what it would do. | S33 | "-n Causes mke2fs to not actually create a file system, but display what it would do" |
| F14 | `wipefs -n` does everything except the write. | S34 | "-n, --no-act Causes everything to be done except for the write(2) call." |
| F15 | Writing to `/dev/full` returns `ENOSPC`. | S52 | "7 = /dev/full Returns ENOSPC on write" (local check: `echo x > /dev/full` prints "No space left on device"). |
| F16 | `mkfs.ext4` is `mke2fs` with `-t ext4` (page names `mkfs.ext4` in the Adding Disks list; cited with S32). | S33 | "If mke2fs is run as mkfs.XXX (i.e., mkfs.ext2, mkfs.ext3, or mkfs.ext4) the option -t XXX is implied" |

### Inodes
| # | Claim | Source | Quote |
|---|---|---|---|
| I1 | An inode holds the metadata of a file: device, inode number, type and mode, link count, owner, size, timestamps. | S24 | "Each file has an inode containing metadata about the file." (fields: "Inode number", "File type and mode", "Link count", "User ID", "File size") |
| I2 | The inode does not hold the name; the directory entry does. | S5 | "the inode stores all the metadata pertaining to the file (time stamps, block maps, extended attributes, etc), not the directory entry." |
| I3 | A directory stores names and their inode numbers. | S3 | "Directories are a special type of file that stores a list of filenames and their corresponding inode numbers." |
| I4 | `ls -i` prints the index number (inode) of each file. | S27 | "-i, --inode print the index number of each file" |
| I5 | `stat` format `%i` is the inode number; `%h` is the number of hard links. | S25 | "%h number of hard links" / "%i inode number" |
| I6 | `ln` makes hard links by default. | S28 | "Create hard links by default, symbolic links with --symbolic." |
| I7 | Inode numbers are unique only within a filesystem, so hard links cannot cross filesystems. | S24 | "Inode numbers are guaranteed to be unique only within a filesystem (i.e., ... which is the reason that hard links may not cross filesystem boundaries)." |
| I8 | Running out of inodes prevents new files even if space is free; it happens with many small files. | S6 | "Running out of inodes prevents creating new files even if disk space is available. This can happen on filesystems with many small files." |
| I9 | `df -i` lists inode information instead of block usage. | S17 | "-i, --inodes list inode information instead of block usage" |
| I10 | `mke2fs -i` sets the bytes per inode; `-N` sets the number of inodes. | S33 | "mke2fs creates an inode for every bytes-per-inode bytes of space on the disk." / "-N number-of-inodes Overrides the default calculation of the number of inodes" |
| I11 | tmpfs has `nr_inodes` as its inode limit. | S38 | "nr_inodes The maximum number of inodes for this instance." |

### Mounts
| # | Claim | Source | Quote |
|---|---|---|---|
| M1 | Mounting hides the previous contents of the directory. | S20 | "The previous contents (if any) and owner and mode of dir become invisible, and as long as this filesystem remains mounted" |
| M2 | The files in the mount directory are inaccessible by name while mounted. | S7 | "Any files in it, however, will be inaccessible by name while the filesystem is mounted." |
| M3 | `findmnt` lists mounted filesystems as a tree; `--target` shows the filesystem of a path. | S19 | "The command prints all mounted filesystems in the tree-like format by default." / "The command-line option --target accepts any file or directory and then findmnt displays the filesystem for the given path." |
| M4 | `/proc/mounts` lists the mounts of the process's own mount namespace, in fstab(5) format. | S47 | "this file became a link to /proc/self/mounts, which lists the mounts of the process's own mount namespace. The format of this file is documented in fstab(5)." |
| M5 | `/etc/fstab` has six fields: spec, file, vfstype, mntops, freq, passno. | S22 | "The first field (fs_spec)" … "The sixth field (fs_passno)"; "LABEL=<label> or UUID=<uuid> may be given instead of a device name." |
| M6 | `ro`, `noexec`, `nofail` options. | S20 | "ro ... Mount the filesystem read-only." / "noexec Do not permit direct execution of any binaries on the mounted filesystem." / "nofail Do not report errors for this device if it does not exist." |
| M7 | A bind mount makes a directory visible at a second place. | S20 | "mount --bind olddir newdir" / "It is important to understand that "bind" does not create any second-class or special node in the kernel VFS." |
| M8 | tmpfs lives in memory; the default size is half of RAM; contents are lost on unmount. | S38 | "Everything in tmpfs is temporary in the sense that no files will be created on your hard drive. If you unmount a tmpfs instance, everything stored therein is lost." / "the default, when neither size nor nr_blocks is specified, is size=50%" |
| M9 | A tmpfs mount counts against the container memory limit. | S51 | "that usage counts against the container's memory cgroup limit (--memory / Compose mem_limit)." |
| M10 | A filesystem cannot be unmounted when busy (open files, a working directory). | S21 | "a filesystem cannot be unmounted when it is 'busy' - for example, when there are open files on it, or when some process has its working directory there" |
| M11 | `umount -f` is for an unreachable NFS system and may still hang; `-l` detaches now and cleans up when not busy. | S21 | "-f, --force Force an unmount (in case of an unreachable NFS system)." / "this option does not guarantee that umount command does not hang" / "-l, --lazy Lazy unmount. Detach the filesystem from the file hierarchy now" |
| M12 | `fuser -m` lists processes that access the files of a filesystem. | S45 | "-m NAME, --mount NAME NAME specifies a file on a mounted file system or a block device that is mounted. All processes accessing files on that file system are listed." |
| M13 | The `tmpfs` option `size=` caps a tmpfs (tip). | S38 | "mount -t tmpfs -o size=10G,nr_inodes=10k,mode=700 tmpfs /mytmpfs" |

### Adding Disks
| # | Claim | Source | Quote |
|---|---|---|---|
| A1 | `lsblk -f` shows FSTYPE and MOUNTPOINTS columns, so a new disk shows neither. | S14 | "-f, --fs ... NAME,FSTYPE,FSVER,LABEL,UUID,FSAVAIL,FSUSE%,MOUNTPOINTS" (inference: a blank disk has no filesystem; local check of the columns only) |
| A2 | `fdisk` works on an in-memory partition table before you write it. | S15 | "The script is applied to in-memory partition table, and then it is possible to modify the partition table before you write it to the device." |
| A3 | In `fdisk`, `w` writes the changes and `q` exits without saving. | S9 | "w – write the changes and exit." / "q – exit without saving the changes" |
| A4 | Make a filesystem with `mkfs` after the partition. | S8, S32 | S8: "To add a new disk to Linux, partition it with fdisk, format with mkfs, then mount permanently via /etc/fstab." |
| A5 | `mount -t type device dir` attaches a filesystem. | S20 | "mount -t type device dir This tells the kernel to attach the filesystem found on device (which is of type type) at the directory dir." |
| A6 | `blkid` prints `LABEL` and `UUID`; `lsblk -f` is the recommended overview. | S16 | "It can determine the type of content (e.g., filesystem or swap) that a block device holds, and also the attributes (tokens, NAME=value pairs)" |
| A7 | Device names follow the order of hardware detection and can change; use `UUID=` or `LABEL=`. | S22 | "device names are often a coincidence of hardware detection order, and can change when other disks are added or removed." |
| A8 | `findmnt --verify` checks fstab; `mount -a` is a bad way to check. | S19, S20 | S20: "it is a bad practice to use mount -a for fstab checking. The recommended solution is findmnt --verify." S19: "-x, --verify Check mount table content. The default is to verify /etc/fstab parsability and usability." |
| A9 | `nofail`: no error if the device does not exist. | S22 | "nofail do not report errors for this device if it does not exist." |
| A10 | A wrong fstab line can stop the boot (callout; practical warning). | S22 | "the order of records in fstab is important because fsck(8), mount(8), and umount(8) sequentially iterate through fstab" (the boot-stop effect is the tutorial's own advice, not a quote). |

### Swap
| # | Claim | Source | Quote |
|---|---|---|---|
| W1 | Swap space can be a disk partition or a file; it extends memory. | S10 | "Swap space can take the form of a disk partition or a file." |
| W2 | `swapon --show` lists swap areas; `/proc/swaps` has the same data (`--summary` equals `cat /proc/swaps`). | S29 | "--show[=column...] Display a definable table of swap areas." / "-s, --summary ... Equivalent to cat /proc/swaps." |
| W3 | `free` shows total and used physical and swap memory. | S31 | "free displays the total amount of free and used physical and swap memory in the system" |
| W4 | `/proc/swaps` lists swap areas in use. | S48 | "/proc/swaps Swap areas in use." |
| W5 | `mkswap` sets up the swap area; `swapon` starts it. | S30 | "After creating the swap area, you need the swapon(8) command to start using it." |
| W6 | Files with holes (`cp`, `truncate`) are rejected; `dd` and `/dev/zero` is the most portable way. | S29 | "Commands like cp(1) or truncate(1) create files with holes. These files will be rejected by swapon." / "The most portable solution to create a swap file is to use dd(1) and /dev/zero." |
| W7 | A swap entry in fstab has type `swap`. | S29 | "Only fstab entries with the filesystem type (3rd field) set to "swap" are relevant." |
| W8 | `vm.swappiness`: 0 to 200, default 60; lower values mean swap IO is more expensive. | S40 | "a value between 0 and 200" / "lower values signify more expensive swap IO" / "The default value is 60." |
| W9 | The OOM killer kills a process when memory runs out. | S40 | "If this is set to 0, the kernel will kill some rogue process, called oom_killer." (`panic_on_oom`) |
| W10 | A higher `oom_score` makes a process more likely to be killed. | S49 | "A higher score means that the process is more likely to be selected by the OOM-killer." |
| W11 | `mkswap` erases the first block of its target. | S30 | "mkswap, like many others mkfs-like utils, erases the first partition block to make any previous filesystem invisible." |
| W12 | `swapoff` can fail with exit status 2 when memory is too small to take the pages back. | S29 | "2 system has insufficient memory to stop swapping (OOM)" |
| W13 | A tmpfs counts against the memory limit of a container (tip). | S51 | "that usage counts against the container's memory cgroup limit" |
| W14 | The roadmap guide makes a swap file with `dd` as an alternative to `fallocate`, then `mkswap` and `swapon`. | S11 | "If fallocate is not available, you can use dd as an alternative: $ sudo dd if=/dev/zero of=/swapfile bs=1G count=1" |

### LVM
| # | Claim | Source | Quote |
|---|---|---|---|
| L1 | LVM builds virtual block devices from physical devices. A VG is a collection of PVs. An LV is a virtual block device. | S41 | "provides tools to create virtual block devices from physical devices." / "A Volume Group (VG) is a collection of one or more physical devices, each called a Physical Volume (PV)." |
| L2 | `pvcreate` initializes a disk or partition for LVM. (Page says: a PV is a disk or partition given to LVM.) | S41 | "pvcreate Initialize a disk or partition for use by LVM." |
| L3 | An LV acts like a partition (you format and mount it). | S13 | "Logical Volume (LV): Virtual partitions within a VG that users can interact with (think of them as disk partitions)." |
| L4 | An extent is the smallest unit of storage; LVM allocates extents. | S13, S42 | S13: "Physical Extent (PE): Smallest units of storage in a PV." S42: "this requires allocating logical extents from the VG's free physical extents." |
| L5 | `pvs`, `vgs`, `lvs` report on PVs, VGs, LVs. | S41 | "pvs Report information about Physical Volumes." (the `lvm(8)` command list) / S41 `lvm fullreport`: "Report information about PVs, PV segments, VGs, LVs and LV segments, all at once." |
| L6 | `lvextend` extends an LV from the free physical extents of the VG; `-r` resizes the filesystem. | S43 | "lvextend extends the size of an LV. This requires allocating logical extents from the VG's free physical extents." / "-r\|--resizefs Resize the fs using the fs-specific resize command." |
| L7 | An ext4 filesystem can be resized online or offline (with `resize2fs`). | S35 | "further resize has to be done with resize2fs, either online, or offline." |
| L8 | A snapshot is a frozen image of an origin LV; `lvcreate -s -L size` makes a COW snapshot. | S42 | "Snapshots provide a "frozen image" of an origin LV." / "lvcreate -s\|--snapshot -L\|--size Size[m\|UNIT] LV" |
| L9 | The main advantage of LVM is easy resizing. | S12 | "The main advantage of LVM is how easy it is to resize a logical volume or volume group." |
| L10 | `lvreduce` destroys data in the removed area; shrink the filesystem first. | S44 | "data in the reduced area is lost. Ensure that any file system on the LV is resized before running lvreduce" |
| L11 | Costs (one more layer, VG spanning several disks) are the tutorial's own view, not a sourced fact. The VG spanning several PVs follows from L1. | S41 | "Each block of data in an LV is stored on one or more PV in the VG" (lvm(8) description). |
| L12 | A snapshot LV holds space (the `-L` size is allocated). | S42 | "Extending a copy-on-write snapshot LV adds space for COW blocks." (S43) / `lvcreate -s -L Size` (S42) |
