import { HomePage } from "@/components/pages";
import { fetchGROQ } from "@/lib/sanity/groq";
import { getProjects } from "@/lib/sanity/queries/projects";
import { TProjectCard } from "@/types";
import { getLocale } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Plus Agency – Official Shopify Premier Partner | Crocode",
  description: "Official Shopify Premier Partner and Shopify Plus agency delivering enterprise development, integrations, and growth solutions for global brands.",
};

export default async () => {
  const locale: string = await getLocale()
  const { data: projectsData, error: projectsError } = await fetchGROQ<{ allProjects: TProjectCard[] }>(getProjects(), { lang: locale });
  if (projectsError) throw new Error("Unable to load projects");
  const projects: TProjectCard[] = projectsData?.allProjects || [];

  return <HomePage projects={projects}/>
}
