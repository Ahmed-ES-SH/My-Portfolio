"use client";

import React, { useEffect, useState, useRef } from "react";
import Img from "./Img";
import LocaleLink from "./LocaleLink";
import { useRouter } from "next/navigation";
import { IoArrowDownOutline, IoLogoWhatsapp, IoMail } from "react-icons/io5";
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

  const handleGmailme = () => {
    window.open("mailto:ahmedismaildev6@gmail.com");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/201017539419", "_blank");
  };

  return (
    <div className="c-container pt-6 z-9999 flex justify-between items-center py-4 absolute top-3 left-1/2 -translate-x-1/2">
      <LocaleLink className="max-md:hidden outline-none" href="/">
        <Img src="/logo.png" className="w-32 object-contain" />
      </LocaleLink>

      <div className="flex items-center w-fit h-[50px] rounded-md">
        <div className="relative h-full" ref={dropdownRef}>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 h-full bg-sky-500 hover:bg-sky-600 rounded-l-md cursor-pointer transition-colors duration-200"
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
        <button
          onClick={handleGmailme}
          className="flex items-center gap-2 hover:bg-red-600 duration-300 outline-none border-none hover:scale hover:-translate-y-2 px-4 h-full text-white bg-red-500"
          title="Gmail"
        >
          <IoMail className="text-lg" />
        </button>
        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-2 hover:bg-green-600 duration-300 outline-none border-none hover:scale hover:-translate-y-2 px-4 h-full rounded-r-md text-white bg-green-500"
          title="WhatsApp"
        >
          <IoLogoWhatsapp className="text-lg" />
        </button>
      </div>
    </div>
  );
}
