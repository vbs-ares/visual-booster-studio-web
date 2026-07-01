import Link from "next/link";
import { ImageReadyPreview, type PreviewImage } from "@/components/ui/image-ready-preview";
import { Container } from "@/components/ui/container";
import {
  interactiveArrowClassName,
  interactiveCardClassName,
  interactivePreviewClassName
} from "@/lib/interaction-styles";
import { cn } from "@/lib/utils";

type ToolIconName = "image" | "pdf" | "qr" | "invoice" | "resume" | "seo";
type ToolAccent = "emerald" | "blue" | "violet" | "amber" | "rose" | "cyan";

type FreeTool = {
  name: string;
  description: string;
  icon: ToolIconName;
  accent: ToolAccent;
  href: string;
  previewImage: PreviewImage;
  previewLines: number[];
};

const freeTools: FreeTool[] = [
  {
    name: "Image Compressor",
    description: "Compress and optimize images without losing quality.",
    icon: "image",
    accent: "emerald",
    href: "/free-tools/image-compressor",
    previewImage: {
      alt: "Image Compressor tool preview"
    },
    previewLines: [72, 46, 58]
  },
  {
    name: "PDF to Word",
    description: "Convert PDF documents into editable Word files.",
    icon: "pdf",
    accent: "rose",
    href: "/free-tools/pdf-to-word",
    previewImage: {
      alt: "PDF to Word converter preview"
    },
    previewLines: [64, 52, 76]
  },
  {
    name: "QR Code Generator",
    description: "Generate clean QR codes for links, text, and campaigns.",
    icon: "qr",
    accent: "violet",
    href: "/free-tools/qr-code-generator",
    previewImage: {
      alt: "QR Code Generator tool preview"
    },
    previewLines: [58, 68, 42]
  },
  {
    name: "Invoice Generator",
    description: "Create polished invoices ready to send or download.",
    icon: "invoice",
    accent: "amber",
    href: "/free-tools/invoice-generator",
    previewImage: {
      alt: "Invoice Generator tool preview"
    },
    previewLines: [76, 44, 62]
  },
  {
    name: "Resume Builder",
    description: "Build a clean professional resume from guided fields.",
    icon: "resume",
    accent: "blue",
    href: "/free-tools/resume-builder",
    previewImage: {
      alt: "Resume Builder tool preview"
    },
    previewLines: [68, 56, 74]
  },
  {
    name: "SEO Meta Generator",
    description: "Write page titles and meta descriptions faster.",
    icon: "seo",
    accent: "cyan",
    href: "/free-tools/seo-meta-generator",
    previewImage: {
      alt: "SEO Meta Generator tool preview"
    },
    previewLines: [62, 78, 48]
  }
];

const accentClassNames: Record<ToolAccent, { icon: string; fill: string; soft: string }> = {
  emerald: {
    icon: "bg-emerald-500 text-white",
    fill: "bg-emerald-400",
    soft: "bg-emerald-400/20"
  },
  blue: {
    icon: "bg-blue-500 text-white",
    fill: "bg-blue-500",
    soft: "bg-blue-500/20"
  },
  violet: {
    icon: "bg-primary text-primary-foreground",
    fill: "bg-primary",
    soft: "bg-primary/20"
  },
  amber: {
    icon: "bg-amber-500 text-white",
    fill: "bg-amber-400",
    soft: "bg-amber-400/20"
  },
  rose: {
    icon: "bg-rose-500 text-white",
    fill: "bg-rose-400",
    soft: "bg-rose-400/20"
  },
  cyan: {
    icon: "bg-cyan-500 text-white",
    fill: "bg-cyan-400",
    soft: "bg-cyan-400/20"
  }
};

function ToolIcon({ name }: { name: ToolIconName }) {
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
    case "image":
      return (
        <svg {...iconProps}>
          <path d="M5 5h14v14H5z" />
          <path d="m8 15 2.5-3 2 2.3 1.5-1.8L17 16" />
          <path d="M9 9h.01" />
        </svg>
      );
    case "pdf":
      return (
        <svg {...iconProps}>
          <path d="M7 3h7l5 5v13H7z" />
          <path d="M14 3v5h5" />
          <path d="M9 16h6" />
          <path d="M9 12h3" />
        </svg>
      );
    case "qr":
      return (
        <svg {...iconProps}>
          <path d="M4 4h6v6H4z" />
          <path d="M14 4h6v6h-6z" />
          <path d="M4 14h6v6H4z" />
          <path d="M14 14h2v2h-2z" />
          <path d="M18 14h2v6h-4v-2" />
        </svg>
      );
    case "invoice":
      return (
        <svg {...iconProps}>
          <path d="M7 3h10v18l-2-1.2-3 1.2-3-1.2L7 21z" />
          <path d="M9 8h6" />
          <path d="M9 12h6" />
          <path d="M9 16h3" />
        </svg>
      );
    case "resume":
      return (
        <svg {...iconProps}>
          <path d="M6 3h12v18H6z" />
          <path d="M9 8h6" />
          <path d="M9 12h6" />
          <path d="M9 16h4" />
        </svg>
      );
    case "seo":
      return (
        <svg {...iconProps}>
          <path d="M4 5h16v12H4z" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
  }
}

