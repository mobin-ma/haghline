"use client";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toggleMode } from "@/store/authSlice";
import * as motion from "motion/react-client";
import { AnimatePresence, Transition } from "motion/react";
import PublicRoute from "@/components/PublicRoute";
import ThemeToggle from "@/components/ThemeToggle";

export default function AuthPage() {
  const mode = useSelector((state: RootState) => state.auth.mode);
  const dispatch = useDispatch();
  const transition: Transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  return (
    <PublicRoute>
      <div className="w-full min-h-screen flex">
        <nav className="fixed top-5 left-5 z-50">
          <ThemeToggle />
        </nav>
        <div className="auth-bg w-full h-screen">
          <div className="w-full h-full hidden bg-zinc-900/50 dark:bg-white/40 backdrop-blur md:flex justify-center items-center">
            <AnimatePresence mode="wait">
              {mode === "login" ? (
                <motion.p
                  key="login-text"
                  className="text-4xl/13 text-white dark:text-zinc-900 font-bold px-20 text-right"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={transition}
                >
                  با ورود به حساب، به تمام خدمات و امکانات ما دسترسی خواهید داشت
                </motion.p>
              ) : (
                <motion.p
                  key="signup-text"
                  className="text-4xl/13 text-white dark:text-zinc-900 font-bold px-20 text-right"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={transition}
                >
                  برای شروع، یک حساب کاربری جدید ایجاد کنید و به سادگی از خدمات
                  بهره‌مند شوید
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="w-full absolute inset-0 md:relative flex justify-center md:bg-gray-300/70 md:dark:bg-zinc-800 items-center">
          {mode === "login" ? (
            <Login toggleMode={() => dispatch(toggleMode())} />
          ) : (
            <Signup toggleMode={() => dispatch(toggleMode())} />
          )}
        </div>
      </div>
    </PublicRoute>
  );
}
