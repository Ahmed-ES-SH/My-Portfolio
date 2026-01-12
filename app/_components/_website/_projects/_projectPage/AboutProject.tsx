"use client";
import { motion } from "framer-motion";
import { useVariables } from "@/app/context/VariablesContext";

export default function AboutProject({ project, t }: AboutProjectProps) {
  const { locale } = useVariables();
  const isArabic = locale === "ar";
  return (
    <section className="relative py-12 c-container">
      <div className="grid grid-cols-1 gap-12">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <div className="w-1.5 h-8 bg-primary-color rounded-full" />
            {isArabic ? "عن المشروع" : "About This Project"}
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            {project.description[locale]}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <div className="w-1.5 h-8 bg-primary-color rounded-full" />
            {t.technologiesUsed}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.skills.map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-primary-color/20 hover:border-primary-color/50 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
