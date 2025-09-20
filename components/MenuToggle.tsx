"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import ThemeToggle from "./ThemeToggle";
import Logout from "./Logout";
import { CiFileOn, CiHome, CiSettings } from "react-icons/ci";

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
              className="fixed inset-0 h-screen bg-black dark:bg-white z-40 md:hidden"
              onClick={() => setMenuToggle(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 min-h-screen bg-zinc-800 dark:bg-amber-500 text-white dark:text-zinc-900 p-5 z-50 flex flex-col justify-around items-start"
            >
              <div className="w-full flex justify-between items-center">
                <ThemeToggle />
                <IoMdClose
                  onClick={() => setMenuToggle(false)}
                  className="text-left"
                />
              </div>
              <ul className="w-full h-full flex flex-col justify-center items-start gap-5 ">
                <li className="flex justify-start items-center gap-3 hover:text-zinc-400 dark:hover:text-amber-700 hover:text-3xl transition-all cursor-pointer">
                  <CiHome className="text-base md:text-4xl" />
                  <p className="transition-all duration-300">خانه</p>
                </li>
                <li className="flex justify-start items-center gap-3 hover:text-zinc-400 dark:hover:text-amber-700 hover:text-3xl transition-all cursor-pointer">
                  <CiSettings className="text-base md:text-4xl" />
                  <p className="transition-all duration-300">تنظیمات</p>
                </li>
                <li className="flex justify-start items-center gap-3 hover:text-zinc-400 dark:hover:text-amber-700 hover:text-3xl transition-all cursor-pointer">
                  <CiFileOn className="text-base md:text-4xl" />
                  <p className="transition-all duration-300">گزارشات</p>
                </li>
              </ul>
              <div className="w-full">
                <Logout />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
