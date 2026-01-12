"use client";
import { motion } from "framer-motion";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";

export default function ProjectCTASection({ project }: ProjectCTASectionProps) {
  const { locale } = useVariables();
  const { projectCard } = getTranslations(locale);
  const isArabic = locale === "ar";

  return (
    <section className="relative py-16 c-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-linear-to-r from-primary-color/10 via-primary-color/5 to-transparent rounded-3xl p-8 md:p-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-start">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {isArabic ? "هل أعجبك هذا المشروع؟" : "Like This Project?"}
            </h2>
            <p className="text-gray-400">
              {isArabic
                ? "اكتشف المزيد أو تواصل معي لمشروعك"
                : "Explore more or get in touch for your project"}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Live Demo */}
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary-color text-white font-semibold rounded-xl hover:bg-primary-color/80 transition-all shadow-lg shadow-primary-color/30"
            >
              <FaExternalLinkAlt />
              {projectCard.liveDemo}
            </a>

            {/* Source Code */}
            {project.isPrivate ? (
              <div className="flex items-center gap-2 px-6 py-3 bg-red-500/20 text-red-400 font-semibold rounded-xl border border-red-500/30">
                <FaLock />
                {locale == "ar" ? "كود خاص" : "Private Source"}
              </div>
            ) : (
              <a
                href={project.linkSourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <FaGithub />
                {projectCard.sourceCode}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
