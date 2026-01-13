/* eslint-disable @typescript-eslint/no-explicit-any */

import ProjectDetailPage from "@/app/_components/_website/_projects/_projectPage/ProjectDetailPage";
import { getSharedMetadata } from "@/app/helpers/getSharedMetadata ";
import { getTranslations } from "@/app/helpers/helpers";
import { getProjects } from "@/app/lib/projects";
import { notFound } from "next/navigation";

// Static params for build time
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.folderName }));
}

export const generateMetadata = async ({ params }: any) => {
  const { locale, slug } = await params;
  const translations = getTranslations(locale);
  const sharedMetadata = getSharedMetadata(locale, translations);

  const projects = await getProjects();
  const project = projects.find((p) => p.folderName === slug);
  const projectTitle = project ? project.title[locale as "en" | "ar"] : slug;

  return {
    title: `${projectTitle} | ${translations.projectsMeta.title}`,
    description: translations.projectsMeta.description,
    ...sharedMetadata,
  };
};

export default async function ProjectPage({ params }: any) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.folderName === slug);

  // If we wanted standard 404:
  // if (!project) notFound();

  return <ProjectDetailPage project={project || null} />;
}
