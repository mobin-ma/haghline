import * as motion from "motion/react-client";
import CountUp from "react-countup";

type Figures = {
  id: number;
  title: string;
  value: number;
};

export default function Testimonials() {
  const figures: Figures[] = [
    { id: 1, title: "کاربران فعال", value: 46000 },
    { id: 2, title: "موکلین", value: 35000 },
    { id: 3, title: "وکلا", value: 5000 },
  ];

  return (
    <div
      className="w-full flex flex-col justify-center items-center md:pt-24"
      id="testimonials"
    >
      <motion.div
        className="md:w-1/2 text-center flex justify-center items-center flex-col mb-10"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-lg md:text-5xl font-bold border-b-2 pb-3 mb-3 md:pb-10 md:mb-2 mt-10">
          گواهینامه ها
        </h2>
        <p className="mt-2 text-wrap text-sm md:text-base text-center px-5 md:px-0">
          نظرات و تجربه‌های واقعی کاربران نشان می‌دهد که حق‌لاین تا چه اندازه
          توانسته اعتماد و رضایت کاربران را جلب کند. در این بخش، بازخوردهای
          کسانی که از خدمات پلتفرم استفاده کرده‌اند را می‌خوانید تا با اطمینان
          بیشتری تصمیم بگیرید
        </p>
      </motion.div>
      <motion.div
        className="w-full py-24 sm:py-32"
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {figures.map((fig, i) => (
              <div key={i} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600 dark:text-gray-300">{fig.title}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-zinc-900 dark:text-amber-500 sm:text-5xl">
                  <CountUp end={fig.value} duration={30} separator="," />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </div>
  );
}
