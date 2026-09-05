import HeaderContentContainer from "./header-content-container";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 backdrop-blur-md">
      <HeaderContentContainer />
      <Separator />
    </header>
  );
}
