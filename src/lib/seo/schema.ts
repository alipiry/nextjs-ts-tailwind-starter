import { SITE_URL } from "@/config";
import { metaDesc, metaTitle } from "@/consts";

export interface SchemaEntity {
  "@type": string;
  [key: string]: unknown;
}

export interface BaseSchemaParams {
  siteUrl?: string;
  metaTitle?: string;
  metaDesc?: string;
  authorName?: string;
  authorUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface JsonLdDocument {
  "@context": "https://schema.org";
  "@graph": SchemaEntity[];
}

export function buildWebSiteEntity(
  params: BaseSchemaParams = {},
): SchemaEntity {
  const url = params.siteUrl ?? SITE_URL;
  const title = params.metaTitle ?? metaTitle;
  const desc = params.metaDesc ?? metaDesc;
  const author = params.authorName ?? "Ali Piry";
  const authorUrl = params.authorUrl ?? "https://github.com/alipiry";

  return {
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: title,
    description: desc,
    inLanguage: "en-US",
    publisher: {
      "@type": "Person",
      name: author,
      url: authorUrl,
    },
  };
}

export function buildSoftwareAppEntity(
  params: BaseSchemaParams = {},
): SchemaEntity {
  const url = params.siteUrl ?? SITE_URL;
  const desc = params.metaDesc ?? metaDesc;
  const author = params.authorName ?? "Ali Piry";
  const authorUrl = params.authorUrl ?? "https://github.com/alipiry";

  return {
    "@type": "SoftwareApplication",
    "@id": `${url}/#software`,
    name: "Next.js TypeScript Tailwind Starter",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    programmingLanguage: ["TypeScript", "JavaScript", "CSS"],
    softwareRequirements: "Node.js >= 20.9.0, pnpm >= 11.0.0",
    softwareVersion: "0.0.1",
    description: desc,
    url,
    codeRepository: "https://github.com/alipiry/nextjs-ts-tailwind-starter",
    license: "https://opensource.org/licenses/MIT",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: author,
      url: authorUrl,
    },
  };
}

export function buildBaseSchemaGraph(
  params: BaseSchemaParams = {},
): SchemaEntity[] {
  return [buildWebSiteEntity(params), buildSoftwareAppEntity(params)];
}

export function buildFaqPageSchema(faqs: readonly FaqItem[]): SchemaEntity {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildJsonLdDocument(
  baseGraph: SchemaEntity[],
  customSchema?:
    | SchemaEntity
    | SchemaEntity[]
    | Record<string, unknown>
    | Array<Record<string, unknown>>,
): JsonLdDocument {
  let graph: SchemaEntity[] = [...baseGraph];

  if (customSchema) {
    if (Array.isArray(customSchema)) {
      graph = [...graph, ...(customSchema as SchemaEntity[])];
    } else {
      graph = [...graph, customSchema as SchemaEntity];
    }
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

/**
 * Safely serializes schema objects to a JSON string for embedding inside HTML script tags.
 * Replaces '<' with unicode '\u003c' to prevent script tag injection and XSS.
 */
export function serializeJsonLd(schema: unknown): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
