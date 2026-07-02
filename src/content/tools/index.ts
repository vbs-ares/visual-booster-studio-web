import type { FreeTool } from "@/content/marketplace-types";
import { sortMarketplaceEntries } from "@/content/marketplace-types";

export const freeTools: readonly FreeTool[] = [];

export function getFreeTools(): readonly FreeTool[] {
  return sortMarketplaceEntries(freeTools);
}

export function getFeaturedFreeTools(): readonly FreeTool[] {
  return getFreeTools().filter((tool) => tool.featured);
}

export function getFreeToolBySlug(slug: string): FreeTool | undefined {
  return freeTools.find((tool) => tool.slug === slug);
}
