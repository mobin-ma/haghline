"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "@/store/authSlice";
import * as motion from "motion/react-client";
import {
  FaRocket,
  FaArrowRight,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaStar,
  FaGavel,
} from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";

export default function CTA() {
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "امنیت تضمینی",
      description: "اطلاعات شما کاملاً محفوظ است",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "دسترسی 24/7",
      description: "در هر زمان و مکان",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "وکلای متخصص",
      description: "بیش از 500 وکیل حرفه‌ای",
    },
  ];

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrolled = window.pageYOffset;
      const parallaxElements =
        containerRef.current.querySelectorAll(".parallax-layer");

      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1;
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
      className="parallax-container relative w-full py-12 overflow-hidden"
      id="CTA"
    >
      {/* Parallax Background Layers */}
      <div className="parallax-bg parallax-layer-1 absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-blue-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-blue-900/20" />

      {/* Floating Parallax Elements */}
      <div className="parallax-layer-2 absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl" />
        <div className="floating-element-reverse absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 dark:bg-amber-400/10 rounded-full blur-3xl" />
        <div className="drifting-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-200/20 dark:bg-green-400/10 rounded-full blur-3xl" />

        {/* Additional floating elements */}
        <div className="pulsing-element absolute top-32 right-32 w-4 h-4 bg-amber-400 rounded-full" />
        <div
          className="floating-element absolute bottom-32 left-32 w-6 h-6 bg-blue-400 rounded-full"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="drifting-element absolute top-1/3 right-1/4 w-3 h-3 bg-green-400 rounded-full"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Legal Icons Parallax Layer */}
      <div className="parallax-layer-3 absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-1/4 left-1/4 text-amber-400/20 dark:text-amber-300/20">
          <FaGavel className="text-6xl" />
        </div>
        <div className="floating-element-reverse absolute bottom-1/4 right-1/4 text-blue-400/20 dark:text-blue-300/20">
          <FaScaleBalanced className="text-8xl" />
        </div>
        <div className="drifting-element absolute top-1/2 right-1/3 text-green-400/20 dark:text-green-300/20">
          <FaStar className="text-5xl" />
        </div>
      </div>

      <div className="parallax-content relative z-10 max-w-6xl mx-auto px-4">
        {/* Main CTA Section */}
        <motion.div
          className="relative bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Parallax Background Pattern */}
          <div className="parallax-layer-1 absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-amber-500/20" />
          </div>

          {/* Floating Background Elements */}
          <div className="parallax-layer-2 absolute inset-0 overflow-hidden">
            <div className="floating-element absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-60" />
            <div className="floating-element-reverse absolute bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-full opacity-60" />
            <div className="drifting-element absolute top-1/2 right-8 w-1 h-1 bg-green-400 rounded-full opacity-60" />
          </div>

          <div className="relative z-10 p-8 md:p-16 text-center">
            {/* Rocket Icon */}
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <FaRocket className="text-3xl" />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-zinc-900 via-blue-800 to-amber-600 dark:from-white dark:via-blue-200 dark:to-amber-300 bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              آماده شروع هستید؟
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              با یک کلیک ساده، مسیر دسترسی به خدمات حقوقی سریع و مطمئن را آغاز
              کنید. همین حالا اقدام کنید و پرونده خود را به‌صورت آنلاین ثبت
              نمایید
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href="/authpage"
                onClick={() => dispatch(setMode("login"))}
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  بزن بریم!
                  <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="/authpage"
                onClick={() => dispatch(setMode("signup"))}
                className="px-8 py-4 border-2 border-amber-500 text-amber-600 dark:text-amber-400 font-bold text-lg rounded-2xl hover:bg-amber-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                ثبت نام رایگان
              </Link>
            </motion.div>

            {/* Benefits */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white/50 dark:bg-zinc-700/50 rounded-2xl border border-zinc-200/50 dark:border-zinc-600/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Parallax Floating Elements */}
          <div className="parallax-layer-3 absolute inset-0 overflow-hidden">
            <div className="pulsing-element absolute top-8 right-8 w-4 h-4 bg-amber-400 rounded-full" />
            <div
              className="floating-element absolute bottom-8 left-8 w-3 h-3 bg-blue-400 rounded-full"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="drifting-element absolute top-1/2 right-12 w-2 h-2 bg-green-400 rounded-full"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
            بیش از 46,000 کاربر به ما اعتماد کرده‌اند
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-zinc-400">★★★★★</div>
            <div className="text-sm text-zinc-500">امتیاز 4.9 از 5</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
