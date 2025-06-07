"use client";
import { useVariables } from "@/app/context/VariablesContext";
import Link from "next/link";
import React, { ReactNode } from "react";

interface LocaleLinkProps {
  children: ReactNode;
  className?: string;
  href: string;
}

export default function LocaleLink({
  children,
  className,
  href,
}: LocaleLinkProps) {
  const { locale } = useVariables();
  const formattedHref = `/${locale}/${href}`.replace(/\/+/g, "/");
  return (
    <Link href={formattedHref} className={className}>
      {children}
    </Link>
  );
}
