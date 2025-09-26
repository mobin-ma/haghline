"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { clearUserInfoError } from "@/store/authSlice";
import { motion, AnimatePresence } from "motion/react";

export default function UserInfoAlert() {
  const dispatch = useDispatch();
  const { userInfoError } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (userInfoError) {
      const timer = setTimeout(() => {
        dispatch(clearUserInfoError());
      }, 4000); // ۴ ثانیه بعد محو میشه
      return () => clearTimeout(timer);
    }
  }, [userInfoError, dispatch]);

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {userInfoError && (
          <motion.div
            key="userInfoError"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{
              duration: 0.4,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="bg-red-400/60 backdrop-blur border-2 border-red-500 rounded-lg text-red-900 px-5 py-3 font-bold shadow-lg cursor-pointer hover:bg-red-400/80 transition-colors"
            onClick={() => dispatch(clearUserInfoError())}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{userInfoError}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
