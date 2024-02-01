"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

type TogleType = {
  toggleType: "md" | "lg";
  bg?: string;
};

export const DarkToggle = ({ toggleType, bg }: TogleType) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { toggleMode, mode } = themeContext;

  return (
    <>
      {toggleType === "md" ? (
        <div
          className="flex gap-4 relative py-1 px-2 rounded-3xl bg-white"
          onClick={toggleMode}
        >
          <div
            className={`bg-Midnight-Blue w-6 h-6 border-black rounded-full absolute ${
              mode === "dark" ? "left-[7px]" : "right-[6px]"
            }`}
          />
          <Image
            src="/assets/sun-dark.svg"
            width={24}
            height={24}
            alt="change color"
          />
          <Image
            src="/assets/moon.svg"
            width={24}
            height={24}
            alt="change color"
          />
        </div>
      ) : (
        <div
          className={`${
            mode === "dark" ? "bg-blue-900" : "bg-Midnight-Blue"
          } flex gap-4 py-2 px-4 rounded-3xl relative transition-all duration-1000 ease-in-out`}
          onClick={toggleMode}
        >
          <Image
            src="/assets/sun.svg"
            width={24}
            height={24}
            alt="change color"
          />
          <Image
            src="/assets/moon-white.svg"
            width={24}
            height={24}
            alt="change color"
          />
          <div
            className={`bg-white w-6 h-6 border-black rounded-full absolute ${
              mode === "dark" ? "left-[17px]" : "right-[16px]"
            }`}
          />
        </div>
      )}
    </>
  );
};
