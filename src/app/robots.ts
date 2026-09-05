import { MetadataRoute } from "next";
import { APP_ENV, SITE_URL } from "@/config";

const aiSearchBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  const isProduction =
    APP_ENV === "production" || process.env.NODE_ENV === "production";

  if (isProduction) {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
        {
          userAgent: aiSearchBots,
          allow: "/",
        },
      ],
      sitemap: `${SITE_URL}/sitemap.xml`,
    };
  }

  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
