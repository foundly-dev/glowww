import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { fontVariables } from "@/components/ui/fonts";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Glowww",
  description: "Assets to make your designs glowww",
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
