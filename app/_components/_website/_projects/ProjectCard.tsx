"use client";
import { useState, useRef, useEffect } from "react";
import { easeOut, motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useVariables } from "@/app/context/VariablesContext";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { getTranslations } from "@/app/helpers/helpers";
import { directionMap } from "@/app/constants/content";
import Img from "../../_global/Img";
import ProjectLinks from "./ProjectLinks";
import TechBadge from "./TechBadge";

// Main ProjectCard Component
export default function ProjectCard({ project, index }: projectCardProps) {
  const { locale } = useVariables();
  const { projectCard } = getTranslations(locale);

  const [expanded, setExpanded] = useState(false);
  const swiperRef = useRef<any>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const isArabic = locale === "ar";
  const description = project.description[locale];
  const shortText = description.slice(0, 200); // أول 200 حرف فقط، يمكنك تغييره حسب الحاجة
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          swiperRef.current?.autoplay?.start();
        } else {
          swiperRef.current?.autoplay?.stop();
        }
      },
      { threshold: 0.2 } // Start/Stop when 20% visible
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
    <motion.div
      ref={cardRef}
      dir={directionMap[locale]}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full  mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
    >
      <div className="flex flex-col xl:flex-row h-fit xl:h-[500px] w-full overflow-y-auto">
        {/* Left Side - Image Slider */}
        <motion.div
          variants={itemVariants}
          className="xl:w-1/2 max-xl:h-[350px] w-full"
        >
          <div className="h-full">
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
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full bg-gray-200  overflow-hidden group">
                    <Img
                      src={`/Projects/${project.folderName}/${image}`}
                      alt={project.title.en}
                      className="w-full h-full object-cover duration-300  group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          className="xl:w-1/2 w-full p-4 xl:p-12 flex flex-col justify-center z-99999 relative"
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className={`xl:text-2xl text-xl text-shadow-lg underline text-shadow-teal-700 text-primary-color font-bold  mb-6 leading-tight ${
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
                className="ml-1 text-primary-color  transition hover:underline inline"
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
                <TechBadge key={tech} tech={tech} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Project Links */}
          <motion.div variants={itemVariants}>
            <ProjectLinks
              sourceCodeLink={project.linkSourceCode}
              projectLink={project.projectLink}
              isPrivate={project.isPrivate}
              projectCard={projectCard}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
