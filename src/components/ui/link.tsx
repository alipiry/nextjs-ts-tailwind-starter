import NextLink from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface LinkProps extends ComponentPropsWithoutRef<typeof NextLink> {
  external?: boolean;
}

/**
 * Resilient Link component wrapping Next.js Link.
 *
 * Benefits:
 * - Automatically applies `target="_blank"` and `rel="noopener noreferrer"` for external URLs.
 * - Suppresses false-positive hydration warnings caused by browser extensions
 *   (e.g., Keychainify, password managers, translation tools) injecting DOM attributes.
 * - Pure React Server Component (no client-side overhead).
 */
export function Link({
  href,
  external,
  className,
  target,
  rel,
  suppressHydrationWarning = true,
  ...props
}: LinkProps) {
  const isExternal =
    external ??
    (typeof href === "string" &&
      (href.startsWith("http://") || href.startsWith("https://")));

  return (
    <NextLink
      href={href}
      target={target ?? (isExternal ? "_blank" : undefined)}
      rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
      suppressHydrationWarning={suppressHydrationWarning}
      className={cn(className)}
      {...props}
    />
  );
}
