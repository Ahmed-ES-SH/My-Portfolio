"use client";

import React, { useEffect, useState, useRef } from "react";
import Img from "./Img";
import LocaleLink from "./LocaleLink";
import { useRouter } from "next/navigation";
import { IoArrowDownOutline } from "react-icons/io5";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";

type languageType = {
  label: string;
  code: string;
};

const languages: languageType[] = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

export default function ContactMe() {
  const { locale } = useVariables();
  const { contactMe } = getTranslations(locale);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedLanguageCode = localStorage.getItem("language_code");
    if (storedLanguageCode) {
      const lang = languages.find((l) => l.code === storedLanguageCode);
      if (lang) setSelectedLanguage(lang);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChangeLanguage = async (lang: languageType) => {
    setIsOpen(false);

    const currentPath = window.location.pathname.split("/").slice(2).join("/");
    localStorage.setItem("language_code", lang.code);
    setSelectedLanguage(lang);

    await router.push(`/${lang.code}/${currentPath || ""}`);
    router.refresh();
  };

  return (
    <div className="c-container pt-6 z-[9999] flex justify-between items-center py-4 absolute top-3 left-1/2 -translate-x-1/2">
      <LocaleLink className="max-md:hidden outline-none" href="/">
        <Img src="/logo.png" className="w-32 object-contain" />
      </LocaleLink>

      <div className="flex items-center w-fit bg-sky-400 rounded-md">
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-2 bg-sky-500 hover:bg-sky-600 rounded-l-md cursor-pointer transition-colors duration-200"
          >
            <p className="text-white font-medium">{selectedLanguage.label}</p>
            <IoArrowDownOutline
              className={`text-white transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isOpen && (
            <div className="absolute top-full left-0 mt-1 w-full min-w-[120px] bg-gray-600 text-white rounded-md shadow-lg overflow-hidden z-10">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer transition-colors duration-150"
                  onClick={() => handleChangeLanguage(lang)}
                >
                  <p>{lang.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <a
          href="https://mostaql.com/u/ahmedve99/portfolio"
          className="block hover:bg-sky-600 duration-300 outline-none border-none px-4 py-2 rounded-r-md text-white bg-sky-700"
        >
          {contactMe}
        </a>
      </div>
    </div>
  );
}
