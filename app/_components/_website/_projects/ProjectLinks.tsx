// ProjectLinks Component
"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";

export default function ProjectLinks({
  sourceCodeLink,
  projectLink,
  isPrivate,
  projectCard,
}: ProjectLinksProps) {
  return (
    <div className="flex max-md:flex-col  gap-4">
      <motion.a
        target="_blank"
        href={sourceCodeLink}
        rel="noopener noreferrer"
        className={`flex items-center max-md:w-1/2 gap-3 px-6 py-3 ${
          isPrivate ? "bg-red-500" : "bg-gray-900"
        } text-white rounded-lg font-medium hover:scale-[105%] duration-300 shadow-lg`}
      >
        {isPrivate ? (
          <FaLock className="text-sm" />
        ) : (
          <FaGithub className="text-sm" />
        )}
        {isPrivate ? projectCard.privateRepo : projectCard.sourceCode}
      </motion.a>

      <motion.a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center max-md:w-1/2 gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:scale-[105%] duration-300 shadow-lg"
      >
        <FaExternalLinkAlt className="text-sm" />
        {projectCard.liveDemo}
      </motion.a>
    </div>
  );
}
