"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import {
  MdClose,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Img from "../../_global/Img";

export default function ImagePreviewModal({
  images,
  initialIndex,
  onClose,
}: {
  images: string[];
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
                  src={image}
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
