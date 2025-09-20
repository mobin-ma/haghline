import { FaAccessibleIcon } from "react-icons/fa";
import { BsTransparency } from "react-icons/bs";
import { FaFile } from "react-icons/fa6";
import { MdSavings } from "react-icons/md";
import * as motion from "motion/react-client";
import { ReactNode } from "react";
type Card = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function Features() {
  const cards: Card[] = [
    {
      title: "دسترسی آسان به وکیل در هر زمان و مکان",
      description:
        "با پلتفرم ما می‌توانید بدون نیاز به مراجعه حضوری، در هر ساعت شبانه‌روز به وکلای متخصص دسترسی داشته باشید و مشاوره آنلاین دریافت کنید",
      icon: <FaAccessibleIcon className="text-3xl md:text-6xl text-zinc-900 dark:text-white" />,
    },
    {
      title: "شفافیت در رزومه و تخصص وکلا",
      description:
        "تمامی وکلا دارای پروفایل شفاف شامل رزومه، تجربه و تخصص هستند تا بتوانید با اطمینان کامل وکیل مناسب خود را انتخاب کنید",
      icon: <BsTransparency className="text-3xl md:text-6xl text-zinc-900 dark:text-white" />,
    },
    {
      title: "مدیریت پرونده‌ها و مدارک به صورت آنلاین",
      description:
        "پرونده‌ها و مدارک حقوقی خود را به راحتی در پلتفرم ثبت و مدیریت کنید و وضعیت پرونده را به صورت آنلاین پیگیری کنید",
      icon: <FaFile className="text-3xl md:text-6xl text-zinc-900 dark:text-white" />,
    },
    {
      title: "کاهش هزینه و صرفه‌جویی در زمان",
      description:
        "با مشاوره و پیگیری آنلاین، زمان و هزینه رفت‌وآمد کاهش یافته و سریع‌تر به حل امور حقوقی خود می‌رسید",
      icon: <MdSavings className="text-3xl md:text-6xl text-zinc-900 dark:text-white" />,
    },
  ];
  return (
    <div className="features-bg min-h-screen md:h-screen" id="features">
      <div className="w-full h-full bg-zinc-700/80 flex flex-col justify-center items-center py-10 md:py-5 md:pt-24">
        <motion.div
          className="flex justify-center items-center flex-col md:mb-10 text-white"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="w-4/5 text-center text-2xl md:text-5xl font-bold border-b-2 pb-3 mb-3 md:pb-10 md:mb-2 md:mt-10">
            ویژگی‌ها
          </h2>
          <p className="w-4/5 mt-2 text-sm md:text-base text-center">
            ویژگی‌هایی که پلتفرم حق‌لاین را از سایر راهکارها متمایز می‌سازد
          </p>
        </motion.div>
        <motion.div
          className="w-full flex flex-wrap"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, i) => (
            <div
              className="grow basis-[200px] bg-white/30 dark:bg-black/30 dark:text-white transition-all hover:scale-110 hover:bg-white/70 dark:hover:bg-amber-500/70 cursor-pointer backdrop-blur m-5 p-3 text-center rounded-2xl flex flex-col justify-center items-center gap-4 md:mb-10"
              key={i}
            >
              <h2 className="text-base md:text-2xl text-wrap font-bold">{card.title}</h2>
              <p className="text-sm md:text-lg">{card.description}</p>
              <span>{card.icon}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
