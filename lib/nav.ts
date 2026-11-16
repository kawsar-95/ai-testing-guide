/**
 * The one ordered list of tutorial pages. It drives the drawer, the Tutorial dropdown, prev/next,
 * the home contents, the search index, the sitemap, and the static params.
 * Each page is content/<group>/<slug>.mdx and is served at /<group>/<slug>/.
 */
export type GroupSlug =
  | "getting-started"
  | "foundations"
  | "configure"
  | "extend"
  | "automate"
  | "case-study"
  | "agentic-qa";

export type NavPage = {
  group: GroupSlug;
  slug: string;
  /** The label in the drawer and the dropdown. */
  title: string;
  /** The one-line summary on the home page. */
  description: string;
  /** The one-line italic tagline on the home page. Plain words, no claims that need a source. */
  tagline: string;
  /** Starts at 1 and runs on across the groups. */
  part: number;
  href: string;
};

export type NavGroup = { slug: GroupSlug; title: string; pages: NavPage[] };

type PageEntry = { slug: string; title: string; description: string; tagline?: string };

const SOURCE: { slug: GroupSlug; title: string; pages: PageEntry[] }[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    pages: [
      {
        slug: "setup",
        title: "Install Claude Code",
        description: "Step-by-step setup: subscription, API key, CLI, VSCode extension.",
        tagline: "from zero to a working CLI",
      },
      {
        slug: "models",
        title: "Claude Models",
        description: "Opus vs Sonnet vs Haiku — pricing, when to use each model.",
        tagline: "pick the right model for the job",
      },
      {
        slug: "permission-modes",
        title: "Permission Modes",
        description: "How much Claude may do on its own — plan first, ask first, or act at once.",
        tagline: "decide how much Claude does alone",
      },
    ],
  },
  {
    slug: "foundations",
    title: "Foundations",
    pages: [
      {
        slug: "how-claude-code-works",
        title: "How Claude Code Works",
        description: "The agentic loop, tools, the context window, compaction, and checkpoints.",
        tagline: "what Claude sees and how it acts",
      },
      {
        slug: "prompting",
        title: "Prompting for QA",
        description: "Specific prompts, a check Claude can run, and prompts for QA tasks.",
        tagline: "ask for tests the way a QA would",
      },
      {
        slug: "test-design",
        title: "Test Design with Claude",
        description: "Turn requirements into test cases with ISTQB test design techniques.",
        tagline: "from requirements to solid test cases",
      },
      {
        slug: "principles",
        title: "Key Principles",
        description: "Eight principles for reliable testing with Claude Code.",
        tagline: "principles to design AI testing by",
      },
    ],
  },
  {
    slug: "configure",
    title: "Configure",
    pages: [
      {
        slug: "claude-md",
        title: "CLAUDE.md & Memory",
        description:
          "Teach Claude your stack and conventions once — and keep knowledge across sessions.",
        tagline: "write down your conventions once",
      },
      {
        slug: "settings",
        title: "Settings & the .claude Folder",
        description: "Inside `.claude/` and `settings.json` — what each file does and where it lives.",
        tagline: "know what each file in .claude does",
      },
    ],
  },
  {
    slug: "extend",
    title: "Extend",
    pages: [
      {
        slug: "skills",
        title: "Skills & Commands",
        description:
          "SKILL.md files, example QA skills (find-bug, test-design, explain-code), and the built-in commands testers use.",
        tagline: "turn a good prompt into a command",
      },
      {
        slug: "subagents",
        title: "Subagents",
        description:
          "qa-agent and sdet-agent subagents: tool and MCP access, how to call them, and parallel work.",
        tagline: "give each testing job its own specialist",
      },
      {
        slug: "hooks",
        title: "Hooks",
        description:
          "Run your own code before or after Claude's actions — auto-format, block protected files.",
        tagline: "run your own checks around Claude",
      },
      {
        slug: "mcp",
        title: "MCP Servers",
        description: "Connect Claude to Jira, a test database, GitHub, and Playwright through MCP servers.",
        tagline: "connect Claude to your tools and data",
      },
      {
        slug: "plugins",
        title: "Plugins & Marketplaces",
        description: "Install and share bundles of skills, agents, hooks, and MCP servers.",
        tagline: "share your setup as one bundle",
      },
    ],
  },
  {
    slug: "automate",
    title: "Automate",
    pages: [
      {
        slug: "headless",
        title: "Headless & CI",
        description: "Run Claude Code in scripts and CI jobs with no interactive session.",
        tagline: "run Claude from scripts and CI",
      },
      {
        slug: "github-actions",
        title: "GitHub Actions",
        description: "Answer @claude in pull requests and run your own test-review step in CI with the Claude Code GitHub Action.",
        tagline: "put Claude to work in your pipeline",
      },
      {
        slug: "playwright",
        title: "Browser Testing with Playwright",
        description: "Explore, plan, generate, and heal browser tests with Playwright MCP and the Playwright Test Agents.",
        tagline: "write, run, and fix browser tests",
      },
    ],
  },
  {
    slug: "case-study",
    title: "Case Study",
    pages: [
      {
        slug: "overview",
        title: "The Practice Project",
        description: "One real QA workspace: the app under test, the Claude Code setup, and the chain from bug hunt to retest.",
        tagline: "one QA workspace, end to end",
      },
      {
        slug: "codebase-tour",
        title: "The dMoney Codebase",
        description: "A tour of the public repository: the practice app, its ledger, the web app, the Claude Code layer, and the class notes.",
        tagline: "the public repo, folder by folder",
      },
      {
        slug: "bug-hunt",
        title: "Bug Hunting with a Review Gate",
        description: "A `find-bug` skill, a context hook, and a read-only reviewer subagent that gates each bug report.",
        tagline: "a review gate before each bug report",
      },
      {
        slug: "pr-review",
        title: "From Issue to Reviewed PR",
        description: "Acceptance criteria from an issue, a `pr-review` skill with a fresh reviewer, and a blast-radius report.",
        tagline: "review the fix against the requirement",
      },
      {
        slug: "test-and-retest",
        title: "Design, Execute, Fix, Retest",
        description: "Test charters, traceable test cases, a test-executor subagent, and a second PR for the failures.",
        tagline: "the full test loop for one fix",
      },
      {
        slug: "automation",
        title: "Load and Browser Automation",
        description: "A k6 concurrency test with the business limits built in, and Playwright tests with one session per role.",
        tagline: "load and browser tests that fit the rules",
      },
      {
        slug: "lessons",
        title: "What to Fix in the Setup",
        description: "The mistakes found later in the workspace setup — MCP tool names, tool lists, hooks, settings — and the fixes.",
        tagline: "learn from the setup's own mistakes",
      },
    ],
  },
  {
    slug: "agentic-qa",
    title: "Agentic QA",
    pages: [
      {
        slug: "claude-for-qa",
        title: "Claude for Professional QA",
        description: "The agentic loop, the harness, the context window, memory, tokens, and safe habits on a real project.",
        tagline: "how a tester works with an agent",
      },
      {
        slug: "qa-workspace",
        title: "QA Workspace & Tooling",
        description: "The .claude folder, rules, permissions, and guardrails, and when to add Superpowers, Context7, graphify, or Serena.",
        tagline: "set up the workspace before the work",
      },
      {
        slug: "project-setup",
        title: "Project, Jira, GitHub & MCP Setup",
        description: "Run the dMoney practice app and connect Claude to Jira, the test database, and GitHub.",
        tagline: "connect Claude to the project's systems",
      },
      {
        slug: "requirements",
        title: "Requirement Analysis & Acceptance Criteria",
        description: "Find ambiguity, missing rules, and risks in a story, and write acceptance criteria that can be tested.",
        tagline: "test the requirement before the code",
      },
      {
        slug: "blast-radius",
        title: "Test Design & Blast Radius",
        description: "Trace what a change can break, then design positive, negative, boundary, integration, regression, and adversarial tests.",
        tagline: "test what the change can reach",
      },
      {
        slug: "test-charters",
        title: "Exploring Features with Test Charters",
        description: "Explore a feature with no full spec: charters, sessions, expected behavior, and hidden business rules.",
        tagline: "learn the rules the spec left out",
      },
      {
        slug: "test-execution",
        title: "Test Execution & Bug Investigation",
        description: "Run tests with an agent in the browser, check the API and the database, collect evidence, and report bugs.",
        tagline: "run, check, and prove each result",
      },
      {
        slug: "multi-agent-qa",
        title: "A Multi-Agent QA System",
        description: "An analyst, a designer, an executor, and a reviewer: roles, context boundaries, escalation, and approval points.",
        tagline: "split the work between specialists",
      },
      {
        slug: "playwright-with-claude",
        title: "Playwright Automation with Claude",
        description: "Playwright Test basics — locators, assertions, waits, and fixtures — and how to review the code Claude writes.",
        tagline: "write tests you understand",
      },
      {
        slug: "playwright-framework",
        title: "Playwright Framework & the Agentic QA Workflow",
        description: "A page-object suite, regression runs, failure triage, and bugs filed through an approval step.",
        tagline: "from approved cases to filed bugs",
      },
    ],
  },
];

let lastPart = 0;

export const GROUPS: NavGroup[] = SOURCE.map((group) => ({
  slug: group.slug,
  title: group.title,
  pages: group.pages.map((page) => ({
    ...page,
    tagline: page.tagline ?? "",
    group: group.slug,
    part: ++lastPart,
    href: `/${group.slug}/${page.slug}/`,
  })),
}));

export const PAGES: NavPage[] = GROUPS.flatMap((group) => group.pages);

export function getPage(group: string, slug: string): NavPage | undefined {
  return PAGES.find((page) => page.group === group && page.slug === slug);
}

/** The pages before and after this one. The home page is not in the chain. */
export function getNeighbors(group: string, slug: string): { prev?: NavPage; next?: NavPage } {
  const i = PAGES.findIndex((page) => page.group === group && page.slug === slug);
  if (i === -1) return {};
  return { prev: PAGES[i - 1], next: PAGES[i + 1] };
}
