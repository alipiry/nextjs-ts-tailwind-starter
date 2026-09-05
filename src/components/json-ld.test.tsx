import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { JsonLd } from "./json-ld";

describe("JsonLd component", () => {
  it("renders a script tag with type application/ld+json", () => {
    const { container } = render(<JsonLd />);
    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );

    expect(script).toBeInTheDocument();
  });

  it("contains valid Schema.org graph with WebSite and SoftwareApplication entities", () => {
    const { container } = render(<JsonLd />);
    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    expect(script).not.toBeNull();

    const parsed = JSON.parse(script!.textContent || "{}");

    expect(parsed["@context"]).toBe("https://schema.org");
    expect(Array.isArray(parsed["@graph"])).toBe(true);

    const types = parsed["@graph"].map(
      (item: Record<string, unknown>) => item["@type"],
    );
    expect(types).toContain("WebSite");
    expect(types).toContain("SoftwareApplication");

    const softwareApp = parsed["@graph"].find(
      (item: Record<string, unknown>) =>
        item["@type"] === "SoftwareApplication",
    );
    expect(softwareApp.name).toBe("Next.js TypeScript Tailwind Starter");
    expect(softwareApp.license).toBe("https://opensource.org/licenses/MIT");
    expect(softwareApp.author.name).toBe("Ali Piry");
  });

  it("merges customSchema into the schema graph", () => {
    const custom = {
      "@type": "Organization",
      name: "Custom Org",
    };
    const { container } = render(<JsonLd customSchema={custom} />);
    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const parsed = JSON.parse(script!.textContent || "{}");

    const types = parsed["@graph"].map(
      (item: Record<string, unknown>) => item["@type"],
    );
    expect(types).toContain("Organization");
  });
});
