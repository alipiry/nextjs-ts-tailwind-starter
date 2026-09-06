import { beforeEach, describe, expect, it, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useThemeToggle } from "./use-theme-toggle";

const mockSetTheme = vi.fn();
let currentMockTheme = "system";

vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: currentMockTheme,
    resolvedTheme: "dark",
    setTheme: mockSetTheme,
    themes: ["light", "dark", "system"],
  }),
}));

describe("useThemeToggle hook", () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
    currentMockTheme = "system";
  });

  it("initializes and mounts properly", () => {
    const { result } = renderHook(() => useThemeToggle());

    expect(result.current.theme).toBe("system");
    expect(result.current.resolvedTheme).toBe("dark");
    expect(result.current.isMounted).toBe(true);
    expect(result.current.themes).toEqual(["light", "dark", "system"]);
  });

  it("calls setTheme with specified theme", () => {
    const { result } = renderHook(() => useThemeToggle());

    act(() => {
      result.current.setTheme("dark");
    });

    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("toggles to next theme correctly using transition logic", () => {
    const { result } = renderHook(() => useThemeToggle());

    act(() => {
      result.current.toggleNextTheme();
    });

    // system -> light
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });
});
