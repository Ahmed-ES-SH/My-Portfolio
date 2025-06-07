/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function AnimateText() {
  return (
    <>
      <div className="content opacity-100  max-sm:w-full w-[65%] relative z-[5] self-start mt-[8%] p-4 max-lg:w-full ">
        <h1 className="text-white mt-9 text-[42px] max-sm:text-[45px] font-bold ">
          Hi , i'm
        </h1>
        <h1 className=" text-sky-500  mt-4 text-[42px] max-sm:text-[45px] font-bold ">
          Ahmed Esmail
        </h1>
        <div className="flex items-center max-sm:flex-col max-sm:items-start gap-2">
          <p className=" text-white whitespace-nowrap  text-[30px] max-sm:text-[30px] font-bold">
            A passionate
          </p>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              " <Front-end Web Developer />",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              " <Back-end Web Developer />",
              1000,
              " <Full-Stack Web Developer>",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-3xl text-shadow text-primary-color font-bold inline-block font-inter"
          />
        </div>

        <h1 className="text-white  text-[30px] max-sm:text-[22px] font-bold">
          creating user frindly websites
        </h1>
      </div>
    </>
  );
}
