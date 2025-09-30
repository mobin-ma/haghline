import { FaAccessibleIcon } from "react-icons/fa";
import { BsTransparency } from "react-icons/bs";
import { FaFile } from "react-icons/fa6";
import { MdSavings } from "react-icons/md";
import * as motion from "motion/react-client";
import { ReactNode, useEffect, useRef } from "react";
import { FaGavel, FaBalanceScale, FaBookOpen, FaStar } from "react-icons/fa";

type Card = {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
};

export default function Features() {
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

  const cards: Card[] = [
    {
      title: "دسترسی آسان به وکیل در هر زمان و مکان",
      description:
        "با پلتفرم ما می‌توانید بدون نیاز به مراجعه حضوری، در هر ساعت شبانه‌روز به وکلای متخصص دسترسی داشته باشید و مشاوره آنلاین دریافت کنید",
      icon: <FaAccessibleIcon className="text-4xl" />,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "شفافیت در رزومه و تخصص وکلا",
      description:
        "تمامی وکلا دارای پروفایل شفاف شامل رزومه، تجربه و تخصص هستند تا بتوانید با اطمینان کامل وکیل مناسب خود را انتخاب کنید",
      icon: <BsTransparency className="text-4xl" />,
      gradient: "from-green-500 to-green-600",
    },
    {
      title: "مدیریت پرونده‌ها و مدارک به صورت آنلاین",
      description:
        "پرونده‌ها و مدارک حقوقی خود را به راحتی در پلتفرم ثبت و مدیریت کنید و وضعیت پرونده را به صورت آنلاین پیگیری کنید",
      icon: <FaFile className="text-4xl" />,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "کاهش هزینه و صرفه‌جویی در زمان",
      description:
        "با مشاوره و پیگیری آنلاین، زمان و هزینه رفت‌وآمد کاهش یافته و سریع‌تر به حل امور حقوقی خود می‌رسید",
      icon: <MdSavings className="text-4xl" />,
      gradient: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="parallax-container relative py-12"
      id="features"
    >

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-50 left-30 w-72 h-72 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-200/20 dark:bg-amber-400/10 rounded-full blur-3xl" />
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
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-zinc-900 via-blue-800 to-amber-600 dark:from-white dark:via-blue-200 dark:to-amber-300 bg-clip-text text-transparent mb-6">
            ویژگی‌های منحصر به فرد
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            ویژگی‌هایی که پلتفرم حق‌لاین را از سایر راهکارها متمایز می‌سازد و
            تجربه‌ای بی‌نظیر برای شما فراهم می‌کند
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <motion.div
                className={`relative z-10 w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {card.icon}
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
