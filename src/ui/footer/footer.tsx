import FooterContentContainer from "./footer-content-container";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <Separator />
      <FooterContentContainer />
    </footer>
  );
}
