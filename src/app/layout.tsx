import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";
import { cn } from "@/lib/utils";
import { APP_ENV, SITE_URL } from "@/config";
import { buildSiteMetadata, buildSiteViewport } from "@/lib/seo/metadata";
import "@/app/globals.css";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = buildSiteMetadata({
  siteUrl: SITE_URL,
  isProduction: APP_ENV === "production",
});

export const viewport: Viewport = buildSiteViewport();

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", inter.variable)}
    >
      <body
        suppressHydrationWarning
        className={cn(
          "font-sans antialiased",
          "flex min-h-screen flex-col justify-between",
        )}
      >
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
