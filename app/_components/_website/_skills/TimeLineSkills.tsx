"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { directionMap, skills } from "@/app/constants/content";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Img from "../../_global/Img";

const icon_style_time_line = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  background: "rgb(233, 30, 99)",
  color: "#fff",
};

export default function SkillsComponent() {
  const { locale } = useVariables();
  const { skillsPage } = getTranslations(locale);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="Time_line_skills relative min-h-screen mt-32">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <motion.div
          className="absolute xl:w-96 w-60 xl:h-96 h-60 bg-blue-500 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          style={{
            left: "10%",
            top: "20%",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-purple-500 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * -0.015,
          }}
          style={{
            right: "10%",
            bottom: "20%",
          }}
        />
      </div>
      <h1 className="p-2 ml-[10%] w-fit bg-gray-600 text-white rounded-md mr-auto">
        {skillsPage.title}
      </h1>
      <h1 className="font-bold text-green-500 text-[32px] mt-3  max-lg:text-[22px] mr-auto ml-[12%] w-fit">
        {skillsPage.secend_title}
      </h1>
      <VerticalTimeline>
        {skills.map((skill, key) => (
          <VerticalTimelineElement
            key={key}
            className="vertical-timeline-element"
            contentStyle={{
              background: skill.bg_color,
              color: "#fff",
              zIndex: "999",
            }}
            contentArrowStyle={{
              borderRight: "7px solid ",
              borderRightColor: skill.bg_color,
            }}
            iconStyle={icon_style_time_line}
            icon={
              <Img
                className="z-[50] relative block"
                src={skill.icon}
                alt={skill.title[locale]}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              {skill.title[locale]}
            </h3>
            <p dir={directionMap[locale]}>{skill.desc[locale]}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
