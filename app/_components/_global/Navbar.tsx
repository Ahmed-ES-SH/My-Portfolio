import React from "react";
import Link from "next/link";
import { links } from "@/app/constants/content";

export default function Navbar() {
  const isArabic = true;

  return (
    <>
      <div
        className={`w-fit max-sm:w-full max-sm:-translate-y-0 max-sm:left-0 max-sm:rounded-none max-sm:top-[94%] max-sm:bg-sky-500 fixed h-[300px] max-sm:h-fit  max-sm:flex-row gap-6  z-[999999999999] rounded-full  ${
          isArabic ? "right-4" : "left-4"
        } top-1/2 -translate-y-1/2 px-[10px] py-2  bg-primary-color hover:bg-sky-500 duration-200 cursor-pointer text-white/50 flex flex-col items-center justify-around`}
      >
        {links.map((link, index) => (
          <div className="relative flex group" key={index}>
            <Link
              className="block hover:scale-125 duration-300 cursor-pointer hover:text-white"
              href={link.link}
            >
              {<link.icon className="size-6" />}
            </Link>
            <p
              className={`max-sm:hidden absolute duration-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible ${
                isArabic ? "-left-[130px]" : "-right-[130px]"
              } px-2 py-1 rounded-md bg-sky-500 text-center text-white whitespace-nowrap after:w-0 after:h-0  after:border-transparent after:border-[8px] ${
                isArabic ? "after:border-l-sky-600" : "after:border-r-sky-600"
              } after:content-[''] after:absolute ${
                isArabic ? "after:-right-5" : "after:-left-5"
              } after:top-[50%] after:-translate-y-[50%]`}
            >
              {link.title["en"]}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
