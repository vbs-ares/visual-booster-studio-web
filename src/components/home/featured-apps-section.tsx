import Link from "next/link";
import { ImageReadyPreview, type PreviewImage } from "@/components/ui/image-ready-preview";
import { Container } from "@/components/ui/container";
import {
  interactiveArrowClassName,
  interactiveCardClassName,
  interactivePreviewClassName
} from "@/lib/interaction-styles";
import { cn } from "@/lib/utils";

type AppIconName = "inventory" | "attendance" | "invoice" | "expense" | "crm";
type AppAccent = "violet" | "emerald" | "blue" | "amber" | "cyan";

type FeaturedApp = {
  name: string;
  description: string;
  icon: AppIconName;
  accent: AppAccent;
  badge?: string;
  href: string;
  previewImage: PreviewImage;
  modules: string[];
  bars: number[];
  rows: string[];
};

const featuredApps: FeaturedApp[] = [
  {
    name: "Inventory Pro",
    description: "Manage stock, suppliers, orders and reports all in one place.",
    icon: "inventory",
    accent: "violet",
    badge: "Featured",
    href: "/web-apps/inventory-pro",
    previewImage: {
      alt: "Inventory Pro app dashboard preview"
    },
    modules: ["Stock", "Orders", "Reports"],
    bars: [38, 52, 46, 61, 54, 68],
    rows: ["Products", "Low stock", "Orders"]
  },
  {
    name: "Attendance Pro",
    description: "Smart attendance tracking with reports, leaves and analytics.",
    icon: "attendance",
    accent: "emerald",
    href: "/web-apps/attendance-pro",
    previewImage: {
      alt: "Attendance Pro app dashboard preview"
    },
    modules: ["Team", "Leave", "Logs"],
    bars: [58, 44, 63, 50, 70, 56],
    rows: ["Employees", "Present", "Reports"]
  },
  {
    name: "Invoice Pro",
    description: "Create invoices, track payments and send reminders easily.",
    icon: "invoice",
    accent: "blue",
    href: "/web-apps/invoice-pro",
    previewImage: {
      alt: "Invoice Pro app dashboard preview"
    },
    modules: ["Bills", "Paid", "Due"],
    bars: [42, 55, 72, 60, 48, 66],
    rows: ["Invoices", "Payments", "Due"]
  },
  {
    name: "Expense Tracker",
    description: "Track expenses, set budgets and analyze your spending in real-time.",
    icon: "expense",
    accent: "amber",
    href: "/web-apps/expense-tracker",
    previewImage: {
      alt: "Expense Tracker app dashboard preview"
    },
    modules: ["Spend", "Budget", "Review"],
    bars: [66, 48, 39, 58, 44, 52],
    rows: ["Expenses", "Budgets", "Review"]
  },
  {
    name: "CRM Pro",
    description: "Manage leads, customers and sales pipeline in one dashboard.",
    icon: "crm",
    accent: "cyan",
    href: "/web-apps/crm-pro",
    previewImage: {
      alt: "CRM Pro app dashboard preview"
    },
    modules: ["Leads", "Deals", "Tasks"],
    bars: [44, 58, 52, 74, 62, 68],
    rows: ["Leads", "Pipeline", "Follow-up"]
  }
];

const accentClassNames: Record<
  AppAccent,
  {
    icon: string;
    preview: string;
    previewSoft: string;
    badge: string;
  }
> = {
  violet: {
    icon: "bg-primary text-primary-foreground shadow-glow",
    preview: "bg-primary",
    previewSoft: "bg-primary/20",
    badge: "border-accent/40 text-accent"
  },
  emerald: {
    icon: "bg-emerald-500 text-white shadow-soft",
    preview: "bg-emerald-400",
    previewSoft: "bg-emerald-400/20",
    badge: "border-emerald-400/40 text-emerald-300"
  },
  blue: {
    icon: "bg-blue-500 text-white shadow-soft",
    preview: "bg-blue-500",
    previewSoft: "bg-blue-500/20",
    badge: "border-blue-400/40 text-blue-300"
  },
  amber: {
    icon: "bg-amber-500 text-white shadow-soft",
    preview: "bg-amber-400",
    previewSoft: "bg-amber-400/20",
    badge: "border-amber-400/40 text-amber-300"
  },
  cyan: {
    icon: "bg-cyan-500 text-white shadow-soft",
    preview: "bg-cyan-400",
    previewSoft: "bg-cyan-400/20",
    badge: "border-cyan-400/40 text-cyan-300"
  }
};

