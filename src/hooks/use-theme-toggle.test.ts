import { beforeEach, describe, expect, it, vi } from "vitest";
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

vi.mock("react", async () => {
  const actual = await vi.importActual<typeof import("react")>("react");
  return {
    ...actual,
    useSyncExternalStore: (
      _subscribe: unknown,
      getClientSnapshot: () => boolean,
    ) => getClientSnapshot(),
  };
});

describe("useThemeToggle hook", () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
    currentMockTheme = "system";
  });

  it("initializes and mounts properly", () => {
    const result = useThemeToggle();

    expect(result.theme).toBe("system");
    expect(result.resolvedTheme).toBe("dark");
    expect(result.isMounted).toBe(true);
    expect(result.themes).toEqual(["light", "dark", "system"]);
  });

  it("calls setTheme with specified theme", () => {
    const result = useThemeToggle();

    result.setTheme("dark");

    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("toggles to next theme correctly using transition logic", () => {
    const result = useThemeToggle();

    result.toggleNextTheme();

    // system -> light
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });
});
