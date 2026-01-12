"use client";
import { motion } from "framer-motion";
import { getTranslations } from "@/app/helpers/helpers";
import { useVariables } from "@/app/context/VariablesContext";
import { skills } from "@/app/constants/skills";

export default function SkillsHeroSection() {
  const { locale } = useVariables();
  const { skillsPage } = getTranslations(locale);
  const isArabic = locale === "ar";
  return (
    <section className="relative pt-32 pb-16 c-container">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        {/* Badge */}
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-2 bg-primary-color/20 text-primary-color rounded-full text-sm font-medium border border-primary-color/30"
        >
          {skillsPage.title}
        </motion.span>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="text-white">{isArabic ? "مهاراتى " : "My "}</span>
          <span className="bg-linear-to-r from-primary-color to-cyan-400 bg-clip-text text-transparent">
            {isArabic ? "التقنية" : "Technical Skills"}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {skillsPage.secend_title}
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-8 pt-6">
          {[
            {
              value: skills.length + "+",
              label: isArabic ? "مهارة" : "Skills",
            },
            { value: "3+", label: isArabic ? "سنوات خبرة" : "Years Exp." },
            { value: "20+", label: isArabic ? "مشروع" : "Projects" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-color">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
