import UserDashboard from "@/components/UserDashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حق‌لاین — داشبورد",
  description: "دسترسی ساده و مطمئن به وکلا و کارشناسان حقوقی",
};

export default function Dashboard() {
  return (
    <div className="w-full">
      <UserDashboard />
    </div>
  );
}
