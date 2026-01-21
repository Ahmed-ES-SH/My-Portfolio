"use client";
import { useEffect, useState } from "react";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Project, ProjectCategory } from "@/app/lib/projects";
import { directionMap } from "@/app/constants/content";
import ProjectCard from "@/app/_components/_website/_projects/_projectCard/ProjectCard";
import { FaCode, FaServer, FaLayerGroup, FaRocket } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

type FilterOption = "all" | ProjectCategory;

interface FilterButton {
  key: FilterOption;
  label: { en: string; ar: string };
  icon: React.ReactNode;
}

const filterOptions: FilterButton[] = [
  { key: "all", label: { en: "All", ar: "الكل" }, icon: <FaLayerGroup /> },
  {
    key: "frontend",
    label: { en: "Frontend", ar: "واجهة أمامية" },
    icon: <FaCode />,
  },
  {
    key: "backend",
    label: { en: "Backend", ar: "واجهة خلفية" },
    icon: <FaServer />,
  },
  {
    key: "fullstack",
    label: { en: "Fullstack", ar: "متكامل" },
    icon: <FaRocket />,
  },
];

interface ProjectsPageProps {
  initialProjects: Project[];
}

export default function ProjectsPage({ initialProjects }: ProjectsPageProps) {
  const { locale } = useVariables();
  const { projects } = getTranslations(locale);
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const isArabic = locale === "ar";

  // Optimized Mouse Movement with Motion Values
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

  const x1 = useTransform(mouseX, (x) => x * 0.03);
  const y1 = useTransform(mouseY, (y) => y * 0.03);

  const x2 = useTransform(mouseX, (x) => x * -0.02);
  const y2 = useTransform(mouseY, (y) => y * -0.02);

  const filteredProjects =
    activeFilter === "all"
      ? initialProjects
      : initialProjects.filter((p) => p.categories.includes(activeFilter));

  return (
    <>
      <div
        dir={directionMap[locale]}
        className="relative min-h-screen w-[98%] lg:w-[92%] mx-auto overflow-hidden"
      >
        {/* Animated Background */}
        <div className="fixed inset-0 pointer-events-none">
          <motion.div
            className="absolute w-[500px] h-[500px] bg-primary-color/20 rounded-full blur-[120px]"
            style={{
              left: "5%",
              top: "10%",
              x: x1,
              y: y1,
            }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[100px]"
            style={{
              right: "10%",
              bottom: "20%",
              x: x2,
              y: y2,
            }}
          />
        </div>

        {/* ============ HERO SECTION ============ */}
        <section className="relative pt-32 pb-16 ">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            {/* Badge */}
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary-color/20 text-primary-color rounded-full text-sm font-medium border border-primary-color/30"
            >
              {projects.title}
            </motion.span>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white">{isArabic ? "أعمالى " : "My "}</span>
              <span className="bg-linear-to-r from-primary-color to-cyan-400 bg-clip-text text-transparent">
                {isArabic ? "ومشاريعى" : "Projects"}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {projects.second_title}
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 pt-6">
              {[
                {
                  value: initialProjects.length + "+",
                  label: isArabic ? "مشروع" : "Projects",
                },
                { value: "100%", label: isArabic ? "متجاوب" : "Responsive" },
                {
                  value: "⭐",
                  label: isArabic ? "جودة عالية" : "High Quality",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-color">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ============ FILTER BAR ============ */}
        <section className=" py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filterOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setActiveFilter(option.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === option.key
                    ? "bg-primary-color text-white shadow-lg shadow-primary-color/30"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {option.icon}
                <span>{option.label[locale as "en" | "ar"]}</span>
              </button>
            ))}
          </motion.div>

          {/* Active filter indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 text-sm mt-4"
          >
            {isArabic
              ? `عرض ${filteredProjects.length} مشروع`
              : `Showing ${filteredProjects.length} project${
                  filteredProjects.length !== 1 ? "s" : ""
                }`}
          </motion.p>
        </section>

        {/* ============ PROJECTS GRID ============ */}
        <section className=" pb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-start max-md:w-full w-[90%] mx-auto gap-6"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, idx) => (
                  <ProjectCard
                    project={project}
                    index={idx}
                    key={project.folderName}
                  />
                ))
              ) : (
                <div className="w-full text-center py-16">
                  <p className="text-gray-400 text-lg">
                    {isArabic
                      ? "لا توجد مشاريع في هذه الفئة حالياً"
                      : "No projects in this category yet"}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
      {/* ============ CTA SECTION ============ */}
      <section className="relative py-24 overflow-hidden">
        {/* Background linear */}
        <div className="absolute inset-0 bg-linear-to-r from-primary-color/10 via-transparent to-primary-color/10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="c-container text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isArabic ? "هل لديك فكرة مشروع؟" : "Have a Project Idea?"}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            {isArabic
              ? "دعنا نعمل معاً لتحويل فكرتك إلى واقع رقمي مميز"
              : "Let's work together to turn your idea into an outstanding digital reality"}
          </p>

          <motion.a
            href="mailto:ahmedismaildev6@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-color text-white font-semibold rounded-full shadow-lg shadow-primary-color/30 hover:bg-primary-color/90 transition-colors"
          >
            <IoMail className="text-xl" />
            <span>{isArabic ? "تواصل معى" : "Get in Touch"}</span>
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
