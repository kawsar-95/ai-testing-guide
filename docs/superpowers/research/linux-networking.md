# Networking (Linux stage 9) — research notes (2026-10-19)

Part A (topics 1–8: Networking, TCP/IP, Ethernet/ARP/RARP, Subnetting, IP Routing, DHCP, DNS Resolution, ICMP) is written. Part B (topics 9–15) appends its own sources from S42 and its own claims from C87. Do not renumber S1–S41.

Fetch note: the official pages were fetched with `scripts/linux_fetch.py` (robots.txt respected, 2 s host delay) into `/home/nuruddin-kawsar/.cache/linux-stage-networking/` (`NNN.txt`; the number is the position in the fetch list, given after each official source). The roadmap pages were fetched into `/home/nuruddin-kawsar/.cache/linux-roadmap-raw/`. The man7.org pages are HTML renderings of man pages (Linux man-pages 6.19, iproute2 6.19 on the test machine). The RFCs are the plain-text files of rfc-editor.org.

Safety rule of this stage: I sent traffic only to 127.0.0.1, `localhost`, and `127.0.0.53` (the local resolver stub). I ran no packet capture, no scan, no `traceroute`, no `ssh`/`scp`, no `sudo`, and no command that changes an interface, address, route, DNS setting, or firewall rule. `ip route get 192.0.2.1` only asks the kernel for a route and sends no packet (S18). The page uses documentation addresses (RFC 5737) and `example.com` in prose.

