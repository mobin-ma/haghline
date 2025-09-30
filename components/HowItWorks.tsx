import React, { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import {
  FaFileAlt,
  FaUserCheck,
  FaComments,
  FaChartLine,
  FaGavel,
  FaBookOpen,
  FaStar,
} from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";

export default function HowItWorks() {
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

  const steps = [
    {
      number: "01",
      title: "ثبت پرونده",
      description:
        "کاربر اطلاعات اولیه پرونده را وارد می‌کند و درخواستش ثبت می‌شود",
      icon: <FaFileAlt className="text-2xl" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      number: "02",
      title: "انتخاب وکیل",
      description:
        "از بین وکلای پیشنهادی بر اساس تخصص و امتیاز، کاربر بهترین گزینه را انتخاب می‌کند",
      icon: <FaUserCheck className="text-2xl" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      number: "03",
      title: "ارتباط آنلاین",
      description:
        "کاربر می‌تواند از طریق چت یا تماس ویدیویی با وکیل ارتباط بگیرد و مدارک را ارسال کند",
      icon: <FaComments className="text-2xl" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      number: "04",
      title: "پیگیری پرونده",
      description:
        "وضعیت پرونده به صورت آنلاین و لحظه‌ای قابل مشاهده و پیگیری خواهد بود",
      icon: <FaChartLine className="text-2xl" />,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="parallax-container relative w-full py-12"
      id="works"
    >

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-200/20 dark:bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-zinc-900 via-blue-800 to-amber-600 dark:from-white dark:via-blue-200 dark:to-amber-300 bg-clip-text text-transparent mb-6">
            چگونه کار می‌کند؟
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            فقط در چند مرحله ساده، از ثبت پرونده تا انتخاب وکیل و پیگیری آنلاین،
            همه چیز به راحتی و شفافیت انجام می‌شود
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 border-b-2 border-zinc-200/50 dark:border-zinc-700/50 pb-4 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <motion.div
                  className={`relative w-28 h-28 ${step.bgColor} rounded-3xl flex items-center justify-center shadow-xl border border-zinc-200/50 dark:border-zinc-700/50`}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 rounded-3xl`}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`relative z-10 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-zinc-900 to-zinc-700 dark:from-amber-500 dark:to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-right">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
