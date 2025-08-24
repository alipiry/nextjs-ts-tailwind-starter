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
import { cn, montserratFont } from "@/lib/utils";
import { APP_ENV, SITE_URL } from "@/config";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    template: `%s | ${metaTitle}`,
    default: metaTitle,
  },
  description: metaDesc,
  keywords: ["Nextjs", "Starter", "App Router"],
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
  themeColor: "#ffffff",
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
