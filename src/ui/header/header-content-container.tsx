import { Link } from "@/components/ui/link";
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
          <Link href="/" className="flex items-center gap-2">
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
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="https://github.com/alipiry/nextjs-ts-tailwind-starter#readme"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            Docs
          </Link>
          <Link
            href="https://github.com/alipiry/nextjs-ts-tailwind-starter"
            aria-label="GitHub repository"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            <span className="hidden sm:inline">GitHub</span>
            <ExternalLink className="size-3.5" />
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </Container>
  );
}
