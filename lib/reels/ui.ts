/** The English strings of the reels block on a topic page. */

export const REELS_UI = {
  heading: "Reels on this topic",
  note: "Short videos from other creators, picked for this topic. They are not part of this page's fact-checked text. Nothing loads from YouTube until you press Play.",
  play: "Play",
  watchOnYoutube: "Watch on YouTube",
  showMore: (n: number) => `Show ${n} more reels`,
  showFewer: "Show fewer reels",
  kinds: {
    explainer: "Explainer",
    animation: "Animation",
    "real-system": "Real system",
    interview: "Interview tip",
    mistake: "Common mistake",
    compare: "Comparison",
  },
  langs: {
    en: "English",
    bn: "বাংলা",
  },
} as const;
