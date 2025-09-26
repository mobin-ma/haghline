"use client";
import { logout } from "@/store/authSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "motion/react";
import { FaSignOutAlt, FaSpinner } from "react-icons/fa";

export default function Logout() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);

    // Add a small delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    dispatch(logout());
    router.push("/authpage");
  };

  return (
    <motion.button
      onClick={handleLogout}
      disabled={isLoading}
      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white rounded-xl font-medium text-sm transition-all duration-200 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 disabled:opacity-70 disabled:cursor-not-allowed"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {isLoading ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <FaSpinner className="text-sm" />
          </motion.div>
          <span>در حال خروج...</span>
        </>
      ) : (
        <>
          <FaSignOutAlt className="text-sm" />
          <span>خروج</span>
        </>
      )}
    </motion.button>
  );
}
