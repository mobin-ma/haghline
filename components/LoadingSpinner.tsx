"use client";

import { motion } from "motion/react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({
  size = "md",
  text = "در حال بارگذاری...",
  fullScreen = false,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  const iconSizeClasses = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-3xl",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
  };

  const containerClasses = fullScreen
    ? "w-full h-screen flex flex-col gap-8 items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"
    : "flex flex-col gap-6 items-center justify-center p-8";

  return (
    <div className={containerClasses}>
      {/* Main Spinner Container */}
      <div className="relative">
        {/* Outer Rotating Ring */}
        <motion.div
          className={`${sizeClasses[size]} border-4 border-transparent border-t-sky-500 rounded-full`}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
      </div>

      {/* Loading Text */}
      {text && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className={`${textSizeClasses[size]} font-bold text-sky-500 mb-2`}
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {text}
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
