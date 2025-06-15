"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Aboutme from "./Aboutme";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { directionMap } from "@/app/constants/content";

export default function AboutComponent() {
  const { locale } = useVariables();
  const { aboutBtns } = getTranslations(locale);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div
      dir={directionMap[locale]}
      className="min-h-screen bg-gray-900 text-white overflow-hidden relative"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute xl:w-96 w-60 xl:h-96 h-60 bg-blue-500 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          style={{
            left: "10%",
            top: "20%",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-purple-500 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * -0.015,
          }}
          style={{
            right: "10%",
            bottom: "20%",
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-20 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="c-container min-h-screen flex items-start justify-center mx-auto">
          <div className="flex flex-col gap-12 items-start w-full">
            <div className="w-full">
              <motion.div
                dir="ltr"
                className="relative"
                variants={itemVariants}
              >
                <motion.div
                  className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`function createAwesome() {
  const skills = ['Next.js', 'Laravel'];
  const passion = '💡';
  const coffee = '☕';
  
  return skills.map(skill => 
    skill + passion + coffee
  ).join(' = Amazing Projects! 🚀');
}

console.log(createAwesome());`}</code>
                  </pre>
                </motion.div>
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
              <motion.div
                className="flex gap-4 mt-12 mx-auto w-fit z-50 relative max-md:flex-col max-md:items-start max-md:w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <motion.button
                  className="bg-blue-500 whitespace-nowrap   hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 justify-center max-md:w-full  transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0, 165, 244, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    target="_blank"
                    href="https://mostaql.com/u/ahmedve99/portfolio"
                  >
                    {aboutBtns.contact_me}
                  </a>
                  <FaArrowRight className="rtl:rotate-180" />
                </motion.button>
                <a
                  href="/Ahmed-Ismail-Resume.pdf"
                  download
                  type="application/pdf"
                >
                  <motion.button
                    className="border whitespace-nowrap border-gray-600 max-md:w-full hover:border-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                    whileHover={{ scale: 1.05, borderColor: "#00a5f4" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {aboutBtns.download_cv}
                  </motion.button>
                </a>
              </motion.div>
            </div>
            <Aboutme />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
