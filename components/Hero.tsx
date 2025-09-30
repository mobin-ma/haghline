"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import lawyerImg from "@/public/images/lawyer.jpg";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setMode } from "@/store/authSlice";
import * as motion from "motion/react-client";
import {
  FaGavel,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaBalanceScale,
  FaBookOpen,
  FaStar,
} from "react-icons/fa";

export default function Hero() {
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    { icon: <FaGavel className="text-2xl" />, text: "وکلای متخصص" },
    { icon: <FaShieldAlt className="text-2xl" />, text: "امنیت بالا" },
    { icon: <FaClock className="text-2xl" />, text: "دسترسی 24/7" },
    { icon: <FaUsers className="text-2xl" />, text: "مشاوره آنلاین" },
  ];

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrolled = window.pageYOffset;
      const parallaxElements =
        containerRef.current.querySelectorAll(".parallax-layer");

      parallaxElements.forEach((element, index) => {
        const speed = 0.4 + index * 0.1;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="parallax-container relative w-full min-h-[70vh] overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/20 dark:bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative w-full min-h-[70vh] flex flex-col justify-center items-center gap-8 px-4 py-12"
        id="hero"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Main Content */}
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
          <motion.div
            className="space-y-8 text-center lg:text-right"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-6xl text-center font-bold bg-gradient-to-r from-zinc-900 via-blue-800 to-amber-600 dark:from-white dark:via-blue-200 dark:to-amber-300 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                دسترسی سریع به
                <span className="block text-amber-600 dark:text-amber-400">
                  وکیل مورد نیاز
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-center text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                حق لاین به شما کمک می‌کند تا بدون دغدغه و در کمترین زمان، وکیل
                مناسب پیدا کنید و پرونده خود را مدیریت کنید
              </motion.p>
            </div>

            {/* Feature Icons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-zinc-200/50 dark:border-zinc-700/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-amber-600 dark:text-amber-400">
                    {feature.icon}
                  </span>
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="/authpage"
                onClick={() => dispatch(setMode("login"))}
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">شروع کنید</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="/authpage"
                onClick={() => dispatch(setMode("signup"))}
                className="px-8 py-4 border-2 border-amber-500 text-amber-600 dark:text-amber-400 font-bold text-lg rounded-2xl hover:bg-amber-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                ثبت نام
              </Link>
            </motion.div>

            <Image
              src={lawyerImg}
              alt="lawyer-img"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl border-4 border-white/50 dark:border-zinc-700/50"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
