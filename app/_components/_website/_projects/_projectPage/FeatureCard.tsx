"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { FeatureCardProps } from "./projectTypes";

// Feature Card Component
export default function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-primary-color/50 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary-color/20 flex items-center justify-center text-primary-color">
          <FaCheckCircle className="size-5" />
        </div>
        <span className="text-white font-medium">{feature}</span>
      </div>
    </motion.div>
  );
}
