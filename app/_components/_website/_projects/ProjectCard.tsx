"use client";
import { useState, useRef, useEffect } from "react";
import { easeOut, motion, AnimatePresence } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import { useVariables } from "@/app/context/VariablesContext";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdClose,
  MdZoomOutMap,
} from "react-icons/md";
import { getTranslations } from "@/app/helpers/helpers";
import { directionMap } from "@/app/constants/content";
import Img from "../../_global/Img";
import ProjectLinks from "./ProjectLinks";
import TechBadge from "./TechBadge";
import LocaleLink from "../../_global/LocaleLink";
import { Project } from "@/app/lib/projects";

// Fullscreen Image Preview Modal
function ImagePreviewModal({
  images,
  folderName,
  initialIndex,
  onClose,
}: {
  images: string[];
  folderName: string;
  initialIndex: number;
  onClose: () => void;
}) {
  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";

    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-99999 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 md:p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 md:top-4 md:right-4 z-50 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <MdClose className="size-5 md:size-6" />
      </button>

      {/* Image counter */}
      <div className="absolute top-2 left-2 md:top-4 md:left-4 z-50 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 rounded-full text-white text-xs md:text-sm">
        <span className="preview-counter">{initialIndex + 1}</span> /{" "}
        {images.length}
      </div>

      {/* Swiper Container */}
      <div
        className="w-full h-full flex items-center justify-center pt-14 pb-4 md:pt-16 md:pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          initialSlide={initialIndex}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: ".preview-next",
            prevEl: ".preview-prev",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          keyboard={{ enabled: true }}
          onSlideChange={(swiper) => {
            // Update counter
            const counter = document.querySelector(".preview-counter");
            if (counter) counter.textContent = String(swiper.activeIndex + 1);
          }}
          className="w-full h-full"
          style={{ direction: "ltr" }}
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx} className="flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center px-2 md:px-12">
                <Img
                  src={`/Projects/${folderName}/${image}`}
                  alt={`Preview ${idx + 1}`}
                  className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons - Hidden on mobile (use swipe), visible on md+ */}
        <button className="preview-prev hidden md:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-14 md:h-14 bg-primary-color hover:bg-primary-color/80 text-white rounded-full items-center justify-center shadow-lg transition-all hover:scale-110">
          <MdKeyboardArrowLeft className="size-6 md:size-8" />
        </button>
        <button className="preview-next hidden md:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-14 md:h-14 bg-primary-color hover:bg-primary-color/80 text-white rounded-full items-center justify-center shadow-lg transition-all hover:scale-110">
          <MdKeyboardArrowRight className="size-6 md:size-8" />
        </button>
      </div>
    </motion.div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Main ProjectCard Component
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { locale } = useVariables();
  const { projectCard } = getTranslations(locale);

  const [expanded, setExpanded] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const isArabic = locale === "ar";
  const description = project.description[locale];
  const shortText = description.slice(0, 200);
  const shouldTruncate = description.length > 200;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
        staggerChildren: 0.2,
        delay: index * 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  const handleImageClick = (imageIndex: number) => {
    setPreviewIndex(imageIndex);
    setPreviewOpen(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          swiperRef.current?.autoplay?.start();
        } else {
          swiperRef.current?.autoplay?.stop();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cardRef}
        dir={directionMap[locale]}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="flex flex-col xl:flex-row xl:h-[500px] w-full ">
          {/* Left Side - Image Slider */}
          <motion.div
            variants={itemVariants}
            className="xl:w-1/2 max-xl:h-[350px] w-full"
          >
            <div className="h-full relative group/slider">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                style={{ direction: "ltr" }}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="h-full shadow-lg"
              >
                {project.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      onClick={() => handleImageClick(idx)}
                      className="relative w-full h-full bg-gray-200 overflow-hidden group cursor-pointer"
                    >
                      <Img
                        src={image}
                        alt={project.title.en}
                        className="w-full h-full object-cover duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Zoom icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 bg-primary-color/80 rounded-full flex items-center justify-center shadow-lg">
                          <MdZoomOutMap className="size-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons */}
                <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-primary-color text-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                  <MdKeyboardArrowLeft className="size-6" />
                </div>
                <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-primary-color text-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                  <MdKeyboardArrowRight className="size-6" />
                </div>
              </Swiper>
            </div>
          </motion.div>

          {/* Right Side - Project Details */}
          <motion.div
            variants={itemVariants}
            className="xl:w-1/2 w-full p-4 xl:p-12 flex flex-col justify-center z-99999 xl:h-[500px] overflow-y-auto relative"
          >
            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className={`xl:text-2xl text-xl text-shadow-lg underline text-shadow-teal-700 text-primary-color font-bold mb-6 leading-tight ${
                locale === "ar" ? "text-right font-cairo" : "text-left"
              }`}
              key={locale}
            >
              {project.title[locale]}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className={`xl:text-[16px] text-[14px] text-gray-400 mb-4 leading-relaxed ${
                isArabic ? "text-right font-cairo" : "text-left font-inter"
              }`}
              key={`desc-${locale}`}
            >
              {expanded || !shouldTruncate ? description : `${shortText}...`}

              {shouldTruncate && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="ml-1 text-primary-color transition hover:underline inline"
                >
                  {expanded
                    ? isArabic
                      ? "عرض أقل"
                      : "Show less"
                    : isArabic
                    ? "قراءة المزيد"
                    : "Read more"}
                </button>
              )}
            </motion.p>

            {/* Technologies */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <FaCode className="text-blue-600" />
                {projectCard.technologiesUsed}
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.skills.map((tech, index) => (
                  <TechBadge
                    key={tech}
                    tech={tech}
                    index={index}
                    length={project.skills.length}
                  />
                ))}
              </div>
            </motion.div>

            {/* Project Links */}
            <div className="flex flex-col gap-4">
              <motion.div variants={itemVariants}>
                <ProjectLinks
                  sourceCodeLink={project.linkSourceCode}
                  projectLink={project.projectLink}
                  isPrivate={project.isPrivate}
                  projectCard={projectCard}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="flex justify-end">
                <LocaleLink
                  href={`/projects/${project.folderName}`}
                  className="text-primary-color hover:underline text-sm font-medium flex items-center gap-1 group/link"
                >
                  {isArabic ? "عرض التفاصيل" : "View Details"}
                  <MdKeyboardArrowRight
                    className={`size-5 transition-transform ${
                      isArabic
                        ? "group-hover/link:-translate-x-1 rotate-180"
                        : "group-hover/link:translate-x-1"
                    }`}
                  />
                </LocaleLink>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="z-99999999">
        {/* Fullscreen Preview Modal */}
        <AnimatePresence>
          {previewOpen && (
            <ImagePreviewModal
              images={project.images}
              folderName={project.folderName}
              initialIndex={previewIndex}
              onClose={() => setPreviewOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
