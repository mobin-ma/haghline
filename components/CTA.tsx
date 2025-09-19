"use client";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { setMode } from "@/store/authSlice";
import * as motion from "motion/react-client";

export default function CTA() {
  const dispatch = useDispatch();
  return (
    <motion.div
      className="w-full flex flex-col justify-center items-center gap-6 mb-24 pt-14 md:mb-50 md:pt-28"
      id="CTA"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="w-4/5 md:w-3/4 text-2xl md:text-4xl text-center font-bold px-6 md:px-0">
        با یک کلیک ساده، مسیر دسترسی به خدمات حقوقی سریع و مطمئن را آغاز کنید.
        همین حالا اقدام کنید و پرونده خود را به‌صورت آنلاین ثبت نمایید
      </h3>
      <Link
        href="/authpage"
        onClick={() => dispatch(setMode("login"))}
        className="border-2 border-zinc-900 dark:border-amber-500 text-sm md:text-base p-2 md:p-3 rounded-4xl font-bold transition-colors hover:bg-zinc-900 dark:hover:bg-amber-500 hover:text-white cursor-pointer"
      >
        بزن بریم!
      </Link>
    </motion.div>
  );
}
