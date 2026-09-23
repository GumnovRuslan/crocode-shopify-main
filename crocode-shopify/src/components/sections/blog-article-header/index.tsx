"use client";

import { BlurIn } from "@/components/ui/BlurIn";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useLightThemeForHeader } from "@/hooks/useHeaderTheme";
import type { BlogArticle } from "@/types/blog";
import { formatArticleDate } from "@/utils/blog";
import styles from "./styles.module.scss";

type Props = Pick<BlogArticle, "title" | "author" | "articleDate">;

export default function BlogArticleHeader({ title, author, articleDate }: Props) {
  useLightThemeForHeader();
  const t = useTranslations("Blog");
  const locale = useLocale();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <BlurIn duration={0.5}>
          <Link href="/blog" className={styles.back}>
            <span aria-hidden="true">←</span> {t("backToBlog")}
          </Link>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.meta}>
            <span>{t("by")} <strong>{author}</strong></span>
            <time dateTime={articleDate}>{formatArticleDate(articleDate, locale)}</time>
          </div>
        </BlurIn>
      </div>
    </header>
  );
}
