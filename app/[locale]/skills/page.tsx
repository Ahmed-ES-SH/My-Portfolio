import SkillsComponent from "@/app/_components/_website/_skills/TimeLineSkills";
import { getSharedMetadata } from "@/app/helpers/getSharedMetadata ";
import { getTranslations } from "@/app/helpers/helpers";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateMetadata = async ({ params }: any) => {
  const locale = params.locale;
  const translations = getTranslations(locale);
  const sharedMetadata = getSharedMetadata(locale, translations);
  return {
    title: translations.skillsMeta.title,
    description: translations.skillsMeta.description,
    ...sharedMetadata,
  };
};

export default function page() {
  return <SkillsComponent />;
}
