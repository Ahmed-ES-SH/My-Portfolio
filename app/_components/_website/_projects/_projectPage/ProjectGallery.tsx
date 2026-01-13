"use client";
import { AnimatePresence, motion } from "framer-motion";
import Img from "@/app/_components/_global/Img";
import GalleryLightbox from "./GalleryLightbox";
import { useState } from "react";
import { useVariables } from "@/app/context/VariablesContext";
import { ProjectGalleryProps } from "./projectTypes";

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const { locale } = useVariables();
  const isArabic = locale === "ar";

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  return (
    <div
      style={{ zIndex: lightboxOpen ? 9999999999 : 999999 }}
      className={` relative`}
    >
      <section className="relative pb-12 c-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {/* Main Image */}
          <div
            onClick={() => setLightboxOpen(true)}
            className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer group bg-gray-800"
          >
            {project.images[activeImageIndex] && (
              <Img
                src={`${project.images[activeImageIndex]}`}
                alt={project.title[locale]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary-color/80 px-6 py-3 rounded-full text-white font-medium">
                {isArabic ? "عرض الصور" : "View Gallery"}
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {project.images.slice(0, 8).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`shrink-0 w-20 h-14 md:w-28 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImageIndex === idx
                    ? "border-primary-color scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
            {project.images.length > 8 && (
              <button
                onClick={() => setLightboxOpen(true)}
                className="shrink-0 w-20 h-14 md:w-28 md:h-20 rounded-lg bg-primary-color/20 border-2 border-primary-color/30 flex items-center justify-center text-primary-color font-bold"
              >
                +{project.images.length - 8}
              </button>
            )}
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <GalleryLightbox
            images={project.images}
            initialIndex={activeImageIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
