import { describe, expect, it } from "vitest";
import {
  FOOTER_NAV_ITEMS,
  getFooterCopyrightText,
  HEADER_NAV_ITEMS,
  isExternalNavItem,
} from "./navigation";

describe("navigation models", () => {
  it("defines valid header navigation items", () => {
    expect(HEADER_NAV_ITEMS.length).toBeGreaterThanOrEqual(3);
    HEADER_NAV_ITEMS.forEach((item) => {
      expect(item.label).toBeDefined();
      expect(item.href).toBeDefined();
    });
  });

  it("defines valid footer navigation items", () => {
    expect(FOOTER_NAV_ITEMS.length).toBeGreaterThanOrEqual(3);
    FOOTER_NAV_ITEMS.forEach((item) => {
      expect(item.label).toBeDefined();
      expect(item.href).toBeDefined();
    });
  });

  it("identifies external nav items properly", () => {
    expect(
      isExternalNavItem({
        label: "Google",
        href: "https://google.com",
      }),
    ).toBe(true);

    expect(
      isExternalNavItem({
        label: "Features",
        href: "#features",
      }),
    ).toBe(false);

    expect(
      isExternalNavItem({
        label: "Custom",
        href: "/about",
        external: true,
      }),
    ).toBe(true);
  });

  it("formats footer copyright text correctly", () => {
    expect(getFooterCopyrightText(2026)).toBe(
      "© 2026 NextJS Starter. Built with Next.js, Tailwind CSS & shadcn/ui.",
    );
  });
});
