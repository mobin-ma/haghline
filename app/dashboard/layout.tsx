"use client";
import Logout from "@/components/Logout";
import MenuToggle from "@/components/MenuToggle";
import Profile from "@/components/Profile";
import ProtectedRoute from "@/components/ProtectedRoute";
import ThemeToggle from "@/components/ThemeToggle";
import UserInfoAlert from "@/components/UserInfoAlert";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CiHome,
  CiSettings,
  CiFileOn,
  CiUser,
  CiBellOn,
  CiSearch,
} from "react-icons/ci";
import {
  FaGavel,
  FaComments,
  FaChartBar,
  FaBalanceScale,
} from "react-icons/fa";

// Metadata moved to page.tsx files

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const menuItems = [
    { icon: CiHome, label: "خانه", href: "/dashboard" },
    { icon: CiFileOn, label: "پرونده‌ها", href: "/dashboard/cases" },
    { icon: FaGavel, label: "وکلای من", href: "/dashboard/" },
    { icon: FaComments, label: "پیام‌ها", href: "/dashboard/" },
    { icon: FaChartBar, label: "گزارشات", href: "/dashboard/" },
    { icon: CiSettings, label: "تنظیمات", href: "/dashboard/" },
  ];

  return (
    <ProtectedRoute>
      <UserInfoAlert />
      <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-72 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-zinc-700/50 shadow-xl fixed right-0 top-0 h-full z-30">
          {/* Logo Section */}
          <div className="p-6 border-b border-slate-200/50 dark:border-zinc-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <FaBalanceScale className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                  حق‌لاین
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  داشبورد کاربری
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                        isActive
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-700 hover:text-amber-600 dark:hover:text-amber-400"
                      }`}
                    >
                      <item.icon
                        className={`text-lg ${
                          isActive
                            ? "text-white"
                            : "text-slate-500 dark:text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400"
                        }`}
                      />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-slate-200/50 dark:border-zinc-700/50">
            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-zinc-700/50 rounded-xl">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <CiUser className="text-white text-lg" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  کاربر عزیز
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  آنلاین
                </p>
              </div>
              <ThemeToggle />
            </div>
            <div className="mt-3">
              <Logout />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-h-screen lg:mr-72">
          {/* Header */}
          <header className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-zinc-700/50 shadow-sm fixed top-0 right-0 left-0 lg:right-72 z-20">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Mobile Menu & Title */}
                <div className="flex items-center gap-4">
                  <MenuToggle />
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                      داشبورد
                    </h1>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      خوش آمدید به پنل کاربری
                    </p>
                  </div>
                </div>

                {/* Search & Actions */}
                <div className="flex items-center gap-4">
                  {/* Search Bar */}
                  <div className="hidden md:flex items-center gap-2 bg-slate-100 dark:bg-zinc-700 rounded-xl px-4 py-2 min-w-[300px]">
                    <CiSearch className="text-slate-500 dark:text-slate-400" />
                    <input
                      type="text"
                      placeholder="جستجو در داشبورد..."
                      className="bg-transparent border-none outline-none text-slate-700 dark:text-slate-300 placeholder-slate-500 dark:placeholder-slate-400 flex-1"
                    />
                  </div>

                  {/* Notifications */}
                  <button className="relative p-2 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                    <CiBellOn className="text-xl" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                  </button>

                  {/* Profile */}
                  <Profile />
                </div>
              </div>
            </div>
          </header>

          {/* Content Area */}
          <div className="flex-1 p-6 pt-24">
            <div className="max-w-7xl mx-auto">{children}</div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