function ToolPreview({ tool }: { tool: FreeTool }) {
  const accent = accentClassNames[tool.accent];

  return (
    <ImageReadyPreview
      image={tool.previewImage}
      className={cn(
        "min-h-[6.75rem] rounded-lg border border-border bg-surface p-3 dark:border-white/10 dark:bg-[#050812]",
        interactivePreviewClassName
      )}
      imageClassName="rounded-lg"
    >
      <div aria-hidden="true">
        <div className="flex items-center justify-between gap-3">
          <span className={cn("h-2.5 w-2.5 rounded-sm", accent.fill)} />
          <span className="h-1.5 w-16 rounded-full bg-muted-foreground/20 dark:bg-white/[0.18]" />
        </div>

        <div className="mt-3 grid grid-cols-[1fr_2.2rem] gap-2">
          <div className="space-y-2">
            {tool.previewLines.map((width, index) => (
              <span key={`${tool.icon}-${width}-${index}`} className="block rounded-md border border-border bg-card p-2 dark:border-white/10 dark:bg-white/[0.035]">
                <span className={cn("block h-1 rounded-full", index === 0 ? accent.fill : accent.soft)} style={{ width: `${width}%` }} />
                <span className="mt-2 block h-1.5 w-full rounded-full bg-muted-foreground/15 dark:bg-white/[0.14]" />
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-1 rounded-md border border-border bg-card p-1.5 dark:border-white/10 dark:bg-white/[0.035]">
            {[0, 1, 2, 3].map((item) => (
              <span key={`${tool.icon}-tile-${item}`} className={cn("rounded-sm", item % 2 === 0 ? accent.fill : accent.soft)} />
            ))}
          </div>
        </div>
      </div>
    </ImageReadyPreview>
  );
}

export function ToolCard({ tool }: { tool: FreeTool }) {
  const accent = accentClassNames[tool.accent];
  const titleId = `${tool.icon}-tool-title`;

  return (
    <article aria-labelledby={titleId}>
      <Link
        href={tool.href}
        aria-label={`Open ${tool.name}`}
        className={cn(
          "flex min-h-[18rem] flex-col rounded-xl border border-border bg-card p-4 text-foreground shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/10 dark:bg-[#070b14] dark:text-white",
          interactiveCardClassName
        )}
      >
        <div className="flex items-center gap-3">
          <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl", accent.icon)}>
            <ToolIcon name={tool.icon} />
          </span>
          <h3 id={titleId} className="text-base font-semibold leading-tight tracking-[-0.01em]">
            {tool.name}
          </h3>
        </div>

        <p className="mt-3 text-sm leading-6 text-muted-foreground dark:text-white/65">
          {tool.description}
        </p>

        <div className="mt-4">
          <ToolPreview tool={tool} />
        </div>

        <span className="mt-auto inline-flex min-h-10 items-center self-start pt-4 text-sm font-semibold text-primary transition-colors hover:text-foreground dark:hover:text-white">
          Open Tool
          <span aria-hidden="true" className={cn("ml-2", interactiveArrowClassName)}>
            →
          </span>
        </span>
      </Link>
    </article>
  );
}

export function PopularFreeToolsSection() {
  return (
    <section
      aria-labelledby="popular-free-tools-title"
      className="border-t border-border bg-background py-8 text-foreground dark:border-white/10 dark:bg-[#03050a] dark:text-white"
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          <h2 id="popular-free-tools-title" className="text-2xl font-semibold tracking-[-0.018em]">
            Popular Free Tools
          </h2>
          <Link
            href="/free-tools"
            className="inline-flex min-h-10 items-center text-sm font-semibold text-primary transition-colors hover:text-foreground dark:hover:text-white"
          >
            View All Tools
            <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {freeTools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </Container>
    </section>
  );
}
