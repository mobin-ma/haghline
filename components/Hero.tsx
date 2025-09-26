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
      className="parallax-container relative w-full min-h-screen overflow-hidden"
    >
      {/* Parallax Background Layers */}
      <div className="parallax-bg parallax-layer-1 absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-amber-900/20" />

      {/* Legal Icons Parallax Layer */}
      <div className="parallax-layer-2 absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-1/4 left-1/4 text-blue-400/10 dark:text-blue-300/10">
          <FaBalanceScale className="text-8xl" />
        </div>
        <div className="floating-element-reverse absolute bottom-1/4 right-1/4 text-amber-400/10 dark:text-amber-300/10">
          <FaBookOpen className="text-10xl" />
        </div>
        <div className="drifting-element absolute top-1/2 right-1/3 text-green-400/10 dark:text-green-300/10">
          <FaStar className="text-6xl" />
        </div>
      </div>

      {/* Floating Elements Parallax Layer */}
      <div className="parallax-layer-3 absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 dark:bg-blue-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-amber-200/30 dark:bg-amber-400/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-24 h-24 bg-green-200/30 dark:bg-green-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -15, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="relative w-full min-h-screen flex flex-col justify-center items-center gap-8 px-4 py-20"
        id="hero"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-8 text-center lg:text-right"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-zinc-900 via-blue-800 to-amber-600 dark:from-white dark:via-blue-200 dark:to-amber-300 bg-clip-text text-transparent leading-tight"
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
                className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20 blur-xl" />

              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={lawyerImg}
                  alt="lawyer-img"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl border-4 border-white/50 dark:border-zinc-700/50"
                />
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                className="absolute top-8 -left-8 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                    500+
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    وکیل متخصص
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 -right-8 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    24/7
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    پشتیبانی
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
