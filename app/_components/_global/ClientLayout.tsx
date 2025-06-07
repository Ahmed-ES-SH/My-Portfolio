"use client";
import VariablesProvider from "@/app/context/VariablesContext";
import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
}

export default function ClientLayout({ children }: props) {
  return <VariablesProvider>{children}</VariablesProvider>;
}
