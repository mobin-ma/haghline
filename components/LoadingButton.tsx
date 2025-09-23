"use client";

import * as motion from "motion/react-client";

interface LoadingButtonProps {
  loading: boolean;
  children: React.ReactNode;
  loadingText?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function LoadingButton({
  loading,
  children,
  loadingText = "در حال پردازش...",
  className = "",
  disabled = false,
  type = "button",
  onClick
}: LoadingButtonProps) {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      onClick={onClick}
      className={`relative ${className} ${(loading || disabled) ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      {loading && (
        <motion.div
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-current border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      )}
      <span className={loading ? "mr-6" : ""}>
        {loading ? loadingText : children}
      </span>
    </button>
  );
}
