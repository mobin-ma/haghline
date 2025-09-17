"use client";
import { useDispatch } from "react-redux";
import { setMode } from "@/store/authSlice";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <footer className="bg-zinc-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start gap-4 max-w-sm">
          <h2 className="text-2xl font-bold text-white">حق‌لاین</h2>
          <p className="text-center md:text-right">
            پلتفرم آنلاین دسترسی به وکلا و مدیریت پرونده‌ها به صورت سریع، امن و
            شفاف.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-semibold text-white">لینک‌های مهم</h3>
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
            <h3 className="font-semibold text-white">حساب کاربری</h3>
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
          <h3 className="font-semibold text-white">ما را دنبال کنید</h3>
          <div className="flex gap-4 text-white text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500 transition-colors"
            >
              FaFacebookF
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-sky-400 transition-colors"
            >
              FaTwitter
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              FaInstagram
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
