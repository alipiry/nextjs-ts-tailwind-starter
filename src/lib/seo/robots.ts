import type { MetadataRoute } from "next";

export const TIER_1_AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
] as const;

export interface RobotsPolicyOptions {
  isProduction: boolean;
  siteUrl: string;
  aiBots?: readonly string[];
}

export function buildRobotsPolicy({
  isProduction,
  siteUrl,
  aiBots = TIER_1_AI_BOTS,
}: RobotsPolicyOptions): MetadataRoute.Robots {
  const normalizedUrl = siteUrl.replace(/\/+$/, "");

  if (isProduction) {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
        {
          userAgent: [...aiBots],
          allow: "/",
        },
      ],
      sitemap: `${normalizedUrl}/sitemap.xml`,
    };
  }

  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
