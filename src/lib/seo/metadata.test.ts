import { describe, expect, it } from "vitest";
import { buildSiteMetadata, buildSiteViewport } from "./metadata";

describe("buildSiteMetadata", () => {
  it("constructs production metadata with indexing enabled", () => {
    const meta = buildSiteMetadata({
      siteUrl: "https://example.com",
      isProduction: true,
    });

    expect(meta.metadataBase?.toString()).toBe("https://example.com/");
    expect(meta.alternates?.canonical).toBe("/");
    expect(meta.robots).toEqual({
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    });
    expect(meta.openGraph?.title).toBe("NextJS Starter");
    expect(meta.openGraph?.url).toBe("https://example.com");
    expect(meta.twitter?.title).toBe("NextJS Starter");
  });

  it("constructs non-production metadata with indexing disabled", () => {
    const meta = buildSiteMetadata({
      siteUrl: "http://localhost:3000",
      isProduction: false,
    });

    expect(meta.robots).toMatchObject({
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    });
  });

  it("supports custom title and description overrides", () => {
    const meta = buildSiteMetadata({
      siteUrl: "https://example.com",
      isProduction: true,
      title: "Custom App",
      description: "Custom Description",
      keywords: ["custom", "test"],
    });

    expect(meta.description).toBe("Custom Description");
    expect(meta.keywords).toEqual(["custom", "test"]);
    expect(meta.openGraph?.title).toBe("Custom App");
    expect(meta.openGraph?.description).toBe("Custom Description");
    expect(meta.twitter?.title).toBe("Custom App");
    expect(meta.twitter?.description).toBe("Custom Description");
  });
});

describe("buildSiteViewport", () => {
  it("returns viewport with device-width and dual theme colors", () => {
    const vp = buildSiteViewport();

    expect(vp.width).toBe("device-width");
    expect(vp.initialScale).toBe(1);
    expect(vp.themeColor).toEqual([
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    ]);
  });
});
