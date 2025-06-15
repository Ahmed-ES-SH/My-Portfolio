"use client";
import React from "react";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { motion } from "framer-motion";
import { useProjectsData } from "@/app/constants/projects";
import { VscLoading } from "react-icons/vsc";
import { directionMap } from "@/app/constants/content";
import ProjectCard from "@/app/_components/_website/_projects/ProjectCard";

export default function ProjectsPage() {
  const { locale } = useVariables();
  const { projects } = getTranslations(locale);
  const { projectsData, loading } = useProjectsData();

  if (loading)
    return (
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[9999] bg-gray-800">
        <motion.div
          animate={{ rotate: "360deg" }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className=""
        >
          <VscLoading className="size-32 text-primary-color" />
        </motion.div>
      </div>
    );

  return (
    <>
      <div
        dir={directionMap[locale]}
        className="w-full c-container z-50 mt-32 relative"
      >
        <h1 className="p-2 ml-[10%] w-fit bg-color_bold text-white rounded-md mr-auto">
          {projects.title}
        </h1>
        <h1 className="font-bold text-green-500 underline text-[32px]   max-lg:text-[22px] mr-auto ml-[12%] w-fit">
          {projects.second_title}
        </h1>
        <div className="flex flex-col items-start max-md:w-full w-[90%] mx-auto mt-4 mb-20 gap-6">
          {projectsData.map((project, idx) => (
            <ProjectCard project={project} index={idx} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}
