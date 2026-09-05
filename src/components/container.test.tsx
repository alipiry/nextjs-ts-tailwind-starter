import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Container from "./container";

describe("Container component", () => {
  it("renders children properly", () => {
    render(
      <Container>
        <span>Content inside container</span>
      </Container>,
    );

    expect(screen.getByText("Content inside container")).toBeInTheDocument();
  });

  it("applies default bounded container styling", () => {
    const { container } = render(<Container>Test</Container>);
    const div = container.firstChild as HTMLElement;

    expect(div).toHaveClass("mx-auto");
    expect(div).toHaveClass("w-full");
    expect(div).toHaveClass("max-w-7xl");
  });

  it("merges additional custom classNames", () => {
    const { container } = render(
      <Container className="custom-container-padding">Test</Container>,
    );
    const div = container.firstChild as HTMLElement;

    expect(div).toHaveClass("custom-container-padding");
    expect(div).toHaveClass("max-w-7xl");
  });

  it("passes arbitrary HTML attributes down to root element", () => {
    render(<Container data-testid="main-container">Test</Container>);

    expect(screen.getByTestId("main-container")).toBeInTheDocument();
  });
});
