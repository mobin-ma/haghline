"use client";
import Image from "next/image";
import React from "react";
import lawyerImg from "@/public/images/lawyer.jpg";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setMode } from "@/store/authSlice";
import * as motion from "motion/react-client";

export default function Hero() {
  const dispatch = useDispatch();
  return (
    <motion.div
      className="w-full min-h-screen flex flex-col justify-center items-center gap-5 mb-5 md:pt-24"
      id="hero"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="w-4/5 text-2xl md:text-5xl text-center font-bold border-b-2 pb-3 mb-3 md:pb-10 md:mb-10">
        دسترسی سریع به وکیل مورد نیاز
      </h2>
      <p className="w-4/5 text-sm md:text-lg text-center">
        حق لاین به شما کمک می‌کند تا بدون دغدغه و در کمترین زمان، وکیل مناسب
        پیدا کنید و پرونده خود را مدیریت کنید
      </p>
      <Link
        href="/authpage"
        onClick={() => dispatch(setMode("login"))}
        className="bg-zinc-800 dark:bg-amber-500 text-white font-bold text-sm md:text-base p-2 md:p-3 border border-gray-800 dark:border-zinc-900 shadow-2xl shadow-gray-500/50 dark:shadow-gray-500/20 cursor-pointer rounded-3xl transition-colors hover:bg-white dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white"
      >
        ثبت پرونده
      </Link>
      <Image
        src={lawyerImg}
        alt="lawyer-img"
        width={506.6}
        height={337.7}
        className="rounded-bl-3xl rounded-tr-3xl p-2 md:p-0"
      />
    </motion.div>
  );
}
