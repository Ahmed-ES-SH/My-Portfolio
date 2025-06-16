"use client";
import { motion } from "framer-motion";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { TypeAnimation } from "react-type-animation";
import { directionMap } from "@/app/constants/content";

export default function AnimateText() {
  const { locale } = useVariables();
  const { heroSection } = getTranslations(locale);
  const isArabic = locale === "ar";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      dir={directionMap[locale]}
      className="content max-md:w-full  relative z-[5] p-4 max-lg:w-full flex-1"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Greeting */}
      <motion.h1
        className={`text-white mt-9 text-[42px] max-md:text-[38px] font-bold`}
        variants={itemVariants}
      >
        {heroSection.AnimateText.greeting}
      </motion.h1>

      {/* Name */}
      <motion.h1
        className={`text-sky-500 text-shadow-lg text-shadow-primary-blue  mt-4 text-[42px] max-md:text-[38px] font-bold ${
          isArabic ? "font-cairo" : "font-inter"
        }`}
        variants={itemVariants}
      >
        {heroSection.AnimateText.name}
      </motion.h1>

      {/* Description with TypeAnimation */}
      <motion.div
        className="flex items-center max-lg:flex-col max-lg:items-start gap-2"
        variants={itemVariants}
      >
        <p
          className={`text-white whitespace-nowrap text-[30px] max-lg:text-[26px] max-md:text-[20px] font-bold`}
        >
          {heroSection.AnimateText.part1}
        </p>

        <TypeAnimation
          sequence={heroSection.AnimateText.typeAnimation.flatMap((text) => [
            text,
            1000,
          ])}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className={`text-[40px] text-green-400 max-md:text-[32px] max-sm:text-[20px]  font-bold inline-block z-[99] relative ${
            isArabic ? "font-cairo" : "font-inter"
          }`}
        />
      </motion.div>

      {/* Subtitle */}
      <motion.h1
        className={`text-white text-[30px] max-md:text-[22px] max-sm:text-[18px] font-bold mt-2`}
        variants={itemVariants}
      >
        {heroSection.AnimateText.part2}
      </motion.h1>

      {/* Quality Badges */}
      <motion.div
        className="flex flex-wrap lg:items-center items-start gap-4 mt-6"
        variants={itemVariants}
      >
        <motion.span
          className="px-4 py-2  bg-primary-color backdrop-blur-sm rounded-full text-white text-sm"
          whileHover={{ scale: 1.05 }}
        >
          {heroSection.bestQuality}
        </motion.span>
        <motion.span
          className="px-4 py-2  bg-primary-color backdrop-blur-sm rounded-full text-white text-sm"
          whileHover={{ scale: 1.05 }}
        >
          {heroSection.responsiveDesign}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
