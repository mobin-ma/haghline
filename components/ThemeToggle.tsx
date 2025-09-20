"use client";

import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      {theme === "light" && (
        <motion.button
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          onClick={toggleTheme}
          className="p-2 cursor-pointer rounded-lg bg-gray-200 shadow-lg shadow-zinc-900/30"
        >
          🌞
        </motion.button>
      )}

      {theme === "dark" &&(
        <motion.button
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          onClick={toggleTheme}
          className="p-2 cursor-pointer rounded-lg bg-zinc-900 shadow-lg shadow-zinc-950/30"
        >
          🌙
        </motion.button>
      )}
    </>
  );
}
