import type { ComponentPropsWithoutRef } from "react";
import type NextLink from "next/link";

export type NextLinkProps = ComponentPropsWithoutRef<typeof NextLink>;

export interface LinkAttributesOptions {
  href?: NextLinkProps["href"] | string | null;
  external?: boolean;
  target?: string;
  rel?: string;
}

export interface ResolvedLinkAttributes {
  isExternal: boolean;
  target?: string;
  rel?: string;
}

/**
 * Determines whether a given URL or href is external.
 * External URLs include http://, https://, protocol-relative //, mailto:, and tel:.
 */
export function isExternalUrl(
  href?: NextLinkProps["href"] | string | null,
): boolean {
  if (!href) return false;

  const urlString =
    typeof href === "string"
      ? href
      : typeof href === "object" &&
          "pathname" in href &&
          typeof href.pathname === "string"
        ? href.pathname
        : "";

  if (!urlString) return false;

  return (
    urlString.startsWith("http://") ||
    urlString.startsWith("https://") ||
    urlString.startsWith("//") ||
    urlString.startsWith("mailto:") ||
    urlString.startsWith("tel:")
  );
}

/**
 * Resolves HTML anchor attributes (target and rel) based on href and override options.
 */
export function resolveLinkAttributes({
  href,
  external,
  target,
  rel,
}: LinkAttributesOptions): ResolvedLinkAttributes {
  const isExternal = external ?? isExternalUrl(href);

  const resolvedTarget = target ?? (isExternal ? "_blank" : undefined);
  const resolvedRel = rel ?? (isExternal ? "noopener noreferrer" : undefined);

  return {
    isExternal,
    target: resolvedTarget,
    rel: resolvedRel,
  };
}
