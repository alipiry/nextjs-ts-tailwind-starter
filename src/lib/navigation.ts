import { isExternalUrl } from "@/lib/link";
import { currentYear } from "@/consts";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  isButton?: boolean;
}

export const HEADER_NAV_ITEMS: readonly NavItem[] = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Docs",
    href: "https://github.com/alipiry/nextjs-ts-tailwind-starter#readme",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/alipiry/nextjs-ts-tailwind-starter",
    external: true,
    isButton: true,
  },
] as const;

export const FOOTER_NAV_ITEMS: readonly NavItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/alipiry/nextjs-ts-tailwind-starter",
    external: true,
  },
  {
    label: "Documentation",
    href: "https://github.com/alipiry/nextjs-ts-tailwind-starter#readme",
    external: true,
  },
  {
    label: "License",
    href: "https://github.com/alipiry/nextjs-ts-tailwind-starter/blob/main/LICENSE",
    external: true,
  },
] as const;

export function isExternalNavItem(item: NavItem): boolean {
  return item.external ?? isExternalUrl(item.href);
}

export function getFooterCopyrightText(year: number = currentYear): string {
  return `© ${year} NextJS Starter. Built with Next.js, Tailwind CSS & shadcn/ui.`;
}
