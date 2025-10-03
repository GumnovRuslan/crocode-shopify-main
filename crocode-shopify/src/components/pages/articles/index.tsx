import { ArticlesSection } from "@/components/sections"
import { fetchGraphQL } from "@/lib/sanity/graphql";
import { getArticles } from "@/lib/sanity/queries/articles";
import { TArticles } from "@/types/templates/article";

const ArticlesPage = async () => {
  const { data: projectsData } = await fetchGraphQL(getArticles('en'));
    const articles: TArticles[] = projectsData?.allBlogs || [];

  return (<>
    <ArticlesSection articles={articles}/>
  </>)
}

export default ArticlesPage