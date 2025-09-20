import Logout from "@/components/Logout";
import MenuToggle from "@/components/MenuToggle";
import Profile from "@/components/Profile";
import ProtectedRoute from "@/components/ProtectedRoute";
import ThemeToggle from "@/components/ThemeToggle";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { CiFileOn, CiHome, CiSettings } from "react-icons/ci";

export const metadata: Metadata = {
  title: "حق‌لاین — داشبورد",
  description: "دسترسی ساده و مطمئن به وکلا و کارشناسان حقوقی",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <aside className="hidden md:flex flex-col justify-between items-start gap-10 overflow-hidden group w-20 hover:w-64 hover:p-10 transition-all p-5 bg-zinc-800 dark:bg-amber-500 text-white dark:text-zinc-900">
          <ThemeToggle />
          <ul className="w-full h-full flex flex-col justify-center items-start gap-5 ">
            <li className="flex justify-start items-center gap-3 hover:text-zinc-400 dark:hover:text-amber-700 hover:text-3xl transition-all cursor-pointer">
              <CiHome className="text-base md:text-4xl" />
              <p className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                خانه
              </p>
            </li>
            <li className="flex justify-start items-center gap-3 hover:text-zinc-400 dark:hover:text-amber-700 hover:text-3xl transition-all cursor-pointer">
              <CiSettings className="text-base md:text-4xl" />
              <p className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                تنظیمات
              </p>
            </li>
            <li className="flex justify-start items-center gap-3 hover:text-zinc-400 dark:hover:text-amber-700 hover:text-3xl transition-all cursor-pointer">
              <CiFileOn className="text-base md:text-4xl" />
              <p className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                گزارشات
              </p>
            </li>
          </ul>
          <Logout />
        </aside>

        <main className="w-full relative overflow-auto flex-1 bg-gray-100 dark:bg-zinc-900">
          <header className="w-full sticky top-0 left-0 bg-gray-500/10 dark:bg-zinc-900/10 backdrop-blur flex justify-between items-center p-5 shadow-lg shadow-gray-500/10 dark:shadow-zinc-900/10">
            <div className="w-full flex items-center bg-gray-300 dark:bg-zinc-800 p-7 rounded-2xl shadow-lg shadow-gray-500/50 dark:shadow-zinc-950/50">
              <div className="w-full md:hidden z-50">
                <MenuToggle />
              </div>
              <div className="w-full flex items-center">
                <h2 className="text-lg lg:text-3xl font-bold">داشبورد کاربر</h2>
              </div>
              <div className="relative w-full flex items-center justify-end">
                <Profile />
              </div>
            </div>
          </header>

          <div className="w-full p-5">{children}</div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
