"use client";
import Img from "../../_global/Img";
import AnimateText from "./AnimateText";
import { motion } from "framer-motion";
import { useVariables } from "@/app/context/VariablesContext";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function HeroSection() {
  const { locale } = useVariables();
  const isArabic = locale == "ar";
  return (
    <div className="flex h-screen overflow-hidden c-container items-center justify-center z-9999 gap-5">
      <div className="w-full h-screen absolute top-0 left-0 bg-transparent z-999"></div>
      <div className="w-full h-screen absolute top-0 left-0 z-1">
        <Img
          src="/bg-2.jpg"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="w-full h-screen bg-black/50 absolute top-0 left-0 z-1"></div>
      </div>
      <AnimateText />
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className={`z-2 absolute max-md:bottom-12  max-lg:-bottom-2 bottom-2 ${
          isArabic ? "lg:left-12 left-0" : "right-0 2xl:right-[228px]"
        }`}
      >
        <Img
          src="/robot.png"
          className="w-[320px] max-lg:w-[350px] max-md:w-[150px]  2xl:w-[500px]"
        />
      </motion.div>
    </div>
  );
}
