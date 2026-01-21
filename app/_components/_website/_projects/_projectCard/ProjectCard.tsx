"use client";
import { useState, useRef, useEffect } from "react";
import { easeOut, motion, AnimatePresence } from "framer-motion";
import { useVariables } from "@/app/context/VariablesContext";
import { directionMap } from "@/app/constants/content";
import { Project } from "@/app/lib/projects";
import ImagePreviewModal from "../ImagePreviewModal";
import ContentSide from "./ContentSide";
import SwiperSide from "./SwiperSide";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Main ProjectCard Component
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { locale } = useVariables();

  const swiperRef = useRef<any>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

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
      { threshold: 0.2 },
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
        className="w-full  mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="flex flex-col xl:flex-row xl:h-[500px] w-full ">
          {/* Left Side - Image Slider */}
          <SwiperSide
            swiperRef={swiperRef}
            onImageClick={handleImageClick}
            project={project}
          />

          {/* Right Side - Project Details */}
          <ContentSide project={project} />
        </div>
      </motion.div>

      <div className="z-99999999">
        {/* Fullscreen Preview Modal */}
        <AnimatePresence>
          {previewOpen && (
            <ImagePreviewModal
              images={project.images}
              initialIndex={previewIndex}
              onClose={() => setPreviewOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
