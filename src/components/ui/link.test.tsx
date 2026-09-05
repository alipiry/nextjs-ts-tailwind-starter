import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Link } from "./link";

describe("Link component", () => {
  it("renders internal link without external attributes", () => {
    render(<Link href="/features">Features</Link>);
    const link = screen.getByRole("link", { name: /features/i });

    expect(link).toHaveAttribute("href", "/features");
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });

  it("automatically applies target and rel to external http/https links", () => {
    render(
      <Link href="https://github.com/alipiry/nextjs-ts-tailwind-starter">
        GitHub Repo
      </Link>,
    );
    const link = screen.getByRole("link", { name: /github repo/i });

    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("allows custom target and rel to override automatic external detection", () => {
    render(
      <Link
        href="https://github.com/alipiry/nextjs-ts-tailwind-starter"
        target="_self"
        rel="author"
      >
        Custom
      </Link>,
    );
    const link = screen.getByRole("link", { name: /custom/i });

    expect(link).toHaveAttribute("target", "_self");
    expect(link).toHaveAttribute("rel", "author");
  });

  it("applies suppressHydrationWarning by default", () => {
    const { container } = render(<Link href="/">Home</Link>);
    const anchor = container.querySelector("a");

    expect(anchor).toBeInTheDocument();
  });

  it("merges custom className with cn utility", () => {
    render(
      <Link href="/about" className="custom-link-class">
        About
      </Link>,
    );
    const link = screen.getByRole("link", { name: /about/i });

    expect(link).toHaveClass("custom-link-class");
  });
});
