import Link from "next/link";
import { CrystalVLogo } from "@/components/brand/crystal-v-logo";
import { ImageReadyPreview } from "@/components/ui/image-ready-preview";
import { Container } from "@/components/ui/container";
import {
  interactiveArrowClassName,
  interactiveCardClassName,
  interactivePreviewClassName
} from "@/lib/interaction-styles";
import { cn } from "@/lib/utils";

const transformations = [
  {
    spreadsheet: "Inventory.xlsx",
    app: "Inventory Pro",
    tag: "Featured",
    accent: "violet",
    href: "/web-apps/inventory-pro",
    spreadsheetPreview: {
      alt: "Inventory spreadsheet preview"
    },
    appPreview: {
      alt: "Inventory Pro web application preview"
    },
    rows: [
      ["Item 001", "Stock", "Review"],
      ["Item 002", "Price", "Manual"],
      ["Item 003", "Vendor", "Email"]
    ],
    modules: ["Products", "Suppliers", "Reports"]
  },
  {
    spreadsheet: "Attendance.xlsx",
    app: "Attendance Pro",
    tag: "Live",
    accent: "emerald",
    href: "/web-apps/attendance-pro",
    spreadsheetPreview: {
      alt: "Attendance spreadsheet preview"
    },
    appPreview: {
      alt: "Attendance Pro web application preview"
    },
    rows: [
      ["John", "Mon", "Present"],
      ["Sarah", "Tue", "Present"],
      ["Mike", "Wed", "Absent"]
    ],
    modules: ["Employees", "Schedules", "Analytics"]
  },
  {
    spreadsheet: "Invoice.xlsx",
    app: "Invoice Pro",
    tag: "Pro",
    accent: "amber",
    href: "/web-apps/invoice-pro",
    spreadsheetPreview: {
      alt: "Invoice spreadsheet preview"
    },
    appPreview: {
      alt: "Invoice Pro web application preview"
    },
    rows: [
      ["INV-001", "Client", "Paid"],
      ["INV-002", "Amount", "Pending"],
      ["INV-003", "Status", "Overdue"]
    ],
    modules: ["Invoices", "Payments", "Reminders"]
  }
] as const;

function SpreadsheetCard({ item }: { item: (typeof transformations)[number] }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/[0.035] p-3 shadow-[0_14px_32px_rgba(0,0,0,0.24)]",
        interactiveCardClassName,
        "hover:shadow-[0_16px_34px_rgba(16,185,129,0.10)]"
      )}
    >
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-300">
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8" />
            <path d="M8 17h8" />
            <path d="M8 9h2" />
          </svg>
        </span>
        <p className="text-sm font-semibold text-white">{item.spreadsheet}</p>
      </div>

      <ImageReadyPreview
        image={item.spreadsheetPreview}
        className={cn(
          "mt-3 rounded-lg border border-white/10 bg-white text-[0.62rem] text-slate-700",
          interactivePreviewClassName
        )}
      >
        <div className="grid grid-cols-3 bg-slate-100 font-semibold text-slate-500">
          <span className="px-2 py-1.5">Name</span>
          <span className="border-l border-slate-200 px-2 py-1.5">Field</span>
          <span className="border-l border-slate-200 px-2 py-1.5">Status</span>
        </div>
        {item.rows.map((row) => (
          <div key={row.join("-")} className="grid grid-cols-3">
            {row.map((cell) => (
              <span key={cell} className="border-t border-slate-200 px-2 py-1.5 [&:not(:first-child)]:border-l">
                {cell}
              </span>
            ))}
          </div>
        ))}
      </ImageReadyPreview>
    </div>
  );
}

