"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import ThemeToggle from "./ThemeToggle";
import Logout from "./Logout";
import { CiHome, CiSettings, CiFileOn, CiUser } from "react-icons/ci";
import {
  FaGavel,
  FaComments,
  FaChartBar,
  FaBalanceScale,
} from "react-icons/fa";

export default function MenuToggle() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  const menuItems = [
    { icon: CiHome, label: "خانه", href: "/dashboard", active: true },
    { icon: FaGavel, label: "وکلای من", href: "/dashboard/lawyers" },
    { icon: FaComments, label: "پیام‌ها", href: "/dashboard/messages" },
    { icon: CiFileOn, label: "پرونده‌ها", href: "/dashboard/cases" },
    { icon: FaChartBar, label: "گزارشات", href: "/dashboard/reports" },
    { icon: CiSettings, label: "تنظیمات", href: "/dashboard/settings" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
        onClick={() => setMenuToggle((prev) => !prev)}
      >
        <CiMenuBurger className="text-xl" />
      </button>

      <AnimatePresence>
        {menuToggle && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 min-h-screen bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMenuToggle(false)}
            />

            {/* Mobile Sidebar */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.3,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="fixed top-0 left-0 w-80 min-h-full bg-white/85 dark:bg-zinc-800/85 backdrop-blur-xl border-r border-slate-200/50 dark:border-zinc-700/50 shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-200/50 dark:border-zinc-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <FaBalanceScale className="text-white text-lg" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                        حق‌لاین
                      </h1>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        داشبورد کاربری
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMenuToggle(false)}
                    className="p-2 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    <IoMdClose className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Navigation Menu */}
              <nav className="p-4">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        onClick={() => setMenuToggle(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                          item.active
                            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-700 hover:text-amber-600 dark:hover:text-amber-400"
                        }`}
                      >
                        <item.icon
                          className={`text-lg ${
                            item.active
                              ? "text-white"
                              : "text-slate-500 dark:text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400"
                          }`}
                        />
                        <span className="font-medium">{item.label}</span>
                        {item.active && (
                          <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* User Section */}
              <div className="p-4 border-t border-slate-200/50 dark:border-zinc-700/50">
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-zinc-700/50 rounded-xl mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <CiUser className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      کاربر عزیز
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      آنلاین
                    </p>
                  </div>
                  <ThemeToggle />
                </div>
                <Logout />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
