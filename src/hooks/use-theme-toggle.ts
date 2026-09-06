"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { getNextTheme, THEME_VALUES, type ThemeValue } from "@/lib/theme";

const emptySubscribe = () => () => {};

export function useThemeToggle() {
  const { theme, resolvedTheme, setTheme, themes } = useTheme();
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const toggleNextTheme = () => {
    const next = getNextTheme(theme);
    setTheme(next);
  };

  return {
    theme: theme as ThemeValue | undefined,
    resolvedTheme,
    setTheme,
    toggleNextTheme,
    isMounted,
    themes: (themes ?? THEME_VALUES) as readonly string[],
  };
}
