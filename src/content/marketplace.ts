import {
  freeTools,
  getFeaturedFreeTools,
  getFreeToolBySlug,
  getFreeTools
} from "@/content/tools";
import {
  getFeaturedWebApps,
  getWebAppBySlug,
  getWebApps,
  webApps
} from "@/content/apps";
import {
  getFeaturedYouTubeVideos,
  getYouTubeVideoBySlug,
  getYouTubeVideos,
  youtubeVideos
} from "@/content/youtube";
import {
  categories,
  getCategories,
  getCategoryById,
  getCategoryBySlug,
  getFeaturedCategories
} from "@/content/categories";
import type { MarketplaceEntry } from "@/content/marketplace-types";
import { sortMarketplaceEntries } from "@/content/marketplace-types";

export * from "@/content/marketplace-types";

export {
  categories,
  freeTools,
  getCategories,
  getCategoryById,
  getCategoryBySlug,
  getFeaturedCategories,
  getFeaturedFreeTools,
  getFeaturedWebApps,
  getFeaturedYouTubeVideos,
  getFreeToolBySlug,
  getFreeTools,
  getWebAppBySlug,
  getWebApps,
  getYouTubeVideoBySlug,
  getYouTubeVideos,
  webApps,
  youtubeVideos
};

export const marketplaceEntries: readonly MarketplaceEntry[] = [
  ...webApps,
  ...freeTools,
  ...youtubeVideos
];

export function getMarketplaceEntries(): readonly MarketplaceEntry[] {
  return sortMarketplaceEntries(marketplaceEntries);
}

export function getFeaturedMarketplaceEntries(): readonly MarketplaceEntry[] {
  return getMarketplaceEntries().filter((entry) => entry.featured);
}

export function getMarketplaceEntryBySlug(
  slug: string
): MarketplaceEntry | undefined {
  return marketplaceEntries.find((entry) => entry.slug === slug);
}
