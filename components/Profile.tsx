"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Profile() {
  const [showEditList, setShowEditList] = useState(false);
  return (
    <>
      <button
        className="w-9 h-9 hover:text-5xl hover:bg-transparent hover:text-shadow-lg hover:text-shadow-black/50 transition-all bg-blue-600 text-white rounded-full flex justify-center items-center text-lg cursor-pointer font-bold"
        onClick={() => setShowEditList((prev) => !prev)}
      >
        M
      </button>
      <AnimatePresence>
        {showEditList && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-10 bottom-[-300%] bg-gray-300 dark:bg-zinc-900 p-5 rounded-lg shadow-lg shadow-gray-500/50 dark:shadow-zinc-950/50 z-50"
          onClick={() => setShowEditList((prev) => !prev)}
                  >
            <p>ویرایش</p>
            <p>ویرایش</p>
            <p>ویرایش</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
