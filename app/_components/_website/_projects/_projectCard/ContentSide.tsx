"use client";
import React, { useState } from "react";
import { easeOut, motion } from "framer-motion";
import { projectType } from "../_projectPage/projectTypes";
import Img from "@/app/_components/_global/Img";
import { useVariables } from "@/app/context/VariablesContext";
import { FaCode } from "react-icons/fa";
import TechBadge from "./TechBadge";
import ProjectLinks from "./ProjectLinks";
import { getTranslations } from "@/app/helpers/helpers";

interface ContentSideProps {
  project: projectType;
}

export default function ContentSide({ project }: ContentSideProps) {
  const { locale } = useVariables();
  const { projectCard } = getTranslations(locale);

  const isArabic = locale === "ar";
  const [expanded, setExpanded] = useState(false);
  const description = project.description[locale];
  const shortText = description.slice(0, 100);
  const shouldTruncate = description.length > 100;

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };
  return (
    <motion.div
      variants={itemVariants}
      className="xl:w-1/2 w-full p-4 xl:p-12 flex flex-col justify-center z-99999 xl:h-[500px] overflow-y-auto relative"
    >
      {/* background cover */}
      <Img
        className="w-full h-full object-cover absolute top-0 left-0 -z-1 opacity-10"
        src={project.projectCover}
      />
      <div className="content z-4 relative">
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className={`xl:text-2xl text-xl text-shadow-lg underline text-shadow-teal-700 text-primary-color font-bold mb-6 leading-tight ${
            locale === "ar" ? "text-right font-cairo" : "text-left"
          }`}
          key={locale}
        >
          {project.title[locale]}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className={`xl:text-[16px] text-[14px] text-gray-400 mb-4 leading-relaxed ${
            isArabic ? "text-right font-cairo" : "text-left font-inter"
          }`}
          key={`desc-${locale}`}
        >
          {expanded || !shouldTruncate ? description : `${shortText}...`}

          {shouldTruncate && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-1 text-primary-color transition hover:underline inline"
            >
              {expanded
                ? isArabic
                  ? "عرض أقل"
                  : "Show less"
                : isArabic
                  ? "قراءة المزيد"
                  : "Read more"}
            </button>
          )}
        </motion.p>

        {/* Technologies */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-gray-200 mb-4  items-center gap-2 hidden md:flex">
            <FaCode className="text-blue-600" />
            {projectCard.technologiesUsed}
          </h3>
          <div className="flex-wrap gap-3 mb-8 hidden md:flex">
            {project.skills &&
              Array.isArray(project.skills) &&
              project.skills
                .slice(0, 8)
                .map((tech, index) => (
                  <TechBadge
                    key={tech}
                    tech={tech}
                    index={index}
                    length={project.skills.length}
                  />
                ))}

            {project.skills.length > 8 && (
              <TechBadge
                key={`more-${locale}`}
                tech={`+${project.skills.length - 8}`}
                index={project.skills.length}
                length={project.skills.length}
              />
            )}
          </div>
        </motion.div>

        {/* mobail Technologies */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2 md:hidden">
            <FaCode className="text-blue-600" />
            {projectCard.technologiesUsed}
          </h3>
          <div className="flex flex-wrap gap-3 mb-8 md:hidden">
            {project.skills &&
              Array.isArray(project.skills) &&
              project.skills
                .slice(0, 4)
                .map((tech, index) => (
                  <TechBadge
                    key={tech}
                    tech={tech}
                    index={index}
                    length={project.skills.length}
                  />
                ))}

            <TechBadge
              key={`more-${locale}`}
              tech={`+${project.skills.length - 4}`}
              index={project.skills.length}
              length={project.skills.length}
            />
          </div>
        </motion.div>

        {/* Project Links */}
        <div className="flex flex-col gap-4">
          <motion.div variants={itemVariants}>
            <ProjectLinks project={project} projectCard={projectCard} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
