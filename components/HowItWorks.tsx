import React from "react";
import * as motion from "motion/react-client";

export default function HowItWorks() {
  return (
    <div
      className="w-full flex flex-col justify-center items-center gap-5 mt-30 mb-20 pt-28"
      id="works"
    >
      <motion.div
        className="flex justify-center items-center flex-col mb-10"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl md:text-5xl font-bold border-b-2 pb-3 mb-3 md:pb-10 md:mb-2">
          این سایت چگونه کار میکند
        </h2>
        <p className="mt-2 text-sm md:text-base text-center px-5">
          فقط در چند مرحله ساده، از ثبت پرونده تا انتخاب وکیل و پیگیری آنلاین،
          همه چیز به راحتی و شفافیت انجام می‌شود
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col justify-between items-center gap-20"
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full flex justify-between gap-5 items-start cursor-pointer">
          <span className="relative after:absolute after:bg-zinc-900 dark:after:bg-amber-600 after:w-1 after:h-30 after:top-10 after:right-5">
            <p className="bg-zinc-900 dark:bg-amber-600 w-10 h-10 rounded-full text-white text-3xl font-bold flex justify-center items-center">
              1
            </p>
          </span>
          <div className="flex flex-col justify-center items-start w-80">
            <p className="text-zinc-900 dark:text-white font-bold text-nowrap text-lg">
              ثبت پرونده
            </p>
            <span className="text-gray-600 dark:text-amber-400">
              📄 کاربر اطلاعات اولیه پرونده رو وارد می‌کنه و درخواستش ثبت میشه
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between gap-5 items-start cursor-pointer">
          <span className="relative after:absolute after:bg-zinc-900 dark:after:bg-amber-600 after:w-1 after:h-30 after:top-10 after:right-5">
            <p className="bg-zinc-900 dark:bg-amber-600 w-10 h-10 rounded-full text-white text-3xl font-bold flex justify-center items-center">
              2
            </p>
          </span>
          <div className="flex flex-col justify-center items-start w-80">
            <p className="text-zinc-900 font-bold text-nowrap dark:text-white">انتخاب وکیل</p>
            <span className="text-gray-600 dark:text-amber-400">
              ⚖️ از بین وکلای پیشنهادی بر اساس تخصص و امتیاز، کاربر بهترین گزینه
              رو انتخاب می‌کنه
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between gap-5 items-start cursor-pointer">
          <span className="relative after:absolute after:bg-zinc-900 dark:after:bg-amber-600 after:w-1 after:h-30 after:top-10 after:right-5">
            <p className="bg-zinc-900 dark:bg-amber-600 w-10 h-10 rounded-full text-white text-3xl font-bold flex justify-center items-center">
              3
            </p>
          </span>
          <div className="flex flex-col justify-center items-start w-80">
            <p className="text-zinc-900 dark:text-white font-bold text-nowrap">ارتباط آنلاین</p>
            <span className="text-gray-600 dark:text-amber-400">
              💬 کاربر می‌تونه از طریق چت یا تماس ویدیویی با وکیل ارتباط بگیره و
              مدارک رو ارسال کنه
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between gap-5 items-start cursor-pointer">
          <span className="relative ">
            <p className="bg-zinc-900 dark:bg-amber-600 w-10 h-10 rounded-full text-white text-3xl font-bold flex justify-center items-center">
              4
            </p>
          </span>
          <div className="flex flex-col justify-center items-start w-80">
            <p className="text-zinc-900 dark:text-white font-bold text-nowrap">پیگیری پرونده</p>
            <span className="text-gray-600 dark:text-amber-400">
              📊 وضعیت پرونده به صورت آنلاین و لحظه‌ای قابل مشاهده و پیگیری
              خواهد بود
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