## Sources
S1. Linux Roadmap — roadmap.sh — https://roadmap.sh/linux — accessed 2026-10-19
S2. RFC 1122: Requirements for Internet Hosts - Communication Layers — IETF — https://www.rfc-editor.org/rfc/rfc1122.txt — accessed 2026-10-19 (`003.txt`)
S3. RFC 791: Internet Protocol — IETF — https://www.rfc-editor.org/rfc/rfc791.txt — accessed 2026-10-19 (`001.txt`)
S4. RFC 9293: Transmission Control Protocol (TCP) — IETF — https://www.rfc-editor.org/rfc/rfc9293.txt — accessed 2026-10-19 (`002.txt`)
S5. RFC 826: An Ethernet Address Resolution Protocol — IETF — https://www.rfc-editor.org/rfc/rfc826.txt — accessed 2026-10-19 (`004.txt`)
S6. RFC 903: A Reverse Address Resolution Protocol — IETF — https://www.rfc-editor.org/rfc/rfc903.txt — accessed 2026-10-19 (`005.txt`)
S7. RFC 894: IP Datagrams over Ethernet Networks — IETF — https://www.rfc-editor.org/rfc/rfc894.txt — accessed 2026-10-19 (`006.txt`; the full title is "A Standard for the Transmission of IP Datagrams over Ethernet Networks")
S8. RFC 4861: Neighbor Discovery for IP version 6 — IETF — https://www.rfc-editor.org/rfc/rfc4861.txt — accessed 2026-10-19 (`007.txt`)
S9. RFC 4632: Classless Inter-domain Routing (CIDR) — IETF — https://www.rfc-editor.org/rfc/rfc4632.txt — accessed 2026-10-19 (`008.txt`)
S10. RFC 1918: Address Allocation for Private Internets — IETF — https://www.rfc-editor.org/rfc/rfc1918.txt — accessed 2026-10-19 (`009.txt`)
S11. RFC 5737: IPv4 Address Blocks Reserved for Documentation — IETF — https://www.rfc-editor.org/rfc/rfc5737.txt — accessed 2026-10-19 (`010.txt`)
S12. RFC 2131: Dynamic Host Configuration Protocol — IETF — https://www.rfc-editor.org/rfc/rfc2131.txt — accessed 2026-10-19 (`011.txt`)
S13. RFC 1034: Domain Names - Concepts and Facilities — IETF — https://www.rfc-editor.org/rfc/rfc1034.txt — accessed 2026-10-19 (`012.txt`)
S14. RFC 1035: Domain Names - Implementation and Specification — IETF — https://www.rfc-editor.org/rfc/rfc1035.txt — accessed 2026-10-19 (`013.txt`)
S15. RFC 792: Internet Control Message Protocol — IETF — https://www.rfc-editor.org/rfc/rfc792.txt — accessed 2026-10-19 (`014.txt`)
S16. ip(8) — man7.org (iproute2) — https://man7.org/linux/man-pages/man8/ip.8.html — accessed 2026-10-19 (`015.txt`)
S17. ip-address(8) — man7.org (iproute2) — https://man7.org/linux/man-pages/man8/ip-address.8.html — accessed 2026-10-19 (`016.txt`)
S18. ip-route(8) — man7.org (iproute2) — https://man7.org/linux/man-pages/man8/ip-route.8.html — accessed 2026-10-19 (`017.txt`)
S19. ip-neighbour(8) — man7.org (iproute2) — https://man7.org/linux/man-pages/man8/ip-neighbour.8.html — accessed 2026-10-19 (`018.txt`)
S20. arp(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/arp.7.html — accessed 2026-10-19 (`019.txt`)
S21. icmp(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/icmp.7.html — accessed 2026-10-19 (`020.txt`; the same page is roadmap #105)
S22. ip(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/ip.7.html — accessed 2026-10-19 (`021.txt`)
S23. tcp(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/tcp.7.html — accessed 2026-10-19 (`022.txt`)
S24. hosts(5) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man5/hosts.5.html — accessed 2026-10-19 (`023.txt`)
S25. nsswitch.conf(5) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man5/nsswitch.conf.5.html — accessed 2026-10-19 (`024.txt`)
S26. resolv.conf(5) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man5/resolv.conf.5.html — accessed 2026-10-19 (`025.txt`)
S27. systemd-resolved.service(8) — man7.org (systemd) — https://man7.org/linux/man-pages/man8/systemd-resolved.service.8.html — accessed 2026-10-19 (`026.txt`)
S28. resolvectl(1) — man7.org (systemd) — https://man7.org/linux/man-pages/man1/resolvectl.1.html — accessed 2026-10-19 (`027.txt`)
S29. getent(1) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man1/getent.1.html — accessed 2026-10-19 (`028.txt`)
S30. ss(8) — man7.org (iproute2) — https://man7.org/linux/man-pages/man8/ss.8.html — accessed 2026-10-19 (`029.txt`)
S31. nmcli — NetworkManager project — https://networkmanager.dev/docs/api/latest/nmcli.html — accessed 2026-10-19 (`031.txt`)
S32. systemd.network(5) — man7.org (systemd) — https://man7.org/linux/man-pages/man5/systemd.network.5.html — accessed 2026-10-19 (`030.txt`)
S33. dig and delv manual pages — ISC (BIND 9 documentation) — https://bind9.readthedocs.io/en/latest/manpages.html — accessed 2026-10-19 (`032.txt`)
S34. IP Sysctl — Linux kernel documentation (kernel.org) — https://www.kernel.org/doc/html/latest/networking/ip-sysctl.html — accessed 2026-10-19 (`033.txt`)
S35. ip-netns(8) — man7.org (iproute2) — https://man7.org/linux/man-pages/man8/ip-netns.8.html — accessed 2026-10-19 (`034.txt`)
S36. network_namespaces(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/network_namespaces.7.html — accessed 2026-10-19 (`035.txt`)
S37. ipaddress — Python documentation — https://docs.python.org/3/library/ipaddress.html — accessed 2026-10-19 (`036.txt`)
S38. A Beginner's Guide to Linux Networking Fundamentals — DEV Community (iaadidev) — https://dev.to/iaadidev/a-beginners-guide-to-linux-networking-fundamentals-dev-ops-prerequisite-7-434o — accessed 2026-10-19 (roadmap #152, `152.txt`; #079 is the same page; page title shortened in `page.sources` because the overlap check flags the full title)
S39. The Basics of IP Subnetting — Linux Journal — https://www.linuxjournal.com/article/6287 — accessed 2026-10-19 (roadmap #228, `228.txt`)
S40. Domain name resolution — ArchWiki — https://wiki.archlinux.org/title/Domain_name_resolution — accessed 2026-10-19 (roadmap #064, `064.txt`)
S41. journalctl(1) — man7.org (systemd) — https://man7.org/linux/man-pages/man1/journalctl.1.html — accessed 2026-10-19 (`037.txt`)

Local checks (not a citable page): iproute2 6.19.0 (`ip -V`), `ss` 6.19.0, `dig` 9.20.24, systemd-resolved on Ubuntu, Python 3. Read-only commands that I ran: `ip -br addr`, `ip -4 route`, `ip neigh`, `ip -br neigh` (it omits the state column on iproute2 6.19, so the page uses `ip neigh` for states), `ip route show proto dhcp`, `ip route get 192.0.2.1`, `ip -4 addr show lo`, `ss -tuln`, `ss -tn state established`, `getent hosts localhost`, `getent ahosts localhost`, `resolvectl status`, `resolvectl query localhost`, `dig +short @127.0.0.53 localhost`, `nmcli device show`, `cat /etc/resolv.conf /etc/hosts`, `grep ^hosts /etc/nsswitch.conf`, `cat /proc/sys/net/ipv4/{ip_local_port_range,ip_forward}`, `ping -c 1 -W 1 127.0.0.1`. Results that the page uses:
- `ip -4 addr show lo` → `inet 127.0.0.1/8 scope host lo`. `ip -4 -br addr show lo` → `lo UNKNOWN 127.0.0.1/8`.
- `cat /proc/sys/net/ipv4/ip_local_port_range` → `32768 60999`; `ip_forward` → `1` on this machine (it has container bridges; the kernel default is 0, S34).
- `getent hosts localhost` → `127.0.0.1 localhost`. `resolvectl query localhost` → `localhost: 127.0.0.1`, "Data from: synthetic". `/etc/resolv.conf` has `nameserver 127.0.0.53`. `hosts:` line is `files mdns4_minimal [NOTFOUND=return] dns`.
- `ping -c 1 127.0.0.1` → one reply, `ttl=64`.
- A closed local port (127.0.0.1 port 9) gives `ConnectionRefusedError` for TCP and, on a connected UDP socket, also `ConnectionRefusedError` (the ICMP port unreachable message reaches the program). I use this only as background for the ICMP section. The page states the RFC rule with "may" (C75).
- Python `ipaddress`: `192.0.2.0/26` → netmask `255.255.255.192`, broadcast `192.0.2.63`, 64 addresses, hosts `192.0.2.1` to `192.0.2.62` (62). `192.0.2.70` is in `192.0.2.64/26`, not in `192.0.2.0/26`. `192.0.2.0/24` splits into four /26 blocks.
- `nmcli device show IFACE` on the test machine printed `IP4.*` lines but no `DHCP4.*` lines, although `ip route` showed `proto dhcp` (another client or an older lease record). The page therefore says only that `nmcli device show` prints "a DHCP4 group of properties" as the nmcli manual states (C54), and puts `IP4` in the grep too.
- `ip route show proto dhcp` prints the routes without the `proto dhcp` text (the selector hides it).

Roadmap links that I read and did not cite (no fact of the page rests only on them): #151, #078 (A Comprehensive Guide to Linux Networking, CentLinux); #079 (same page as S38); #227 (useful.codes), #229 (howtouselinux, subnet mask), #110 (Linux Journal, IP addresses and routing), #058 (Wikipedia DHCP), #059 (network-guides, DHCP), #063 (ShellHacks resolv.conf), #065 (linuxconfig nslookup), #066 (Linux Handbook dig), #106 (howtouselinux ICMP), #242, #243 (netstat pages; netstat belongs to part B). Their commands (`ifconfig eth0 ... netmask`, `ip addr add`, `ip route add`, `dhclient`, `nmcli con mod`) change settings. The page does not show them.

Not usable as sources (no text): #153 Practice on Networking Fundamentals (linuxjourney.com, `robots`), #241 TCP/IP Commands for Linux (whatismyipaddress.com, `http-403`), #109 Linux Set Up Routing with ip Command (cyberciti.biz, `http-403`). Further reading, title only (video): #080 ARP Explained - Address Resolution Protocol, #081 What is Ethernet?

Conflicts between sources: none that matter. Blogs show `ifconfig` for setting addresses. The page uses `ip`, as the iproute2 pages document it (S16, S17).

## Topic 1: Networking
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C1 | RFC 1122 covers three layers of host software: link, IP, transport. | S2 | "This RFC covers the communications protocol layers: link layer, IP layer, and transport layer" |
| C2 | The application layer is covered by the companion RFC, so application protocols sit above the three layers. | S2 | "its companion RFC-1123 covers the application and support protocols." |
| C3 | 127.0.0.1 always means the local host through the loopback device. | S22 | "INADDR_LOOPBACK (127.0.0.1) always refers to the local host via the loopback device;" |
| C4 | `ip` shows and manipulates routing, devices, interfaces (iproute2). | S16 | "ip - show / manipulate routing, network devices, interfaces and" |
| C5 | `ip -br` prints basic information in a table for `addr show`, `link show`, `neigh show`. | S16 | "Print only basic information in a tabular format for better readability." |
| C6 | `ss` dumps socket statistics and shows information like `netstat`. | S30 | "ss is used to dump socket statistics. It allows showing information similar to netstat." |
| C7 | A guide calls `ifconfig` deprecated in favor of `ip`, and `ss` a modern replacement for `netstat`. | S38 | "Although deprecated in favor of the ip command, it is still widely used." / "The ss command is a modern replacement for netstat." |
| C8 | A network namespace isolates the devices, routing tables, and firewall rules of its processes. | S36 | "Network namespaces provide isolation of the system resources associated with networking: network devices, IPv4 and IPv6 protocol stacks, IP routing tables, firewall rules" |
| C9 | `ip netns` manages network namespaces. | S35 | "ip-netns - process network namespace management" |

Statements without a cite (definitions of terms for the reader): a protocol is a set of rules; a packet is a small block of data; an interface is a card or a virtual device; a socket is one end of a connection. "A minimal container may lack the old tools" is a hedged tutorial remark (the tools are not in `iproute2`; on the test machine `ifconfig`, `arp`, and `netstat` are not installed).

## Topic 2: TCP/IP
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C10 | IP moves datagrams from a source to a destination host. | S3 | "The internet protocol provides for transmitting blocks of data called datagrams from sources to destinations" |
| C11 | IP gives no acknowledgments, no retransmissions, no flow control. | S3 | "There are no acknowledgments either end-to-end or hop-by-hop." / "There are no retransmissions. There is no flow control." |
| C12 | TCP gives a reliable, in-order byte stream. | S4 | "TCP provides a reliable, in-order, byte-stream service to applications." |
| C13 | UDP uses datagram sockets, TCP uses stream sockets. | S22 | "tcp_socket = socket(AF_INET, SOCK_STREAM, 0);" / "udp_socket = socket(AF_INET, SOCK_DGRAM, 0);" |
| C14 | A socket is an IP address joined with a port. | S4 | "An address that specifically includes a port identifier, that is, the concatenation of an Internet Address with a TCP port." |
| C15 | A connection is a pair of sockets. | S4 | "A connection is defined by a pair of sockets." |
| C16 | Ports below 1024 are privileged. Binding needs `CAP_NET_BIND_SERVICE`. | S22 | "port numbers below 1024 are called privileged ports" / "that has the CAP_NET_BIND_SERVICE capability in the user namespace" |
| C17 | Default local port range 32768–60999 for automatic source ports. | S34 | "Defines the local port range that is used by TCP and UDP to choose the local port." / "The default values are 32768 and 60999 respectively." |
| C18 | `ss` options: `-t` TCP, `-u` UDP, `-l` listening, `-n` numeric. | S30 | "-t, --tcp Display TCP sockets." / "-l, --listening Display only listening sockets" / "-n, --numeric" |
| C19 | `ss` filter `state established` selects connections in a TCP state. | S30 | "All standard TCP states: established, syn-sent, syn-recv," / "FILTER := [ state STATE-FILTER ] [ EXPRESSION ]" |

Tip text (advice, no cite): a service that listens only on 127.0.0.1 is unreachable from another host (follows from C3); a load test can run short of local ports (follows from C17).

## Topic 3: Ethernet, ARP, and RARP
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C20 | An Ethernet address has 48 bits. | S5 | "To actually transmit the Ethernet packet a 48.bit Ethernet address must be generated." |
| C21 | An IP datagram rides in an Ethernet frame whose type field is hex 0800. | S7 | "The type field of the Ethernet frame must contain the value hexadecimal 0800." |
| C22 | An IP datagram on Ethernet is at most 1500 octets. | S7 | "the maximum length of an IP datagram sent over an Ethernet is 1500 octets." (The RFC text has a typo "minimum length" in the sentence before; the maximum sentence is the one used.) |
| C23 | ARP converts between layer-2 hardware addresses and IPv4 addresses on directly connected networks. | S20 | "It is used to convert between Layer2 hardware addresses and IPv4 protocol addresses on directly connected networks." |
| C24 | The ARP request is broadcast to all stations. | S5 | "this packet to be broadcast to all stations on the Ethernet cable" |
| C25 | The IPv4 neighbour table is the ARP table. | S19 | "The IPv4 neighbour table is also known by another name - the ARP table." |
| C26 | An ARP cache entry becomes stale without positive feedback. | S20 | "When there is no positive feedback for an existing mapping after some time ... a neighbor cache entry is considered stale." |
| C27 | IPv6 uses Neighbor Solicitation instead of ARP. | S8 | "Nodes accomplish address resolution by multicasting a Neighbor Solicitation that asks the target node to return its link-layer address." / "corresponds to a combination of the IPv4 protocols Address Resolution Protocol" |
| C28 | RARP: a host that knows only its hardware address finds its protocol address. | S6 | "a method for workstations to dynamically find their protocol address ... when they know only their hardware address" |
| C29 | DHCP gives a client all its IP settings. | S12 | "DHCP provides the mechanism for a client to acquire all of the IP configuration parameters that it needs in order to operate." |
| C30 | Neighbour states `incomplete` and `failed`. | S19 | "incomplete the neighbour entry has not (yet) been validated/resolved." / "failed max number of probes exceeded without success" |
| C31 | `ip neigh` shows ARP or NDISC cache entries. | S16 | "neighbour - manage ARP or NDISC cache entries." |

Statements without a cite: a frame is the link-layer unit; "DHCP covers the same need" is a summary of C28 and C29; two hosts with one IP can show changing MAC addresses (tutorial advice, hedged with "can").

## Topic 4: Subnetting
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C32 | CIDR writes a prefix as address, slash, and a number from 0 to 32 of significant bits. | S9 | "followed by the "/" (slash) character, followed by a decimal value between 0 and 32 that describes the number of significant bits." |
| C33 | The address ANDed with the subnet mask gives the network address. | S39 | "Your IP address and your subnet mask are bitwise "and"ed together" |
| C34 | The first address of a subnet is the network address. The subnet has a broadcast address too. | S39 | "You are required to have a base network address and a broadcast address for every subnet." |
| C35 | Directed broadcast: the host field is all 1 bits. | S2 | "{ <Network-number>, -1 } Directed broadcast to the specified network." / "the notation "-1" for a field that contains all 1 bits." |
| C36 | RFC 1918 private blocks: 10/8, 172.16/12, 192.168/16. | S10 | "10.0.0.0 - 10.255.255.255 (10/8 prefix)" / "172.16.0.0 - 172.31.255.255 (172.16/12 prefix)" / "192.168.0.0 - 192.168.255.255 (192.168/16 prefix)" |
| C37 | RFC 5737 documentation blocks. | S11 | "The blocks 192.0.2.0/24 (TEST-NET-1), 198.51.100.0/24 (TEST-NET-2), and 203.0.113.0/24 (TEST-NET-3) are provided for use in documentation." |
| C38 | `ip addr` writes an address as a prefix (address/length). | S17 | "IFADDR := PREFIX | ADDR peer PREFIX [ broadcast ADDR ]" (syntax line) |
| C39 | Python `ipaddress` has `ip_network`, `netmask`, `broadcast_address`, `num_addresses`. | S37 | "ipaddress.ip_network(address, strict=True)" / "broadcast_address" / "The network address for the network." |

Arithmetic (local check with S37, see above): /26 has 6 host bits, 64 addresses, 62 for hosts, mask 255.255.255.192, broadcast 192.0.2.63. The page states these as the worked example. A gateway is "the router that leads out of the subnet" (gloss; see C44 for `via`).

## Topic 5: IP Routing
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C40 | Forwarding uses the longest match. | S9 | "Forwarding in the Internet is done on a longest-match basis." |
| C41 | 0.0.0.0/0 is the default route. | S9 | "the degenerate route to prefix 0.0.0.0/0 is used as a default route" |
| C42 | `ip` writes the default route as `default`. | S18 | "There is also a special PREFIX default - which is equivalent to IP 0/0 or to IPv6 ::/0." |
| C43 | `ip route show` lists the main table. All normal routes go to the main table. | S18 | "By default all normal routes are inserted into the main table (ID 254)" / "show dumps all the IP main routing table" |
| C44 | `via` names the next router (gateway) of a route. | S18 | "NH := [ encap ENCAP ] [ via [ FAMILY ] ADDRESS ] [ dev STRING ]" (syntax line) |
| C45 | `proto kernel`: the kernel installed the route during autoconfiguration. | S18 | "kernel - the route was installed by the kernel during autoconfiguration." |
| C46 | The `proto` field gives the routing protocol identifier of the route. | S18 | "the routing protocol identifier of this route." |
| C47 | `ip route get` shows the route the kernel would use and sends no packet. | S18 | "get is equivalent to sending a packet along this path" / "however, no packets are actually sent." |
| C48 | `blackhole` drops silently. `unreachable` drops and sends ICMP host unreachable. | S18 | "blackhole - these destinations are unreachable. Packets are discarded silently." / "Packets are discarded and the ICMP message host unreachable is generated." |
| C49 | Linux does not forward between interfaces by default (`ip_forward` = 0). | S34 | "Forward Packets between interfaces." / "Default: 0 (disabled)" |
| C50 | `ip route` manipulates the kernel routing tables. `add`, `del`, `replace`, `flush` exist. | S18 | "ip route is used to manipulate entries in the kernel routing tables." / "ip route { add | del | change | append | replace } ROUTE" / "ip route { show | flush } SELECTOR" |
| C51 | A namespace has its own routing tables, so route tests can run in one. | S36 | "IP routing tables, firewall rules" (inside the C8 quote) |

Danger callout: it states that these commands change the kernel routing table (C50). That a deleted default route cuts an SSH session follows from C42 and C41; it is the tutorial's own warning. `ip netns add` needs privileges; the page says only "a network namespace that you made for the test".

## Topic 6: DHCP
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C52 | DHCP gives a client an address and other IP settings. A lease is a finite time. | S12 | "DHCP provides the mechanism for a client to acquire all of the IP configuration parameters" / "the period over which a network address is allocated to a client is referred to as a "lease"" |
| C53 | The four steps: DISCOVER (broadcast on the local subnet), OFFER, REQUEST, ACK. | S12 | "The client broadcasts a DHCPDISCOVER message on its local physical subnet." / "DHCPOFFER - Server to client in response to DHCPDISCOVER" / "DHCPACK - Server to client with configuration parameters, including committed network address." |
| C54 | `nmcli device show` prints properties by group, including DHCP4. | S31 | "For active data use GENERAL, IP4, DHCP4, IP6, DHCP6, VPN." / "nmcli device show" |
| C55 | T1 defaults to half of the lease time. T2 defaults to 0.875 of it. At T2 the client asks any server. | S12 | "T1 defaults to (0.5 * duration_of_lease). T2 defaults to (0.875 * duration_of_lease)." / "REBINDING state and attempts to contact any server." |
| C56 | `systemd-networkd` starts a DHCP client with `DHCP=`. The default is `no`. | S32 | "Enables DHCPv4 and/or DHCPv6 client support. Accepts "yes", "no", "ipv4", or "ipv6". Defaults to "no"." |
| C57 | `journalctl -u UNIT` shows messages of one unit. | S41 | "Show messages for the specified systemd unit UNIT (such as a service unit)" |
| C58 | `ip route show proto dhcp` selects routes of one protocol. | S18 | "protocol RTPROTO only list routes of this protocol." (the `show` selector `proto RTPROTO`) |
| C59 | `nmcli connection up` activates a connection (which can start the DHCP client). | S31 | "Activate a connection." / "nmcli con up default" in the DHCP-profile example |

Inference (marked in the page by "can"): activating a connection can start a DHCP exchange (C59 with C54). A restart of the network service can do the same (tutorial warning). The remark "Read their logs with journalctl -u UNIT" does not name the unit, because the unit name depends on the distribution.

## Topic 7: DNS Resolution
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C60 | Name servers hold the data. A resolver extracts it for clients. | S13 | "NAME SERVERS are server programs which hold information about the domain tree's structure and set information." / "RESOLVERS are programs that extract information from name servers in response to client requests." |
| C61 | The resolver is C-library code. | S26 | "The resolver is a set of routines in the C library that provide access to the Internet Domain Name System (DNS)." |
| C62 | TTL: how long a record may be cached. | S13 | "The meaning of the TTL field is a time limit on how long an RR can be kept in a cache." |
| C63 | TTL in the record format. | S14 | "a 32 bit signed integer that specifies the time interval that the resource record may be cached" |
| C64 | The order of services on the `hosts:` line is the order of use. | S25 | "The order of the services on the line determines the order in which those services will be queried, in turn, until a result is found." |
| C65 | The `hosts` database is `/etc/hosts`; for it, `dns` can be added as a service. | S25 | "hosts /etc/hosts" / "For the hosts database, you can additionally specify "dns"." |
| C66 | `/etc/hosts` has one line per IP: address, canonical name, aliases. | S24 | "IP_address canonical_hostname [aliases...]" |
| C67 | `getent hosts NAME` shows entries from the NSS databases. | S29 | "The getent command displays entries from databases supported by the Name Service Switch libraries" |
| C68 | `resolv.conf`: up to 3 `nameserver` lines, `search`, `options`, `timeout:n` default 5 s. | S26 | "Up to MAXNS (currently 3, see <res_state.h>) name servers may be listed" / "search Search list for host-name lookup." / "the default is RES_TIMEOUT (currently 5" |
| C69 | The glibc resolver does not cache. | S40 | "The glibc resolver does not cache queries." |
| C70 | Network managers tend to overwrite `/etc/resolv.conf`. | S40 | "Network managers tend to overwrite /etc/resolv.conf" |
| C71 | systemd-resolved has a stub listener on 127.0.0.53. | S27 | "systemd-resolved provides a local DNS stub listener on the IP addresses 127.0.0.53 and 127.0.0.54" |
| C72 | `resolv.conf` can be a symlink to the stub file (resolved reads it otherwise). | S27 | "only if it is not a symlink to /run/systemd/resolve/stub-resolv.conf" |
| C73 | `resolvectl status` shows the DNS settings in effect. | S28 | "Shows the global and per-link DNS settings currently in effect." |
| C74 | `dig` asks the servers of `resolv.conf`; no search list by default; `+search` turns it on. | S33 | "Unless it is told to query a specific name server, dig tries each of the servers listed in /etc/resolv.conf." / "The search list is not used by default." |

Inference: `dig` can disagree with `getent` because `dig` is "a flexible tool for interrogating DNS name servers" (S33) and does not read `/etc/hosts`, while `getent hosts` follows `nsswitch.conf` (C64, C67). The `dig` page does not state "dig ignores /etc/hosts" in those words. `resolvectl query` resolves names (S28: "Resolve domain names, as well as IPv4 and IPv6 addresses."). The TTL advice in the tip rests on S13: "If a change can be anticipated, the TTL can be reduced prior to the change to minimize inconsistency".

## Topic 8: ICMP
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C75 | ICMP reports errors and control information for IP. A closed UDP port may bring a port unreachable message. | S15 | "the destination host may send a destination unreachable message to the source host." (when the "process port is not active") / "3 = port unreachable;" |
| C76 | ICMP messages use the IP header. The first octet is the Type. | S15 | "ICMP messages are sent using the basic IP header. The first octet of the data portion of the datagram is a ICMP type field" |
| C77 | ICMP does not make IP reliable. | S15 | "The purpose of these control messages is to provide feedback about problems in the communication environment, not to make IP reliable." |
| C78 | Echo request is type 8, echo reply is type 0. | S15 | "8 for echo message; 0 for echo reply message." |
| C79 | Destination unreachable is type 3. Codes 0 net, 1 host, 3 port, 4 fragmentation needed and DF set. | S15 | "0 = net unreachable;" / "1 = host unreachable;" / "3 = port unreachable;" / "4 = fragmentation needed and DF set;" |
| C80 | Time exceeded is type 11, code 0 = TTL exceeded in transit. | S15 | "11" / "0 = time to live exceeded in transit;" |
| C81 | The kernel answers ICMP requests itself. It limits the rate of ICMP errors. | S21 | "The kernel ICMP module also answers ICMP requests." / "Linux limits the rate of ICMP error packets to each destination." |
| C82 | `icmp_echo_ignore_all` makes the kernel ignore echo requests. `icmp_ratelimit` is the minimum gap in ms. | S34 | "If enabled, then the kernel will ignore all ICMP ECHO requests sent to it." / "otherwise the minimal space between responses in milliseconds." |
| C83 | A closed TCP port gets a reset. | S4 | "An incoming segment not containing a RST causes a RST to be sent in response." (state CLOSED) |
| C84 | If TCP cannot get through, it retries and then reports `ETIMEDOUT`. | S23 | "When a network error occurs, TCP tries to resend the packet. If it doesn't succeed after some time, either ETIMEDOUT or the last received error" |
| C85 | The fragmentation-needed message supports path MTU discovery. | S21 | "The limit does not affect sending of ICMP_FRAG_NEEDED packets needed for path MTU discovery." |
| C86 | TTL: each router lowers it, the packet is dropped at zero. | S15 | "as this field is decremented at each machine in which the datagram is processed" / "finds the time to live field is zero it must discard the datagram." |

Part B: the last claim number used by part A is C86, and the last source is S41. Part B starts its sources at S42 and its claims at C87.

Statements without a cite: TTL gloss "a counter in the IP header" (C86); an echo reply proves only that IP works up to the host (follows from C78 and C77).
