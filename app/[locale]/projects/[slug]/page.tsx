/* eslint-disable @typescript-eslint/no-explicit-any */

import ProjectDetailPage from "@/app/_components/_website/_projects/_projectPage/ProjectDetailPage";
import { getSharedMetadata } from "@/app/helpers/getSharedMetadata ";
import { getTranslations } from "@/app/helpers/helpers";

// Static params for build time
export async function generateStaticParams() {
  const slugs = ["aram", "flix-tv", "machic", "madad", "borsan", "kafe"];
  return slugs.map((slug) => ({ slug }));
}

export const generateMetadata = async ({ params }: any) => {
  const { locale, slug } = await params;
  const translations = getTranslations(locale);
  const sharedMetadata = getSharedMetadata(locale, translations);

  // Map slug to project title for metadata
  const projectTitles: any = {
    aram: { en: "Aram Gulf", ar: "آرام الخليج" },
    "flix-tv": { en: "FLIX TV", ar: "FLIX TV" },
    machic: { en: "Machie Store", ar: "متجر Machie" },
    madad: { en: "Madad", ar: "مدد" },
    borsan: { en: "Borsan Academy", ar: "أكاديمية بورسان" },
    kafe: { en: "Kafe Wafe", ar: "Kafe Wafe" },
  };

  const projectTitle = projectTitles[slug]?.[locale] || slug;

  return {
    title: `${projectTitle} | ${translations.projectsMeta.title}`,
    description: translations.projectsMeta.description,
    ...sharedMetadata,
  };
};

export default async function ProjectPage({ params }: any) {
  const { slug } = await params;
  return <ProjectDetailPage slug={slug} />;
}
