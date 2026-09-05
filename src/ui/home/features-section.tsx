import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, Layers, Sparkles, Zap } from "lucide-react";

interface Feature {
  icon: typeof Zap;
  title: string;
  description: string;
  badge: string;
  points: string[];
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Next.js 16 & React 19",
    description:
      "Powered by App Router, React Server Components by default, and Turbopack for near-instant builds.",
    badge: "Core Engine",
    points: [
      "Zero-bundle-cost Server Components",
      "Turbopack-accelerated compilation",
      "Next.js 16 metadata & OG generation",
    ],
  },
  {
    icon: Sparkles,
    title: "Tailwind CSS v4",
    description:
      "Modern CSS-first architecture with CSS theme variables, OKLCH color spaces, and optimized utilities.",
    badge: "Styling",
    points: [
      "Pure CSS configuration via @theme",
      "Dynamic OKLCH color primitives",
      "Built-in tw-animate-css support",
    ],
  },
  {
    icon: Layers,
    title: "shadcn/ui & Base UI",
    description:
      "Accessible, headless UI primitives styled with base-nova, offering uncompromised design control.",
    badge: "Components",
    points: [
      "Modular Card, Badge & Button components",
      "Unstyled accessibility with Base UI",
      "Dark mode & theme tokens ready",
    ],
  },
  {
    icon: Code2,
    title: "TypeScript 5 & Strict Tooling",
    description:
      "Enterprise-grade quality gates with ESLint 9, Prettier, Husky pre-commit hooks, and Commitlint.",
    badge: "Reliability",
    points: [
      "Strict TypeScript 5 compiler checks",
      "Flat-config ESLint 9 + Prettier",
      "Automated Git hooks via Husky & lint-staged",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <Badge variant="outline">Features &amp; Architecture</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to ship fast
          </h2>
          <p className="text-muted-foreground sm:text-lg">
            Opinionated defaults and modern tooling designed to jumpstart your
            next production web project.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="flex flex-col justify-between"
              >
                <CardHeader>
                  <div className="flex items-center justify-between pb-2">
                    <div className="bg-muted text-foreground flex size-10 items-center justify-center rounded-lg">
                      <Icon className="size-5" />
                    </div>
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2 border-t pt-4 text-xs">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="bg-primary/70 size-1.5 rounded-full" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
