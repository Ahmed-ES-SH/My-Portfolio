"use client";

import React from "react";
import Img from "./Img";
import LocaleLink from "./LocaleLink";
import { useRouter } from "next/navigation";

export default function ContactMe() {
  const router = useRouter();

  const handleChangeLanguage = (local: string) => {
    const currentPath =
      typeof window !== "undefined" &&
      window.location.pathname.split("/").slice(2).join("/");

    router.push(`/${local}/${currentPath || ""}`);
  };

  return (
    <div className="c-container pt-6 z-[9999] flex justify-between items-center py-4 relative">
      {/* Logo */}
      <LocaleLink href="/">
        <Img src="/logo.png" className="w-32 object-contain" />
      </LocaleLink>

      <div className={` flex items-center   w-fit bg-sky-400 rounded-md `}>
        <select className="mr-2 p-1 rounded-sm bg-transparent cursor-pointer outline-none ">
          <option
            onClick={() => handleChangeLanguage("en")}
            className="bg-gray-600 text-white w-[30px] cursor-pointer"
            value={"en"}
          >
            EN
          </option>
          <option
            onClick={() => handleChangeLanguage("ar")}
            className="bg-gray-600 text-white w-[30px] cursor-pointer"
            value={"ar"}
          >
            AR
          </option>
        </select>
        <a
          href={"https://mostaql.com/u/ahmedve99/portfolio"}
          className="px-4 py-2 rounded-r-md text-white bg-sky-700"
        >
          {"Contact me"}
        </a>
      </div>
    </div>
  );
}
