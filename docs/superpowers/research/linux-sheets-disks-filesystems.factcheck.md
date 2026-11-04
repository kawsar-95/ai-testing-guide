# Independent fact-check: Disks and Filesystems (`lib/linux/sheets/disks-filesystems.ts`)

Date: 2026-11-04. 2 rounds. In each round a checker that did not write the sheet (Claude Code, model claude-sonnet-5-5, a new session with read-only tools and no web access) got only the cards and the text of the pages that they cite. Round 1 checked the English gloss, the Bangla gloss, and the red "!" of every row. Round 2 checked the rows that the writer changed or answered after round 1, and the "!" of every row against its rule. Below are the checkers' reports as they wrote them, with each heading one level down.

## Round 1: Disks and Filesystems

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows checked: 51.

### FAILs

- 4.7 `sudo mount -a`: EN. The gloss calls it "a good test", but the page calls this a bad practice and names a better tool. Quote: "it is a bad practice to use mount -a for fstab checking. The recommended solution is findmnt --verify." (mount). Fix: EN "mount all fstab entries (not for testing)" / BN "fstab-এর সব mount করে (পরীক্ষার জন্য নয়)"
- 5.2 `sudo fdisk DEV`: EN. The cited fdisk page does not list the keys n or w, so nothing supports "n is new, w writes". Quote: "-l, --list  List the partition tables for the specified devices and then exit." (fdisk). Fix: EN "edit the partition table of DEV" / BN "DEV-এর partition table সম্পাদনা করে"
- 6.4 `sudo chmod 600 /swapfile`: EN. No cited page says that mode 600 is required for a swap file. chmod and swapon contain no such statement. Quote: "chmod - change file mode bits" (chmod). Fix: EN "make it private (owner only)" / BN "শুধু মালিকের জন্য private করে"
- 6.5 `sudo mkswap /swapfile`: !. mkswap erases the start of the target, so the "!: no" mark is wrong. Quote: "mkswap, like many others mkfs-like utils, erases the first partition block to make any previous filesystem invisible." (mkswap). Fix: EN "format it as swap; erases it" / BN "swap হিসেবে format করে; আগের সব মুছে যায়" (and set "!: yes")
- 7.1 `sudo pvcreate DEV`: !. pvcreate writes a label and wipes the first sectors of DEV by default, so the "!: no" mark is wrong. Quote: "Controls if the first 4 sectors (2048 bytes) of the device are wiped. The default is to wipe these sectors" (pvcreate). Fix: EN "make a physical volume; wipes DEV start" / BN "physical volume বানায়; DEV-এর শুরু মুছে যায়" (and set "!: yes")

### Notes

- 2.5 `fsck`: The page says "check and optionally repair". The sheet should say that it asks before repair (e2fsck "runs in an interactive mode by default"). Repair can change data, so "!: yes" is arguable. The advice "unmount it first" is only implied (`-M` "Do not check mounted filesystems").
- 2.7 `resize2fs`: The page says shrinking needs an unmounted filesystem ("enlarge or shrink an unmounted file system"). Shrinking can lose data, so consider "!: yes".
- 6.3 `fallocate -l 1G`: In `-l 1G`, G means GiB, not 1 GB. Consider "1 GiB" or "1G".
- 7.7 `pvs vgs lvs`: Only pvs(8) is cited. The vgs and lvs pages are not. The claim is true but the evidence is thin; cite them.
- 3.3 `stat FILE`: The stat page lists the format fields (%i, %h, %s, %x/%y/%z), so the gloss follows from them. It has no default-output description.
- 4.8 `lsof +D DIR`: "who keeps a mount busy" is true only for files under DIR. By default, +D does not cross other mount points.
- 5.8 `UUID=ID DIR ext4 defaults 0 2`: The page says the last field gives the fsck order, with 2 for non-root. Consider adding "check order 2" to the gloss.
- 1.4 `du -sh *`: Hidden items (dotfiles) are not matched by `*`. "each item here" is slightly broad.

### All rows

