"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getUserInfo } from "@/store/authThunks";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import LoadingSpinner from "./LoadingSpinner";
import { CiUser, CiPhone, CiEdit, CiCalendar } from "react-icons/ci";
import {
  FaBuilding,
  FaFileAlt,
  FaGavel,
  FaComments,
  FaChartBar,
  FaBell,
  FaCheckCircle,
} from "react-icons/fa";

export default function LegalUserDashboard() {
  const dispatch = useAppDispatch();
  const { userInfo, userInfoLoading, userInfoError } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  if (userInfoLoading) {
    return (
      <LoadingSpinner
        fullScreen={true}
        size="lg"
        text="در حال بارگذاری اطلاعات..."
      />
    );
  }

  if (userInfoError) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {userInfoError}
      </div>
    );
  }

  // Mock data for dashboard widgets
  const stats = [
    {
      icon: FaFileAlt,
      label: "پرونده‌های فعال",
      value: "12",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaGavel,
      label: "وکلای متصل",
      value: "3",
      color: "from-green-500 to-green-600",
    },
    {
      icon: FaComments,
      label: "پیام‌های جدید",
      value: "8",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: CiCalendar,
      label: "جلسات این هفته",
      value: "5",
      color: "from-amber-500 to-amber-600",
    },
  ];

  const recentActivities = [
    {
      icon: FaCheckCircle,
      text: "پرونده جدید ثبت شد",
      time: "2 ساعت پیش",
      color: "text-green-500",
    },
    {
      icon: FaComments,
      text: "پیام جدید از وکیل",
      time: "4 ساعت پیش",
      color: "text-blue-500",
    },
    {
      icon: CiCalendar,
      text: "جلسه فردا یادآوری شد",
      time: "1 روز پیش",
      color: "text-amber-500",
    },
    {
      icon: FaFileAlt,
      text: "مدرک جدید آپلود شد",
      time: "2 روز پیش",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              خوش آمدید، {userInfo?.first_name || "کاربر"} عزیز!
            </h1>
            <p className="text-amber-100">
              {userInfo?.user_type === "individual"
                ? "کاربر حقیقی"
                : "کاربر حقوقی"}{" "}
              - {userInfo?.phone_number}
            </p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <CiUser className="text-3xl" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div
                className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
              >
                <stat.icon className="text-white text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Info Card */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              اطلاعات کاربری
            </h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
              <CiEdit className="text-lg" />
              ویرایش
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                <CiPhone className="text-amber-500 text-xl" />
                <div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    شماره تلفن
                  </p>
                  <p className="font-medium text-zinc-900 dark:text-white">
                    {userInfo?.phone_number}
                  </p>
                </div>
              </div>

              {userInfo?.user_type === "individual" ? (
                <>
                  <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                    <CiUser className="text-blue-500 text-xl" />
                    <div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        نام
                      </p>
                      <p className="font-medium text-zinc-900 dark:text-white">
                        {userInfo?.first_name || "تعریف نشده"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                    <CiUser className="text-green-500 text-xl" />
                    <div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        نام خانوادگی
                      </p>
                      <p className="font-medium text-zinc-900 dark:text-white">
                        {userInfo?.last_name || "تعریف نشده"}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <FaBuilding className="text-purple-500 text-xl" />
                  <div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      نام شرکت
                    </p>
                    <p className="font-medium text-zinc-900 dark:text-white">
                      {userInfo?.company_name || "تعریف نشده"}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                <FaCheckCircle className="text-emerald-500 text-xl" />
                <div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    نوع کاربر
                  </p>
                  <p className="font-medium text-zinc-900 dark:text-white">
                    {userInfo?.user_type === "individual" ? "حقیقی" : "حقوقی"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
            فعالیت‌های اخیر
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <activity.icon className={`text-lg ${activity.color} mt-1`} />
                <div>
                  <p className="text-sm text-zinc-900 dark:text-white">
                    {activity.text}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
          دسترسی سریع
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-colors">
            <FaFileAlt className="text-2xl text-blue-500" />
            <span className="text-sm font-medium">پرونده جدید</span>
          </button>
          <button className="flex flex-col items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-colors">
            <FaGavel className="text-2xl text-green-500" />
            <span className="text-sm font-medium">جستجوی وکیل</span>
          </button>
          <button className="flex flex-col items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-colors">
            <FaComments className="text-2xl text-purple-500" />
            <span className="text-sm font-medium">پیام‌ها</span>
          </button>
          <button className="flex flex-col items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-colors">
            <FaChartBar className="text-2xl text-amber-500" />
            <span className="text-sm font-medium">گزارشات</span>
          </button>
        </div>
      </div>
    </div>
  );
}
