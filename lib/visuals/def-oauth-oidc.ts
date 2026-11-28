import type { VisualDef } from "./defs.ts";

/** The text of the OAuth and OpenID Connect visual. */
export const DEF: VisualDef = {
  id: "oauth-oidc",
  title: { en: "The authorization code flow", bn: "অথরাইজেশন কোড ফ্লো (authorization code flow)" },
  promise: {
    en: "Follow one sign-in through four lanes, and switch between OAuth and OpenID Connect.",
    bn: "চারটি লেন দিয়ে একটি সাইন-ইন অনুসরণ করুন, আর OAuth ও OpenID Connect-এর মধ্যে বদলান।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "Press sign in", bn: "সাইন ইন চাপুন" },
      body: {
        en: "The user presses sign in in the app. The app makes a new secret for this request, the code_verifier, a transformed copy, the code_challenge, and a state value.",
        bn: "ইউজার অ্যাপে সাইন ইন চাপে। অ্যাপ এই রিকুয়েস্টের জন্য একটি নতুন সিক্রেট বানায়, নাম code_verifier। সে তার একটি রূপান্তরিত কপি code_challenge এবং একটি state মানও বানায়।",
      },
    },
    {
      title: { en: "Go to the authorization server", bn: "অথরাইজেশন সার্ভারে যান" },
      body: {
        en: "The app sends the user, through the browser, to the authorization server. The request has response_type=code, client_id, redirect_uri, scope, state and code_challenge. With OIDC the scope has openid.",
        bn: "অ্যাপ ব্রাউজার দিয়ে ইউজারকে অথরাইজেশন সার্ভারে পাঠায়। রিকুয়েস্টে থাকে response_type=code, client_id, redirect_uri, scope, state ও code_challenge। OIDC হলে scope-এ থাকে openid।",
      },
    },
    {
      title: { en: "The user approves", bn: "ইউজার অনুমোদন দেয়" },
      body: {
        en: "The user signs in and approves on the page of the authorization server. The app never sees the password.",
        bn: "ইউজার অথরাইজেশন সার্ভারের পেজে সাইন ইন করে এবং অনুমোদন দেয়। অ্যাপ কখনো পাসওয়ার্ড দেখে না।",
      },
    },
    {
      title: { en: "Back with a code", bn: "কোড নিয়ে ফেরত" },
      body: {
        en: "The server sends the user back to the app with a code and the same state. The code is short-lived (10 minutes at most is recommended) and works once.",
        bn: "সার্ভার ইউজারকে একটি কোড ও একই state দিয়ে অ্যাপে ফেরত পাঠায়। কোডের মেয়াদ অল্প (সর্বোচ্চ 10 মিনিটের পরামর্শ) এবং তা একবারই কাজ করে।",
      },
    },
    {
      title: { en: "Swap the code for tokens", bn: "কোড দিয়ে টোকেন নিন" },
      body: {
        en: "The app sends the code and the code_verifier. The server transforms the verifier and compares it with the code_challenge. A thief who has only the code cannot redeem it.",
        bn: "অ্যাপ কোড ও code_verifier পাঠায়। সার্ভার ভেরিফায়ার রূপান্তর করে code_challenge-এর সঙ্গে মেলায়। যে চোরের কাছে শুধু কোড আছে, সে তা ভাঙিয়ে টোকেন নিতে পারে না।",
      },
    },
    {
      title: { en: "The tokens come back", bn: "টোকেন ফেরত আসে" },
      body: {
        en: "OAuth gives an access token. OpenID Connect gives an ID token too: a JWT with claims about the sign-in. Use the toggle to switch.",
        bn: "OAuth একটি অ্যাক্সেস টোকেন (access token) দেয়। OpenID Connect একটি ID টোকেনও দেয়: এটি একটি JWT, যাতে সাইন-ইন সম্পর্কে ক্লেইম থাকে। টগল দিয়ে বদলান।",
      },
    },
    {
      title: { en: "Use each token for its job", bn: "প্রতিটি টোকেন তার কাজে লাগান" },
      body: {
        en: "The app sends the access token to the API: it tells what the app may do. With OIDC the app reads the ID token to show who signed in.",
        bn: "অ্যাপ অ্যাক্সেস টোকেন API-কে পাঠায়: এটি বলে অ্যাপ কী করতে পারবে। OIDC হলে অ্যাপ কে সাইন ইন করল তা দেখাতে ID টোকেন পড়ে।",
      },
    },
  ],
  recap: {
    en: "OAuth gives the app an access token for the API. OpenID Connect adds the openid scope and an ID token, so the app also knows who signed in. PKCE ties the code to the app that asked for it.",
    bn: "OAuth অ্যাপকে API-র জন্য একটি অ্যাক্সেস টোকেন দেয়। OpenID Connect openid স্কোপ ও একটি ID টোকেন যোগ করে, তাই অ্যাপ জানে কে সাইন ইন করল। PKCE কোডকে সেই অ্যাপের সঙ্গে বাঁধে, যে তা চেয়েছিল।",
  },
};