| Row | Command | EN | Quote (source key) | BN | Note |
|---|---|---|---|---|---|
| 1.1 | `lsblk` | PASS | "list block devices" (lsblk) | PASS | Tree is the default output. |
| 1.2 | `lsblk -f` | PASS | "Output info about filesystems. ... NAME,FSTYPE,FSVER,LABEL,UUID" (lsblk) | PASS | |
| 1.3 | `df -h` | PASS | "report file system space usage" (df); "-h, --human-readable" (df) | PASS | |
| 1.4 | `du -sh *` | PASS | "-s, --summarize display only a total for each argument" (du) | PASS | See Notes. |
| 1.5 | `sudo fdisk -l` | PASS | "List the partition tables for the specified devices and then exit." (fdisk) | PASS | |
| 1.6 | `sudo blkid` | PASS | "values for NAME include TYPE, LABEL, and UUID" (blkid) | PASS | |
| 1.7 | `findmnt` | PASS | "prints all mounted filesystems in the tree-like format" (findmnt) | PASS | |
| 2.1 | `df -T` | PASS | "-T, --print-type print file system type" (df) | PASS | |
| 2.2 | `/proc/filesystems` | PASS | "you can find in the file /proc/filesystems which filesystems your kernel currently supports" (filesystems) | PASS | |
| 2.3 | `sudo mkfs.ext4 DEV` | PASS | "mkfs.ext4 will create a file system for use with ext4" (mke2fs) | PASS | "!: yes" is correct. |
| 2.4 | `sudo mkfs.xfs DEV` | PASS | "-f Force overwrite when an existing filesystem is detected" (mkfs_xfs) | PASS | "!: yes" is correct. |
| 2.5 | `sudo fsck DEV` | PASS | "used to check and optionally repair one or more Linux filesystems" (fsck) | PASS | See Notes. |
| 2.6 | `sudo tune2fs -l DEV` | PASS | "-l List the contents of the file system superblock" (tune2fs) | PASS | |
| 2.7 | `sudo resize2fs DEV` | PASS | "enlarge or shrink an unmounted file system" (resize2fs) | PASS | See Notes. |
| 2.8 | `sudo e2label DEV NAME` | PASS | "Change the label on an ext2/ext3/ext4 file system" (e2label) | PASS | |
| 3.1 | `df -i` | PASS | "-i, --inodes list inode information instead of block usage" (df) | PASS | |
| 3.2 | `ls -i FILE` | PASS | "-i, --inode" (ls) | PASS | |
| 3.3 | `stat FILE` | PASS | "%h number of hard links"; "%i inode number" (stat) | PASS | See Notes. |
| 3.4 | `find / -xdev -inum NUM` | PASS | "-inum n File has inode number smaller than, greater than or exactly n." (find) | PASS | |
| 3.5 | `sudo tune2fs -l DEV / grep -i inode` | PASS | "-l List the contents of the file system superblock" (tune2fs) | PASS | |
| 3.6 | `find DIR -xdev -type f / wc -l` | PASS | "-xdev Don't descend into directories on other devices." (find) | PASS | |
| 4.1 | `findmnt` | PASS | "prints all mounted filesystems in the tree-like format" (findmnt) | PASS | |
| 4.2 | `mount / column -t` | PASS | "The column utility formats its input into multiple columns." (column) | PASS | |
| 4.3 | `sudo mount DEV DIR` | PASS | "mount - mount a filesystem" (mount) | PASS | |
| 4.4 | `sudo umount DIR` | PASS | "umount - unmount filesystems" (umount) | PASS | |
| 4.5 | `sudo mount -o remount,ro DIR` | PASS | "-o remount,ro is applied to both the VFS and filesystem superblock" (mount) | PASS | |
| 4.6 | `/etc/fstab` | PASS | "static information about the filesystems" (fstab) | PASS | |
| 4.7 | `sudo mount -a` | FAIL | "it is a bad practice to use mount -a for fstab checking" (mount) | PASS | See FAILs. |
| 4.8 | `sudo lsof +D DIR` | PASS | "search for all open instances of directory D and all the files and directories it contains" (lsof) | PASS | See Notes. |
| 5.1 | `lsblk` | PASS | "list block devices" (lsblk) | PASS | |
| 5.2 | `sudo fdisk DEV` | FAIL | "-l, --list List the partition tables" (fdisk); no n or w command is documented | PASS | The BN matches the EN, but the EN is unsupported. |
| 5.3 | `sudo partprobe` | PASS | "informs the operating system kernel of partition table changes" (partprobe) | PASS | |
| 5.4 | `sudo mkfs.ext4 DEV` | PASS | "mkfs.ext4 will create a file system for use with ext4" (mke2fs) | PASS | "!: yes" is correct. |
| 5.5 | `sudo mkdir -p DIR` | PASS | Not in the cited pages; the mount page uses "mountpoint" as a directory. Basic mkdir -p behavior. (mount) | PASS | Weak evidence; the claim is trivially true. |
| 5.6 | `sudo mount DEV DIR` | PASS | "mount - mount a filesystem" (mount) | PASS | |
| 5.7 | `sudo blkid DEV` | PASS | "values for NAME include TYPE, LABEL, and UUID" (blkid) | PASS | |
| 5.8 | `UUID=ID DIR ext4 defaults 0 2` | PASS | "LABEL=t-home2 /home ext4 defaults,auto_da_alloc 0 2" (fstab) | PASS | See Notes. |
| 6.1 | `swapon --show` | PASS | "--show[=column...] Display a definable table of swap areas." (swapon) | PASS | |
| 6.2 | `free -h` | PASS | "free displays the total amount of free and used physical and swap memory" (free) | PASS | |
| 6.3 | `sudo fallocate -l 1G /swapfile` | PASS | "fallocate [-c/-p/-z/-w] [-o offset] -l length [-n] filename" (fallocate) | PASS | See Notes. |
| 6.4 | `sudo chmod 600 /swapfile` | FAIL | "chmod - change file mode bits" (chmod); no "required" claim anywhere | PASS | See FAILs. |
| 6.5 | `sudo mkswap /swapfile` | FAIL | "mkswap, like many others mkfs-like utils, erases the first partition block" (mkswap) | PASS | "!" should be yes. |
| 6.6 | `sudo swapon /swapfile` | PASS | "you need the swapon(8) command to start using it" (mkswap) | PASS | |
| 6.7 | `sudo swapoff /swapfile` | PASS | "swapon - enable/disable devices and files for paging and swapping" (swapon) | PASS | |
| 6.8 | `/swapfile none swap sw 0 0` | PASS | "For swap area, this field should be specified as `none'."; "An entry swap denotes a file or partition to be used for swapping" (fstab) | PASS | |
| 7.1 | `sudo pvcreate DEV` | FAIL | "The default is to wipe these sectors" (pvcreate) | PASS | "!" should be yes. |
| 7.2 | `sudo vgcreate VG DEV` | PASS | "vgcreate — Create a volume group" (vgcreate) | PASS | |
| 7.3 | `sudo lvcreate -L 10G -n LV VG` | PASS | "-n/--name String"; "-L/--size Size[m/UNIT]" (lvcreate) | PASS | |
| 7.4 | `sudo mkfs.ext4 /dev/VG/LV` | PASS | "mkfs.ext4 will create a file system for use with ext4" (mke2fs) | PASS | "!: yes" is correct. |
| 7.5 | `sudo lvextend -r -L +5G /dev/VG/LV` | PASS | "-r/--resizefs Resize underlying filesystem together with the LV" (lvextend) | PASS | |
| 7.6 | `sudo vgextend VG DEV` | PASS | "vgextend — Add physical volumes to a volume group" (vgextend) | PASS | |
| 7.7 | `sudo pvs  vgs  lvs` | PASS | "pvs — Display information about physical volumes" (pvs) | PASS | See Notes. |
| 7.8 | `sudo lvremove VG/LV` | PASS | "lvremove — Remove logical volume(s) from the system" (lvremove) | PASS | "!: yes" is correct. |

