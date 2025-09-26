"use client";
import { Transition } from "motion";
import * as motion from "motion/react-client";
import { useEffect, useRef } from "react";
import {
  FaArrowDown,
  FaStar,
  FaUsers,
  FaShieldAlt,
  FaGavel,
  FaBalanceScale,
  FaBookOpen,
} from "react-icons/fa";

const Welcome = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const transition: Transition = {
    duration: 1,
    delay: 0.8,
    ease: [0, 0.71, 0.2, 1.01],
  };

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

  const stats = [
    {
      icon: <FaUsers className="text-3xl" />,
      number: "1000+",
      label: "کاربر فعال",
    },
    {
      icon: <FaStar className="text-3xl" />,
      number: "4.9",
      label: "امتیاز رضایت",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      number: "100%",
      label: "امنیت تضمینی",
    },
  ];

  return (
    <div
      ref={containerRef}
      id="#welcome"
      className="parallax-container relative w-full h-screen welcome-bg flex justify-center items-center overflow-hidden"
    >
      {/* Parallax Background Layers */}
      <div className="parallax-bg parallax-layer-1 absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />

      {/* Legal Icons Parallax Layer */}
      <div className="parallax-layer-2 absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-1/4 left-1/4 text-white/10">
          <FaGavel className="text-8xl" />
        </div>
        <div className="floating-element-reverse absolute bottom-1/4 right-1/4 text-white/10">
          <FaBalanceScale className="text-10xl" />
        </div>
        <div className="drifting-element absolute top-1/2 right-1/3 text-white/10">
          <FaBookOpen className="text-6xl" />
        </div>
      </div>

      {/* Floating Particles Parallax Layer */}
      <div className="parallax-layer-3 absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Additional Floating Elements */}
      <div className="parallax-layer-4 absolute inset-0 overflow-hidden">
        <div className="pulsing-element absolute top-20 right-20 w-4 h-4 bg-amber-400/30 rounded-full" />
        <div
          className="floating-element absolute bottom-20 left-20 w-6 h-6 bg-blue-400/30 rounded-full"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="drifting-element absolute top-1/3 right-1/4 w-3 h-3 bg-green-400/30 rounded-full"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <motion.div
        className="relative z-10 w-11/12 md:w-4/5 lg:w-3/5 flex flex-col justify-center items-center gap-8 bg-white/10 dark:bg-black/20 backdrop-blur-2xl p-8 md:p-12 text-center rounded-3xl border border-white/20 shadow-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={transition}
      >
        {/* Main Content */}
        <div className="space-y-6">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            به <span className="text-amber-400">حق لاین</span> خوش آمدید
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            حق لاین به شما کمک می‌کند تا دسترسی سریع، ساده و مطمئن به وکلای
            متخصص داشته باشید. پرونده خود را آنلاین ثبت کنید، وکیل مناسب را پیدا
            کنید و در کمترین زمان و با شفافیت کامل امور حقوقی خود را مدیریت کنید
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-amber-400 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm mb-2">اسکرول کنید</span>
            <FaArrowDown className="text-xl" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Welcome;
