import type { MetadataRoute } from "next";
import { APP_ENV, SITE_URL } from "@/config";
import { buildSitemapEntries } from "@/lib/seo/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  const isProduction = APP_ENV === "production";

  return buildSitemapEntries({
    siteUrl: SITE_URL,
    isProduction,
  });
}
