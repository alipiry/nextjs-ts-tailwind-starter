import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

import { buildFaqPageSchema, type FaqItem } from "@/lib/seo/schema";

export type { FaqItem };

export const faqs: FaqItem[] = [
  {
    question: "What makes NextJS Starter different from other templates?",
    answer:
      "NextJS Starter is engineered for React 19 and Next.js 16 with pure React Server Components by default, Tailwind CSS v4's CSS-first theme engine, unstyled accessible Base UI primitives, an automated Vitest test suite, and built-in Generative Engine Optimization (GEO) with llms.txt and Schema.org structured data.",
  },
  {
    question: "How does Tailwind CSS v4 work in this starter?",
    answer:
      "Tailwind CSS v4 replaces JavaScript configuration with CSS-first directives via @theme inline in globals.css. It natively supports OKLCH color spaces, CSS custom variants for dark mode, container queries, and tw-animate-css without requiring a tailwind.config.js file.",
  },
  {
    question: "How do I add new shadcn/ui components?",
    answer:
      "Run `pnpm dlx shadcn add <component-name>` in your terminal. Newly installed components automatically integrate with the configured base-nova design tokens, `@base-ui/react` primitives, and `@/lib/utils` class merging.",
  },
  {
    question: "What testing framework is pre-configured?",
    answer:
      "The starter comes pre-configured with Vitest, focusing on fast, pure unit testing of decoupled business logic, custom hooks, SEO schema builders, environment helpers, and utility functions without fragile UI rendering tests.",
  },
  {
    question:
      "Is this starter optimized for AI search engines like ChatGPT and Perplexity?",
    answer:
      "Yes. The starter includes a public/llms.txt manifest, structured SoftwareApplication and FAQPage JSON-LD schema, 100% server-rendered static HTML, and explicitly configured AI crawler directives in robots.ts.",
  },
];

export default function FaqSection() {
  const faqSchema = buildFaqPageSchema(faqs);

  return (
    <section id="faq" className="border-t py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <Badge variant="outline" className="gap-1.5">
            <HelpCircle className="size-3.5" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to know
          </h2>
          <p className="text-muted-foreground sm:text-lg">
            Direct, fact-dense answers about architecture, styling, testing, and
            AI search optimization.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card key={faq.question} className="h-full">
              <CardHeader>
                <CardTitle className="text-base leading-snug font-semibold">
                  {faq.question}
                </CardTitle>
                <CardDescription className="text-muted-foreground pt-1.5 text-sm leading-relaxed">
                  {faq.answer}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
