import type { MetadataRoute } from "next";

export interface SitemapOptions {
  siteUrl: string;
  isProduction: boolean;
  routes?: readonly string[];
  lastModified?: Date;
}

export function buildSitemapEntries({
  siteUrl,
  isProduction,
  routes = [""],
  lastModified = new Date(),
}: SitemapOptions): MetadataRoute.Sitemap {
  if (!isProduction) {
    return [];
  }

  const normalizedUrl = siteUrl.replace(/\/+$/, "");

  return routes.map((route) => {
    const cleanRoute = route.startsWith("/") ? route : route ? `/${route}` : "";
    return {
      url: `${normalizedUrl}${cleanRoute}`,
      lastModified,
      changeFrequency: "monthly",
      priority: cleanRoute === "" ? 1 : 0.8,
    };
  });
}
