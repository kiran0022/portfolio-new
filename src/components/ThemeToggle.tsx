"use client";
import { MoonIcon, Sun, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="mr-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="absolute scale-0 transition-all duration-500  rotate-90 dark:scale-100 dark:rotate-0 " />
      <MoonIcon className="scale-100 transition-all duration-500 rotate-0 dark:-rotate-90 dark:scale-0 " />
    </button>
  );
}
