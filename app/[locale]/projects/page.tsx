import React from "react";
import { getSharedMetadata } from "@/app/helpers/getSharedMetadata ";
import { getTranslations } from "@/app/helpers/helpers";
import ProjectsPageWrapper from "@/app/_components/_website/_projects/ProjectsPageWrapper";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateMetadata = async ({ params }: any) => {
  const locale = params.locale;
  const translations = getTranslations(locale);
  const sharedMetadata = getSharedMetadata(locale, translations);
  return {
    title: translations.projectsMeta.title,
    description: translations.projectsMeta.description,
    ...sharedMetadata,
  };
};

export default function page() {
  return <ProjectsPageWrapper />;
}
