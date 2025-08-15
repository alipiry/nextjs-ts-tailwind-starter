import { cn } from "@/lib/utils";

export default function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("mx-auto max-w-full px-4 md:px-12 xl:px-32", className)}
      {...props}
    />
  );
}
