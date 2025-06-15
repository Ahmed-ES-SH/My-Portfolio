import AboutComponent from "@/app/_components/_website/_about/AboutComponent";
import { getSharedMetadata } from "@/app/helpers/getSharedMetadata ";
import { getTranslations } from "@/app/helpers/helpers";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateMetadata = async ({ params }: any) => {
  const locale = params.locale;
  const translations = getTranslations(locale);
  const sharedMetadata = getSharedMetadata(locale, translations);
  return {
    title: translations.aboutMeta.title,
    description: translations.aboutMeta.description,
    ...sharedMetadata,
  };
};

export default function About() {
  return <AboutComponent />;
}
