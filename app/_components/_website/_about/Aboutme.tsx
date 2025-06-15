"use client";
import React from "react";
import Img from "../../_global/Img";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { FaGithub, FaTelegramPlane, FaGoogle } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import Education from "./Education";

export default function Aboutme() {
  const { locale } = useVariables();
  const { aboutme } = getTranslations(locale);

  const socialIcons = [
    {
      icon: <BsWhatsapp className="size-6" />,
      bg_color: "hover:bg-[#128c7e]",
      link: "https://wa.me/201017539419",
    },
    {
      icon: <FaGithub className="size-6" />,
      bg_color: "hover:bg-[#333]",
      link: "https://github.com/Ahmed-ES-SH",
    },
    {
      icon: <FaTelegramPlane className="size-6" />,
      bg_color: "hover:bg-[#0088cc]",
      link: "https://t.me/Ahmed_Ismail_dev",
    },
    {
      icon: <FaGoogle className="size-6" />,
      bg_color: "hover:bg-[#34a853]",
      link: "mailto:ahmedshehata9889@gmail.com",
    },
  ];

  return (
    <>
      <motion.div
        className="flex items-center justify-between max-lg:flex-col gap-10 w-full z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="image-profile flex flex-col items-center flex-1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <div className="overflow-hidden relative w-[220px] h-[220px] rounded-full bg-gradient-to-r from-transparent shadow-2xl shadow-sky-700 to-[#1f6e8c75] flex items-center justify-center flex-col">
            <Img
              src="/avater.webp"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <motion.div
            className="mt-1 bg-gradient-to-r from-transparent to-[#1f6e8c75] w-[200px] rounded-md shadow-2xl shadow-sky-700 h-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h1 className="w-full text-center font-bold text-white py-2">
              {aboutme.name}
            </h1>
            <div className="flex items-center justify-center py-2">
              {socialIcons.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-black px-2 w-[30px] h-[30px] bg-white rounded-full m-auto flex items-center justify-center hover:-translate-y-1 duration-300 hover:text-white ${item.bg_color}`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="content-about flex flex-col gap-4 flex-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="p-2 w-fit bg-gray-700 text-white rounded-md">
            {aboutme.first_title}
          </h1>
          <h1 className="font-bold whitespace-nowrap text-primary-color text-shadow-lg text-shadow-teal-700 w-3/4 max-lg:w-full text-[32px] max-md:text-[17px] max-lg:text-[22px]">
            {aboutme.second_title}
          </h1>
          <p className="w-[90%] text-white text-[22px] max-lg:w-full max-xl:text-[17px] max-md:text-[14px] tracking-wide">
            {aboutme.third_title}
          </p>
        </motion.div>
      </motion.div>

      <Education />
    </>
  );
}
