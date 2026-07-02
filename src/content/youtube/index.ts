import type { YouTubeVideo } from "@/content/marketplace-types";
import { sortMarketplaceEntries } from "@/content/marketplace-types";

export const youtubeVideos: readonly YouTubeVideo[] = [];

export function getYouTubeVideos(): readonly YouTubeVideo[] {
  return sortMarketplaceEntries(youtubeVideos);
}

export function getFeaturedYouTubeVideos(): readonly YouTubeVideo[] {
  return getYouTubeVideos().filter((video) => video.featured);
}

export function getYouTubeVideoBySlug(slug: string): YouTubeVideo | undefined {
  return youtubeVideos.find((video) => video.slug === slug);
}
