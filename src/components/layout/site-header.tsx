"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { CrystalVLogo } from "@/components/brand/crystal-v-logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Container } from "@/components/ui/container";
import { navigationItems } from "@/content/navigation";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function LogoMark() {
  return (
    <span className="flex h-10 w-10 items-center justify-center">
      <CrystalVLogo className="h-9 w-12 drop-shadow-[0_0_18px_rgba(124,58,237,0.42)]" />
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const menuId = useId();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#03050a]/95 text-white backdrop-blur-xl supports-[backdrop-filter]:bg-[#03050a]/[0.84]">
      <Container className="flex min-h-[4.5rem] items-center justify-between gap-4 py-3">
        <Link href="/" aria-label="Visual Booster Studio home" className="inline-flex min-h-11 items-center gap-3 rounded-lg text-foreground">
          <LogoMark />
          <span className="flex flex-col leading-none text-white">
            <span className="text-sm font-bold uppercase tracking-[0.08em] sm:text-base">
              Visual
            </span>
            <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white">
              Booster Studio
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navigationItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative py-2 text-sm font-medium text-white/[0.78] transition-colors hover:text-white",
                  isActive && "text-primary"
                )}
              >
                {item.label}
                {isActive ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-3 mx-auto h-px rounded-full bg-primary"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/custom-build"
            className="hidden min-h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_rgba(124,58,237,0.28)] transition duration-normal ease-standard hover:-translate-y-0.5 hover:bg-primary/90 md:inline-flex"
          >
            Let&apos;s Build Yours
            <span aria-hidden="true" className="ml-2">→</span>
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.035] text-white shadow-soft transition-colors hover:bg-white/[0.07] lg:hidden"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {isMenuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6 6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        className={cn(
          "border-t border-white/10 bg-[#03050a]/[0.98] px-4 pb-5 pt-3 shadow-soft lg:hidden",
          !isMenuOpen && "hidden"
        )}
      >
        <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-1">
          {navigationItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex min-h-11 items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-white/[0.72] transition-colors hover:bg-white/[0.06] hover:text-white",
                  isActive && "bg-white/[0.06] text-white"
                )}
              >
                <span>{item.label}</span>
                {isActive ? (
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                ) : null}
              </Link>
            );
          })}
          <Link
            href="/custom-build"
            className="mt-3 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_rgba(124,58,237,0.28)]"
          >
            Let&apos;s Build Yours
            <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
