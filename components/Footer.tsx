"use client";
import { useDispatch } from "react-redux";
import { setMode } from "@/store/authSlice";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <footer className="bg-zinc-900 dark:bg-amber-600 text-gray-300 dark:text-zinc-800 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start gap-4 max-w-sm">
          <h2 className="text-2xl font-bold text-white dark:text-zinc-950">حق‌لاین</h2>
          <p className="text-center md:text-right">
            پلتفرم آنلاین دسترسی به وکلا و مدیریت پرونده‌ها به صورت سریع، امن و
            شفاف.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-semibold text-white dark:text-zinc-950">لینک‌های مهم</h3>
            <a href="#hero" className="hover:text-white transition-colors">
              خانه
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              ویژگی‌ها
            </a>
            <a href="#lawyers" className="hover:text-white transition-colors">
              ویترین وکلا
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              تماس با ما
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-semibold text-white dark:text-zinc-950">حساب کاربری</h3>
            <Link
              href="/authpage"
              onClick={() => dispatch(setMode("login"))}
              className="hover:text-white transition-colors"
            >
              ورود
            </Link>
            <Link
              href="/authpage"
              onClick={() => dispatch(setMode("signup"))}
              className="hover:text-white transition-colors"
            >
              ثبت‌نام
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="font-semibold text-white dark:text-zinc-950">ما را دنبال کنید</h3>
          <div className="flex gap-4 text-white text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500 transition-colors text-2xl text-white dark:text-zinc-800"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-sky-400 transition-colors text-2xl text-white dark:text-zinc-800"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors text-2xl text-white dark:text-zinc-800"
            >
              <FaInstagram /> 
            </a>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © 2025 حق‌لاین. تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
