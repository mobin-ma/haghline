import * as motion from "motion/react-client";
import CountUp from "react-countup";
import { useEffect, useRef } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaUsers,
  FaUserTie,
  FaHandshake,
  FaGavel,
  FaBalanceScale,
  FaBookOpen,
} from "react-icons/fa";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
};

type Stat = {
  id: number;
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
};

export default function Testimonials() {
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

  const stats: Stat[] = [
    {
      id: 1,
      title: "کاربران فعال",
      value: 46000,
      icon: <FaUsers className="text-3xl" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "موکلین راضی",
      value: 35000,
      icon: <FaHandshake className="text-3xl" />,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "وکلای متخصص",
      value: 5000,
      icon: <FaUserTie className="text-3xl" />,
      color: "from-amber-500 to-amber-600",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "احمد محمدی",
      role: "مدیر شرکت",
      content:
        "حق لاین واقعاً زندگی من را تغییر داد. توانستم در کمترین زمان وکیل مناسب برای پرونده تجاری‌ام پیدا کنم. خدمات عالی و پشتیبانی ۲۴ ساعته.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      id: 2,
      name: "فاطمه احمدی",
      role: "خانم خانه",
      content:
        "به عنوان یک مادر شاغل، وقت کافی برای مراجعه حضوری به وکیل نداشتم. حق لاین این مشکل را حل کرد و توانستم مشاوره حقوقی دریافت کنم.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      id: 3,
      name: "محمد رضایی",
      role: "کارآفرین",
      content:
        "شفافیت در رزومه وکلا و امکان مقایسه آن‌ها باعث شد بهترین انتخاب را داشته باشم. هزینه‌ها هم بسیار منطقی بود.",
      rating: 5,
      avatar: "👨‍💻",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="parallax-container relative w-full py-20"
      id="testimonials"
    >
      {/* Parallax Background Layers */}
      <div className="parallax-bg parallax-layer-1 absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-amber-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-amber-900/20" />

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
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-200/20 dark:bg-amber-400/10 rounded-full blur-3xl" />
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
            نظرات کاربران
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            نظرات و تجربه‌های واقعی کاربران نشان می‌دهد که حق‌لاین تا چه اندازه
            توانسته اعتماد و رضایت کاربران را جلب کند
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="group relative bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 hover:shadow-2xl transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
              />

              {/* Icon */}
              <motion.div
                className={`relative z-10 w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-lg`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.icon}
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2">
                  <CountUp end={stat.value} duration={3} separator="," />
                </div>
                <div className="text-zinc-600 dark:text-zinc-300 font-medium">
                  {stat.title}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-amber-500/20">
                <FaQuoteLeft className="text-3xl" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-amber-500 text-sm" />
                ))}
              </div>

              {/* Content */}
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 text-right">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              به جمع کاربران راضی ما بپیوندید
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              تجربه‌ای مشابه کاربران ما داشته باشید و از خدمات حرفه‌ای ما
              بهره‌مند شوید
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              شروع کنید
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
