import { getSharedMetadata } from "@/app/helpers/getSharedMetadata ";
import { getTranslations } from "@/app/helpers/helpers";
import ProjectsPage from "@/app/_components/_website/_projects/ProjectsPage";

export const generateMetadata = async ({ params }: any) => {
  const { locale } = await params;
  const translations = getTranslations(locale);
  const sharedMetadata = getSharedMetadata(locale, translations);
  return {
    title: translations.projectsMeta.title,
    description: translations.projectsMeta.description,
    ...sharedMetadata,
  };
};

export default function ProjectsPageWrapper() {
  return <ProjectsPage />;
}
