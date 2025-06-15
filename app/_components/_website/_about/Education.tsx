"use client";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import React from "react";

export default function Education() {
  const { locale } = useVariables();
  const { education } = getTranslations(locale);
  return (
    <div className="py-8 w-full mt-6 border-t border-gray-500 pt-4 flex flex-col gap-4">
      <h1 className="font-bold text-primary-color text-shadow-lg text-shadow-teal-700 text-[32px]   max-lg:text-[22px] ml-auto mr-[12%] w-fit">
        {education.second_title}
      </h1>
      <div className="lg:w-3/4 w-full m-auto  rounded-lg text-white  bg-gray-800  h-fit">
        <h1 className="p-2">{education.education}</h1>
      </div>
    </div>
  );
}
