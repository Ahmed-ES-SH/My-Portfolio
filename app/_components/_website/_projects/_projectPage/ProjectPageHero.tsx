"use client";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LocaleLink from "@/app/_components/_global/LocaleLink";
import { useVariables } from "@/app/context/VariablesContext";
import { categoryLabels } from "@/app/constants/content";
import { ProjectPageHeroProps } from "./projectTypes";

export default function ProjectPageHero({ project }: ProjectPageHeroProps) {
  const { locale } = useVariables();
  const isArabic = locale === "ar";
  return (
    <section className="relative pt-28 pb-12 c-container">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <LocaleLink
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-color transition-colors"
        >
          {isArabic ? <FaArrowRight /> : <FaArrowLeft />}
          <span>{isArabic ? "العودة للمشاريع" : "Back to Projects"}</span>
        </LocaleLink>
      </motion.div>

      {/* Title & Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        {/* Category Badges */}
        <div className="flex flex-wrap gap-2">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary-color/20 text-primary-color border border-primary-color/30"
            >
              {categoryLabels[cat]?.[locale] || cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {project.title[locale]}
          </span>
        </h1>
      </motion.div>
    </section>
  );
}
