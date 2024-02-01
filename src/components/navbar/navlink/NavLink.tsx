"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

type LinkProps = {
  title: string;
  path: string;
};

export const NavLink = ({ title, path }: LinkProps) => {
  const pathname = usePathname();
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const { mode } = themeContext;

  return (
    <div
      className={`text-lg lg:text-xl font-normal leading-6 ${
        pathname === path && mode === "light"
          ? "border-b-2 border-slate-900"
          : pathname === path && mode === "dark"
          ? "border-b-2 border-slate-100"
          : ""
      }`}
    >
      <Link href={path}>{title}</Link>
    </div>
  );
};
