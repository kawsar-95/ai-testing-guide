/**
 * The reels of the Linux module, by stage slug, in the order that the reader sees them.
 * Add a reel: put its entry in the list of its stage, then run `npm test` and `node scripts/check-reels.ts`.
 * A stage with no good reel has an empty list.
 */
import type { LinuxStageSlug } from "../linux/stages.ts";
import type { Reel } from "./reels.ts";

export const LINUX_REELS: Readonly<Record<LinuxStageSlug, readonly Reel[]>> = {
  "shell-basics": [
    { id: "aCO3eMJshrs", title: "Linux Filesystem Explained | What Are /etc, /var, /home & /usr?", channel: "LinuxCert Guru", kind: "explainer", lang: "en", seconds: 16 },
    { id: "5_j-Of301sM", title: "How Does Linux Find Commands Like ls? | PATH Explained", channel: "LinuxCert Guru", kind: "explainer", lang: "en", seconds: 11 },
    { id: "0JhxwLSD6YQ", title: "Learn ANY Linux Command in Seconds (No More Googling!)", channel: "Chris Titus Tech", kind: "explainer", lang: "en", seconds: 35 },
    { id: "hJTGSNuuEeI", title: "Linux Commands in 60 Seconds (or less) - Shell Variables", channel: "Learn Linux TV", kind: "explainer", lang: "en", seconds: 55 },
  ],
  "files": [
    { id: "9NaRULyPVUM", title: "Does tar Compress Files? | tar vs gzip Explained", channel: "LinuxCert Guru", kind: "compare", lang: "en", seconds: 15 },
    { id: "Jf_f1O8p7Lw", title: "Symbolic Link or Soft Link in Linux explained", channel: "Sudo It", kind: "explainer", lang: "en", seconds: 58 },
    { id: "AvHNurwQo7k", title: "understanding Hard Link in Linux | How to create and use them", channel: "Sudo It", kind: "explainer", lang: "en", seconds: 59 },
    { id: "PO2c2DLhDYA", title: "Repetitive Vim Motions", channel: "DevOps Toolbox", kind: "explainer", lang: "en", seconds: 24 },
  ],
  "text-processing": [
    { id: "5_t_I_4OuwQ", title: "get a grip on grep", channel: "Fireship", kind: "explainer", lang: "en", seconds: 44 },
    { id: "wdQN2X3PQuU", title: "Linux Commands in 60 Seconds - The sed Command", channel: "Learn Linux TV", kind: "explainer", lang: "en", seconds: 56 },
    { id: "yMEHKhMjk00", title: "The Linux Pipe | Explained | One Symbol, Powerful Commands", channel: "LinuxCert Guru", kind: "explainer", lang: "en", seconds: 11 },
    { id: "DC7Ydsxd8qk", title: "What Is /dev/null in Linux? The Black Hole of Data", channel: "CyberFlux Media", kind: "explainer", lang: "en", seconds: 41 },
  ],
  "users-permissions": [
    { id: "rzN8sb0ilyE", title: "Linux File Permissions Explained | rwx Owner Group Others", channel: "CyberFlux Media", kind: "explainer", lang: "en", seconds: 46 },
    { id: "CectRimCddc", title: "What Does chmod 755 Actually Mean? | Linux Permissions Explained", channel: "LinuxCert Guru", kind: "explainer", lang: "en", seconds: 15 },
    { id: "HlgtfXUdHho", title: "Sudo vs Su in Linux — What’s the Difference?", channel: "CyberFlux Media", kind: "compare", lang: "en", seconds: 31 },
  ],
  "processes": [
    { id: "3MDTNEq7534", title: "The Linux kill Command Doesn't Always Kill! | SIGTERM vs SIGKILL", channel: "LinuxCert Guru", kind: "compare", lang: "en", seconds: 11 },
    { id: "MKxh-PXciTE", title: "HTOP - Terminal Task Manager", channel: "Chris Titus Tech", kind: "explainer", lang: "en", seconds: 56 },
    { id: "C2rzC7IVBpk", title: "NOHUP - No Hangup Signals when closing terminal", channel: "Chris Titus Tech", kind: "explainer", lang: "en", seconds: 53 },
    { id: "eGsJGRSwbYs", title: "What Is a Zombie Process in Linux? | Linux Processes Explained", channel: "LinuxCert Guru", kind: "explainer", lang: "en", seconds: 11 },
  ],
  "shell-scripting": [
    { id: "157MIzN-oxA", title: "Shell Scripting Safety Hack with set -euo pipefail", channel: "CodeCrafters", kind: "explainer", lang: "en", seconds: 40 },
    { id: "nd4cFKZfvP8", title: "Shell Script in Linux Explained | Automate Like a Pro!", channel: "CSE Society", kind: "explainer", lang: "en", seconds: 45 },
    { id: "O_W6b4BqBmc", title: "Effortless File Extraction with This Bash Function", channel: "Learn Linux TV", kind: "explainer", lang: "en", seconds: 42 },
    { id: "2PzjUY80IDw", title: "Bash Scripting Master CD Command with \"auto ls\"", channel: "Learn Linux TV", kind: "explainer", lang: "en", seconds: 154 },
  ],
  "packages": [
    { id: "yE9oct13WTQ", title: "Linux CLI in 60 Seconds - apt", channel: "Learn Linux TV", kind: "explainer", lang: "en", seconds: 60 },
    { id: "PNttb7co5GQ", title: "Package Managers: APT vs DNF vs Pacman", channel: "Salty Chip", kind: "compare", lang: "en", seconds: 35 },
    { id: "_y5S1Jyk2jY", title: "Linux Command Series - 'yum'", channel: "Thinknyx Technologies", kind: "explainer", lang: "en", seconds: 59 },
    { id: "aeaWKB_EwXU", title: "Ep 11: How Package Managers Work", channel: "Root N Reels", kind: "explainer", lang: "en", seconds: 11 },
  ],
  "disks-filesystems": [
    { id: "egZ_3Hnb3mk", title: "Linux Disk Has Free Space but Can't Create Files? | Inodes Explained", channel: "LinuxCert Guru", kind: "explainer", lang: "en", seconds: 11 },
    { id: "dt-ma5ugnR0", title: "Journaling Differences: ext4 vs XFS", channel: "PUQ Cloud", kind: "compare", lang: "en", seconds: 29 },
    { id: "pDFX4L5ZYYo", title: "The Reboot Every Linux Admin Fears | fstab Mistake Explained", channel: "LinuxCert Guru", kind: "mistake", lang: "en", seconds: 17 },
    { id: "9G6Znvj4bdo", title: "Disk Usage || 'du' command in Linux", channel: "Thinknyx Technologies", kind: "explainer", lang: "en", seconds: 57 },
  ],
  "networking": [
    { id: "okLmJ4f8K3U", title: "Linux CLI in 60 Seconds - ping", channel: "Learn Linux TV", kind: "explainer", lang: "en", seconds: 60 },
    { id: "XZ3r3P0olwk", title: "Linux Commands in 60 Seconds - The ssh Command", channel: "Learn Linux TV", kind: "explainer", lang: "en", seconds: 46 },
    { id: "Kn_VDfuNy28", title: "TCP vs UDP Explained in 20 Seconds | What's the Difference?", channel: "LinuxCert Guru", kind: "compare", lang: "en", seconds: 22 },
    { id: "fC4rnnac9es", title: "DnS কী?", channel: "Daily Tech Bangla", kind: "explainer", lang: "bn", seconds: 36 },
  ],
  "boot-services": [
    { id: "s8jrXdQ-QGA", title: "What is GRUB Bootloader in Linux? | Linux Boot Process Explained", channel: "CyberFlux Media", kind: "explainer", lang: "en", seconds: 54 },
    { id: "xxdcV1dMw_Q", title: "What Is systemd in Linux? | PID 1 & systemctl Explained", channel: "LinuxCert Guru", kind: "explainer", lang: "en", seconds: 21 },
    { id: "H5L7FbpZkWs", title: "Linux Commands in 60 Seconds - The systemctl Command", channel: "Learn Linux TV", kind: "explainer", lang: "en", seconds: 60 },
    { id: "1dpxZ-ew2AA", title: "systemd-analyze to visualize boot process and how services have been started", channel: "Sudo It", kind: "explainer", lang: "en", seconds: 27 },
  ],
  "troubleshooting": [
    { id: "7Tx0DsHEuTM", title: "Linux Load Average: Simple Explanation for Beginners", channel: "Learn Linux TV", kind: "explainer", lang: "en", seconds: 57 },
    { id: "eUm59MbuKFc", title: "Why Does Linux Suddenly Kill Processes? | OOM Killer Explained", channel: "LinuxCert Guru", kind: "explainer", lang: "en", seconds: 21 },
    { id: "1vXqmDY79V4", title: "Deleted a Linux File but Disk Space Isn't Free? | Use lsof", channel: "LinuxCert Guru", kind: "explainer", lang: "en", seconds: 11 },
    { id: "UxKhOxgk_os", title: "systemd-journald and journalctl command: view and filter logs in Linux", channel: "Sudo It", kind: "explainer", lang: "en", seconds: 45 },
  ],
  "containers": [
    { id: "A_l_qPKIywU", title: "Linux Containers vs Virtual Machines | How Containers Actually Work", channel: "LinuxCert Guru", kind: "compare", lang: "en", seconds: 29 },
    { id: "tLnvbg53c8g", title: "Advanced Linux Command Day 50 | Linux Namespaces - unshare.", channel: "educational_shorts", kind: "explainer", lang: "en", seconds: 26 },
    { id: "3848hgsDAv8", title: "Linux cgroups Explained | Control CPU & Memory Like a SysAdmin", channel: "LinuxCert Guru", kind: "explainer", lang: "en", seconds: 29 },
    { id: "9Hy1btSqEHM", title: "Docker কী? Docker Image & Container সহজ ভাষায় Explained | Docker Tutorial Bangla", channel: "OjogorStudio", kind: "explainer", lang: "bn", seconds: 56 },
  ],
};
