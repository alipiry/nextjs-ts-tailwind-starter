import { SITE_URL } from "@/config";
import { metaDesc, metaTitle } from "@/consts";

export interface JsonLdProps {
  customSchema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function JsonLd({ customSchema }: JsonLdProps) {
  const baseGraph = [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: metaTitle,
      description: metaDesc,
      inLanguage: "en-US",
      publisher: {
        "@type": "Person",
        name: "Ali Piry",
        url: "https://github.com/alipiry",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "Next.js TypeScript Tailwind Starter",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Cross-platform",
      programmingLanguage: ["TypeScript", "JavaScript", "CSS"],
      softwareRequirements: "Node.js >= 20.9.0, pnpm >= 11.0.0",
      softwareVersion: "0.0.1",
      description: metaDesc,
      url: SITE_URL,
      codeRepository: "https://github.com/alipiry/nextjs-ts-tailwind-starter",
      license: "https://opensource.org/licenses/MIT",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Person",
        name: "Ali Piry",
        url: "https://github.com/alipiry",
      },
    },
  ];

  const graph = customSchema
    ? Array.isArray(customSchema)
      ? [...baseGraph, ...customSchema]
      : [...baseGraph, customSchema]
    : baseGraph;

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
