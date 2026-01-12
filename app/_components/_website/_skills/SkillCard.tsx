"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Img from "../../_global/Img";

export default function SkillCard({ skill, locale, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-color/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-color/20"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-primary-color/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        {/* Icon */}
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-16 h-16 rounded-xl bg-primary-color/20 flex items-center justify-center p-3"
        >
          <Img
            src={skill.icon}
            alt={skill.title[locale as "en" | "ar"]}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white group-hover:text-primary-color transition-colors">
          {skill.title[locale as "en" | "ar"]}
        </h3>

        {/* Description - shows on hover */}
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          className="text-sm text-gray-400 leading-relaxed overflow-hidden"
        >
          {skill.desc[locale as "en" | "ar"]}
        </motion.p>
      </div>
    </motion.div>
  );
}
