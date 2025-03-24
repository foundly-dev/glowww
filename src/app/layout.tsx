import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { fontVariables } from "@/components/ui/fonts";
import { cn } from "@/lib/utils";

import "./globals.css";

const title = "Curated Design & Developer Resources | glowww";
const description =
  "Discover a curated collection of design and developer resources. Find tools, libraries, icons, illustrations, and more to enhance your web development and design projects.";
const alt = "Curated Design & Developer Resources | glowww";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_ENV === "production"
      ? "https://glowww.dev"
      : "http://localhost:3000",
  ),
  title,
  description,
  keywords: [
    "design resources",
    "developer resources",
    "web development tools",
    "UI design",
    "UX design",
    "SVG icons",
    "illustrations",
    "CSS frameworks",
    "JavaScript libraries",
    "API tools",
    "front-end development",
    "back-end development",
    "design systems",
    "free design assets",
    "open-source tools",
    "web design",
    "web development",
    "glowww",
    "design inspiration",
    "development inspiration",
  ],
  openGraph: {
    title,
    description,
    url: "https://glowww.dev",
    siteName: "glowww",
    type: "website",
    images: [
      {
        url: "/preview.png",
        alt,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@foundlylabs",
    creator: "@foundlylabs",
    title,
    description,
    images: [
      {
        url: "/preview.png",
        alt,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(`antialiased`, ...fontVariables)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
