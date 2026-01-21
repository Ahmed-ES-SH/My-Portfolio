"use client";
import LocaleLink from "./LocaleLink";
import { useVariables } from "@/app/context/VariablesContext";
import { directionMap, links } from "@/app/constants/content";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { locale } = useVariables();
  const pathname = usePathname();

  function cleanPathname(path: string) {
    if (path.startsWith("/en/")) return path.slice(3); // حذف '/en'
    if (path.startsWith("/ar/")) return path.slice(3); // حذف '/ar'
    if (path === "/en" || path === "/ar") return "/"; // لو فقط البادئة بدون مسار إضافي، اعتبره '/'
    return path;
  }
  const cleanPath = cleanPathname(pathname);

  const isArabic = locale == "ar";
  return (
    <div
    dir={directionMap[locale]}
      className={`w-fit opacity-50 hover:opacity-100 duration-300 lg:top-1/2 lg:-translate-y-1/2 bottom-0 max-lg:w-full max-lg:left-0  max-lg:rounded-none  max-lg:bg-sky-500 fixed h-[300px] max-lg:h-fit  max-lg:flex-row gap-6  z-99999999 rounded-full  ${
        isArabic ? "right-4" : "left-4"
      }   px-[10px] py-2  bg-primary-color hover:bg-sky-500 duration-200 cursor-pointer text-white/50 flex flex-col items-center justify-around`}
    >
      {links.map((link, index) => {
        const isActive = cleanPath === link.link;
        return (
          <div className="relative flex group" key={index}>
            <LocaleLink
              href={link.link}
              className={`block hover:scale-125 duration-300 cursor-pointer hover:text-white ${
                isActive ? "text-white scale-125" : ""
              }`}
            >
              {<link.icon className="size-6" />}
            </LocaleLink>
            <p
              className={`max-lg:hidden absolute duration-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible ${
                isArabic ? "-left-[130px]" : "-right-[130px]"
              } px-2 py-1 rounded-md bg-sky-500 text-center text-white whitespace-nowrap after:w-0 after:h-0  after:border-transparent after:border-8px ${
                isArabic ? "after:border-l-sky-600" : "after:border-r-sky-600"
              } after:content-[''] after:absolute ${
                isArabic ? "after:-right-5" : "after:-left-5"
              } after:top-[50%] after:-translate-y-[50%]`}
            >
              {link.title[locale]}
            </p>
          </div>
        );
      })}
    </div>
  );
}
