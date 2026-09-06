import { describe, expect, it } from "vitest";
import { getNextTheme, isValidTheme, THEME_VALUES } from "./theme";

describe("THEME_VALUES", () => {
  it("includes light, dark, and system", () => {
    expect(THEME_VALUES).toEqual(["light", "dark", "system"]);
  });
});

describe("isValidTheme", () => {
  it("returns true for valid theme strings", () => {
    expect(isValidTheme("light")).toBe(true);
    expect(isValidTheme("dark")).toBe(true);
    expect(isValidTheme("system")).toBe(true);
  });

  it("returns false for invalid theme strings or types", () => {
    expect(isValidTheme("neon")).toBe(false);
    expect(isValidTheme("")).toBe(false);
    expect(isValidTheme(null)).toBe(false);
    expect(isValidTheme(undefined)).toBe(false);
    expect(isValidTheme(123)).toBe(false);
  });
});

describe("getNextTheme", () => {
  it("cycles correctly from light to dark", () => {
    expect(getNextTheme("light")).toBe("dark");
  });

  it("cycles correctly from dark to system", () => {
    expect(getNextTheme("dark")).toBe("system");
  });

  it("cycles correctly from system to light", () => {
    expect(getNextTheme("system")).toBe("light");
  });

  it("defaults to light for undefined or unknown themes", () => {
    expect(getNextTheme(undefined)).toBe("light");
    expect(getNextTheme(null)).toBe("light");
    expect(getNextTheme("custom")).toBe("light");
  });
});
