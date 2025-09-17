"use client";

import * as motion from "motion/react-client";

export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col gap-6 items-center justify-center">
      {/* Spinner */}
      <motion.div
        className="w-16 h-16 border-4 border-zinc-600 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      {/* Text Animation */}
      <motion.p
        className="text-xl font-bold text-zinc-700"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        در حال بارگذاری...
      </motion.p>
    </div>
  );
}
