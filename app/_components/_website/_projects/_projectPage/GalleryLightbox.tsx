"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  MdClose,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import Img from "@/app/_components/_global/Img";

// Lightbox Modal Component
export default function GalleryLightbox({
  images,
  folderName,
  initialIndex,
  onClose,
}: GalleryLightboxProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
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
      className="fixed inset-0 z-99999 bg-black/95 flex items-center justify-center p-2 md:p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 md:top-4 md:right-4 z-50 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
      >
        <MdClose className="size-5 md:size-6" />
      </button>

      <div className="absolute top-2 left-2 md:top-4 md:left-4 z-50 px-3 py-1.5 bg-white/10 rounded-full text-white text-xs md:text-sm">
        <span className="lightbox-counter">{initialIndex + 1}</span> /{" "}
        {images.length}
      </div>

      <div
        className="w-full h-full flex items-center justify-center pt-14 pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          initialSlide={initialIndex}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: ".lightbox-next",
            prevEl: ".lightbox-prev",
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          keyboard={{ enabled: true }}
          onSlideChange={(swiper) => {
            const counter = document.querySelector(".lightbox-counter");
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
                  alt={`Image ${idx + 1}`}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="lightbox-prev hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-primary-color text-white rounded-full items-center justify-center shadow-lg hover:scale-110 transition-all">
          <MdKeyboardArrowLeft className="size-7" />
        </button>
        <button className="lightbox-next hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-primary-color text-white rounded-full items-center justify-center shadow-lg hover:scale-110 transition-all">
          <MdKeyboardArrowRight className="size-7" />
        </button>
      </div>
    </motion.div>
  );
}
