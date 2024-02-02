"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";

export const ArrowUpRight = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { mode } = themeContext;
  return (
    <>
      {mode === "dark" ? (
        <Image
          src="/assets/arrow-up-right-white.svg"
          alt="arrow-up-right"
          width={24}
          height={24}
        />
      ) : (
        <Image
          src="/assets/arrow-up-right.svg"
          alt="arrow-up-right"
          width={24}
          height={24}
        />
      )}
    </>
  );
};
