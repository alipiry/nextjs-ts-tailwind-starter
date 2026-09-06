import { Link } from "@/components/ui/link";
import Container from "@/components/container";
import { FOOTER_NAV_ITEMS, getFooterCopyrightText } from "@/lib/navigation";

export default function FooterContentContainer() {
  return (
    <Container>
      <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 py-8 text-sm md:flex-row">
        <p className="text-center md:text-left">{getFooterCopyrightText()}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {FOOTER_NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
