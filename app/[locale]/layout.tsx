/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import { getTranslations } from "../helpers/helpers";
import { getSharedMetadata } from "../helpers/getSharedMetadata ";

export const generateMetadata = async ({ params }: any) => {
  const locale = params.locale;
  const translations = getTranslations(locale);
  const sharedMetadata = getSharedMetadata(locale, translations);
  return {
    title: translations.mainLayout.title,
    description: translations.mainLayout.description,
    ...sharedMetadata,
  };
};

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
