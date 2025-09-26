"use client";
import { useState, useEffect } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import * as motion from "motion/react-client";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import logoDark from "@/public/images/logo-dark.png";
import { useAppDispatch } from "@/hooks/useAppDispatch ";
import Link from "next/link";
import { setMode } from "@/store/authSlice";

interface HeaderProps {
  welcomeRef: React.RefObject<HTMLDivElement | null>;
}

const sections = [
  { id: "#hero", label: "خانه" },
  { id: "#features", label: "ویژگی ها" },
  { id: "#works", label: "رهنما" },
  { id: "#showcase", label: "ویترین" },
  { id: "#testimonials", label: "گواهینامه ها" },
  { id: "#CTA", label: "شروع به کار" },
];

export default function Header({ welcomeRef }: HeaderProps) {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [active, setActive] = useState("#hero");
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const welcomeBottom = welcomeRef.current?.getBoundingClientRect().bottom;
      if (welcomeBottom !== undefined) {
        setIsSticky(welcomeBottom <= 0);
      }

      sections.forEach(({ id }) => {
        const el = document.querySelector(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top <= 100 && top >= -el.clientHeight + 100) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [welcomeRef]);

  return (
    <div
      className={`
       w-full flex justify-between items-center px-8 py-4 transition-all duration-300 gap-10
      ${
        isSticky
          ? "fixed top-0 left-0 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-xl shadow-lg shadow-zinc-900/10 z-50 border-b border-zinc-200/50 dark:border-zinc-700/50"
          : "relative bg-transparent"
      }
    `}
    >
      <div className="w-[20%]">
        <a
          href="#welcome"
          className="dark:hidden cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src={logo}
            alt="Logo"
            width={1500}
            height={755}
            className="md:w-3/5"
          />
        </a>
        <a
          href="#welcome"
          className="hidden dark:block cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src={logoDark}
            alt="Logo"
            width={1500}
            height={755}
            className="md:w-3/5"
          />
        </a>
      </div>
      <nav className="w-[55%] hidden md:block">
        <ul className="w-full flex justify-between items-center font-bold">
          {sections.map((sec, i) => (
            <li key={i}>
              <motion.button
                onClick={() => scrollTo(sec.id, 1.2)}
                className="w-full relative px-4 py-2 transition-all cursor-pointer text-sm lg:text-base rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className={`w-full transition-colors font-medium ${
                    active === sec.id
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  {sec.label}
                </span>
                {active === sec.id && (
                  <motion.span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-[25%] hidden md:flex justify-between items-center pr-5 gap-3">
        <Link
          href={"/authpage"}
          onClick={() => dispatch(setMode("login"))}
          className="group relative px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">ورود</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
        <Link
          href={"/authpage"}
          onClick={() => dispatch(setMode("signup"))}
          className="px-4 py-2 border-2 border-amber-500 text-amber-600 dark:text-amber-400 text-sm font-bold rounded-xl hover:bg-amber-500 hover:text-white transition-all duration-300 hover:scale-105"
        >
          ثبت نام
        </Link>
        <ThemeToggle />
      </div>
      <button
        className="md:hidden z-50"
        onClick={() => setMenuToggle((prev) => !prev)}
      >
        <GiHamburgerMenu />
      </button>
      <AnimatePresence>
        {menuToggle && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black dark:bg-white z-40 md:hidden"
              onClick={() => setMenuToggle(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 h-full bg-white/95 dark:bg-zinc-800/95 backdrop-blur-xl shadow-2xl p-6 flex flex-col gap-6 z-50 md:hidden border-l border-zinc-200/50 dark:border-zinc-700/50"
            >
              <ul className="flex flex-col gap-4 font-bold">
                <span className="w-full flex justify-between items-center">
                  <ThemeToggle />
                  <IoMdClose onClick={() => setMenuToggle(false)} />
                </span>
                <div className="flex justify-center items-center gap-4">
                  <Link
                    href={"/authpage"}
                    onClick={() => dispatch(setMode("login"))}
                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    ورود
                  </Link>
                  <Link
                    href={"/authpage"}
                    onClick={() => dispatch(setMode("signup"))}
                    className="px-4 py-2 border-2 border-amber-500 text-amber-600 dark:text-amber-400 text-sm font-bold rounded-xl hover:bg-amber-500 hover:text-white transition-all duration-300"
                  >
                    ثبت نام
                  </Link>
                </div>
                {sections.map((sec, i) => (
                  <li key={i}>
                    <button
                      onClick={() => {
                        scrollTo(sec.id, 1.2);
                        setMenuToggle(false);
                      }}
                      className={`text-lg px-4 py-2 rounded-lg transition-all ${
                        active === sec.id
                          ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20"
                          : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700/50"
                      }`}
                    >
                      {sec.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
