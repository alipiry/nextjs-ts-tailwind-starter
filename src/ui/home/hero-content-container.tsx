import Container from "@/components/container";
import { Button } from "@/components/ui/button";

export default function HeroContentContainer() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold uppercase md:text-5xl">
          NextJS Starter
        </h1>
        <Button>Get Started</Button>
      </div>
    </Container>
  );
}
