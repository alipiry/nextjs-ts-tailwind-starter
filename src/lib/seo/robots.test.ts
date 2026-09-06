import { describe, expect, it } from "vitest";
import { buildRobotsPolicy, TIER_1_AI_BOTS } from "./robots";

describe("buildRobotsPolicy", () => {
  it("generates production policy with wildcard, AI bots, and sitemap", () => {
    const policy = buildRobotsPolicy({
      isProduction: true,
      siteUrl: "https://example.com",
    });

    expect(Array.isArray(policy.rules)).toBe(true);
    const rules = policy.rules as Array<{
      userAgent: string | string[];
      allow?: string;
    }>;

    expect(rules).toHaveLength(2);
    expect(rules[0]).toEqual({ userAgent: "*", allow: "/" });
    expect(rules[1]?.userAgent).toEqual([...TIER_1_AI_BOTS]);
    expect(rules[1]?.allow).toBe("/");
    expect(policy.sitemap).toBe("https://example.com/sitemap.xml");
  });

  it("normalizes trailing slashes on siteUrl in production", () => {
    const policy = buildRobotsPolicy({
      isProduction: true,
      siteUrl: "https://example.com///",
    });

    expect(policy.sitemap).toBe("https://example.com/sitemap.xml");
  });

  it("generates non-production disallow policy without sitemap", () => {
    const policy = buildRobotsPolicy({
      isProduction: false,
      siteUrl: "https://example.com",
    });

    expect(policy.rules).toEqual({
      userAgent: "*",
      disallow: "/",
    });
    expect(policy.sitemap).toBeUndefined();
  });

  it("allows specifying custom AI bots list", () => {
    const customBots = ["CustomBot1", "CustomBot2"];
    const policy = buildRobotsPolicy({
      isProduction: true,
      siteUrl: "https://example.com",
      aiBots: customBots,
    });

    const rules = policy.rules as Array<{
      userAgent: string | string[];
      allow?: string;
    }>;
    expect(rules[1]?.userAgent).toEqual(customBots);
  });
});
