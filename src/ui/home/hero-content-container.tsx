import Link from "next/link";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export default function HeroContentContainer() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-6 py-20 text-center md:py-28">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
            Next.js 16 + Tailwind CSS 4 + shadcn/ui
          </Badge>
        </div>

        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Build high-performance web apps with modern precision.
        </h1>

        <p className="text-muted-foreground max-w-2xl text-base sm:text-lg md:text-xl">
          A production-ready foundation powered by React 19, Turbopack,
          shadcn/ui base-nova components, and strict TypeScript verification.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="#features" className={buttonVariants({ size: "lg" })}>
            Explore Features
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="https://github.com/alipiry/nextjs-ts-tailwind-starter#readme"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <BookOpen className="size-4" />
            Documentation
          </a>
        </div>
      </div>
    </Container>
  );
}
