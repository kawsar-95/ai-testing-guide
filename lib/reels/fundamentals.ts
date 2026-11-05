/**
 * The reels of the Fundamentals module, by chapter slug, in the order that the reader sees them.
 * Add a reel: put its entry in the list of its chapter, then run `npm test` and `node scripts/check-reels.ts`.
 * A chapter with no good reel has an empty list.
 */
import type { FundamentalsChapterSlug } from "../fundamentals/chapters.ts";
import type { Reel } from "./reels.ts";

export const FUNDAMENTALS_REELS: Readonly<Record<FundamentalsChapterSlug, readonly Reel[]>> = {
  "basics": [
    { id: "wlX1VRUlxOA", title: "QA vs QC Explained in 30 Seconds | Most Asked QA Interview Question", channel: "QA with Sangeetha", kind: "interview", lang: "en", seconds: 39 },
    { id: "AYF0WI5-94o", title: "Why Is Software Testing Important? | QA Interview Question", channel: "QA with Sangeetha", kind: "interview", lang: "en", seconds: 41 },
    { id: "82cbYvGNqlw", title: "Software Quality Assurance VS Software Testing", channel: "Testing Funda by Zeeshan Asghar", kind: "compare", lang: "en", seconds: 36 },
    { id: "5qsnHib76RA", title: "What is difference between Verification and Validation?Software testing Interview Question", channel: "Software Testing Mentor", kind: "interview", lang: "en", seconds: 61 },
  ],
  "defects-principles": [
    { id: "1cMAdlOYIxA", title: "Difference Between Error, Defect and Failure - Software Testing Interview Question-5", channel: "Software Testing Mentor", kind: "interview", lang: "en", seconds: 61 },
    { id: "VXF_YvRFH80", title: "Testing Principles - Context Dependent", channel: "TestSpectrum: Uncovering QA Realms", kind: "explainer", lang: "en", seconds: 37 },
    { id: "ZDRqcGaTX3w", title: "Testing Principle - Defect Clustering", channel: "TestSpectrum: Uncovering QA Realms", kind: "explainer", lang: "en", seconds: 37 },
    { id: "vkILNB2nQvk", title: "What is Shift Left Testing", channel: "The Testing Academy", kind: "explainer", lang: "en", seconds: 35 },
  ],
  "lifecycles": [
    { id: "336SQ8Jq0wo", title: "Software Development Life Cycle (SDLC) vs Software Testing Life Cycle (STLC)", channel: "Testing Funda by Zeeshan Asghar", kind: "compare", lang: "en", seconds: 40 },
    { id: "UQdQ1ygYvgk", title: "What is the software testing life cycle (STLC)?", channel: "Last Minute Interview Tips", kind: "explainer", lang: "en", seconds: 20 },
    { id: "5p3VxkbFiFI", title: "TDD vs BDD: What's the Difference? | Simplified Comparison in 60 Seconds!", channel: "It’s Your Responsibility", kind: "compare", lang: "en", seconds: 50 },
    { id: "DUI_RnDq9ms", title: "Waterfall vs Agile Testing | QA Interview Question Explained", channel: "Project Phoenix", kind: "interview", lang: "en", seconds: 20 },
  ],
  "test-types": [
    { id: "Q14Ys8eL2Dk", title: "Difference Between Retesting and Regression Testing", channel: "Testing Funda by Zeeshan Asghar", kind: "compare", lang: "en", seconds: 38 },
    { id: "u0dND7KIJhc", title: "Smoke Testing vs Sanity Testing QA Interview Question", channel: "Project Phoenix", kind: "interview", lang: "en", seconds: 17 },
    { id: "Gz0tdbvLU9w", title: "Functional vs Non-Functional Testing Explained in 30 Seconds", channel: "QA with Sangeetha", kind: "compare", lang: "en", seconds: 34 },
    { id: "_NS8pvMB8WE", title: "Types Of Performance Testing", channel: "Testing Funda by Zeeshan Asghar", kind: "explainer", lang: "en", seconds: 55 },
  ],
  "levels": [
    { id: "ZVIxjeoU6jE", title: "What are Different Levels of Testing? Software Testing Interview Question", channel: "Software Testing Mentor", kind: "interview", lang: "en", seconds: 61 },
    { id: "VhIvWxkGTkg", title: "What is UAT? User Acceptance Testing Explained in 30 Seconds | QA", channel: "QA with Sangeetha", kind: "explainer", lang: "en", seconds: 40 },
    { id: "-iSbOl8-Jo8", title: "Test Pyramid vs Test Ice Cream Cone - Which Are You?", channel: "softwaretestingjournal", kind: "compare", lang: "en", seconds: 46 },
    { id: "VDGZ6tUlH4E", title: "what is stubs and drivers", channel: "Vandana TechPoint", kind: "explainer", lang: "en", seconds: 19 },
  ],
  "black-box": [
    { id: "PKBjYDPTxf8", title: "What is equivalence class partitioning", channel: "Testing Funda by Zeeshan Asghar", kind: "explainer", lang: "en", seconds: 33 },
    { id: "34d0b4c2Id0", title: "Boundary Value Analysis (BVA) | Manual Testing Technique | QA Interview", channel: "QA with Sangeetha", kind: "interview", lang: "en", seconds: 66 },
    { id: "-It0yqjsZm8", title: "Decision Table Testing | Black Box Testing Technique | QA Interview", channel: "QA with Sangeetha", kind: "interview", lang: "en", seconds: 45 },
    { id: "_uqby_vRKjk", title: "What is State transition testing ?", channel: "Testing Funda by Zeeshan Asghar", kind: "explainer", lang: "en", seconds: 42 },
  ],
  "white-box": [
    { id: "P8DS5uOAGPk", title: "What is white-box testing, and when is it used?", channel: "Last Minute Interview Tips", kind: "explainer", lang: "en", seconds: 19 },
    { id: "koyBDuRX9Ak", title: "What is Code Coverage? Software Testing Interview Question", channel: "Software Testing Mentor", kind: "interview", lang: "en", seconds: 61 },
    { id: "qOfEAOhkiZ4", title: "Unit Testing: The Secret Behind Reliable Software", channel: "Testify Tech", kind: "explainer", lang: "en", seconds: 19 },
    { id: "Iqg7mPm4obA", title: "100% Statement Coverage ≠ Decision Coverage? | Part 1", channel: "Critical Systems Lab", kind: "explainer", lang: "en", seconds: 57 },
  ],
  "experience-based": [
    { id: "zKiD0xJRca4", title: "What is Exploratory Testing?", channel: "Testing Funda by Zeeshan Asghar", kind: "explainer", lang: "en", seconds: 34 },
    { id: "s0ZLnphFRo0", title: "Why Exploratory Testing is Important and When Should You Do it?", channel: "The Testing Academy", kind: "explainer", lang: "en", seconds: 52 },
    { id: "_6Y86buYNCM", title: "What is Ad-Hoc Testing? Software Testing Interview Question", channel: "Software Testing Mentor", kind: "interview", lang: "en", seconds: 61 },
  ],
  "planning": [
    { id: "OGQ_TW5eyZY", title: "What is Test Approach in test plan", channel: "Vandana TechPoint", kind: "explainer", lang: "en", seconds: 24 },
    { id: "NiCZYi_5oF0", title: "What is a Test Environment | Manual Testing Interview Question", channel: "The Testing Academy", kind: "interview", lang: "en", seconds: 53 },
    { id: "QT2dsbljYQ0", title: "What is Acceptance Criteria? Software Testing Interview Question", channel: "Software Testing Mentor", kind: "interview", lang: "en", seconds: 61 },
    { id: "i3QYZHQtfZ4", title: "Risk Based Testing in Software Testing | Test Big Risks First", channel: "QA Map", kind: "animation", lang: "en", seconds: 22 },
  ],
  "test-cases-bugs": [
    { id: "P2QoFagqUog", title: "The BEST Way to Write Manual Test Cases", channel: "The Testing Academy", kind: "explainer", lang: "en", seconds: 48 },
    { id: "Bm7he5SV0XM", title: "Test Case vsTest Scenario", channel: "Testing Funda by Zeeshan Asghar", kind: "explainer", lang: "en", seconds: 35 },
    { id: "07bkJm-74qc", title: "Defect Life Cycle / Bug Life Cycle", channel: "Testing Funda by Zeeshan Asghar", kind: "explainer", lang: "en", seconds: 30 },
    { id: "dt1brGSqqsQ", title: "Severity vs Priority in Software Testing | Explanation with Examples | QA Interview Tips", channel: "Project Phoenix", kind: "interview", lang: "en", seconds: 24 },
  ],
  "interview": [
    { id: "yuoE5dV4_UY", title: "Difference Between Testing and Debugging - Software Testing Interview Question-4", channel: "Software Testing Mentor", kind: "interview", lang: "en", seconds: 61 },
    { id: "14cyfXNqcSA", title: "Black Box vs White Box vs Grey Box Testing QA Interview Question", channel: "Project Phoenix", kind: "interview", lang: "en", seconds: 17 },
    { id: "_OjvO0fHiao", title: "How to Test a Login Page | QA Interview Question", channel: "QA Map", kind: "interview", lang: "en", seconds: 44 },
    { id: "vUZvellJxeE", title: "Release Day: Ship or Stop? | QA Interview Scenario", channel: "QA Map", kind: "interview", lang: "en", seconds: 45 },
  ],
};
