import Container from "@/components/container";
import { currentYear } from "@/consts";

export default function FooterContentContainer() {
  return (
    <Container>
      <div className="text-center">
        <div className="text-sm font-semibold md:text-base">
          © {currentYear} NextJS Starter
        </div>
      </div>
    </Container>
  );
}
