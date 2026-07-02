import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlowBorderProps<TElement extends ElementType = "div"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function GlowBorder<TElement extends ElementType = "div">({
  as,
  children,
  className,
  contentClassName,
  ...props
}: GlowBorderProps<TElement>) {
  const Component = as ?? "div";

  return (
    <Component className={cn("relative rounded-lg p-px", className)} {...props}>
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-lg opacity-80"
        style={{ background: "var(--glow-border)" }}
      />
      <div className={cn("relative rounded-lg bg-card", contentClassName)}>{children}</div>
    </Component>
  );
}
