# Linux roadmap links: fetch report

Run of `scripts/linux_fetch.py` on `linux-roadmap-links.md` on 2026-10-16. The script sends one request at a time, waits 2 s between requests to one host, uses a 20 s timeout, and respects robots.txt. This report has statuses only. The page text stays outside the repo.

## Summary

- Links: 294
- Fetchable (not video, course, roadmap): 277
- ok: 224
- ok-retry: 0
- title-only (video, course, roadmap): 17
- robots (disallowed or unreadable robots.txt, skipped): 13
- failures: 40 (http-403: 40)
- Readable share of the fetchable links: 224/277 = 80.9 %

The script did not retry a failure. A 403 status is a block by the site. The run did not try to get around it.

## Links

| # | Topic | URL | Status |
|---|---|---|---|
| 1 | Adding Disks | https://linuxconfig.org/how-to-add-new-disk-to-existing-linux-system | ok |
| 2 | Adding Disks | https://www.tecmint.com/add-new-disk-to-an-existing-linux/ | ok |
| 3 | Archiving and Compressing | https://labex.io/tutorials/linux-file-packaging-and-compression-385413 | http-403 |
| 4 | Authentication Logs | https://betterstack.com/community/guides/logging/monitoring-linux-auth-logs/ | ok |
| 5 | Authentication Logs | https://linuxhandbook.com/linux-login-history/ | ok |
| 6 | Available Memory and Disk | https://itslinuxfoss.com/5-ways-check-available-memory-linux/ | ok |
| 7 | Available Memory and Disk | https://linuxblog.io/free-vs-available-memory-in-linux/ | ok |
| 8 | AWK | https://developer.ibm.com/tutorials/l-awk1/ | ok |
| 9 | AWK | https://linuxhandbook.com/awk-command-tutorial/ | ok |
| 10 | AWK | https://labex.io/tutorials/linux-linux-awk-command-text-processing-388493 | http-403 |
| 11 | AWK | https://www.youtube.com/watch?v=9YOZmI-zWok | title-only |
| 12 | Background and Foreground Processes | https://linuxconfig.org/understanding-foreground-and-background-linux-processes | ok |
| 13 | Background and Foreground Processes | https://linuxhandbook.com/run-process-background/ | ok |
| 14 | Boot Loaders | https://wiki.archlinux.org/title/Arch_boot_process#Boot_loader | ok |
| 15 | Boot Loaders | https://thelinuxcode.com/what-is-a-boot-loader/ | ok |
| 16 | Boot Loaders | https://phoenixnap.com/kb/what-is-grub | ok |
| 17 | Boot Loaders | https://www.gnu.org/software/grub/ | ok |
| 18 | Booting Linux | https://en.wikipedia.org/wiki/Booting_process_of_Linux | ok |
| 19 | Booting Linux | https://thelinuxcode.com/the-linux-booting-process-6-steps-described-in-detail/ | ok |
| 20 | Booting Linux | https://www.gnu.org/software/grub/ | ok |
| 21 | Cgroups | https://www.man7.org/linux/man-pages/man7/cgroups.7.html | ok |
| 22 | Cgroups | https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/7/html/resource_management_guide/chap-introduction_to_control_groups | robots |
| 23 | Cgroups | https://docs.kernel.org/admin-guide/cgroup-v1/ | ok |
| 24 | Checking Service Logs | https://uptimerobot.com/knowledge-hub/logging/journalctl-explained-how-to-view-and-analyze-systemd-logs/ | ok |
| 25 | Checking Service Logs | https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs | ok |
| 26 | Checking Service Status | https://www.baeldung.com/linux/initialization-managers-service-status | ok |
| 27 | Command Help | https://linuxhandbook.com/help-command/ | ok |
| 28 | Command Help | https://itsfoss.com/linux-command-help/ | ok |
| 29 | Command Help | https://labex.io/tutorials/linux-get-help-on-linux-commands-18000 | http-403 |
| 30 | Command Help | https://github.com/tldr-pages/tldr | ok |
| 31 | Command Path in Shell | https://linuxconfig.org/linux-path-environment-variable | ok |
| 32 | Command Path in Shell | https://www.cyberciti.biz/howto/finding-a-path-of-a-linux-command-like-a-pro/ | http-403 |
| 33 | Conditionals | https://linuxconfig.org/bash-scripting-conditionals | ok |
| 34 | Container Runtime | https://kubernetes.io/docs/setup/production-environment/container-runtimes/ | ok |
| 35 | Container Runtime | https://www.wiz.io/academy/container-runtimes | ok |
| 36 | Container Runtime | https://opensource.com/article/21/9/container-runtimes | robots |
| 37 | Containerization | https://aws.amazon.com/what-is/containerization/ | ok |
| 38 | Containerization | https://www.digitalocean.com/resources/articles/what-is-containerization | ok |
| 39 | Containerization | https://docker.com | ok |
| 40 | Containerization | https://kubernetes.io | ok |
| 41 | Copying and Renaming Files | https://www.linux.org/threads/mv-and-cp.54793/ | ok |
| 42 | Copying and Renaming Files | https://dev.to/ldwit/mastering-cp-and-mv-commands-in-linux-plus-related-cmds-5cc9 | ok |
| 43 | Copying and Renaming Files | https://labex.io/tutorials/linux-linux-cp-command-file-copying-209744 | http-403 |
| 44 | Copying and Renaming Files | https://labex.io/tutorials/linux-linux-mv-command-file-moving-and-renaming-209743 | http-403 |
| 45 | Create, Update, and Delete Users | https://serveracademy.com/courses/linux-server-administration/creating-modifying-and-deleting-user-accounts/ | ok |
| 46 | Create, Update, and Delete Users | https://linuxconfig.org/how-to-create-modify-and-delete-users-account-on-linux | ok |
| 47 | Create, Update, and Delete Users | https://dev.to/austinozor/user-management-in-linux-a-beginners-guide-to-creating-modifying-and-deleting-users-fhf | ok |
| 48 | Creating Files | https://linuxways.net/centos/what-is-the-difference-between-cat-and-touch-command/ | robots |
| 49 | Creating Files | https://useful.codes/creating-and-deleting-files-directories-in-linux/ | ok |
| 50 | Creating Files | https://dev.to/alkesh009/linux-basics-part-4-creating-moving-and-deleting-files-and-folders-5hip | ok |
| 51 | Creating Services | https://linuxhandbook.com/create-systemd-services/ | ok |
| 52 | Creating Services | https://www.fosslinux.com/111815/a-guide-to-creating-linux-services-with-systemd.htm | ok |
| 53 | Cut Command | https://linuxize.com/post/linux-cut-command/ | ok |
| 54 | Cut Command | https://labex.io/tutorials/linux-linux-cut-command-text-cutting-219187 | http-403 |
| 55 | Debugging | https://www.cyberciti.biz/tips/debugging-shell-script.html | http-403 |
| 56 | Debugging | https://www.linuxtechi.com/debugging-shell-scripts-in-linux/ | ok |
| 57 | Debugging | https://thelinuxcode.com/debug-bash-script/ | ok |
| 58 | DHCP | https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol | ok |
| 59 | DHCP | https://network-guides.com/dhcp-protocol/ | ok |
| 60 | Disks and Filesystems | https://www.linuxfordevices.com/tutorials/linux/partitions-and-filesystems | ok |
| 61 | Disks and Filesystems | https://access.redhat.com/documentation/ru-ru/red_hat_enterprise_linux/4/html/reference_guide/s1-filesystem-fhs#s3-filesystem-usr | robots |
| 62 | Disks and Filesystems | https://www.linuxjournal.com/content/understanding-linux-filesystems-inodes-block-sizes-and-data-structures | ok |
| 63 | DNS Resolution | https://www.shellhacks.com/setup-dns-resolution-resolvconf-example/ | ok |
| 64 | DNS Resolution | https://wiki.archlinux.org/title/Domain_name_resolution | ok |
| 65 | DNS Resolution | https://linuxconfig.org/nslookup-linux-command | ok |
| 66 | DNS Resolution | https://linuxhandbook.com/dig-command/ | ok |
| 67 | Docker | https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04 | ok |
| 68 | Docker | https://docker.com | ok |
| 69 | Docker | https://docs.docker.com/ | ok |
| 70 | Docker | https://roadmap.sh/docker | title-only |
| 71 | Editing Files | https://itsfoss.com/edit-files-linux/ | ok |
| 72 | Editing Files | https://thelinuxcode.com/how-to-edit-file-in-linux/ | ok |
| 73 | Editing Files | https://linuxconfig.org/vim-tutorial | ok |
| 74 | Editing Files | https://learn.webterm.app/en/courses/vim-introduction | title-only |
| 75 | Environment Variables | https://labex.io/tutorials/linux-environment-variables-in-linux-385274 | http-403 |
| 76 | Environment Variables | https://www.computernetworkingnotes.com/linux-tutorials/linux-environment-variables-list-set-create-remove.html | ok |
| 77 | Environment Variables | https://linuxize.com/post/how-to-set-and-list-environment-variables-in-linux/ | ok |
| 78 | Ethernet, ARP and RARP | https://centlinux.com/linux-networking/ | ok |
| 79 | Ethernet, ARP and RARP | https://dev.to/iaadidev/a-beginners-guide-to-linux-networking-fundamentals-dev-ops-prerequisite-7-434o | ok |
| 80 | Ethernet, ARP and RARP | https://www.youtube.com/watch?v=cn8Zxh9bPio | title-only |
| 81 | Ethernet, ARP and RARP | https://www.youtube.com/watch?v=HLziLmaYsO0 | title-only |
| 82 | Expand | https://www.man7.org/linux/man-pages/man1/expand.1.html | ok |
| 83 | Expand | https://commandmasters.com/commands/expand-common/ | ok |
| 84 | File Permissions | https://linuxhandbook.com/linux-file-permissions/ | ok |
| 85 | File Permissions | https://labex.io/tutorials/linux-permissions-of-files-270252 | http-403 |
| 86 | File Permissions | https://learn.webterm.app/en/courses/terminal-advanced | title-only |
| 87 | File Permissions | https://www.youtube.com/watch?v=LnKoncbQBsM | title-only |
| 88 | File Transfer | https://linuxize.com/post/how-to-use-linux-ftp-command-to-transfer-files/ | ok |
| 89 | File Transfer | https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/ | ok |
| 90 | File Transfer | https://linuxhandbook.com/scp-command/ | ok |
| 91 | File Transfer | https://linuxize.com/post/wget-command-examples/ | ok |
| 92 | Filesystems | https://linuxize.com/post/how-to-check-disk-space-in-linux-using-the-df-command/ | ok |
| 93 | Filesystems | https://www.linuxfordevices.com/tutorials/linux/partitions-and-filesystems | ok |
| 94 | Filesystems | https://docs.kernel.org/filesystems/index.html | ok |
| 95 | Finding and Installing Packages | https://geekflare.com/dev/linux-package-manager-explained/ | ok |
| 96 | Finding and Installing Packages | https://linuxsimply.com/linux-basics/package-management/best-package-manager/ | ok |
| 97 | Finding and Installing Packages | https://www.debian.org/doc/manuals/apt-guide/index.en.html | ok |
| 98 | Finding and Installing Packages | http://yum.baseurl.org/ | ok |
| 99 | Finding and Installing Packages | https://docs.fedoraproject.org/en-US/quick-docs/dnf/ | ok |
| 100 | GREP | https://ryanstutorials.net/linuxtutorial/grep.php | ok |
| 101 | GREP | https://labex.io/tutorials/linux-linux-grep-command-pattern-searching-219192 | http-403 |
| 102 | GREP | https://github.com/BurntSushi/ripgrep | ok |
| 103 | Head Command | https://linuxhandbook.com/head-command/ | ok |
| 104 | Head Command | https://labex.io/tutorials/linux-linux-head-command-file-beginning-display-214302 | http-403 |
| 105 | ICMP | https://www.man7.org/linux/man-pages/man7/icmp.7.html | ok |
| 106 | ICMP | https://www.howtouselinux.com/post/icmp-packets | ok |
| 107 | Inodes | https://linuxjourney.com/lesson/inodes | robots |
| 108 | Inodes | https://www.kernel.org/doc/html/latest/filesystems/ext4/inodes.html?highlight=inode | ok |
| 109 | IP Routing | https://www.cyberciti.biz/faq/howto-linux-configuring-default-route-with-ipcommand/ | http-403 |
| 110 | IP Routing | https://www.linuxjournal.com/content/linux-networking-simplified-guide-ip-addresses-and-routing | ok |
| 111 | join Command | https://www.man7.org/linux/man-pages/man1/join.1.html | ok |
| 112 | join Command | https://linuxconfig.org/join | ok |
| 113 | join Command | https://labex.io/tutorials/linux-linux-join-command-file-joining-219193 | http-403 |
| 114 | Kill Processes | https://linuxhandbook.com/kill-command/ | ok |
| 115 | Kill Processes | https://linuxize.com/post/kill-command-in-linux/ | ok |
| 116 | Linux Navigation Basics: Basic Commands | https://linuxconfig.org/filesystem-basics | ok |
| 117 | Linux Navigation Basics: Basic Commands | https://www.digitalocean.com/community/tutorials/basic-linux-navigation-and-file-management | ok |
| 118 | Linux Navigation Basics: Basic Commands | https://www.linuxbash.sh/post/basic-navigation-commands-cd-ls-and-pwd | ok |
| 119 | Listing and Finding Processes | https://www.kernel.org/doc/html/latest/filesystems/proc.html | ok |
| 120 | Listing and Finding Processes | https://www.scaler.com/topics/linux-process/ | ok |
| 121 | Listing and Finding Processes | https://www.redhat.com/en/blog/linux-proc-filesystem | ok |
| 122 | Listing Installed Packages | https://www.howtouselinux.com/post/list-installed-packages-in-linux | ok |
| 123 | Listing Installed Packages | https://geekflare.com/dev/linux-package-manager-explained/ | ok |
| 124 | Listing Installed Packages | https://www.debian.org/doc/manuals/apt-guide/index.en.html | ok |
| 125 | Literals | https://riptutorial.com/bash/example/2465/quoting-literal-text | ok |
| 126 | Literals | https://www.baeldung.com/linux/special-characters-in-shell-scripts | ok |
| 127 | Loops | https://linuxhandbook.com/bash-loops/ | ok |
| 128 | Loops | https://linuxconfig.org/bash-loops-with-examples | ok |
| 129 | LVM (Logical Volume Manager) | https://linuxhandbook.com/lvm-guide/ | ok |
| 130 | LVM (Logical Volume Manager) | https://itsfoss.com/lvm-guide/ | ok |
| 131 | Mounts | https://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/mnt.html | ok |
| 132 | Mounts | https://phoenixnap.com/kb/linux-mount-command | ok |
| 133 | Mounts | https://man7.org/linux/man-pages/man8/mount.8.html | ok |
| 134 | Moving Files | https://linuxhandbook.com/mv-command/ | ok |
| 135 | Moving Files | https://www.commandinline.com/cheat-sheet/mv/ | ok |
| 136 | Moving Files | https://labex.io/tutorials/linux-linux-mv-command-file-moving-and-renaming-209743 | http-403 |
| 137 | Nano: A File Editing Tool | https://itsfoss.com/nano-editor-guide/ | ok |
| 138 | Nano: A File Editing Tool | https://ioflood.com/blog/nano-linux-command/ | ok |
| 139 | Nano: A File Editing Tool | https://www.nano-editor.org/ | ok |
| 140 | Nano: A File Editing Tool | https://www.youtube.com/watch?v=gyKiDczLIZ4&ab_channel=HackerSploit | title-only |
| 141 | Navigation Basics | https://linuxconfig.org/filesystem-basics | ok |
| 142 | Navigation Basics | https://www.linuxbash.sh/post/basic-navigation-commands-cd-ls-and-pwd | ok |
| 143 | Navigation Basics | https://linuxjourney.com/ | robots |
| 144 | Navigation Basics | https://labex.io/courses/linux-for-noobs | title-only |
| 145 | Navigation Basics | https://learn.webterm.app/en/courses/terminal-introduction | title-only |
| 146 | Navigation Basics | https://www.youtube.com/watch?v=kPylihJRG70&t=1381s&ab_channel=TryHackMe | title-only |
| 147 | Netfilter | https://wyssmann.com/blog/2021/07/packet-filtering-in-linux-iptables-nftables-and-firewalld/ | ok |
| 148 | Netfilter | https://netfilter.org/ | ok |
| 149 | Netstat | https://linuxhandbook.com/netstat-command/ | ok |
| 150 | Netstat | https://www.howtogeek.com/513003/how-to-use-netstat-on-linux/ | ok |
| 151 | Networking | https://centlinux.com/linux-networking/ | ok |
| 152 | Networking | https://dev.to/iaadidev/a-beginners-guide-to-linux-networking-fundamentals-dev-ops-prerequisite-7-434o | ok |
| 153 | Networking | https://linuxjourney.com/lesson/network-basics | robots |
| 154 | NL (Number Lines) | https://www.computerhope.com/unix/nl.htm | http-403 |
| 155 | NL (Number Lines) | https://labex.io/tutorials/linux-linux-nl-command-line-numbering-210988 | http-403 |
| 156 | NL (Number Lines) | https://hopeness.medium.com/master-the-linux-nl-command-a-comprehensive-guide-79c6adf50fa9 | http-403 |
| 157 | Package Management | https://geekflare.com/dev/linux-package-manager-explained/ | ok |
| 158 | Package Management | https://linuxsimply.com/linux-basics/package-management/best-package-manager/ | ok |
| 159 | Package Management | https://labex.io/tutorials/linux-software-installation-on-linux-18005 | http-403 |
| 160 | Package Management | https://www.debian.org/doc/manuals/apt-guide/index.en.html | ok |
| 161 | Package Management | http://yum.baseurl.org/ | ok |
| 162 | Package Management | https://docs.fedoraproject.org/en-US/quick-docs/dnf/ | ok |
| 163 | Packet Analysis | https://www.debian.org/doc/manuals/apt-guide/index.en.html | ok |
| 164 | Packet Analysis | https://en.ittrip.xyz/linux/linux-network-analysis | ok |
| 165 | Packet Analysis | https://www.linuxlinks.com/best-free-open-source-network-analyzers/ | ok |
| 166 | Paste | https://linuxize.com/post/paste-command-in-linux/ | ok |
| 167 | Paste | https://linuxhandbook.com/paste-command/ | ok |
| 168 | Permissions | https://linuxize.com/post/understanding-linux-file-permissions/ | ok |
| 169 | Permissions | https://linuxhandbook.com/linux-file-permissions/ | ok |
| 170 | Permissions | https://labex.io/tutorials/linux-permissions-of-files-270252 | http-403 |
| 171 | Permissions | https://www.youtube.com/watch?v=LnKoncbQBsM | title-only |
| 172 | Ping | https://linuxize.com/post/linux-ping-command/ | ok |
| 173 | Ping | https://itsfoss.com/ping-command/ | ok |
| 174 | Pipe Commands | https://thelinuxcode.com/linux-pipe-command-examples/ | ok |
| 175 | Pipe Commands | https://ryanstutorials.net/linuxtutorial/piping.php#piping | ok |
| 176 | Pipe Commands | https://linuxsimply.com/what-is-piping-in-linux/ | ok |
| 177 | Pipe Commands | https://learn.webterm.app/en/courses/terminal-fundamentals | title-only |
| 178 | Process Forking | https://www.man7.org/linux/man-pages/man2/fork.2.html | ok |
| 179 | Process Forking | https://thelinuxcode.com/fork-system-call-linux/ | ok |
| 180 | Process Forking | https://medium.com/@joshuaudayagiri/linux-process-calls-creating-process-using-fork-52a1eac7de8b | http-403 |
| 181 | Process Management | https://thelinuxcode.com/process-management-commands-linux/ | ok |
| 182 | Process Management | https://www.digitalocean.com/community/tutorials/process-management-in-linux | ok |
| 183 | Process Priorities | https://blogs.oracle.com/linux/post/task-priority | robots |
| 184 | Process Priorities | https://www.itsmarttricks.com/how-to-manipulate-process-priority-in-linux-using-nice-and-renice-commands/ | ok |
| 185 | Process Signals | https://www.ceos3c.com/linux/understanding-linux-process-signals-a-complete/ | ok |
| 186 | Process Signals | https://linux-audit.com/processes/linux-process-signals/ | ok |
| 187 | Redirects | https://linuxhandbook.com/redirection-linux/ | ok |
| 188 | Redirects | https://www.gnu.org/software/bash/manual/html_node/Redirections.html | ok |
| 189 | Repositories | https://linuxsimply.com/what-is-repository-in-linux/ | ok |
| 190 | Repositories | https://wiki.archlinux.org/title/Official_repositories | ok |
| 191 | Repositories | https://www.debian.org/doc/manuals/apt-guide/index.en.html | ok |
| 192 | Running Services | https://www.howtogeek.com/839285/how-to-list-linux-services-with-systemctl/ | ok |
| 193 | Running Services | https://medium.com/@thesureshvadde/service-management-in-linux-a-comprehensive-guide-cb4c7e81dfa9 | http-403 |
| 194 | Running Services | https://dev.to/iaadidev/how-to-manage-services-in-linux-systemd-and-sysvinit-essentials-devops-prerequisite-8-1jop | ok |
| 195 | Server Review | https://www.ictbroadcast.com/linux-server-management-essentials-administration-monitoring-and-maintenance-guidelines-for-success/ | ok |
| 196 | Server Review | https://tecadmin.net/linux-server-maintenance-checklist/ | ok |
| 197 | Server Review | https://www.linuxjournal.com/content/optimizing-linux-server-performance-benchmarking-and-advanced-techniques | ok |
| 198 | Service Management | https://labex.io/tutorials/linux-how-to-master-linux-service-management-with-systemctl-392864 | http-403 |
| 199 | Service Management | https://medium.com/@thesureshvadde/service-management-in-linux-a-comprehensive-guide-cb4c7e81dfa9 | http-403 |
| 200 | Service Management | https://dev.to/iaadidev/how-to-manage-services-in-linux-systemd-and-sysvinit-essentials-devops-prerequisite-8-1jop | ok |
| 201 | Shell Basics | https://www.linuxcommand.org/lc3_lts0010.php | ok |
| 202 | Shell Basics | https://linuxsimply.com/what-is-a-shell-linux/ | ok |
| 203 | Shell Basics | https://linuxjourney.com | robots |
| 204 | Shell Programming | https://www.learnshell.org/ | ok |
| 205 | Shell Programming | https://linuxhandbook.com/bash/ | ok |
| 206 | Shell Programming | https://bash.cyberciti.biz/guide/Main_Page | http-403 |
| 207 | Shell Programming | https://youtube.com/playlist?list=PLT98CRl2KxKGj-VKtApD8-zCqSaN2mD4w&si=MSehStqnhSqgoMSj | title-only |
| 208 | Snap | https://linuxsimply.com/snap-command-in-linux/ | ok |
| 209 | Snap | https://itsfoss.com/install-snap-linux/ | ok |
| 210 | Soft and Hard Links | https://www.redhat.com/en/blog/linking-linux-explained | ok |
| 211 | Soft and Hard Links | https://kerneltalks.com/commands/difference-between-hard-link-and-soft-link/ | ok |
| 212 | Soft and Hard Links | https://labex.io/tutorials/linux-how-to-understand-the-difference-between-hard-and-symbolic-links-in-linux-409929 | http-403 |
| 213 | Sort | https://linuxhandbook.com/sort-command/ | ok |
| 214 | Sort | https://tecadmin.net/linux-sort-command/ | ok |
| 215 | Sort | https://labex.io/tutorials/linux-linux-sort-command-text-sorting-219196 | http-403 |
| 216 | Split Command | https://linuxhandbook.com/split-command/ | ok |
| 217 | Split Command | https://ioflood.com/blog/split-linux-command/ | ok |
| 218 | SSH | https://en.wikipedia.org/wiki/Secure_Shell | ok |
| 219 | SSH | https://www.socketxp.com/iot/ssh-secure-shell/ | ok |
| 220 | SSH | https://www.cloudflare.com/learning/access-management/what-is-ssh/ | http-403 |
| 221 | Starting / Stopping Services | https://medium.com/@thesureshvadde/service-management-in-linux-a-comprehensive-guide-cb4c7e81dfa9 | http-403 |
| 222 | Starting / Stopping Services | https://labex.io/tutorials/linux-how-to-master-linux-service-management-with-systemctl-392864 | http-403 |
| 223 | Starting / Stopping Services | https://dev.to/iaadidev/how-to-manage-services-in-linux-systemd-and-sysvinit-essentials-devops-prerequisite-8-1jop | ok |
| 224 | Stdout, Stdin, and Stderr | https://www.putorius.net/linux-io-file-descriptors-and-redirection.html | ok |
| 225 | Stdout, Stdin, and Stderr | https://www.slingacademy.com/article/understanding-stdin-stdout-and-stderr-in-linux/ | ok |
| 226 | Stdout, Stdin, and Stderr | https://opensource.com/article/18/10/linux-data-streams | robots |
| 227 | Subnetting | https://useful.codes/understanding-ip-addressing-and-subnetting-in-linux/ | ok |
| 228 | Subnetting | https://www.linuxjournal.com/article/6287 | ok |
| 229 | Subnetting | https://www.howtouselinux.com/post/find-subnet-mask-on-linux | ok |
| 230 | Super User | https://www.redhat.com/en/blog/linux-superuser-access/ | ok |
| 231 | Super User | https://www.computernetworkingnotes.com/linux-tutorials/difference-between-the-root-user-and-super-sudo-user.html | ok |
| 232 | Super User | https://www.scaler.com/topics/super-user-in-linux/ | ok |
| 233 | Swap Space | https://wiki.archlinux.org/title/Swap | ok |
| 234 | Swap Space | https://linuxconfig.org/how-to-increase-swap-space-on-linux | ok |
| 235 | System Logs | https://linuxhandbook.com/journalctl-command/ | ok |
| 236 | System Logs | https://www.fosslinux.com/8984/how-to-check-system-logs-on-linux-complete-usage-guide.htm | ok |
| 237 | System Logs | https://linuxconfig.org/what-is-dmesg-and-how-do-i-use-it | ok |
| 238 | Tail Command | https://linuxhandbook.com/tail-command/ | ok |
| 239 | Tail Command | https://linuxize.com/post/linux-tail-command/ | ok |
| 240 | Tail Command | https://labex.io/tutorials/linux-linux-tail-command-file-end-display-214303 | http-403 |
| 241 | TCP/IP | https://whatismyipaddress.com/tcp-ip-commands-linux | http-403 |
| 242 | TCP/IP | https://phoenixnap.com/kb/netstat-command | ok |
| 243 | TCP/IP | https://linuxhandbook.com/netstat-command/ | ok |
| 244 | Tee | https://linuxhandbook.com/tee-command/ | ok |
| 245 | Tee | https://linuxize.com/post/linux-tee-command/ | ok |
| 246 | Text Processing | https://www.commandinline.com/linux/common-linux-text-processing-commands/ | ok |
| 247 | Text Processing | https://ryanstutorials.net/linuxtutorial/filters.php | ok |
| 248 | Text Processing | https://earthly.dev/blog/linux-text-processing-commands/ | ok |
| 249 | Text Processing | https://everythingdevops.dev/linux-text-processing-commands/ | robots |
| 250 | Tr-Command | https://linuxhandbook.com/tr-command/ | ok |
| 251 | Tr-Command | https://labex.io/tutorials/linux-linux-tr-command-with-practical-examples-422963 | http-403 |
| 252 | Traceroute | https://linuxhandbook.com/traceroute/ | ok |
| 253 | Traceroute | https://www.howtogeek.com/657780/how-to-use-the-traceroute-command-on-linux/ | ok |
| 254 | Troubleshooting | https://learn.redhat.com/t5/Platform-Linux/Troubleshooting-Linux-Problems-A-Beginner-s-Guide/td-p/36236 | ok |
| 255 | Troubleshooting | https://medium.com/@stepstodevops/linux-top-20-important-commands-for-monitoring-and-troubleshooting-a-comprehensive-guide-for-cd5aaa37da17 | http-403 |
| 256 | Troubleshooting | https://www.dummies.com/article/technology/computers/operating-systems/linux/10-linux-troubleshooting-tips-274301/ | ok |
| 257 | Ulimits | https://linuxconfig.org/limit-user-environment-with-ulimit-linux-command | ok |
| 258 | Ulimits | https://linuxhandbook.com/ulimit-command/ | ok |
| 259 | Ulimits | https://www.dummies.com/article/technology/computers/operating-systems/linux/10-linux-troubleshooting-tips-274301/ | ok |
| 260 | Understanding Directory Hierarchy | https://linuxhandbook.com/linux-directory-structure/ | ok |
| 261 | Understanding Directory Hierarchy | https://access.redhat.com/documentation/ru-ru/red_hat_enterprise_linux/4/html/reference_guide/s1-filesystem-fhs#s3-filesystem-usr | robots |
| 262 | Understanding Directory Hierarchy | https://youtu.be/A3G-3hp88mo?si=sTJTSzubdb0Vizjr | title-only |
| 263 | Unexpand | https://www.commandinline.com/cheat-sheet/unexpand/ | ok |
| 264 | Unexpand | https://hopeness.medium.com/master-the-linux-unexpand-command-a-comprehensive-guide-6966c1f90acb | http-403 |
| 265 | Unexpand | https://labex.io/tutorials/linux-linux-unexpand-command-with-practical-examples-422975 | http-403 |
| 266 | Uniq | https://linuxhandbook.com/uniq-command/ | ok |
| 267 | Uniq | https://labex.io/tutorials/linux-linux-uniq-command-duplicate-filtering-219199 | http-403 |
| 268 | Uniq | https://www.redhat.com/en/blog/uniq-command-lists | ok |
| 269 | Uptime and Load | https://www.tecmint.com/linux-uptime-command-examples/ | ok |
| 270 | Uptime and Load | https://linuxhandbook.com/uptime-command/ | ok |
| 271 | Uptime and Load | https://www.digitalocean.com/community/tutorials/load-average-in-linux | ok |
| 272 | User Management | https://labex.io/tutorials/linux-user-account-management-49 | http-403 |
| 273 | User Management | https://serveracademy.com/courses/linux-server-administration/creating-modifying-and-deleting-user-accounts/ | ok |
| 274 | User Management | https://dev.to/austinozor/user-management-in-linux-a-beginners-guide-to-creating-modifying-and-deleting-users-fhf | ok |
| 275 | Users and Groups | https://www.redhat.com/sysadmin/linux-groups | ok |
| 276 | Users and Groups | https://linuxconfig.org/how-to-manage-groups-on-linux | ok |
| 277 | Users and Groups | https://serveracademy.com/courses/linux-server-administration/creating-modifying-and-deleting-user-accounts/ | ok |
| 278 | Users and Groups | https://dev.to/austinozor/user-management-in-linux-a-beginners-guide-to-creating-modifying-and-deleting-users-fhf | ok |
| 279 | Variables | https://www.linuxcommand.org/lc3_lts0010.php | ok |
| 280 | Variables | https://linuxhandbook.com/bash-variables/ | ok |
| 281 | Variables | https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-linux | ok |
| 282 | Vim: An Essential Tool for Editing Files | https://vim.rtorr.com/ | ok |
| 283 | Vim: An Essential Tool for Editing Files | https://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/ | ok |
| 284 | Vim: An Essential Tool for Editing Files | https://vim-adventures.com/ | ok |
| 285 | Vim: An Essential Tool for Editing Files | https://learnvimscriptthehardway.stevelosh.com/ | title-only |
| 286 | Vim: An Essential Tool for Editing Files | https://www.youtube.com/watch?v=wACD8WEnImo&list=PLT98CRl2KxKHy4A5N70jMRYAROzzC2a6x&ab_channel=LearnLinuxTV | title-only |
| 287 | WC - Text Processing | https://linuxize.com/post/linux-wc-command/ | ok |
| 288 | WC - Text Processing | https://linuxhandbook.com/wc-command/ | ok |
| 289 | WC - Text Processing | https://labex.io/tutorials/linux-linux-wc-command-text-counting-219200 | http-403 |
| 290 | Working with Files | https://itsfoss.com/edit-files-linux/ | ok |
| 291 | Working with Files | https://dev.to/ldwit/mastering-cp-and-mv-commands-in-linux-plus-related-cmds-5cc9 | ok |
| 292 | Working with Files | https://linuxconfig.org/vim-tutorial | ok |
| 293 | Working with Files | https://labex.io/tutorials/linux-basic-files-operations-270248 | http-403 |
| 294 | Working with Files | https://linuxways.net/centos/what-is-the-difference-between-cat-and-touch-command/ | robots |
