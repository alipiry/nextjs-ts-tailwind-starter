export const THEME_VALUES = ["light", "dark", "system"] as const;
export type ThemeValue = (typeof THEME_VALUES)[number];

export function isValidTheme(theme: unknown): theme is ThemeValue {
  return (
    typeof theme === "string" &&
    (THEME_VALUES as readonly string[]).includes(theme)
  );
}

/**
 * Pure transition function to cycle through theme states: light -> dark -> system -> light.
 */
export function getNextTheme(currentTheme?: string | null): ThemeValue {
  switch (currentTheme) {
    case "light":
      return "dark";
    case "dark":
      return "system";
    case "system":
    default:
      return "light";
  }
}
