import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import BlogArticlePage from "@/components/pages/blog-article";
import { getBlogArticleFixture } from "@/data/blog-fixture";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleFixture(slug, await getLocale());
  return article ? { title: article.seo.title, description: article.seo.description } : {};
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogArticleFixture(slug, await getLocale());
  if (!article) notFound();
  return <BlogArticlePage article={article} />;
}
