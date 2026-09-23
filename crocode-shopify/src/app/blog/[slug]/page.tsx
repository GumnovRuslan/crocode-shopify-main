import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import BlogArticlePage from "@/components/pages/blog-article";
import { fetchBlogArticle } from "@/lib/sanity/blogArticles";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchBlogArticle(slug, await getLocale());
  if (!article) notFound();
  return { title: article.seo.title, description: article.seo.description };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = await fetchBlogArticle(slug, await getLocale());
  if (!article) notFound();
  return <BlogArticlePage article={article} />;
}
