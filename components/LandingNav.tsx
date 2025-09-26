"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setMode } from "@/store/authSlice";
import {
  FaArrowUp,
  FaUser,
  FaUserPlus,
  FaHome,
  FaStar,
  FaCogs,
  FaUsers,
  FaComments,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";

export default function LandingNav() {
  const dispatch = useDispatch();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // Back to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#welcome", label: "خانه", icon: FaHome, color: "text-blue-500" },
    {
      href: "#features",
      label: "ویژگی‌ها",
      icon: FaStar,
      color: "text-purple-500",
    },
    {
      href: "#works",
      label: "نحوه کار",
      icon: FaCogs,
      color: "text-green-500",
    },
    {
      href: "#showcase",
      label: "وکلا",
      icon: FaUsers,
      color: "text-orange-500",
    },
    {
      href: "#testimonials",
      label: "نظرات",
      icon: FaComments,
      color: "text-pink-500",
    },
  ];

  return (
    <>
      {/*Bottom Navigation for Mobile*/}
      <div className={`block md:hidden fixed ${showNav ? "left-64" : "left-6"} top-1/2 transform -translate-1/2 z-50`}>
        {
          showNav ?
          (
            <FaChevronLeft
            onClick={() => setShowNav(false)}
             className="bg-gray-500/30 dark:bg-zinc-900/30 backdrop-blur text-3xl w-10 h-10 text-white rounded-lg p-2 border border-white/40 dark:border-zinc-800/40" />
          ) :
          (
            <FaChevronRight
            onClick={() => setShowNav(true)}
             className="bg-gray-500/30 dark:bg-zinc-900/30 backdrop-blur text-3xl w-10 h-10 text-white rounded-lg p-2 border border-white/40 dark:border-zinc-800/40" />
          )
        }
      </div>
      {/* Bottom Glass Navigation */}
      <motion.nav
        className={`fixed ${showNav ? "left-4" :"-left-96"} top-1/2 transform -translate-y-1/2 md:-translate-y-full md:top-full md:left-1/2 md:transform md:-translate-x-1/2 z-50`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="bg-white/30 dark:bg-zinc-900/30 backdrop-blur border border-white/40 dark:border-zinc-700/40 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30">
          <div className="px-6 py-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-x-1 space-x-reverse">
              {/* Navigation Links */}
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="group flex flex-col items-center space-y-1 px-4 py-3 rounded-xl hover:bg-white/20 dark:hover:bg-zinc-800/20 transition-all duration-300 min-w-[80px]"
                    >
                      <motion.div
                        className={`text-2xl ${item.color} group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent />
                      </motion.div>
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Divider */}
              <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-slate-300 dark:via-zinc-600 to-transparent mx-2" />

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center space-y-1 px-4 py-3"
              >
                <ThemeToggle />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  تم
                </span>
              </motion.div>

              {/* Divider */}
              <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-slate-300 dark:via-zinc-600 to-transparent mx-2" />

              {/* Auth Buttons */}
              <motion.div
                className="flex items-center space-x-2 space-x-reverse"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {/* Login Button */}
                <Link
                  href="/authpage"
                  onClick={() => dispatch(setMode("login"))}
                  className="group flex flex-col items-center space-y-1 px-4 py-3 rounded-xl hover:bg-blue-500/20 transition-all duration-300 min-w-[80px]"
                >
                  <motion.div
                    className="text-2xl text-blue-500 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaUser />
                  </motion.div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    ورود
                  </span>
                </Link>

                {/* Signup Button */}
                <Link
                  href="/authpage"
                  onClick={() => dispatch(setMode("signup"))}
                  className="group flex flex-col items-center space-y-1 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 transition-all duration-300 min-w-[80px]"
                >
                  <motion.div
                    className="text-2xl text-amber-500 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaUserPlus />
                  </motion.div>
                  <span className="text-xs font-medium text-amber-700 dark:text-amber-300 group-hover:text-amber-800 dark:group-hover:text-amber-200 transition-colors duration-300">
                    ثبت نام
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
