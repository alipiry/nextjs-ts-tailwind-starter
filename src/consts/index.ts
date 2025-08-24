export const metaTitle = "NextJS Starter";
export const metaDesc =
  "A starter template for Next.js projects with Tailwind CSS and Framer Motion.";

export const ogSize = {
  width: 1600,
  height: 800,
};

export const ogImageProps = {
  ...ogSize,
  alt: "NextJS Starter",
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

export const staggerContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeUpAnimationVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const } },
};
