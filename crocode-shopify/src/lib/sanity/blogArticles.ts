import "server-only";
import { cache } from "react";
import { fetchGROQ } from "@/lib/sanity/groq";
import { getBlogArticles, getBlogArticleBySlug } from "@/lib/sanity/queries/blogArticles";
import type { BlogArticle, BlogArticleCardData } from "@/types/blog";

export async function fetchBlogArticles(locale: string): Promise<BlogArticleCardData[]> {
  const { data, error } = await fetchGROQ<BlogArticleCardData[]>(getBlogArticles(), { lang: locale });
  if (error || !data) throw new Error("Unable to load blog articles");
  return data;
}

// Share one request between page rendering and generateMetadata.
export const fetchBlogArticle = cache(async (slug: string, locale: string): Promise<BlogArticle | null> => {
  const { data, error } = await fetchGROQ<BlogArticle | null>(getBlogArticleBySlug(), { slug, lang: locale });
  if (error) throw new Error("Unable to load blog article");
  return data;
});
