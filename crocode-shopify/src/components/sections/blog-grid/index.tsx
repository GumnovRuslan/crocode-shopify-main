import { Fade } from "@/components/ui/Fade";
import { BlurIn } from "@/components/ui/BlurIn";
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
        <Fade direction="down">
          <h2 className={styles.heading}>{t("latestArticles")}</h2>
        </Fade>
        {articles.length ? (
          <BlurIn>
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
          </BlurIn>
        ) : <p className={styles.empty}>{t("empty")}</p>}
      </div>
    </Section>
  );
}
