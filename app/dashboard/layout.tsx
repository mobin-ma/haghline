import Logout from "@/components/Logout";
import ProtectedRoute from "@/components/ProtectedRoute";
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
        <aside className="w-64 bg-zinc-800 text-white p-5">
          <h2 className="text-xl font-bold mb-4">منوی داشبورد</h2>
          <ul className="space-y-2">
            <li>پروفایل</li>
            <li>تنظیمات</li>
            <li>گزارش‌ها</li>
          </ul>
          <Logout />
        </aside>

        <main className="flex-1 bg-gray-100 p-8">
          <header className="mb-6">
            <h1 className="text-2xl font-bold">داشبورد</h1>
          </header>

          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
