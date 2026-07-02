import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  label: ReactNode;
  value: ReactNode;
  className?: string;
  description?: ReactNode;
  icon?: ReactNode;
};

export function StatCard({
  className,
  description,
  icon,
  label,
  value
}: StatCardProps) {
  return (
    <Card className={cn("p-5", className)} variant="elevated">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-foreground">{value}</p>
        </div>
        {icon ? (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
        ) : null}
      </div>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Card>
  );
}
