"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion"; // Optimize animations
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { directionMap } from "@/app/constants/content";
import LocaleLink from "../../../_global/LocaleLink";
import ProjectPageHero from "./ProjectPageHero";
import ProjectGallery from "./ProjectGallery";
import AboutProject from "./AboutProject";
import ProjectKeyFeatures from "./ProjectKeyFeatures";
import ProjectCTASection from "./ProjectCTASection";
import { Project } from "@/app/lib/projects";

// Main ProjectDetailPage Component
export default function ProjectDetailPage({
  project,
  content,
}: {
  project: Project | null;
  content: string;
}) {
  const { locale } = useVariables();
  const { projectCard } = getTranslations(locale);
  const isArabic = locale === "ar";

  // Optimize mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const x1 = useTransform(mouseX, (x) => x * 0.02);
  const y1 = useTransform(mouseY, (y) => y * 0.02);

  const x2 = useTransform(mouseX, (x) => x * -0.015);
  const y2 = useTransform(mouseY, (y) => y * -0.015);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col  items-center justify-center gap-3 font-bold text-white">
          <span className="text-primary-color text-6xl">404</span>{" "}
          <h1 className="text-3xl">
            {" "}
            {isArabic ? "المشروع غير موجود" : "Project Not Found"}
          </h1>
        </div>
        <LocaleLink
          href="/projects"
          className="px-6 py-3 bg-primary-color text-white rounded-lg hover:bg-primary-color/80 transition-colors"
        >
          {isArabic ? "العودة للمشاريع" : "Back to Projects"}
        </LocaleLink>
      </div>
    );
  }

  return (
    <div
      dir={directionMap[locale]}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-primary-color/15 rounded-full blur-[150px]"
          style={{
            left: "0%",
            top: "5%",
            x: x1,
            y: y1,
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"
          style={{
            right: "5%",
            bottom: "10%",
            x: x2,
            y: y2,
          }}
        />
      </div>

      {/* ============ SECTION 1: HERO ============ */}
      <ProjectPageHero project={project} />

      {/* ============ SECTION 2: GALLERY ============ */}
      <ProjectGallery project={project} />

      {/* ============ SECTION 3: ABOUT & TECH ============ */}
      <AboutProject project={project} content={content} t={projectCard} />

      {/* ============ SECTION 4: KEY FEATURES ============ */}
      <ProjectKeyFeatures project={project} />

      {/* ============ SECTION 5: CTA ============ */}
      <ProjectCTASection project={project} />
    </div>
  );
}
