import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTitleAlign = "left" | "center";

type SectionTitleProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: SectionTitleAlign;
  className?: string;
};

const alignments: Record<SectionTitleAlign, string> = {
  left: "items-start text-left",
  center: "mx-auto items-center text-center"
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionTitleProps) {
  return (
    <div className={cn("flex max-w-containerSm flex-col gap-4", alignments[align], className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-containerXs text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
