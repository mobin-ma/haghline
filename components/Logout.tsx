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
    router.push("/login");
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="bg-rose-400 border-2 border-rose-600 text-rose-900 px-5 py-1 text-center"
      >
        حروج
      </button>
    </div>
  );
}
