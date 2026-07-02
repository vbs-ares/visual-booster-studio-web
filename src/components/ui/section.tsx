import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionSpacing = "sm" | "md" | "lg" | "none";

type SectionProps<TElement extends ElementType = "section"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  spacing?: SectionSpacing;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

const sectionSpacing: Record<SectionSpacing, string> = {
  sm: "py-sectionSm",
  md: "py-sectionMd",
  lg: "py-sectionLg",
  none: "py-0"
};

export function Section<TElement extends ElementType = "section">({
  as,
  children,
  className,
  spacing = "md",
  ...props
}: SectionProps<TElement>) {
  const Component = as ?? "section";

  return (
    <Component className={cn(sectionSpacing[spacing], className)} {...props}>
      {children}
    </Component>
  );
}
