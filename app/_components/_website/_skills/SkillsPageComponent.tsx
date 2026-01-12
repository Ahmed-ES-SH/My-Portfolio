"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useVariables } from "@/app/context/VariablesContext";
import Img from "../../_global/Img";
import CategorySection from "./CategorySection";
import SkillsHeroSection from "./SkillsHeroSection";
import {
  backendSkills,
  frontendSkills,
  skills,
  toolsSkills,
} from "@/app/constants/skills";

export default function SkillsPageComponent() {
  const { locale } = useVariables();

  const isArabic = locale === "ar";

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Filter skills by category
  const frontend = skills.filter((s) => frontendSkills.includes(s.title.en));
  const backend = skills.filter((s) => backendSkills.includes(s.title.en));
  const tools = skills.filter((s) => toolsSkills.includes(s.title.en));

  const categories = isArabic
    ? {
        frontend: "الواجهة الأمامية",
        backend: "الواجهة الخلفية",
        tools: "الأدوات",
      }
    : { frontend: "Frontend", backend: "Backend", tools: "Tools & Libraries" };

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-primary-color/20 rounded-full blur-[120px]"
          animate={{
            x: mousePosition.x * 0.03,
            y: mousePosition.y * 0.03,
          }}
          style={{ left: "5%", top: "10%" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[100px]"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          style={{ right: "10%", bottom: "20%" }}
        />
      </div>

      {/* ============ SECTION 1: HERO ============ */}
      <SkillsHeroSection />

      {/* ============ SECTION 2: SKILLS CATEGORIES ============ */}
      <section className="relative py-16 c-container space-y-16">
        <CategorySection
          title={categories.frontend}
          skills={frontend}
          locale={locale}
          delay={0}
        />
        <CategorySection
          title={categories.backend}
          skills={backend}
          locale={locale}
          delay={0.1}
        />
        <CategorySection
          title={categories.tools}
          skills={tools}
          locale={locale}
          delay={0.2}
        />
      </section>

      {/* ============ SECTION 3: SKILLS SHOWCASE MARQUEE ============ */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-background z-10 pointer-events-none" />

        <motion.div
          dir="ltr"
          animate={{ x: isArabic ? ["0%", "50%"] : ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-full"
            >
              <Img
                src={skill.icon}
                alt={skill.title[locale as "en" | "ar"]}
                className="w-8 h-8 object-contain"
              />
              <span className="text-white font-medium">
                {skill.title[locale as "en" | "ar"]}
              </span>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
