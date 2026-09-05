import Link from "next/link";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { ExternalLink } from "lucide-react";

export default function HeaderContentContainer() {
  return (
    <Container>
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            suppressHydrationWarning
            className="flex items-center gap-2"
          >
            <span className="font-heading text-lg font-bold tracking-tight">
              NextJS Starter
            </span>
          </Link>
          <Badge variant="secondary" className="hidden text-xs sm:inline-flex">
            v0.0.1
          </Badge>
        </div>

        <nav className="flex items-center gap-3 sm:gap-4">
          <Link
            href="#features"
            suppressHydrationWarning
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            Features
          </Link>
          <Link
            href="https://github.com/alipiry/nextjs-ts-tailwind-starter#readme"
            target="_blank"
            rel="noopener noreferrer"
            suppressHydrationWarning
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            Docs
          </Link>
          <a
            href="https://github.com/alipiry/nextjs-ts-tailwind-starter"
            target="_blank"
            rel="noopener noreferrer"
            suppressHydrationWarning
            aria-label="GitHub repository"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            <span className="hidden sm:inline">GitHub</span>
            <ExternalLink className="size-3.5" />
          </a>
          <ModeToggle />
        </nav>
      </div>
    </Container>
  );
}