Open FAILs after round 1: 5

## Round 2: Disks and Filesystems (disks-filesystems)

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 5 (A: 5, B: 0).

### FAILs

none

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 4.7 | `sudo mount -a` | PASS | "it is a bad practice to use mount -a for fstab checking. The recommended solution is findmnt --verify." (mount) | PASS | PASS (no) |
| 5.2 | `sudo fdisk DEV` | PASS | "fdisk - manipulate disk partition table" (fdisk) | PASS | PASS (yes) |
| 6.4 | `sudo chmod 600 /swapfile` | PASS | "The second digit selects permissions for the user who owns the file: read (4), write (2)" (chmod). 600 gives the owner 6 (read and write) and gives the group and others 0. | PASS | PASS (no) |
| 6.5 | `sudo mkswap /swapfile` | PASS | "mkswap, like many others mkfs-like utils, erases the first" (mkswap) | PASS | PASS (yes) |
| 7.1 | `sudo pvcreate DEV` | PASS | "The default is to wipe these sectors" (pvcreate) | PASS | PASS (yes) |

Notes:
- 4.7: the gloss has 8 words, so it is within the limit.
- 6.5 and 7.1: the glosses do not mention the erase. The "!" carries that warning, and the glosses are true.

### The "!" of every row

All rows follow the rule.

Open FAILs after round 2: 0

Open FAILs: 0
