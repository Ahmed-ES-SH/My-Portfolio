"use client";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

export default function CategorySection({
  title,
  skills: categorySkills,
  locale,
  delay,
}: CategorySectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-4">
        <div className="h-1 w-12 bg-primary-color rounded-full" />
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <div className="h-px flex-1 bg-linear-to-r from-primary-color/50 to-transparent" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categorySkills.map((skill, index) => (
          <SkillCard
            key={skill.title.en}
            skill={skill}
            locale={locale}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}
