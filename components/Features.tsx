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

  const scrollByCards = (direction: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const firstCard = slider.querySelector("[data-card]") as HTMLElement | null;
    const cardWidth = firstCard?.clientWidth ?? 320;
    const gap = 32; // matches gap-8
    slider.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

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
        <div className="absolute top-50 right-30 w-96 h-96 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-30 left-30 w-72 h-72 bg-sky-200/20 dark:bg-sky-400/10 rounded-full blur-3xl" />
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
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-zinc-900 via-blue-800 to-sky-500 dark:from-white dark:via-blue-200 dark:to-sky-400 bg-clip-text text-transparent mb-6">
            ویژگی‌های منحصر به فرد
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            ویژگی‌هایی که پلتفرم حق‌لاین را از سایر راهکارها متمایز می‌سازد و
            تجربه‌ای بی‌نظیر برای شما فراهم می‌کند
          </p>
        </motion.div>

        {/* Features Slider */}
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
            className="flex gap-8 overflow-hidden snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                data-card
                className="snap-start shrink-0 w-80"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 hover:shadow-2xl transition-all duration-500 overflow-hidden">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
