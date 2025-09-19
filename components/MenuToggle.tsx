"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import ThemeToggle from "./ThemeToggle";
import Logout from "./Logout";

export default function MenuToggle() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (
    <>
      <button
        className="md:hidden z-50"
        onClick={() => setMenuToggle((prev) => !prev)}
      >
        {menuToggle ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>
      <AnimatePresence>
        {menuToggle && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setMenuToggle(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 h-full bg-zinc-800 dark:bg-amber-500 text-white dark:text-zinc-900 p-5 z-50"
            >
              <IoMdClose onClick={() => setMenuToggle(false)} className="text-left" />
              <h2 className="text-xl font-bold mb-4 text-zinc-900">
                منوی داشبورد
              </h2>
              <ul className="space-y-2">
                <li>پروفایل</li>
                <li>تنظیمات</li>
                <li>گزارش‌ها</li>
              </ul>
              <Logout />
              <ThemeToggle />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
