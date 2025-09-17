"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { clearMessages } from "@/store/authSlice";
import { motion ,AnimatePresence } from "motion/react";

export default function Alert() {
  const dispatch = useDispatch();
  const { error, success } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        dispatch(clearMessages());
      }, 3000); // ۳ ثانیه بعد محو میشه
      return () => clearTimeout(timer);
    }
  }, [error, success, dispatch]);
  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {error && (
          <motion.div
            key="error"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="bg-red-400/60 backdrop-blur border-2 border-red-500 rounded-lg text-red-900 px-5 py-2 font-bold shadow-lg cursor-pointer"
          >
            {error}
          </motion.div>
        )}

        {success && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-green-400/60 backdrop-blur border-2 border-green-700 rounded-lg text-green-900 px-5 py-2 font-bold shadow-lg cursor-pointer"
          >
            موفقیت آمیز
            {success}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
