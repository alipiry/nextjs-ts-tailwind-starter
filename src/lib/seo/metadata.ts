import type { Metadata, Viewport } from "next";
import {
  defaultOpenGraph,
  defaultTwitter,
  metaDesc,
  metaKeywords,
  metaTitle,
} from "@/consts";

export interface SiteMetadataOptions {
  siteUrl: string;
  isProduction: boolean;
  title?: string;
  description?: string;
  keywords?: string[];
  authors?: Array<{ name: string; url?: string }>;
  creator?: string;
  publisher?: string;
}

export function buildSiteMetadata({
  siteUrl,
  isProduction,
  title = metaTitle,
  description = metaDesc,
  keywords = metaKeywords,
  authors = [{ name: "Ali Piry", url: "https://github.com/alipiry" }],
  creator = "Ali Piry",
  publisher = "Ali Piry",
}: SiteMetadataOptions): Metadata {
  return {
    title: {
      template: `%s | ${title}`,
      default: `${title} — Next.js 16, Tailwind CSS 4 & shadcn/ui`,
    },
    description,
    keywords,
    authors,
    creator,
    publisher,
    formatDetection: {
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      ...defaultOpenGraph,
      title,
      description,
      url: siteUrl,
    },
    twitter: {
      ...defaultTwitter,
      title,
      description,
    },
    robots: {
      index: isProduction,
      follow: isProduction,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
      googleBot: {
        index: isProduction,
        follow: isProduction,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
  };
}

export function buildSiteViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    ],
  };
}
