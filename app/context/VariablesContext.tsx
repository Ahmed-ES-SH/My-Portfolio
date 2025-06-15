"use client";
import { useParams } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface VariablesType {
  width: number;
  locale: "en" | "ar";
}

interface props {
  children: ReactNode;
}

const Variables = createContext<VariablesType | null>(null);

export default function VariablesProvider({ children }: props) {
  const params = useParams();
  const locale = params?.locale as "en" | "ar";
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(innerWidth);

    addEventListener("resize", () => {
      setWidth(innerWidth);
    });
  }, []);

  return (
    <Variables.Provider value={{ width, locale }}>
      {children}
    </Variables.Provider>
  );
}

export const useVariables = () => {
  const context = useContext(Variables);

  if (!context) {
    throw new Error("useVariables must be used within a VariablesProvider");
  }

  return context;
};
