import Section from "@/components/ui/section";
import BlogArticleCard from "@/components/ui/cards/blog-article";
import type { BlogArticleCardData } from "@/types/blog";
import { getLocale, getTranslations } from "next-intl/server";
import styles from "./styles.module.scss";

export default async function BlogGrid({ articles }: { articles: BlogArticleCardData[] }) {
  const t = await getTranslations("Blog");
  const locale = await getLocale();

  return (
    <Section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{t("latestArticles")}</h2>
        {articles.length ? (
          <div className={styles.grid}>
            {articles.map((article) => (
              <BlogArticleCard
                key={article._id}
                article={article}
                locale={locale}
                byLabel={t("by")}
                readLabel={t("readArticle")}
              />
            ))}
          </div>
        ) : <p className={styles.empty}>{t("empty")}</p>}
      </div>
    </Section>
  );
}
