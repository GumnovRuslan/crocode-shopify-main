import { ProjectPage } from "@/components/pages"
import { fetchGROQ } from "@/lib/sanity/groq";
import type { TProject } from "@/types";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/sanity/queries/projects";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { data: projectData, error } = await fetchGROQ<{ allProjects: TProject[] }>(getProject(), { slug: slug[0] });
  if (error) throw new Error("Unable to load project");
  const project = projectData?.allProjects?.[0];

  if (project?.seo?.title || project?.seo?.description) {
    return {
      title: project.seo?.title || undefined,
      description: project.seo?.description || undefined,
    }
  }

  return {}
}

export default async ({params}: PageProps) => {
  const { slug } = await params;
  const { data: projectData, error } = await fetchGROQ<{ allProjects: TProject[] }>(getProject(), { slug: slug[0] });
  if (error) throw new Error("Unable to load project");
  const project = projectData?.allProjects?.[0];

  if (!project) notFound();

  return (
    <ProjectPage project={project}/>
  )
}
