import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedUnderlineProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;

export function AnimatedUnderline({
  children,
  className,
  ...props
}: AnimatedUnderlineProps) {
  return (
    <span
      className={cn(
        "relative inline-flex w-fit after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-normal after:ease-standard hover:after:scale-x-100",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
