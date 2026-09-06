import { describe, expect, it } from "vitest";
import { buildSitemapEntries } from "./sitemap";

describe("buildSitemapEntries", () => {
  const fixedDate = new Date("2026-09-01T00:00:00Z");

  it("returns empty array in non-production environments", () => {
    const entries = buildSitemapEntries({
      siteUrl: "https://example.com",
      isProduction: false,
    });

    expect(entries).toEqual([]);
  });

  it("generates root entry with priority 1.0 by default in production", () => {
    const entries = buildSitemapEntries({
      siteUrl: "https://example.com",
      isProduction: true,
      lastModified: fixedDate,
    });

    expect(entries).toHaveLength(1);
    expect(entries[0]).toEqual({
      url: "https://example.com",
      lastModified: fixedDate,
      changeFrequency: "monthly",
      priority: 1,
    });
  });

  it("handles multiple routes with correct priority and path sanitization", () => {
    const entries = buildSitemapEntries({
      siteUrl: "https://example.com/",
      isProduction: true,
      routes: ["", "/features", "docs", "#faq"],
      lastModified: fixedDate,
    });

    expect(entries).toHaveLength(4);
    expect(entries[0]?.url).toBe("https://example.com");
    expect(entries[0]?.priority).toBe(1);

    expect(entries[1]?.url).toBe("https://example.com/features");
    expect(entries[1]?.priority).toBe(0.8);

    expect(entries[2]?.url).toBe("https://example.com/docs");
    expect(entries[2]?.priority).toBe(0.8);

    expect(entries[3]?.url).toBe("https://example.com/#faq");
    expect(entries[3]?.priority).toBe(0.8);
  });
});
