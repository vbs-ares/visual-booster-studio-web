import type { WebApp } from "@/content/marketplace-types";
import { sortMarketplaceEntries } from "@/content/marketplace-types";

export const webApps: readonly WebApp[] = [];

export function getWebApps(): readonly WebApp[] {
  return sortMarketplaceEntries(webApps);
}

export function getFeaturedWebApps(): readonly WebApp[] {
  return getWebApps().filter((app) => app.featured);
}

export function getWebAppBySlug(slug: string): WebApp | undefined {
  return webApps.find((app) => app.slug === slug);
}
