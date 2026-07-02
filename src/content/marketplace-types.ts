export type MarketplaceContentKind = "web-app" | "free-tool" | "youtube-video";

export type MarketplaceStatus = "draft" | "coming-soon" | "available" | "retired";

export type MarketplaceBadgeTone =
  | "neutral"
  | "success"
  | "warning"
  | "info"
  | "premium";

export type PaymentProvider = "gumroad" | "manual" | "external";

export type DateString = string;

export interface MarketplaceBadge {
  label: string;
  tone?: MarketplaceBadgeTone;
}

export interface MarketplaceImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface MarketplacePreview {
  title: string;
  description?: string;
  image?: MarketplaceImage;
  videoUrl?: string;
}

export interface MarketplacePaymentLink {
  provider: PaymentProvider;
  label: string;
  href?: string;
  priceLabel?: string;
  note?: string;
}

export interface MarketplaceCardContent {
  eyebrow?: string;
  title: string;
  description: string;
  image?: MarketplaceImage;
  href?: string;
  ctaLabel?: string;
}

export interface MarketplaceDetailContent {
  href?: string;
  headline?: string;
  description?: string;
  features?: readonly string[];
  faqs?: readonly {
    question: string;
    answer: string;
  }[];
}

export interface MarketplaceBaseEntry {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description?: string;
  status: MarketplaceStatus;
  statusBadge?: MarketplaceBadge;
  badges?: readonly MarketplaceBadge[];
  categoryIds: readonly string[];
  tags: readonly string[];
  featured: boolean;
  sortOrder?: number;
  publishedAt?: DateString;
  updatedAt?: DateString;
  homepageCard?: MarketplaceCardContent;
  listingCard?: MarketplaceCardContent;
  heroPreview?: MarketplacePreview;
  screenshots?: readonly MarketplacePreview[];
  paymentLinks?: readonly MarketplacePaymentLink[];
  detail?: MarketplaceDetailContent;
}

export interface WebApp extends MarketplaceBaseEntry {
  kind: "web-app";
  appType?: "template" | "productized-service" | "custom-build" | "saas";
  demoUrl?: string;
  repositoryUrl?: string;
}

export interface FreeTool extends MarketplaceBaseEntry {
  kind: "free-tool";
  toolUrl?: string;
  downloadUrl?: string;
}

export interface YouTubeVideo extends MarketplaceBaseEntry {
  kind: "youtube-video";
  youtubeId: string;
  videoUrl: string;
  durationLabel?: string;
  channelName?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  parentId?: string;
  featured: boolean;
  sortOrder?: number;
}

export type MarketplaceEntry = WebApp | FreeTool | YouTubeVideo;

export function defineWebApp(config: WebApp): WebApp {
  return config;
}

export function defineFreeTool(config: FreeTool): FreeTool {
  return config;
}

export function defineYouTubeVideo(config: YouTubeVideo): YouTubeVideo {
  return config;
}

export function defineCategory(config: Category): Category {
  return config;
}

export function sortMarketplaceEntries<T extends { name: string; sortOrder?: number }>(
  entries: readonly T[]
): T[] {
  return [...entries].sort((first, second) => {
    const firstOrder = first.sortOrder ?? Number.MAX_SAFE_INTEGER;
    const secondOrder = second.sortOrder ?? Number.MAX_SAFE_INTEGER;

    if (firstOrder !== secondOrder) {
      return firstOrder - secondOrder;
    }

    return first.name.localeCompare(second.name);
  });
}
