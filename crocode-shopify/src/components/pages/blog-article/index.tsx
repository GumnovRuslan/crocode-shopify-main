import BlogArticleHeader from "@/components/sections/blog-article-header";
import BlogBody from "@/components/sections/blog-body";
import type { BlogArticle } from "@/types/blog";

export default function BlogArticlePage({ article }: { article: BlogArticle }) {
  return (
    <article>
      <BlogArticleHeader title={article.title} author={article.author} articleDate={article.articleDate} />
      <BlogBody body={article.body} />
    </article>
  );
}
