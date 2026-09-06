import type { MetadataRoute } from "next";
import { IS_PRODUCTION, SITE_URL } from "@/config";
import { buildRobotsPolicy } from "@/lib/seo/robots";

export default function robots(): MetadataRoute.Robots {
  return buildRobotsPolicy({
    isProduction: IS_PRODUCTION,
    siteUrl: SITE_URL,
  });
}
