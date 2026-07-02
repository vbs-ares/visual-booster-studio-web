import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "muted" | "elevated" | "outline";

type CardProps<TElement extends ElementType = "div"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  variant?: CardVariant;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

const cardVariants: Record<CardVariant, string> = {
  default: "border border-border bg-card text-card-foreground shadow-soft",
  muted: "border border-border bg-muted/60 text-foreground",
  elevated: "border border-border bg-card text-card-foreground shadow-card",
  outline: "border border-border bg-transparent text-foreground"
};

export function Card<TElement extends ElementType = "div">({
  as,
  children,
  className,
  interactive = false,
  variant = "default",
  ...props
}: CardProps<TElement>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "rounded-lg",
        cardVariants[variant],
        interactive &&
          "transition-all duration-normal ease-standard hover:-translate-y-1 hover:shadow-elevated",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
