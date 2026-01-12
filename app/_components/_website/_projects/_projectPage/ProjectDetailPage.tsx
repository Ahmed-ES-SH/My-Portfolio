"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { useProjectsData, Project } from "@/app/constants/projects";
import { directionMap } from "@/app/constants/content";
import { VscLoading } from "react-icons/vsc";
import LocaleLink from "../../../_global/LocaleLink";
import ProjectPageHero from "./ProjectPageHero";
import ProjectGallery from "./ProjectGallery";
import AboutProject from "./AboutProject";
import ProjectKeyFeatures from "./ProjectKeyFeatures";
import ProjectCTASection from "./ProjectCTASection";

// Main ProjectDetailPage Component
export default function ProjectDetailPage({ slug }: { slug: string }) {
  const { locale } = useVariables();
  const { projectsData, loading } = useProjectsData();
  const { projectCard } = getTranslations(locale);
  const isArabic = locale === "ar";

  const [project, setProject] = useState<Project | null>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!loading && projectsData.length > 0) {
      const found = projectsData.find((p) => p.folderName === slug);
      setProject(found || null);
    }
  }, [loading, projectsData, slug]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-9999">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <VscLoading className="size-24 text-primary-color" />
        </motion.div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold text-white">
          {isArabic ? "المشروع غير موجود" : "Project Not Found"}
        </h1>
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
          animate={{ x: mousePosition.x * 0.02, y: mousePosition.y * 0.02 }}
          style={{ left: "0%", top: "5%" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"
          animate={{ x: mousePosition.x * -0.015, y: mousePosition.y * -0.015 }}
          style={{ right: "5%", bottom: "10%" }}
        />
      </div>

      {/* ============ SECTION 1: HERO ============ */}
      <ProjectPageHero project={project} />

      {/* ============ SECTION 2: GALLERY ============ */}
      <ProjectGallery project={project} />

      {/* ============ SECTION 3: ABOUT & TECH ============ */}
      <AboutProject project={project} t={projectCard} />

      {/* ============ SECTION 4: KEY FEATURES ============ */}
      <ProjectKeyFeatures project={project} />

      {/* ============ SECTION 5: CTA ============ */}
      <ProjectCTASection project={project} />
    </div>
  );
}
