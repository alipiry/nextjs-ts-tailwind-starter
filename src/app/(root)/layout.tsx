import { ReactNode } from "react";
import { Metadata } from "next";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";
import {
  defaultOpenGraph,
  defaultTwitter,
  metaDesc,
  metaTitle,
} from "@/consts";
import { cn, montserratFont } from "@/utils";
import { APP_ENV, SITE_URL } from "@/config";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    template: `%s | ${metaTitle}`,
    default: metaTitle,
  },
  description: metaDesc,
  keywords: ["Roqqet Media", "Nextjs", "Starter", "App Router"],
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
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
    site: "@roqqetmedia",
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8b6eff",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body
        className={cn(
          montserratFont.variable,
          "font-sans antialiased",
          "flex h-screen flex-col justify-between",
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
