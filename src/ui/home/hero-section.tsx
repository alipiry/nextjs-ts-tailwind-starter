import { Link } from "@/components/ui/link";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center gap-6 py-16 text-center sm:py-20 md:py-28">
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="px-3 py-1 text-xs font-medium"
            >
              Next.js 16 + Tailwind CSS 4 + shadcn/ui
            </Badge>
          </div>

          <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Build high-performance web apps with modern precision.
          </h1>

          <p className="text-muted-foreground max-w-xl text-base sm:text-lg">
            A production-ready foundation powered by React 19, Turbopack,
            shadcn/ui base-nova components, and strict TypeScript verification.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-3 pt-2 sm:w-auto sm:flex-row sm:gap-4">
            <Link
              href="#features"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
            >
              Explore Features
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="https://github.com/alipiry/nextjs-ts-tailwind-starter#readme"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto",
              )}
            >
              <BookOpen className="size-4" />
              Documentation
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
