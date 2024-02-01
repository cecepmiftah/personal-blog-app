"use client";
import React, { useContext, useState } from "react";
import { links } from "../links/Links";
import Link from "next/link";
import Image from "next/image";
import { DarkToggle } from "../darkToggle/DarkToggle";
import { usePathname } from "next/navigation";
import { ThemeContext } from "@/context/ThemeContext";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const { mode } = themeContext;

  return (
    <nav className="">
      <button onClick={() => setOpen((prev) => !prev)}>
        {mode === "light" ? (
          <Image
            src="/assets/menu-outline.svg"
            width={32}
            height={32}
            alt="dropdown button"
          />
        ) : (
          <Image
            src="/assets/menu-white.svg"
            width={32}
            height={32}
            alt="dropdown button"
          />
        )}
      </button>
      {open && (
        <div
          className={`absolute right-0 top-0 w-1/2 bg-Midnight-Blue text-white ${
            mode === "dark" && "bg-black"
          }`}
        >
          <div className="h-screen flex flex-col items-center justify-center gap-16">
            <h1 className="font-semibold text-lg lg:text-xl leading-6">
              Cecep M
            </h1>
            <div className="flex flex-col items-center gap-9">
              {links.map((link) => (
                <Link
                  href={link.path}
                  key={link.title}
                  className={`text-lg font-normal ${
                    pathname === link.path && "border-b-2 border-slate-100"
                  }`}
                >
                  {link.title}
                </Link>
              ))}
              <DarkToggle toggleType="lg" bg="bg-blue-900" />
            </div>
            <Image
              src="/assets/close.svg"
              width={40}
              height={40}
              alt="close button"
              onClick={() => setOpen(false)}
              className="cursor-pointer w-9"
            />
          </div>
        </div>
      )}
    </nav>
  );
};
