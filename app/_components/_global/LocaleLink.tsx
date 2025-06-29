"use client";
import { useVariables } from "@/app/context/VariablesContext";
import Link from "next/link";
import React, { ReactNode } from "react";

interface LocaleLinkProps {
  children: ReactNode;
  className?: string;
  href: string;
  target?: string;
}

export default function LocaleLink({
  children,
  className,
  href,
  target,
}: LocaleLinkProps) {
  const { locale } = useVariables();
  const formattedHref = `/${locale}/${href}`.replace(/\/+/g, "/");
  return (
    <Link target={target} href={formattedHref} className={className}>
      {children}
    </Link>
  );
}
