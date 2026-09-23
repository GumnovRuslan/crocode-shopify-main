import BlogGrid from "@/components/sections/blog-grid";
import type { BlogArticleCardData } from "@/types/blog";
import { Hero } from "@/components/sections";
import { useTranslations } from "next-intl";

export default function BlogPage({ articles }: { articles: BlogArticleCardData[] }) {
    const t = useTranslations("Blog");
  return (
    <>
      <Hero 
      title={t('title')} 
      subtitle={t('description')}
    />
      <BlogGrid articles={articles} />
    </>
  );
}
