import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Crimson_Pro, Inter, JetBrains_Mono, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import { DEFAULT_VERSION, VERSION_INIT_SCRIPT } from "@/lib/fundamentals/version";
import { VOICE_INIT_SCRIPT } from "@/lib/voice";
import { INSTALL_CAPTURE_SCRIPT } from "@/lib/pwa-install";
import { RegisterServiceWorker } from "@/components/layout/RegisterServiceWorker";
import { GA_ID, OWNER, SITE_DESCRIPTION, SITE_NAME, SITE_SHORT_NAME, SITE_URL } from "@/lib/site";

const crimson = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  display: "swap",
});

// The Bengali font draws only Bengali letters. It comes after each Latin font
// in the font lists of globals.css.
const notoBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  display: "swap",
  // The browser loads the font when Bengali text first shows. The header
  // button shows বাংলা on every page, so every reader downloads it one time.
  // No preload: it prevents a preload warning and a high-priority fetch.
  // The service worker caches the font at its first use, not at install.
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s – ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [OWNER],
  // The manifest link comes from app/manifest.ts. These tags are for iOS,
  // which reads the home-screen title from them.
  appleWebApp: { capable: true, title: SITE_SHORT_NAME, statusBarStyle: "default" },
  // Canonical and Open Graph URLs need an absolute base, so they exist only
  // when NEXT_PUBLIC_SITE_URL is set.
  ...(SITE_URL && {
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: "./" },
    openGraph: {
      siteName: SITE_NAME,
      type: "website",
      url: "./",
      images: ["/resources/mermaid-diagram.png"],
    },
    twitter: { card: "summary_large_image" },
  }),
};

// The browser colors its title bar to match the page background (globals.css).
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0e1115" },
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The inline scripts change data-theme, data-fundamentals-version, and
    // data-voice-default before React hydrates, so React must accept the DOM
    // values (suppressHydrationWarning). The server value of the voice is
    // technical.
    <html
      lang="en"
      data-theme="dark"
      data-fundamentals-version={DEFAULT_VERSION}
      data-voice-default="technical"
      suppressHydrationWarning
      className={`${crimson.variable} ${inter.variable} ${jetbrainsMono.variable} ${notoBengali.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: VERSION_INIT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: VOICE_INIT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: INSTALL_CAPTURE_SCRIPT }} />
      </head>
      <body className="min-h-full bg-bg text-text">
        {children}
        <RegisterServiceWorker />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
