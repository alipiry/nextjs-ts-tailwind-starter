import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FaqSection, { faqs } from "./faq-section";

describe("FaqSection component", () => {
  it("renders section title and badge", () => {
    render(<FaqSection />);

    expect(screen.getByText("Frequently Asked Questions")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /everything you need to know/i,
        level: 2,
      }),
    ).toBeInTheDocument();
  });

  it("renders all FAQ questions from faqs array", () => {
    render(<FaqSection />);

    faqs.forEach((faq) => {
      expect(
        screen.getByRole("heading", { name: faq.question, level: 3 }),
      ).toBeInTheDocument();
    });
  });

  it("renders valid FAQPage JSON-LD schema", () => {
    const { container } = render(<FaqSection />);
    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );

    expect(script).toBeInTheDocument();
    const parsed = JSON.parse(script!.textContent || "{}");

    expect(parsed["@context"]).toBe("https://schema.org");
    expect(parsed["@type"]).toBe("FAQPage");
    expect(parsed.mainEntity).toHaveLength(faqs.length);
    expect(parsed.mainEntity[0]["@type"]).toBe("Question");
    expect(parsed.mainEntity[0].acceptedAnswer["@type"]).toBe("Answer");
  });
});
