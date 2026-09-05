import Link from "next/link";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function HeaderContentContainer() {
  return (
    <Container>
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-lg font-bold tracking-tight">
              NextJS Starter
            </span>
          </Link>
          <Badge variant="secondary" className="hidden text-xs sm:inline-flex">
            v0.0.1
          </Badge>
        </div>

        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            Features
          </Link>
          <Link
            href="https://github.com/alipiry/nextjs-ts-tailwind-starter#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            Docs
          </Link>
          <a
            href="https://github.com/alipiry/nextjs-ts-tailwind-starter"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            GitHub
            <ExternalLink className="size-3.5" />
          </a>
        </nav>
      </div>
    </Container>
  );
}
