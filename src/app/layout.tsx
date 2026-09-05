import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";
import {
  defaultOpenGraph,
  defaultTwitter,
  metaDesc,
  metaKeywords,
  metaTitle,
} from "@/consts";
import { cn } from "@/lib/utils";
import { APP_ENV, SITE_URL } from "@/config";
import "@/app/globals.css";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${metaTitle}`,
    default: `${metaTitle} — Next.js 16, Tailwind CSS 4 & shadcn/ui`,
  },
  description: metaDesc,
  keywords: metaKeywords,
  authors: [{ name: "Ali Piry", url: "https://github.com/alipiry" }],
  creator: "Ali Piry",
  publisher: "Ali Piry",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...defaultOpenGraph,
    title: metaTitle,
    description: metaDesc,
    url: SITE_URL,
  },
  twitter: {
    ...defaultTwitter,
    title: metaTitle,
    description: metaDesc,
  },
  robots: {
    index: APP_ENV === "production",
    follow: APP_ENV === "production",
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
    googleBot: {
      index: APP_ENV === "production",
      follow: APP_ENV === "production",
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

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
