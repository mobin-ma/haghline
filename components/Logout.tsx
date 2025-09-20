"use client";
import { logout } from "@/store/authSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

export default function Logout() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/authpage");
  };
  return (
      <button
        onClick={handleLogout}
        className="bg-rose-600 w-full md:w-14 h-8 rounded-lg flex justify-center items-center border-2 border-rose-600 text-white hover:bg-transparent hover:text-rose-600 transition-colors cursor-pointer p-3 font-bold text-center text-base shadow-lg shadow-zinc-950/30"
      >
        خروج
      </button>
  );
}
