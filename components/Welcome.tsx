"use client";
import { Transition } from "motion";
import * as motion from "motion/react-client";
import { forwardRef } from "react";

const Welcome = forwardRef<HTMLDivElement>((props, ref) => {
  const transition: Transition = {
    duration: 1,
    delay: 0.8,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <div
      ref={ref}
      className="w-full h-screen welcome-bg flex justify-center items-center"
    >
      <motion.div
        className="w-3/5 md:w-1/2 flex flex-col justify-center items-center gap-10 bg-black/25 dark:bg-white/25 backdrop-blur p-5 text-center rounded-3xl text-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={transition}
      >
        <h1 className="text-2xl md:text-5xl font-bold">به حق لاین خوش آمدید</h1>
        <h2 className="text-sm md:text-2xl">
          حق لاین به شما کمک می‌کند تا دسترسی سریع، ساده و مطمئن به وکلای متخصص
          داشته باشید. پرونده خود را آنلاین ثبت کنید، وکیل مناسب را پیدا کنید و
          در کمترین زمان و با شفافیت کامل امور حقوقی خود را مدیریت کنید
        </h2>
      </motion.div>
    </div>
  );
});

Welcome.displayName = "Welcome";
export default Welcome;
