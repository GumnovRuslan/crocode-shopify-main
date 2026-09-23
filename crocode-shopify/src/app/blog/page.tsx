import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import BlogPage from "@/components/pages/blog";
import { getBlogCardsFixture } from "@/data/blog-fixture";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Blog");
  return { title: t("metaTitle"), description: t("description") };
}

export default async function Page() {
  const locale = await getLocale();
  return <BlogPage articles={getBlogCardsFixture(locale)} />;
}
