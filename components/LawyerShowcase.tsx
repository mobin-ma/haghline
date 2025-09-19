import Image from "next/image";
import React from "react";
import lawyer1 from "@/public/images/lawyer1.jpg";
import lawyer2 from "@/public/images/lawyer2.jpg";
import lawyer3 from "@/public/images/lawyer3.jpg";
import lawyer4 from "@/public/images/lawyer4.jpg";
import lawyer5 from "@/public/images/lawyer5.jpg";
import lawyer6 from "@/public/images/lawyer6.jpg";
import * as motion from "motion/react-client";

export default function LawyerShowcase() {
  return (
    <div className="lawyer-bg w-full" id="showcase">
      <div className="w-full h-full bg-zinc-700/80 flex flex-col justify-center items-center md:p-18">
        <motion.div
          className="flex justify-center items-center flex-col mb-10 text-white"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="w-4/5 text-center text-2xl md:text-5xl font-bold border-b-2 pb-3 mb-3 md:pb-10 md:mb-2 mt-10">
            ویترین وکلا
          </h2>
          <p className="w-4/5 mt-2 text-sm md:text-base text-center px-5 md:px-0">
            با مشاهده رزومه و تخصص وکلای مختلف، بهترین انتخاب را برای پرونده خود
            داشته باشید
          </p>
        </motion.div>
        <motion.div
          className="w-full flex flex-col lg:flex-row justify-between items-center gap-5 md:gap-10 p-5 md:p-20"
          initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full flex flex-col gap-5 md:gap-10 justify-center items-center">
            <div className="flex justify-center items-center gap-3 bg-white/20 dark:bg-black/20 backdrop-blur p-2 md:p-5 rounded-[26px] md:rounded-[52px] cursor-pointer">
              <div>
                <Image
                  src={lawyer1}
                  alt="Lawyer"
                  width={1025}
                  height={1025}
                  className="rounded-3xl md:rounded-4xl"
                />
              </div>
              <div className="text-right">
                <h3 className="font-bold text-lg md:text-2xl lg:text-4xl text-white mb-3 md:mb-5">
                  مبین مددی
                </h3>
                <p className="text-base lg:text-lg text-gray-100 dark:text-amber-400 line-clamp-3 md:line-clamp-4 lg:line-clamp-none">
                  دکتر مبین مددی، وکیل پایه یک دادگستری با بیش از ۱۰ سال تجربه
                  در حوزه دعاوی حقوقی و تجاری. تخصص ایشان در قراردادهای
                  بین‌المللی و حل‌وفصل اختلافات پیچیده باعث اعتماد شرکت‌ها و
                  افراد شده است.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 bg-white/20 dark:bg-black/20 backdrop-blur p-2 md:p-5 rounded-[26px] md:rounded-[52px] cursor-pointer">
              <div>
                <Image
                  src={lawyer4}
                  alt="Lawyer"
                  width={1025}
                  height={1025}
                  className="rounded-3xl md:rounded-4xl"
                />
              </div>
              <div className="text-right">
                <h3 className="font-bold text-lg md:text-2xl lg:text-4xl text-white mb-3 md:mb-5">
                  مریم صادقی
                </h3>
                <p className="text-base lg:text-lg text-gray-100 dark:text-amber-400 line-clamp-3 md:line-clamp-4 lg:line-clamp-none">
                  دکتر مریم صادقی وکیل پایه یک دادگستری با بیش از ۱۰ سال تجربه
                  در حوزه دعاوی حقوقی و تجاری. تخصص ایشان در قراردادهای
                  بین‌المللی و حل‌وفصل اختلافات پیچیده باعث اعتماد شرکت‌ها و
                  افراد شده است.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 bg-white/20 dark:bg-black/20 backdrop-blur p-2 md:p-5 rounded-[26px] md:rounded-[52px] cursor-pointer">
              <div>
                <Image
                  src={lawyer2}
                  alt="Lawyer"
                  width={1025}
                  height={1025}
                  className="rounded-3xl md:rounded-4xl"
                />
              </div>
              <div className="text-right">
                <h3 className="font-bold text-lg md:text-2xl lg:text-4xl text-white mb-3 md:mb-5">
                  امیر شکری
                </h3>
                <p className="text-base lg:text-lg text-gray-100 dark:text-amber-400 line-clamp-3 md:line-clamp-4 lg:line-clamp-none">
                  دکتر امیر شکری، وکیل پایه یک دادگستری با بیش از ۱۰ سال تجربه
                  در حوزه دعاوی حقوقی و تجاری. تخصص ایشان در قراردادهای
                  بین‌المللی و حل‌وفصل اختلافات پیچیده باعث اعتماد شرکت‌ها و
                  افراد شده است.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-amber-500 w-2 h-screen hidden lg:block"></div>
          <div className="w-full flex flex-col gap-5 md:gap-10 justify-center items-center">
            <div className="flex justify-center items-center gap-3 bg-white/20 dark:bg-black/20 backdrop-blur p-2 md:p-5 rounded-[26px] md:rounded-[52px] cursor-pointer">
              <div>
                <Image
                  src={lawyer5}
                  alt="Lawyer"
                  width={1025}
                  height={1025}
                  className="rounded-3xl md:rounded-4xl"
                />
              </div>
              <div className="text-right">
                <h3 className="font-bold text-lg md:text-2xl lg:text-4xl text-white mb-3 md:mb-5">
                  نگین ثابتی
                </h3>
                <p className="text-base lg:text-lg text-gray-100 dark:text-amber-400 line-clamp-3 md:line-clamp-4 lg:line-clamp-none">
                  دکتر نگین ثابتی، وکیل پایه یک دادگستری با بیش از ۱۰ سال تجربه
                  در حوزه دعاوی حقوقی و تجاری. تخصص ایشان در قراردادهای
                  بین‌المللی و حل‌وفصل اختلافات پیچیده باعث اعتماد شرکت‌ها و
                  افراد شده است.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 bg-white/20 dark:bg-black/20 backdrop-blur p-2 md:p-5 rounded-[26px] md:rounded-[52px] cursor-pointer">
              <div>
                <Image
                  src={lawyer3}
                  alt="Lawyer"
                  width={1025}
                  height={1025}
                  className="rounded-3xl md:rounded-4xl"
                />
              </div>
              <div className="text-right">
                <h3 className="font-bold text-lg md:text-2xl lg:text-4xl text-white mb-3 md:mb-5">
                  محمد اکبری
                </h3>
                <p className="text-base lg:text-lg text-gray-100 dark:text-amber-400 line-clamp-3 md:line-clamp-4 lg:line-clamp-none">
                  دکتر محمد اکبری، وکیل پایه یک دادگستری با بیش از ۱۰ سال تجربه
                  در حوزه دعاوی حقوقی و تجاری. تخصص ایشان در قراردادهای
                  بین‌المللی و حل‌وفصل اختلافات پیچیده باعث اعتماد شرکت‌ها و
                  افراد شده است.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 bg-white/20 dark:bg-black/20 backdrop-blur p-2 md:p-5 rounded-[26px] md:rounded-[52px] cursor-pointer">
              <div>
                <Image
                  src={lawyer6}
                  alt="Lawyer"
                  width={1025}
                  height={1025}
                  className="rounded-3xl md:rounded-4xl"
                />
              </div>
              <div className="text-right">
                <h3 className="font-bold text-lg md:text-2xl lg:text-4xl text-white mb-3 md:mb-5">
                  مهسا محمدی
                </h3>
                <p className="text-base lg:text-lg text-gray-100 dark:text-amber-400 line-clamp-3 md:line-clamp-4 lg:line-clamp-none">
                  دکتر مهسا محمدی، وکیل پایه یک دادگستری با بیش از ۱۰ سال تجربه
                  در حوزه دعاوی حقوقی و تجاری. تخصص ایشان در قراردادهای
                  بین‌المللی و حل‌وفصل اختلافات پیچیده باعث اعتماد شرکت‌ها و
                  افراد شده است.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
