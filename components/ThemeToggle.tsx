"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) {
    return (
      <div className="w-12 h-6 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
      aria-label="تغییر تم"
    >
      <motion.div
        className="absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-slate-900 rounded-full shadow-lg flex items-center justify-center z-10"
        animate={{
          x: theme === "dark" ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          className="flex items-center justify-center w-full h-full"
          animate={{
            rotate: theme === "dark" ? 180 : 0,
            scale: theme === "dark" ? 0.8 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {theme === "light" ? (
            <FaSun className="text-amber-500 text-xs" />
          ) : (
            <FaMoon className="text-blue-400 text-xs" />
          )}
        </motion.div>
      </motion.div>

      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 rounded-full z-0"
        animate={{
          background:
            theme === "dark"
              ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
              : "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
        }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
}
