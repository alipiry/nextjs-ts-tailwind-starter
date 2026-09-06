import { Link } from "@/components/ui/link";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { ExternalLink } from "lucide-react";
import { HEADER_NAV_ITEMS } from "@/lib/navigation";

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
          {HEADER_NAV_ITEMS.map((item) =>
            item.isButton ? (
              <Link
                key={item.label}
                href={item.href}
                aria-label={`${item.label} repository`}
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                <span className="hidden sm:inline">{item.label}</span>
                <ExternalLink className="size-3.5" />
              </Link>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}
          <ModeToggle />
        </nav>
      </div>
    </Container>
  );
}
