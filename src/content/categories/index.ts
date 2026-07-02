import type { Category } from "@/content/marketplace-types";
import { sortMarketplaceEntries } from "@/content/marketplace-types";

export const categories: readonly Category[] = [];

export function getCategories(): readonly Category[] {
  return sortMarketplaceEntries(categories);
}

export function getFeaturedCategories(): readonly Category[] {
  return getCategories().filter((category) => category.featured);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
