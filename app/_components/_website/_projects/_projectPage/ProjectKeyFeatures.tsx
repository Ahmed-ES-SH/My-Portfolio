"use client";
import { motion } from "framer-motion";
import { useVariables } from "@/app/context/VariablesContext";
import FeatureCard from "./FeatureCard";
import { ProjectKeyFeaturesProps } from "./projectTypes";

export default function ProjectKeyFeatures({
  project,
}: ProjectKeyFeaturesProps) {
  const { locale } = useVariables();
  const isArabic = locale === "ar";

  return (
    <section className="relative py-12 c-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <div className="w-1.5 h-8 bg-primary-color rounded-full" />
          {isArabic ? "المميزات الرئيسية" : "Key Features"}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.skills.slice(0, 6).map((feature, idx) => (
            <FeatureCard key={feature} feature={feature} index={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
