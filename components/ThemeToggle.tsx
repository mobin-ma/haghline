"use client";

import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

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
          className="p-2 cursor-pointer rounded-md border dark:border-gray-600 border-gray-300 dark:bg-gray-800 bg-gray-100 dark:text-white text-black"
        >
          🌞 Light
        </motion.button>
      )}

      {theme === "dark" &&(
        <motion.button
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          onClick={toggleTheme}
          className="p-2 cursor-pointer rounded-md border dark:border-gray-600 border-gray-300 dark:bg-gray-800 bg-gray-100 dark:text-white text-black"
        >
          🌙 Dark
        </motion.button>
      )}
    </>
  );
}
