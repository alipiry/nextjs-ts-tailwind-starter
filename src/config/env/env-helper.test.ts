import { describe, expect, it } from "vitest";
import { isProductionEnv, normalizeSiteUrl, parseAppEnv } from "./env-helper";

describe("parseAppEnv", () => {
  it("defaults to dev when undefined, null, or empty string", () => {
    expect(parseAppEnv(undefined)).toBe("dev");
    expect(parseAppEnv(null)).toBe("dev");
    expect(parseAppEnv("")).toBe("dev");
    expect(parseAppEnv("   ")).toBe("dev");
  });

  it("returns trimmed environment string", () => {
    expect(parseAppEnv("production")).toBe("production");
    expect(parseAppEnv(" staging ")).toBe("staging");
    expect(parseAppEnv("test")).toBe("test");
  });
});

describe("normalizeSiteUrl", () => {
  it("defaults to http://localhost:3000 when empty", () => {
    expect(normalizeSiteUrl(undefined)).toBe("http://localhost:3000");
    expect(normalizeSiteUrl(null)).toBe("http://localhost:3000");
    expect(normalizeSiteUrl("")).toBe("http://localhost:3000");
    expect(normalizeSiteUrl("   ")).toBe("http://localhost:3000");
  });

  it("strips trailing slashes and whitespace", () => {
    expect(normalizeSiteUrl("https://nextjs-starter.dev/")).toBe(
      "https://nextjs-starter.dev",
    );
    expect(normalizeSiteUrl("https://nextjs-starter.dev///")).toBe(
      "https://nextjs-starter.dev",
    );
    expect(normalizeSiteUrl("  https://nextjs-starter.dev/  ")).toBe(
      "https://nextjs-starter.dev",
    );
  });
});

describe("isProductionEnv", () => {
  it("returns true if APP_ENV is production", () => {
    expect(
      isProductionEnv({ appEnv: "production", nodeEnv: "development" }),
    ).toBe(true);
  });

  it("returns true if NODE_ENV is production", () => {
    expect(isProductionEnv({ appEnv: "dev", nodeEnv: "production" })).toBe(
      true,
    );
  });

  it("returns false if neither is production", () => {
    expect(isProductionEnv({ appEnv: "staging", nodeEnv: "test" })).toBe(false);
    expect(isProductionEnv({})).toBe(false);
  });
});
