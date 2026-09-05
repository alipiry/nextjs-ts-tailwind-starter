export const metaTitle = "NextJS Starter";
export const metaDesc =
  "A TypeScript starter for Next.js 16 that includes App Router, Tailwind CSS 4, shadcn/ui, Built-in SEO, and more.";

export const metaKeywords = [
  "Next.js 16",
  "React 19",
  "Tailwind CSS 4",
  "shadcn/ui",
  "TypeScript",
  "App Router",
  "Turbopack",
  "Starter Template",
  "Boilerplate",
  "Base UI",
];

export const ogSize = {
  width: 1600,
  height: 800,
};

export const ogImageProps = {
  ...ogSize,
  alt: "NextJS Starter - Next.js 16, Tailwind CSS 4 & shadcn/ui",
  contentType: "image/png",
};

export const defaultOpenGraph = {
  siteName: "NextJS Starter",
  images: [
    {
      url: "/images/og.png",
      ...ogImageProps,
    },
  ],
  locale: "en_US",
  type: "website",
};

export const defaultTwitter = {
  card: "summary_large_image",
  images: [
    {
      url: "/images/og.png",
      ...ogImageProps,
    },
  ],
};

export const currentYear = new Date().getFullYear();
