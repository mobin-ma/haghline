"use client";

import * as motion from "motion/react-client";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({ 
  size = "md", 
  text = "در حال بارگذاری...", 
  fullScreen = false 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl"
  };

  const containerClasses = fullScreen 
    ? "w-full h-screen flex flex-col gap-6 items-center justify-center bg-white dark:bg-zinc-900"
    : "flex flex-col gap-4 items-center justify-center p-8";

  return (
    <div className={containerClasses}>
      <motion.div
        className={`${sizeClasses[size]} border-4 border-zinc-600 dark:border-amber-600 dark:border-t-transparent border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      {text && (
        <motion.p
          className={`${textSizeClasses[size]} font-bold text-zinc-700 dark:text-amber-600`}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}
