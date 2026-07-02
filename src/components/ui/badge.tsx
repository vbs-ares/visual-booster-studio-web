import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "neutral" | "primary" | "secondary" | "accent" | "success" | "warning";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: BadgeTone;
} & HTMLAttributes<HTMLSpanElement>;

const badgeTones: Record<BadgeTone, string> = {
  neutral: "border-border bg-muted text-muted-foreground",
  primary: "border-primary/20 bg-primary/10 text-primary",
  secondary: "border-secondary/20 bg-secondary/10 text-secondary",
  accent: "border-accent/25 bg-accent/10 text-accent",
  success: "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
  warning: "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300"
};

export function Badge({
  children,
  className,
  tone = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold",
        badgeTones[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
