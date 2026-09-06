import { describe, expect, it } from "vitest";
import { isExternalUrl, resolveLinkAttributes } from "./link";

describe("isExternalUrl", () => {
  it("identifies external URLs with http or https protocol", () => {
    expect(isExternalUrl("https://github.com/alipiry")).toBe(true);
    expect(isExternalUrl("http://localhost:3000")).toBe(true);
  });

  it("identifies protocol-relative URLs", () => {
    expect(isExternalUrl("//cdn.example.com/script.js")).toBe(true);
  });

  it("identifies mailto and tel schemes as external", () => {
    expect(isExternalUrl("mailto:alipirydev@gmail.com")).toBe(true);
    expect(isExternalUrl("tel:+1234567890")).toBe(true);
  });

  it("identifies internal relative paths and hashes as non-external", () => {
    expect(isExternalUrl("/")).toBe(false);
    expect(isExternalUrl("/features")).toBe(false);
    expect(isExternalUrl("#faq")).toBe(false);
    expect(isExternalUrl("?query=1")).toBe(false);
    expect(isExternalUrl("docs/guide")).toBe(false);
  });

  it("handles UrlObject properly", () => {
    expect(isExternalUrl({ pathname: "https://example.com" })).toBe(true);
    expect(isExternalUrl({ pathname: "/dashboard" })).toBe(false);
    expect(isExternalUrl({})).toBe(false);
  });

  it("handles null and undefined values safely", () => {
    expect(isExternalUrl(undefined)).toBe(false);
    expect(isExternalUrl(null)).toBe(false);
    expect(isExternalUrl("")).toBe(false);
  });
});

describe("resolveLinkAttributes", () => {
  it("resolves default attributes for internal links", () => {
    const attrs = resolveLinkAttributes({ href: "/features" });

    expect(attrs.isExternal).toBe(false);
    expect(attrs.target).toBeUndefined();
    expect(attrs.rel).toBeUndefined();
  });

  it("automatically applies target _blank and rel noopener noreferrer for external links", () => {
    const attrs = resolveLinkAttributes({
      href: "https://github.com/alipiry/nextjs-ts-tailwind-starter",
    });

    expect(attrs.isExternal).toBe(true);
    expect(attrs.target).toBe("_blank");
    expect(attrs.rel).toBe("noopener noreferrer");
  });

  it("allows overriding target and rel on external links", () => {
    const attrs = resolveLinkAttributes({
      href: "https://github.com/alipiry",
      target: "_self",
      rel: "author",
    });

    expect(attrs.isExternal).toBe(true);
    expect(attrs.target).toBe("_self");
    expect(attrs.rel).toBe("author");
  });

  it("allows overriding external boolean flag", () => {
    const forcedExternal = resolveLinkAttributes({
      href: "/download/spec.pdf",
      external: true,
    });
    expect(forcedExternal.isExternal).toBe(true);
    expect(forcedExternal.target).toBe("_blank");
    expect(forcedExternal.rel).toBe("noopener noreferrer");

    const forcedInternal = resolveLinkAttributes({
      href: "https://example.com",
      external: false,
    });
    expect(forcedInternal.isExternal).toBe(false);
    expect(forcedInternal.target).toBeUndefined();
    expect(forcedInternal.rel).toBeUndefined();
  });
});
