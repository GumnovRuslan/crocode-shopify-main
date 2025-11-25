import { ServiceDetailPage } from "@/components/pages"
import { LetsTalk } from "@/components/sections"
import { fetchGraphQL } from "@/lib/sanity/graphql";
import { getProjects } from "@/lib/sanity/queries/projects";
import { TProjectCard } from "@/types";
import { getLocale } from "next-intl/server";

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async ({params}: PageProps) => {
  const { slug } = await params;
  const locale: string = await getLocale()

  // Загружаем проекты для секции "OUR WORKS"
  const { data: projectsData } = await fetchGraphQL(getProjects(locale));
  const projects: TProjectCard[] = projectsData?.allProjects || [];

  return (<>
    <ServiceDetailPage
      slug={slug}
      projects={projects}
    />
  </>)
}
