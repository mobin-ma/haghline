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
} from "react-icons/fa";

export default function LawyerShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

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

  const scrollByCards = (direction: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const firstCard = slider.querySelector("[data-card]") as HTMLElement | null;
    const cardWidth = firstCard?.clientWidth ?? 320;
    const gap = 24; // matches gap-6
    slider.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={containerRef}
      className="parallax-container relative w-full py-12"
      id="showcase"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-sky-200/20 dark:bg-sky-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-zinc-900 via-blue-800 to-sky-600 dark:from-white dark:via-blue-200 dark:to-sky-300 bg-clip-text text-transparent mb-6">
            ویترین وکلا
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            با مشاهده رزومه و تخصص وکلای مختلف، بهترین انتخاب را برای پرونده خود
            داشته باشید
          </p>
        </motion.div>
        {/* Lawyers Slider */}
        <div className="relative">
          {/* Controls */}
          <div className="pointer-events-none absolute -top-12 left-0 right-0 flex items-center justify-end gap-2">
            <button
              aria-label="قبلی"
              onClick={() => scrollByCards(-1)}
              className="pointer-events-auto px-3 py-2 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md shadow-md hover:shadow-lg hover:bg-white dark:hover:bg-zinc-800 transition"
            >
              ‹
            </button>
            <button
              aria-label="بعدی"
              onClick={() => scrollByCards(1)}
              className="pointer-events-auto px-3 py-2 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md shadow-md hover:shadow-lg hover:bg-white dark:hover:bg-zinc-800 transition"
            >
              ›
            </button>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-hidden snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {lawyers.map((lawyer, index) => (
              <motion.div
                key={lawyer.id}
                data-card
                className="snap-start shrink-0 w-80"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
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
                      <FaGraduationCap className="text-sky-500 text-sm" />
                      <span className="text-sm text-sky-600 dark:text-sky-400 font-medium">
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
                      className="w-full px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-600 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      انتخاب وکیل
                    </motion.button>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
