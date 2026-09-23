import "server-only";
import { blogArticlesFixture } from "./blog-articles.fixture";
import type { BlogArticle, BlogArticleCardData, BlogBodyImage } from "@/types/blog";

// Stage 2 only: static snapshots, no runtime CMS requests.
// Stage 3 replaces this adapter in the route files, keeping page props unchanged.
export function getBlogCardsFixture(locale: string): BlogArticleCardData[] {
  return blogArticlesFixture
    .filter((article) => article.language === locale)
    .map(({ body, ...article }) => ({
      ...article,
      image: body.find((block): block is BlogBodyImage => block._type === "image") ?? null,
    }))
    .sort((a, b) => b.articleDate.localeCompare(a.articleDate) || a.slug.current.localeCompare(b.slug.current));
}

export function getBlogArticleFixture(slug: string, locale: string): BlogArticle | undefined {
  return blogArticlesFixture.find((article) => article.slug.current === slug && article.language === locale);
}
