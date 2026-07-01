import Link from "next/link";
import { CrystalVLogo } from "@/components/brand/crystal-v-logo";
import { Container } from "@/components/ui/container";
import { navigationItems } from "@/content/navigation";

function FooterMark() {
  return (
    <span className="flex h-10 w-10 items-center justify-center">
      <CrystalVLogo className="h-9 w-12" />
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-surface" aria-label="Site footer">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3 rounded-lg text-foreground">
              <FooterMark />
              <span className="flex flex-col leading-none">
                <span className="font-bold uppercase tracking-[0.08em]">Visual</span>
                <span className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Booster Studio
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Independent web apps, free tools, YouTube content, and custom builds.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:justify-self-end"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[hsl(var(--border))] pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Visual Booster Studio.</p>
          <p>Built for speed, clarity, and durable web presence.</p>
        </div>
      </Container>
    </footer>
  );
}
