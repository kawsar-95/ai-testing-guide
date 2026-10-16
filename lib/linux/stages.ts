/**
 * The one ordered list of Linux stages. Each stage is served at
 * /linux/<slug>/ and has its text in content/linux/<slug>.mdx. The title of a
 * topic is also the text of its `##` heading in that file.
 */
import GithubSlugger from "github-slugger";

export const LINUX_HOME = "/linux/";
export const LINUX_STORAGE_KEY = "linux-progress";

export type LinuxStageSlug =
  | "shell-basics"
  | "files"
  | "text-processing"
  | "users-permissions"
  | "processes"
  | "shell-scripting"
  | "packages"
  | "disks-filesystems"
  | "networking"
  | "boot-services"
  | "troubleshooting"
  | "containers";

export type LinuxTopic = { id: string; title: string; anchor: string };

export type LinuxStage = {
  slug: LinuxStageSlug;
  title: string;
  description: string;
  number: number;
  href: string;
  topics: readonly LinuxTopic[];
};

type StageEntry = {
  slug: LinuxStageSlug;
  title: string;
  description: string;
  topics: readonly string[];
};

const SOURCE: readonly StageEntry[] = [
  {
    slug: "shell-basics",
    title: "Shell Basics",
    description: "Move around the system, read help, and understand the shell and its paths.",
    topics: [
      "Shell Basics",
      "Basic Commands",
      "Navigation Basics",
      "Command Help",
      "Command Path",
      "Directory Hierarchy",
      "Environment Variables",
    ],
  },
  {
    slug: "files",
    title: "Working with Files",
    description: "Create, copy, move, edit, link, archive, and compress files.",
    topics: [
      "Working with Files",
      "Creating Files and Directories",
      "Copying and Renaming",
      "Moving Files and Directories",
      "Editing Files",
      "Nano",
      "Vim",
      "Soft and Hard Links",
      "Archiving and Compressing",
    ],
  },
  {
    slug: "text-processing",
    title: "Text Processing",
    description: "Use streams, pipes, and small tools to search and shape text.",
    topics: [
      "Text Processing",
      "Stdout, Stdin, and Stderr",
      "Redirects",
      "Pipes",
      "Tee",
      "grep",
      "awk",
      "cut",
      "sort",
      "uniq",
      "wc",
      "head",
      "tail",
      "nl",
      "paste",
      "join",
      "split",
      "tr",
      "expand",
      "unexpand",
    ],
  },
  {
    slug: "users-permissions",
    title: "Users and Permissions",
    description: "Manage users and groups, use root with care, and control access to files.",
    topics: [
      "User Management",
      "Users and Groups",
      "Create, Update, and Delete Users",
      "Super User",
      "File Permissions",
      "Managing Permissions",
    ],
  },
  {
    slug: "processes",
    title: "Processes",
    description: "List, run in the background, signal, and limit processes.",
    topics: [
      "Process Management",
      "Listing and Finding Processes",
      "Background and Foreground Processes",
      "Killing Processes",
      "Process Signals",
      "Process Priorities",
      "Process Forking",
      "Ulimits",
    ],
  },
  {
    slug: "shell-scripting",
    title: "Shell Scripting",
    description: "Automate work with variables, conditions, loops, and debugging.",
    topics: ["Shell Programming", "Variables", "Literals", "Conditionals", "Loops", "Debugging"],
  },
  {
    slug: "packages",
    title: "Packages",
    description: "Find, install, update, and remove software with package managers.",
    topics: [
      "Package Management",
      "Package Repositories",
      "Finding and Installing Packages",
      "Installing, Removing, and Upgrading Packages",
      "Listing Installed Packages",
      "Snap",
    ],
  },
  {
    slug: "disks-filesystems",
    title: "Disks and Filesystems",
    description: "Understand disks, filesystems, mounts, swap, and LVM.",
    topics: ["Disks and Filesystems", "Filesystems", "Inodes", "Mounts", "Adding Disks", "Swap", "LVM"],
  },
  {
    slug: "networking",
    title: "Networking",
    description: "Understand the network stack and use the tools that test and protect it.",
    topics: [
      "Networking",
      "TCP/IP",
      "Ethernet, ARP, and RARP",
      "Subnetting",
      "IP Routing",
      "DHCP",
      "DNS Resolution",
      "ICMP",
      "ping",
      "traceroute",
      "netstat",
      "Netfilter",
      "Packet Analysis",
      "SSH",
      "File Transfer",
    ],
  },
  {
    slug: "boot-services",
    title: "Boot and Services",
    description: "See how Linux starts, and manage services with systemd.",
    topics: [
      "Booting Linux",
      "Boot Loaders",
      "Service Management",
      "Creating Services",
      "Starting and Stopping Services",
      "Checking Service Status",
      "Checking Service Logs",
      "Running Services",
    ],
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting",
    description: "Check the health of a server, read the logs, and find the cause of a fault.",
    topics: [
      "Server Review",
      "Uptime and Load",
      "Available Memory and Disk",
      "System Logs",
      "Authentication Logs",
      "Troubleshooting",
    ],
  },
  {
    slug: "containers",
    title: "Containers",
    description: "Learn how containers isolate processes: runtimes, Docker, and cgroups.",
    topics: ["Containerization", "Container Runtime", "Docker", "Cgroups"],
  },
];

export const STAGES: readonly LinuxStage[] = SOURCE.map((stage, index) => {
  // One slugger for each stage, as rehype-slug does for each page.
  const slugger = new GithubSlugger();
  return {
    slug: stage.slug,
    title: stage.title,
    description: stage.description,
    number: index + 1,
    href: `/linux/${stage.slug}/`,
    topics: stage.topics.map((title, i) => ({
      id: `${stage.slug}-${String(i + 1).padStart(3, "0")}`,
      title,
      anchor: slugger.slug(title),
    })),
  };
});

export const LINUX_ROUTES: readonly string[] = [LINUX_HOME, ...STAGES.map((stage) => stage.href)];

export const ALL_TOPIC_IDS: readonly string[] = STAGES.flatMap((stage) =>
  stage.topics.map((topic) => topic.id),
);

export function getStage(slug: string): LinuxStage | undefined {
  return STAGES.find((stage) => stage.slug === slug);
}

const MINUTES_PER_TOPIC = 20;

/** The study time of a stage: 20 minutes for each topic. */
export function studyMinutes(stage: LinuxStage): number {
  return stage.topics.length * MINUTES_PER_TOPIC;
}

/** 140 gives "2 h 20 min", 60 gives "1 h", 45 gives "45 min". */
export function formatMinutes(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (hours === 0) return `${rest} min`;
  return rest === 0 ? `${hours} h` : `${hours} h ${rest} min`;
}
