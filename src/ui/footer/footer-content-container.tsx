import Link from "next/link";
import Container from "@/components/container";
import { currentYear } from "@/consts";

export default function FooterContentContainer() {
  return (
    <Container>
      <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 py-8 text-sm md:flex-row">
        <p className="text-center md:text-left">
          &copy; {currentYear} NextJS Starter. Built with Next.js, Tailwind CSS
          &amp; shadcn/ui.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            href="https://github.com/alipiry/nextjs-ts-tailwind-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://github.com/alipiry/nextjs-ts-tailwind-starter#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Documentation
          </Link>
          <Link
            href="https://github.com/alipiry/nextjs-ts-tailwind-starter/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            License
          </Link>
        </div>
      </div>
    </Container>
  );
}
