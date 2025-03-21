import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import { fontVariables } from "@/components/ui/fonts";
import { cn } from "@/lib/utils";

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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
