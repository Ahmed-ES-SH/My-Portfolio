"use client";
import Img from "@/app/_components/_global/Img";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdZoomOutMap,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectType } from "../_projectPage/projectTypes";
import { easeOut, motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface SwiperSideProps {
  project: projectType;
  onImageClick: (imageIndex: number) => void;
  swiperRef: any;
}

export default function SwiperSide({
  project,
  onImageClick,
  swiperRef,
}: SwiperSideProps) {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
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
                onClick={() => onImageClick(idx)}
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
  );
}
