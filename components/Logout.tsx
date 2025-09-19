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
        className=" text-rose-600 font-bold text-center"
      >
        حروج
      </button>
    </div>
  );
}
