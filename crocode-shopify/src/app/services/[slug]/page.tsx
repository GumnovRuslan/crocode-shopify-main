import { ServiceDetailPage } from "@/components/pages"
import { fetchGROQ } from "@/lib/sanity/groq";
import { fetchGraphQL } from "@/lib/sanity/graphql";
import { getProjects } from "@/lib/sanity/queries/projects";
import { getServiceBySlug } from "@/lib/sanity/queries/services";
import { TProjectCard, TService } from "@/types";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const locale: string = await getLocale();

  // Получить данные услуги из Sanity
  const { data: serviceData } = await fetchGROQ(getServiceBySlug(slug, locale));
  const service: TService | null = serviceData?.allServices?.[0] || null;

  // Если услуга не найдена, показать 404
  if (!service) {
    notFound();
  }

  // Загружаем проекты для секции "OUR WORKS"
  const { data: projectsData } = await fetchGraphQL(getProjects(locale));
  const projects: TProjectCard[] = projectsData?.allProjects || [];

  return (
    <ServiceDetailPage
      slug={slug}
      service={service}
      projects={projects}
    />
  );
}
