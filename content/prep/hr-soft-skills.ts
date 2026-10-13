import type { PrepItem } from "../../lib/prep/types.ts";

export const items: readonly PrepItem[] = [
  {
    kind: "qa",
    id: "hr-soft-skills-001",
    question: "Tell me about yourself.",
    template:
      "Today I am ... (my role and my years of experience)\nBefore this I ... (one or two key steps)\nA result I am proud of: ...\nWhat I want next, and why this job: ...",
    example:
      "I am a QA engineer with four years of experience in web and API testing. Today I work on a banking web app, where I design test cases, run regression tests and write automated tests. Before that I worked at a small software company. I started in manual testing there and then learned automation. One result I am proud of is a smoke suite that I built. It runs on every build, so the team learns about a broken build in minutes. Now I want a role with more ownership of the test strategy. Your work on payments matches that interest.",
    behind:
      "The interviewer wants a short story that is built for this job. They check that you can pick the key facts, show one result, and link your next step to the role. The details in the example are samples. Replace them with your own facts.",
  },
  {
    kind: "qa",
    id: "hr-soft-skills-002",
    question: "What are your strengths and weaknesses?",
    template:
      "My strength: ...\nProof of it: ...\nA real weakness: ...\nWhat I do about it: ...\nProgress so far: ...",
    example:
      "My strength is that I find the cause of a problem and do not stop at the symptom. For example, a checkout test failed on some runs and passed on others. I traced it to a shared test account that two tests used at the same time, and I gave each test its own account. A weakness of mine is that I used to say yes to every request, so my plan was often too full. Now I write down my tasks with estimates. When the list is too long, I ask the product owner to choose the priorities. It is working. For the last two quarters I have delivered what I promised in my sprint plans.",
    behind:
      "The interviewer checks that you know yourself. A strength needs proof from real work. A weakness needs to be real and not a hidden strength, and it needs an action and some progress.",
  },
  {
    kind: "qa",
    id: "hr-soft-skills-003",
    question: "Tell me about a conflict with a developer.",
    template:
      "The situation: ...\nWhat the other person wanted: ...\nWhat I did: ...\nThe result: ...\nWhat I learned: ...",
    example:
      "A developer closed my bug report as 'not a bug', because the behavior matched his reading of the story. I did not argue by message. I asked for a 10-minute talk and I showed the steps with the acceptance criteria next to the screen. He had read one criterion in a different way. We asked the product owner, who agreed with my reading, and the developer fixed the bug that day. I learned to talk early, to start from our shared goal and to bring the written requirement. After that, we agreed that I add the acceptance criteria to each bug report.",
    behind:
      "The interviewer checks that you handle a disagreement calmly and with respect, that you use facts, and that the result is good for both sides. The story must not blame the developer. Note that the story has a situation, an action, a result and a lesson.",
  },
  {
    kind: "qa",
    id: "hr-soft-skills-004",
    question: "Tell me about a bug that reached production.",
    template:
      "What happened: ...\nHow it was found: ...\nWhat I did first: ...\nThe root cause: ...\nWhat I changed: ...\nWhat I learned: ...",
    example:
      "A discount code gave the discount twice when the user went back and forward in the cart. Customer support found it on the second day after the release. I owned that area. First I helped to confirm the bug and its impact, and the team fixed it and released the fix. Then I looked for the root cause. My tests covered the cart flow once, but not the back navigation. I added tests for that flow and for similar flows, and I added a check for repeated actions to our release checklist. In the retrospective I told the team what I missed and what we changed, without blame. I learned to test the paths that users take in an unexpected order.",
    behind:
      "The interviewer checks for honesty and ownership. They want to see that you reacted fast, that you looked for the root cause and not for a person to blame, and that you changed your tests or your process after it.",
  },
  {
    kind: "qa",
    id: "hr-soft-skills-005",
    question: "How do you work under a tight deadline?",
    template:
      "The situation: ...\nHow I set priorities: ...\nHow I communicate: ...\nHow I protect quality: ...\nThe result: ...\nWhat I would do next time: ...",
    example:
      "Once, a release date moved forward by one week, and I had more tests than time. I listed the features by risk with the product owner, and we agreed on the order: payments first, then accounts, then reports. Each day I told the team what was tested and what was not. I did not build new automation that week. I used the existing regression suite, and I ran short exploratory sessions on the riskiest areas. We shipped on time, and the product owner knew which minor areas had less testing. After the release we tested those areas and fixed two small defects. Next time I would raise the schedule risk earlier, at planning.",
    behind:
      "The interviewer checks that you stay calm, that you set priorities with the business by risk, and that you tell people what is not covered. The last sentence shows that you learn from the event.",
  },
  {
    kind: "qa",
    id: "hr-soft-skills-006",
    question: "Why do you want to leave your current job?",
    template:
      "What I value in my current job: ...\nWhat I want to grow in: ...\nWhat this role offers: ...\nHow I keep it positive: ...",
    example:
      "I have learned a lot in my current job, especially about API testing and about working in a small, friendly team. Now I want to grow in test strategy and in leading testing across several teams. My company has no such role at the moment. This position gives me that scope. I am moving toward something that I want, and I am not running away from something.",
    behind:
      "The interviewer checks your motive and whether you speak badly about your old employer. A positive reason that points to the future is best. If the real reason is a layoff or a conflict, say it in one calm sentence and move on to what you want next.",
  },
  {
    kind: "qa",
    id: "hr-soft-skills-007",
    question: "What are your salary expectations?",
    template:
      "My research: ...\nMy range: ...\nHow I answer: ...\nWhat else counts for me: ...\nMy flexibility: ...",
    example:
      "Before the interview I check the usual pay for this role, level and city in salary surveys and in job posts, and I decide on my own minimum. When I am asked, I say: 'Based on my research and my experience with API automation, I am looking for a range of X to Y. I am flexible, and I would like to understand the whole package, such as the bonus, the learning budget and the leave.' If I am asked about my current salary and I am not comfortable, I move back to the topic: 'I prefer to talk about the value of this role.'",
    behind:
      "The interviewer checks that you did your research, that you can name a range with confidence, and that you are open to talk about the whole package. Replace X and Y with numbers from your own research.",
  },
  {
    kind: "qa",
    id: "hr-soft-skills-008",
    question: "Where do you see yourself in five years?",
    template:
      "My direction: ...\nThe skills I want to build: ...\nHow this job helps me: ...\nHow it helps the company: ...\nHow I stay flexible: ...",
    example:
      "In five years I want to be a senior quality engineer who sets the test strategy for a product and mentors other testers. In the next two years I want to deepen my skills in test design, automation and performance testing, and to lead a small test project. This role helps me because it gives me real ownership of the quality of a product. It helps the company because I will be a steady team member who grows with the product. I know that plans change, so I stay open to the paths that the work shows me, such as a lead path or a specialist path.",
    behind:
      "The interviewer checks that your plan is realistic, that it links to this job, and that you plan to stay and grow. They also like to see that you stay flexible and do not name a fixed title.",
  },
];
