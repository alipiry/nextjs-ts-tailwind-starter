import type { MetadataRoute } from "next";
import { APP_ENV, SITE_URL } from "@/config";
import { buildRobotsPolicy } from "@/lib/seo/robots";

export default function robots(): MetadataRoute.Robots {
  const isProduction =
    APP_ENV === "production" || process.env.NODE_ENV === "production";

  return buildRobotsPolicy({
    isProduction,
    siteUrl: SITE_URL,
  });
}
