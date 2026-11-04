import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { JsonLd } from "@/components/JsonLd";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://mdarman.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Md Arman | Frontend Developer",
    template: "%s | Md Arman",
  },
  description:
    "Md Arman is a frontend developer who builds fast, accessible, and scalable web experiences with a focus on thoughtful design and quality.",
  keywords: [
    "Md Arman",
    "Arman",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Vue.js",
    "Nuxt",
    "Portfolio",
    "India",
  ],
  authors: [{ name: "Md Arman", url: SITE_URL }],
  creator: "Md Arman",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Md Arman",
    title: "Md Arman | Frontend Developer",
    description:
      "Md Arman is a frontend developer who builds fast, accessible, and scalable web experiences with a focus on thoughtful design and quality.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Arman | Frontend Developer",
    description:
      "Md Arman is a frontend developer who builds fast, accessible, and scalable web experiences with a focus on thoughtful design and quality.",
    creator: "@mdarman_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