function AppCard({ item }: { item: (typeof transformations)[number] }) {
  const accentClassNames = {
    violet: {
      border: "border-primary/50",
      hoverBorder: "hover:border-primary/45",
      text: "text-primary",
      bg: "bg-primary",
      soft: "bg-primary/15",
      shadow: "shadow-[0_14px_34px_rgba(0,0,0,0.34),0_0_18px_rgba(124,58,237,0.08)]",
      hoverShadow: "hover:shadow-[0_18px_38px_rgba(0,0,0,0.36),0_0_24px_rgba(124,58,237,0.16)]"
    },
    emerald: {
      border: "border-emerald-400/40",
      hoverBorder: "hover:border-emerald-300/45",
      text: "text-emerald-300",
      bg: "bg-emerald-400",
      soft: "bg-emerald-400/15",
      shadow: "shadow-[0_14px_34px_rgba(0,0,0,0.34),0_0_18px_rgba(52,211,153,0.07)]",
      hoverShadow: "hover:shadow-[0_18px_38px_rgba(0,0,0,0.36),0_0_24px_rgba(52,211,153,0.14)]"
    },
    amber: {
      border: "border-amber-400/40",
      hoverBorder: "hover:border-amber-300/45",
      text: "text-amber-300",
      bg: "bg-amber-400",
      soft: "bg-amber-400/15",
      shadow: "shadow-[0_14px_34px_rgba(0,0,0,0.34),0_0_18px_rgba(251,191,36,0.07)]",
      hoverShadow: "hover:shadow-[0_18px_38px_rgba(0,0,0,0.36),0_0_24px_rgba(251,191,36,0.14)]"
    }
  }[item.accent];

  return (
    <div
      className={cn(
        "isolate rounded-xl border border-white/10 bg-[#070b14] p-3",
        accentClassNames.shadow,
        interactiveCardClassName,
        accentClassNames.hoverBorder,
        accentClassNames.hoverShadow
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <CrystalVLogo className="h-6 w-8" />
          <div>
            <p className="text-sm font-semibold text-white">{item.app}</p>
            <p className="mt-0.5 text-[0.65rem] text-white/[0.45]">Premium web application</p>
          </div>
        </div>
        <span className={`rounded-md border px-2 py-1 text-[0.62rem] font-semibold ${accentClassNames.border} ${accentClassNames.text}`}>
          {item.tag}
        </span>
      </div>

      <ImageReadyPreview
        image={item.appPreview}
        className={cn(
          "mt-4 rounded-lg border border-white/10 bg-black/20 p-2",
          interactivePreviewClassName
        )}
      >
        <div className="grid grid-cols-[1.8rem_1fr] gap-3">
          <div className="flex flex-col items-center gap-2 border-r border-white/10 pr-2" aria-hidden="true">
            {[0, 1, 2].map((index) => (
              <span key={`${item.app}-nav-${index}`} className="flex h-5 w-5 items-center justify-center rounded-md border border-white/10">
                <span className={`h-1.5 w-1.5 rounded-full ${index === 0 ? accentClassNames.bg : "bg-white/35"}`} />
              </span>
            ))}
          </div>

          <div className="min-w-0">
            <div className="grid grid-cols-3 gap-2">
              {item.modules.map((module) => (
                <div key={module} className="rounded-lg border border-white/10 bg-white/[0.035] p-2">
                  <div className={`h-1.5 w-8 rounded-full ${accentClassNames.soft}`} />
                  <p className="mt-3 truncate text-[0.62rem] font-medium text-white/65">{module}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.035] p-3">
              <div className="flex h-14 items-end gap-1.5" aria-hidden="true">
                {[26, 33, 30, 40, 36, 45, 41, 49].map((height, index) => (
                  <span
                    key={`${item.app}-${height}-${index}`}
                    className={`w-full rounded-t ${accentClassNames.bg}`}
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ImageReadyPreview>
    </div>
  );
}

function TransformationRow({ item }: { item: (typeof transformations)[number] }) {
  return (
    <li>
      <Link
        href={item.href}
        aria-label={`View ${item.app}`}
        className="grid gap-3 rounded-xl border border-transparent p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#03050a] lg:grid-cols-[1fr_auto_1.42fr] lg:items-center"
      >
        <SpreadsheetCard item={item} />
        <div className="flex justify-center">
          <span className="group/card flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.035] text-white transition duration-normal ease-standard hover:border-primary/35 motion-reduce:transition-none">
            <svg
              aria-hidden="true"
              className={cn("h-5 w-5 rotate-90 lg:rotate-0", interactiveArrowClassName)}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </span>
        </div>
        <AppCard item={item} />
      </Link>
    </li>
  );
}

function HeroVisual() {
  return (
    <figure
      aria-label="Three spreadsheet workflows transformed into premium web applications"
      className="mx-auto w-full max-w-3xl lg:max-w-none"
    >
      <figcaption className="mb-4 text-center text-sm font-medium text-white/85 lg:text-left">
        Real spreadsheets. Real transformations.
      </figcaption>
      <ol className="space-y-5 lg:space-y-6">
        {transformations.map((item) => (
          <TransformationRow key={item.spreadsheet} item={item} />
        ))}
      </ol>
    </figure>
  );
}

export function HeroSection() {
  return (
    <section aria-labelledby="home-hero-title" className="bg-[#03050a] py-12 text-white sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-white/[0.78]">
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5 text-primary"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M6.9.8 2.5 6.2h3.1L4.9 11.2l4.6-6H6.4L6.9.8Z" />
              </svg>
              We turn boring spreadsheets into beautiful business apps.
            </p>

            <h1
              id="home-hero-title"
              className="mt-7 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
            >
              Turn Boring Spreadsheets Into Powerful Web Apps
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/[0.68] sm:text-lg lg:mx-0">
              Visual Booster Studio builds premium web applications, free tools, and custom
              business software that replaces manual spreadsheet workflows with fast, modern,
              scalable solutions.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/web-apps"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_rgba(124,58,237,0.26)] transition duration-normal ease-standard hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Explore Web Apps
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link
                href="/youtube"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-white/[0.025] px-6 text-sm font-semibold text-white transition duration-normal ease-standard hover:-translate-y-0.5 hover:bg-white/[0.06]"
              >
                <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/25">
                  <svg
                    aria-hidden="true"
                    className="ml-0.5 h-3 w-3"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M3.5 2.5v7l5-3.5-5-3.5Z" />
                  </svg>
                </span>
                Watch on YouTube
              </Link>
            </div>

            <ul className="mt-9 grid gap-3 text-left sm:grid-cols-3">
              {["Modern UI/UX", "Performance-focused", "Business workflows"].map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
                  <div className="h-1.5 w-8 rounded-full bg-primary" />
                  <p className="mt-3 text-xs font-semibold text-white">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
