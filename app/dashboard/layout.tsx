import Logout from "@/components/Logout";
import MenuToggle from "@/components/MenuToggle";
import ProtectedRoute from "@/components/ProtectedRoute";
import ThemeToggle from "@/components/ThemeToggle";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "حق‌لاین — داشبورد",
  description: "دسترسی ساده و مطمئن به وکلا و کارشناسان حقوقی",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  
  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        <div className="md:hidden fixed top-5 right-5">
          <MenuToggle />
        </div>
        <aside className="hidden md:block w-64 bg-zinc-800 dark:bg-amber-500 text-white dark:text-zinc-900 p-5">
          <h2 className="text-xl font-bold mb-4">منوی داشبورد</h2>
          <ul className="space-y-2">
            <li>پروفایل</li>
            <li>تنظیمات</li>
            <li>گزارش‌ها</li>
          </ul>
          <Logout />
          <ThemeToggle />
        </aside>

        <main className="w-full flex-1 bg-gray-100 dark:bg-zinc-900 p-3 mt-10 md:mt-0 md:p-8">
          <header className="mb-6">
            <h1 className="text-2xl font-bold">داشبورد</h1>
          </header>

          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
