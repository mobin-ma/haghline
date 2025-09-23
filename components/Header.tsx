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
import { useAppDispatch } from "@/hooks/useAppDispatch";
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
          ? "fixed top-0 left-0 bg-white dark:bg-zinc-800 shadow-lg shadow-zinc-900/20 z-50"
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
                className="w-full relative px-2 py-1 transition-all cursor-pointer text-sm lg:text-base hover:text-2xl"
              >
                <span
                  className={`w-full transition-colors ${
                    active === sec.id
                      ? "text-zinc-900 dark:text-amber-500"
                      : "text-zinc-500 dark:text-zinc-100"
                  }`}
                >
                  {sec.label}
                </span>
                {active === sec.id && (
                  <motion.span className="absolute left-0 bottom-0 w-full h-1 bg-zinc-900 dark:bg-amber-500 rounded" />
                )}
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-[25%] hidden md:flex justify-between items-center border-r-2 border-gray-300 dark:border-amber-500 pr-5 gap-2">
        <Link
          href={"/authpage"}
          onClick={() => dispatch(setMode("login"))}
          className="bg-zinc-900 dark:bg-amber-500 text-white text-sm lg:text-lg w-16 h-8 lg:w-20 lg:h-10 font-bold rounded-lg border-2 border-zinc-900 dark:border-amber-500 hover:bg-transparent hover:text-zinc-900 dark:hover:text-amber-500 transition-colors cursor-pointer flex justify-center items-center"
        >
          ورود
        </Link>
        <Link
          href={"/authpage"}
          onClick={() => dispatch(setMode("signup"))}
          className="bg-transparent text-zinc-900 dark:text-amber-500 text-sm lg:text-lg w-16 h-8 lg:w-20 lg:h-10 font-bold rounded-lg border-2 border-zinc-900 dark:border-amber-500 hover:bg-zinc-900 dark:hover:bg-amber-500 hover:text-white transition-colors cursor-pointer flex justify-center items-center"
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
              className="fixed top-0 right-0 w-3/4 h-full bg-white dark: dark:bg-zinc-800 shadow-lg p-6 flex flex-col gap-6 z-50 md:hidden"
            >
              <ul className="flex flex-col gap-4 font-bold">
                <span className="w-full flex justify-between items-center">
                  <ThemeToggle />
                  <IoMdClose onClick={() => setMenuToggle(false)} />
                </span>
                <div className="flex justify-center items-center gap-5">
                  <Link
                    href={"/authpage"}
                    onClick={() => dispatch(setMode("login"))}
                    className="bg-zinc-900 dark:bg-amber-500 text-white text-sm w-16 h-8 font-bold rounded-lg border-2 border-zinc-900 dark:border-amber-500 hover:bg-transparent hover:text-zinc-900 dark:hover:text-amber-500 transition-colors cursor-pointer flex justify-center items-center"
                  >
                    ورود
                  </Link>
                  <Link
                    href={"/authpage"}
                    onClick={() => dispatch(setMode("signup"))}
                    className="bg-transparent text-zinc-900 dark:text-amber-500 text-sm w-16 h-8 font-bold rounded-lg border-2 border-zinc-900 dark:border-amber-500 hover:bg-zinc-900 dark:hover:bg-amber-500 hover:text-white transition-colors cursor-pointer flex justify-center items-center"
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
                      className={`text-lg ${
                        active === sec.id
                          ? "text-zinc-900 dark:text-amber-600"
                          : "text-zinc-500 dark:text-white"
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
