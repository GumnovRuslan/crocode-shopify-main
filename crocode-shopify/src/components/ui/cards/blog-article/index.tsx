import Image from "next/image";
import Link from "next/link";
import type { BlogArticleCardData } from "@/types/blog";
import { formatArticleDate } from "@/utils/blog";
import styles from "./styles.module.scss";

type Props = {
  article: BlogArticleCardData;
  locale: string;
  byLabel: string;
  readLabel: string;
};

export default function BlogArticleCard({ article, locale, byLabel, readLabel }: Props) {
  const { image } = article;
  const titleId = `blog-card-${article._id}`;

  return (
    <article className={styles.card}>
      <Link href={`/blog/${article.slug.current}`} className={styles.link} aria-labelledby={titleId}>
        {image && (
          <div className={styles.image}>
            <Image
              src={image.asset.url}
              alt={image.alt}
              width={image.asset.metadata.dimensions.width}
              height={image.asset.metadata.dimensions.height}
              sizes="(min-width: 1920px) 696px, (min-width: 768px) 45vw, 100vw"
            />
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.meta}>
            <span>{byLabel} {article.author}</span>
            <time dateTime={article.articleDate}>{formatArticleDate(article.articleDate, locale)}</time>
          </div>
          <h3 id={titleId} className={styles.title}>{article.title}</h3>
          <p className={styles.description}>{article.seo.description}</p>
          <span className={styles.cta}>
            {readLabel}
            <span className={styles.arrow} aria-hidden="true">↗</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
