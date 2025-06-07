import React from "react";
import Img from "../../_global/Img";
import AnimateText from "./TextTypeAnimate";
import { messages_AR, messages_EN } from "@/app/constants/content";

export default function HeroSection() {
  const isArabic = true;
  return (
    <div className="flex h-screen c-container px-[15px] max-sm:pb-[40px] pb-[15px] items-center justify-between max-lg:flex-col">
      <AnimateText />
      <div className={`image max-md:w-full relative z-[5] self-end`}>
        <div
          className={`w-fit   h-fit mb-1 text-[32px] max-sm:text-[28px]  whitespace-nowrap flex items-center text-center bg-sky-200 opacity-45  rounded-md`}
        >
          <i className="fa-solid fa-face-grin-stars p-2"></i>
          <h1 className=" opacity-100 px-1 ">
            {isArabic ? messages_EN.first_title : messages_AR.first_title}
          </h1>
        </div>
        <div
          className={`w-fit h-fit absolute max-lg:hidden  bottom-8 max-sm:-bottom-0 ${
            isArabic ? "max-sm:right-[30%]" : "max-sm:left-[15%]"
          }  ${
            isArabic ? "lg:-left-1/2" : "lg:-right-[30%]"
          } flex items-center text-[32px] max-sm:text-[24px] px-1 text-center bg-sky-200 opacity-45  rounded-md`}
        >
          <i className="fa-solid fa-display p-2"></i>
          <h1 className=" opacity-100 whitespace-nowrap ">
            {isArabic ? messages_EN.secend_title : messages_AR.secend_title}
          </h1>
        </div>
        <Img
          className=" w-[400px] max-md:w-[125px] max-lg:w-[220px]  "
          src="/robot.png"
          alt="robot"
        />
      </div>
    </div>
  );
}
