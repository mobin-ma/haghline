import Image from "next/image";
import React, { useEffect, useRef } from "react";
import lawyer1 from "@/public/images/lawyer1.jpg";
import lawyer2 from "@/public/images/lawyer2.jpg";
import lawyer3 from "@/public/images/lawyer3.jpg";
import lawyer4 from "@/public/images/lawyer4.jpg";
import lawyer5 from "@/public/images/lawyer5.jpg";
import lawyer6 from "@/public/images/lawyer6.jpg";
import * as motion from "motion/react-client";
import {
  FaStar,
  FaAward,
  FaGraduationCap,
  FaBriefcase,
  FaGavel,
  FaBalanceScale,
  FaBookOpen,
} from "react-icons/fa";

export default function LawyerShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrolled = window.pageYOffset;
      const parallaxElements =
        containerRef.current.querySelectorAll(".parallax-layer");

      parallaxElements.forEach((element, index) => {
        const speed = 0.3 + index * 0.1;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lawyers = [
    {
      id: 1,
      name: "مبین مددی",
      image: lawyer1,
      specialty: "حقوق تجاری",
      experience: "10+ سال",
      rating: 4.9,
      cases: 150,
      description:
        "دکتر مبین مددی، وکیل پایه یک دادگستری با بیش از ۱۰ سال تجربه در حوزه دعاوی حقوقی و تجاری. تخصص ایشان در قراردادهای بین‌المللی و حل‌وفصل اختلافات پیچیده باعث اعتماد شرکت‌ها و افراد شده است.",
    },
    {
      id: 2,
      name: "مریم صادقی",
      image: lawyer4,
      specialty: "حقوق خانواده",
      experience: "8+ سال",
      rating: 4.8,
      cases: 120,
      description:
        "دکتر مریم صادقی وکیل پایه یک دادگستری با بیش از ۸ سال تجربه در حوزه دعاوی حقوقی و تجاری. تخصص ایشان در قراردادهای بین‌المللی و حل‌وفصل اختلافات پیچیده باعث اعتماد شرکت‌ها و افراد شده است.",
    },
    {
      id: 3,
      name: "امیر شکری",
      image: lawyer2,
      specialty: "حقوق جزا",
      experience: "12+ سال",
      rating: 4.9,
      cases: 200,
      description:
        "دکتر امیر شکری، وکیل پایه یک دادگستری با بیش از ۱۲ سال تجربه در حوزه دعاوی حقوقی و تجاری. تخصص ایشان در قراردادهای بین‌المللی و حل‌وفصل اختلافات پیچیده باعث اعتماد شرکت‌ها و افراد شده است.",
    },
    {
      id: 4,
      name: "نگین ثابتی",
      image: lawyer5,
      specialty: "حقوق کار",
      experience: "7+ سال",
      rating: 4.7,
      cases: 90,
      description:
        "دکتر نگین ثابتی، وکیل پایه یک دادگستری با بیش از ۷ سال تجربه در حوزه دعاوی حقوقی و تجاری. تخصص ایشان در قراردادهای بین‌المللی و حل‌وفصل اختلافات پیچیده باعث اعتماد شرکت‌ها و افراد شده است.",
    },
    {
      id: 5,
      name: "محمد اکبری",
      image: lawyer3,
      specialty: "حقوق مالکیت",
      experience: "15+ سال",
      rating: 5.0,
      cases: 300,
      description:
        "دکتر محمد اکبری، وکیل پایه یک دادگستری با بیش از ۱۵ سال تجربه در حوزه دعاوی حقوقی و تجاری. تخصص ایشان در قراردادهای بین‌المللی و حل‌وفصل اختلافات پیچیده باعث اعتماد شرکت‌ها و افراد شده است.",
    },
    {
      id: 6,
      name: "مهسا محمدی",
      image: lawyer6,
      specialty: "حقوق بین‌الملل",
      experience: "9+ سال",
      rating: 4.8,
      cases: 110,
      description:
        "دکتر مهسا محمدی، وکیل پایه یک دادگستری با بیش از ۹ سال تجربه در حوزه دعاوی حقوقی و تجاری. تخصص ایشان در قراردادهای بین‌المللی و حل‌وفصل اختلافات پیچیده باعث اعتماد شرکت‌ها و افراد شده است.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="parallax-container relative w-full py-20"
      id="showcase"
    >
      {/* Parallax Background Layers */}
      <div className="parallax-bg parallax-layer-1 absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-blue-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-blue-900/20" />

      {/* Legal Icons Parallax Layer */}
      <div className="parallax-layer-2 absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-1/4 left-1/4 text-blue-400/10 dark:text-blue-300/10">
          <FaGavel className="text-8xl" />
        </div>
        <div className="floating-element-reverse absolute bottom-1/4 right-1/4 text-amber-400/10 dark:text-amber-300/10">
          <FaBalanceScale className="text-10xl" />
        </div>
        <div className="drifting-element absolute top-1/2 right-1/3 text-green-400/10 dark:text-green-300/10">
          <FaBookOpen className="text-6xl" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 dark:bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-zinc-900 via-blue-800 to-amber-600 dark:from-white dark:via-blue-200 dark:to-amber-300 bg-clip-text text-transparent mb-6">
            ویترین وکلا
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            با مشاهده رزومه و تخصص وکلای مختلف، بهترین انتخاب را برای پرونده خود
            داشته باشید
          </p>
        </motion.div>
        {/* Lawyers Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {lawyers.map((lawyer, index) => (
            <motion.div
              key={lawyer.id}
              className="group relative bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image */}
              <div className="relative mb-6">
                <motion.div
                  className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={lawyer.image}
                    alt={lawyer.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Rating Badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-xs" />
                    <span>{lawyer.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  {lawyer.name}
                </h3>

                <div className="flex items-center justify-center gap-2 mb-3">
                  <FaGraduationCap className="text-amber-500 text-sm" />
                  <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                    {lawyer.specialty}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
                    <FaBriefcase className="text-xs" />
                    <span className="text-xs">{lawyer.experience}</span>
                  </div>
                  <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
                    <FaAward className="text-xs" />
                    <span className="text-xs">{lawyer.cases} پرونده</span>
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4 line-clamp-3">
                  {lawyer.description}
                </p>

                {/* CTA Button */}
                <motion.button
                  className="w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  انتخاب وکیل
                </motion.button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              وکیل مناسب خود را پیدا کنید
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              از بین وکلای متخصص ما، بهترین گزینه را برای پرونده خود انتخاب کنید
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              مشاهده همه وکلا
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
