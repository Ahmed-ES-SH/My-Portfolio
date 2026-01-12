"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

// TechBadge Component
export default function TechBadge({ tech, index, length }: TechBadgeProps) {
  return (
    <motion.div
      dir="ltr"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={{
        boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
      }}
      className="inline-flex items-center text-[12px] lg:text-sm gap-1.5 px-3 py-1.5 bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full  font-medium text-blue-700"
    >
      {index < length - 1 && <FaCode className="text-xs" />}
      {tech}
    </motion.div>
  );
}
