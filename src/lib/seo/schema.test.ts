import { describe, expect, it } from "vitest";
import {
  buildBaseSchemaGraph,
  buildFaqPageSchema,
  buildJsonLdDocument,
  buildSoftwareAppEntity,
  buildWebSiteEntity,
} from "./schema";

describe("Schema.org generation engine", () => {
  describe("buildWebSiteEntity", () => {
    it("builds valid WebSite entity with default values", () => {
      const site = buildWebSiteEntity();

      expect(site["@type"]).toBe("WebSite");
      expect(site.url).toBe("http://localhost:3000");
      expect(site["@id"]).toBe("http://localhost:3000/#website");
      expect(site.name).toBe("NextJS Starter");
      expect(site.inLanguage).toBe("en-US");
      expect(site.publisher).toEqual({
        "@type": "Person",
        name: "Ali Piry",
        url: "https://github.com/alipiry",
      });
    });

    it("accepts custom parameters override", () => {
      const site = buildWebSiteEntity({
        siteUrl: "https://custom-domain.com",
        metaTitle: "Custom Title",
        metaDesc: "Custom Description",
        authorName: "Jane Doe",
        authorUrl: "https://janedoe.com",
      });

      expect(site.url).toBe("https://custom-domain.com");
      expect(site["@id"]).toBe("https://custom-domain.com/#website");
      expect(site.name).toBe("Custom Title");
      expect(site.description).toBe("Custom Description");
      expect(site.publisher).toEqual({
        "@type": "Person",
        name: "Jane Doe",
        url: "https://janedoe.com",
      });
    });
  });

  describe("buildSoftwareAppEntity", () => {
    it("builds valid SoftwareApplication entity", () => {
      const app = buildSoftwareAppEntity();

      expect(app["@type"]).toBe("SoftwareApplication");
      expect(app["@id"]).toBe("http://localhost:3000/#software");
      expect(app.name).toBe("Next.js TypeScript Tailwind Starter");
      expect(app.applicationCategory).toBe("DeveloperApplication");
      expect(app.operatingSystem).toBe("Cross-platform");
      expect(app.license).toBe("https://opensource.org/licenses/MIT");
      expect(app.offers).toEqual({
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      });
      expect(app.author).toEqual({
        "@type": "Person",
        name: "Ali Piry",
        url: "https://github.com/alipiry",
      });
    });
  });

  describe("buildBaseSchemaGraph", () => {
    it("returns both WebSite and SoftwareApplication entities in graph", () => {
      const graph = buildBaseSchemaGraph();

      expect(graph).toHaveLength(2);
      expect(graph[0]?.["@type"]).toBe("WebSite");
      expect(graph[1]?.["@type"]).toBe("SoftwareApplication");
    });
  });

  describe("buildFaqPageSchema", () => {
    it("maps FAQ questions and answers into FAQPage structure", () => {
      const faqs = [
        { question: "Q1", answer: "A1" },
        { question: "Q2", answer: "A2" },
      ];
      const schema = buildFaqPageSchema(faqs);

      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toBe("FAQPage");
      expect(Array.isArray(schema.mainEntity)).toBe(true);
      expect(schema.mainEntity).toEqual([
        {
          "@type": "Question",
          name: "Q1",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A1",
          },
        },
        {
          "@type": "Question",
          name: "Q2",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A2",
          },
        },
      ]);
    });

    it("handles empty FAQ list cleanly", () => {
      const schema = buildFaqPageSchema([]);
      expect(schema.mainEntity).toEqual([]);
    });
  });

  describe("buildJsonLdDocument", () => {
    const baseGraph = [{ "@type": "WebSite", name: "Site" }];

    it("constructs valid document without custom schema", () => {
      const doc = buildJsonLdDocument(baseGraph);

      expect(doc["@context"]).toBe("https://schema.org");
      expect(doc["@graph"]).toEqual(baseGraph);
    });

    it("merges single custom schema object into graph", () => {
      const custom = { "@type": "Organization", name: "Org" };
      const doc = buildJsonLdDocument(baseGraph, custom);

      expect(doc["@graph"]).toHaveLength(2);
      expect(doc["@graph"]).toContainEqual(custom);
    });

    it("merges array of custom schema objects into graph", () => {
      const customList = [
        { "@type": "Organization", name: "Org1" },
        { "@type": "Organization", name: "Org2" },
      ];
      const doc = buildJsonLdDocument(baseGraph, customList);

      expect(doc["@graph"]).toHaveLength(3);
      expect(doc["@graph"]).toContainEqual(customList[0]);
      expect(doc["@graph"]).toContainEqual(customList[1]);
    });
  });
});