function AppIcon({ name }: { name: AppIconName }) {
  const iconProps = {
    "aria-hidden": true,
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  switch (name) {
    case "inventory":
      return (
        <svg {...iconProps}>
          <path d="M4 7.5 12 3l8 4.5-8 4.5L4 7.5Z" />
          <path d="M4 7.5v9L12 21l8-4.5v-9" />
          <path d="M12 12v9" />
        </svg>
      );
    case "attendance":
      return (
        <svg {...iconProps}>
          <path d="M8 7h8" />
          <path d="M8 12h5" />
          <path d="m15 17 2 2 4-4" />
          <path d="M5 3h14v18H5z" />
        </svg>
      );
    case "invoice":
      return (
        <svg {...iconProps}>
          <path d="M7 3h10a2 2 0 0 1 2 2v16l-3-2-3 2-3-2-3 2-2-1.3V5a2 2 0 0 1 2-2Z" />
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        </svg>
      );
    case "expense":
      return (
        <svg {...iconProps}>
          <path d="M4 7h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
          <path d="M16 7V5a2 2 0 0 0-2-2H6v4" />
          <path d="M16 13h4" />
        </svg>
      );
    case "crm":
      return (
        <svg {...iconProps}>
          <path d="M16 11a4 4 0 1 0-8 0" />
          <path d="M4 20a8 8 0 0 1 16 0" />
          <path d="M18 8h3" />
          <path d="M19.5 6.5v3" />
        </svg>
      );
  }
}

function MiniAppPreview({ app }: { app: FeaturedApp }) {
  const accent = accentClassNames[app.accent];

  return (
    <ImageReadyPreview
      image={app.previewImage}
      className={cn(
        "relative min-h-[8.75rem] min-w-0 rounded-lg border border-border bg-surface p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:border-white/10 dark:bg-[#050812]",
        interactivePreviewClassName
      )}
      imageClassName="rounded-lg"
    >
      <div aria-hidden="true">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-primary" />
          <span className="h-1.5 w-16 rounded-full bg-muted-foreground/20 dark:bg-white/[0.18]" />
        </div>
        <span className={cn("h-1.5 w-8 rounded-full", accent.previewSoft)} />
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {app.modules.map((module, index) => (
          <span
            key={module}
            className="rounded-md border border-border bg-card px-2 py-2 dark:border-white/10 dark:bg-white/[0.035]"
          >
            <span className={cn("block h-1 w-4 rounded-full", index === 0 ? accent.preview : accent.previewSoft)} />
            <span className="mt-3 block h-1.5 rounded-full bg-muted-foreground/15 dark:bg-white/[0.14]" />
            <span className="mt-1.5 block h-1 w-2/3 rounded-full bg-muted-foreground/10 dark:bg-white/[0.1]" />
          </span>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-[1.05fr_1.15fr] gap-2">
        <div className="space-y-1.5 rounded-md border border-border bg-card p-2 dark:border-white/10 dark:bg-white/[0.035]">
          {app.rows.map((row, index) => (
            <span key={row} className="flex items-center gap-1.5">
              <span className={cn("h-1.5 w-1.5 rounded-full", index === 0 ? accent.preview : "bg-muted-foreground/25 dark:bg-white/[0.22]")} />
              <span className="h-1.5 flex-1 rounded-full bg-muted-foreground/15 dark:bg-white/[0.14]" />
            </span>
          ))}
        </div>
        <div className="flex min-h-[3.4rem] items-end gap-1 rounded-md border border-border bg-card px-2 pb-2 dark:border-white/10 dark:bg-white/[0.035]">
          {app.bars.map((height, index) => (
            <span
              key={`${app.icon}-${height}-${index}`}
              className={cn("w-full rounded-t-sm", index % 2 === 0 ? accent.preview : accent.previewSoft)}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
      </div>
    </ImageReadyPreview>
  );
}

export function AppCard({ app }: { app: FeaturedApp }) {
  const accent = accentClassNames[app.accent];
  const titleId = `${app.icon}-featured-app-title`;

  return (
    <article aria-labelledby={titleId}>
      <Link
        href={app.href}
        aria-label={`View ${app.name}`}
        className={cn(
          "flex min-h-[21.5rem] flex-col rounded-xl border border-border bg-card p-5 text-foreground shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/10 dark:bg-[#070b14] dark:text-white",
          interactiveCardClassName
        )}
      >
      <div className="grid grid-cols-[3rem_1fr] gap-4">
        <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl", accent.icon)}>
          <AppIcon name={app.icon} />
        </span>
        <div className="relative">
          {app.badge ? (
            <span className={cn("absolute right-2 top-2 z-10 rounded-md border bg-card px-2 py-0.5 text-[0.58rem] font-semibold uppercase dark:bg-[#070b14]", accent.badge)}>
              {app.badge}
            </span>
          ) : null}
          <MiniAppPreview app={app} />
        </div>
      </div>

      <h3 id={titleId} className="mt-6 text-xl font-semibold leading-tight tracking-[-0.016em]">
        {app.name}
      </h3>
      <p className="mt-2.5 max-w-[14rem] text-sm leading-6 text-muted-foreground dark:text-white/65">
        {app.description}
      </p>

      <span className="mt-auto inline-flex min-h-10 items-center self-start pt-5 text-sm font-semibold text-primary transition-colors hover:text-foreground dark:hover:text-white">
        View Details
        <span aria-hidden="true" className={cn("ml-2", interactiveArrowClassName)}>
          →
        </span>
      </span>
      </Link>
    </article>
  );
}

export function FeaturedAppsSection() {
  return (
    <section
      aria-labelledby="featured-apps-title"
      className="border-t border-border bg-background py-8 text-foreground dark:border-white/10 dark:bg-[#03050a] dark:text-white"
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          <h2 id="featured-apps-title" className="text-2xl font-semibold tracking-[-0.018em]">
            Featured Web Apps
          </h2>
          <Link
            href="/web-apps"
            className="inline-flex min-h-10 items-center text-sm font-semibold text-primary transition-colors hover:text-foreground dark:hover:text-white"
          >
            View All Apps
            <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {featuredApps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </Container>
    </section>
  );
}
