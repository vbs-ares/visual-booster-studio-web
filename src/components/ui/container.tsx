import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps<TElement extends ElementType = "div"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function Container<TElement extends ElementType = "div">({
  as,
  children,
  className,
  size = "lg",
  ...props
}: ContainerProps<TElement>) {
  const Component = as ?? "div";
  const sizes = {
    sm: "max-w-containerSm",
    md: "max-w-containerMd",
    lg: "max-w-7xl",
    xl: "max-w-containerXl"
  };

  return (
    <Component
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
