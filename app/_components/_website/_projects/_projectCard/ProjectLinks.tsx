// ProjectLinks Component
"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useVariables } from "@/app/context/VariablesContext";
import { projectType } from "../_projectPage/projectTypes";
import LocaleLink from "@/app/_components/_global/LocaleLink";

interface ProjectLinksProps {
  project: projectType;
  projectCard: {
    technologiesUsed: string;
    sourceCode: string;
    liveDemo: string;
    privateRepo: string;
  };
}

export default function ProjectLinks({
  projectCard,
  project,
}: ProjectLinksProps) {
  const { locale } = useVariables();

  return (
    <div className="flex max-sm:flex-col flex-wrap gap-4">
      <motion.a
        target="_blank"
        href={project.linkSourceCode}
        style={{ cursor: project.isPrivate ? "not-allowed" : "pointer" }}
        rel="noopener noreferrer"
        className={`max-md:w-full flex items-center gap-3 whitespace-nowrap px-6 py-3 ${
          project.isPrivate ? "bg-red-500" : "bg-gray-900"
        } text-white rounded-lg font-medium hover:scale-[105%] duration-300 shadow-lg`}
      >
        {project.isPrivate ? (
          <FaLock className="text-sm" />
        ) : (
          <FaGithub className="text-sm" />
        )}
        {project.isPrivate ? projectCard.privateRepo : projectCard.sourceCode}
      </motion.a>

      <motion.a
        href={project.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="max-md:w-full flex items-center  gap-2 px-6 py-3 bg-linear-to-r whitespace-nowrap from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:scale-[105%] duration-300 shadow-lg"
      >
        <FaExternalLinkAlt className="text-sm " />
        {projectCard.liveDemo}
      </motion.a>

      <LocaleLink
        href={`/projects/${project.slug}`}
        className="max-md:w-full flex items-center  gap-2 px-6 py-3 bg-primary-color whitespace-nowrap text-white rounded-lg font-medium hover:scale-[105%] duration-300 shadow-lg"
      >
        {locale == "ar" ? "عرض التفاصيل" : "View Details"}
        <MdKeyboardArrowRight
          className={`size-5 ltr:rotate-360 transition-transform rtl:group-hover/link:-translate-x-1 rotate-180 ltr:group-hover/link:translate-x-1`}
        />
      </LocaleLink>
    </div>
  );
}
