"use client";

import { createContext, ReactNode, useState } from "react";

type ThemeContextType = {
  mode: "light" | "dark";
  toggleMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeContextType["mode"]>("dark");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeContextValue: ThemeContextType = {
    mode,
    toggleMode,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
