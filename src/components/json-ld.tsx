import {
  buildBaseSchemaGraph,
  buildJsonLdDocument,
  serializeJsonLd,
  type SchemaEntity,
} from "@/lib/seo/schema";

export interface JsonLdProps {
  customSchema?:
    | SchemaEntity
    | SchemaEntity[]
    | Record<string, unknown>
    | Array<Record<string, unknown>>;
}

export function JsonLd({ customSchema }: JsonLdProps) {
  const baseGraph = buildBaseSchemaGraph();
  const schema = buildJsonLdDocument(baseGraph, customSchema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
    />
  );
}
