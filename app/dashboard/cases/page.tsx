"use client";

import React, { useState, useEffect } from "react";
import CaseRegistration from "@/components/CaseRegistration";

import {
  CiFileOn,
  CiEdit,
  CiTrash,
  CiCalendar,
  CiSearch,
} from "react-icons/ci";
import {
  FaFileAlt,
  FaPlus,
  FaGavel,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaArrowLeft,
} from "react-icons/fa";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getCases } from "@/store/caseThunks";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function Cases() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  const { cases, loading, success, error } = useSelector(
    (state: RootState) => state.cases
  );

  //   بارگذاری پرونده‌ها هنگام mount
  useEffect(() => {
    dispatch(getCases());
  }, [dispatch]);

  // گزینه‌های دسته‌بندی
  const categoryOptions = [
    {
      value: 0,
      label: "کیفری",
      color: "text-red-500",
      bgColor: "bg-red-100 dark:bg-red-900/20",
    },
    {
      value: 1,
      label: "حقوقی",
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      value: 2,
      label: "خانواده",
      color: "text-pink-500",
      bgColor: "bg-pink-100 dark:bg-pink-900/20",
    },
    {
      value: 3,
      label: "تجاری",
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900/20",
    },
    {
      value: 4,
      label: "اداری",
      color: "text-purple-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
  ];

  // اگر فرم ثبت پرونده نمایش داده شود
  if (showRegistration) {
    return (
      <div className="space-y-6">
        {/* Header با دکمه بازگشت */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 bg-white/20 rounded-xl transition-colors">
                <CiEdit className="text-xl" />
              </button>
              <div>
                <h1 className="text-2xl font-bold">ثبت پرونده جدید</h1>
                <p className="text-amber-100">
                  اطلاعات پرونده خود را وارد کنید
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() => setShowRegistration(false)}
                className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
              >
                <FaArrowLeft className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        <CaseRegistration setShowRegistration={setShowRegistration}/>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <FaFileAlt className="text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">پرونده‌های من</h1>
              <p className="text-amber-100">مدیریت و پیگیری پرونده‌های حقوقی</p>
            </div>
          </div>
          <button
            onClick={() => setShowRegistration(true)}
            className="flex items-center gap-2 px-6 py-3 bg-white text-amber-600 rounded-xl hover:bg-amber-50 transition-colors font-medium"
          >
            <FaPlus className="text-lg" />
            ثبت پرونده جدید
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                کل پرونده‌ها
              </p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                X
              </p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <FaFileAlt className="text-white text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                در انتظار
              </p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                X
              </p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <FaClock className="text-white text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                در جریان
              </p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                X
              </p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <FaGavel className="text-white text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                تمام شده
              </p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                X
              </p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <FaCheckCircle className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 text-xl" />
              <input
                type="text"
                placeholder="جستجو در پرونده‌ها..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="md:w-64">
            <select
              value={selectedCategory || ""}
              onChange={(e) =>
                setSelectedCategory(
                  e.target.value ? parseInt(e.target.value) : null
                )
              }
              className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
            >
              <option value="">همه دسته‌ها</option>
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Cases List */}
      <div className="space-y-4">
        {loading ? (
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-8 shadow-lg text-center">
            <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-zinc-600 dark:text-zinc-400">
              در حال بارگذاری پرونده‌ها...
            </p>
          </div>
        ) : error ? (
          <div className="bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-600 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl">
            <div className="flex items-center gap-2">
              <FaExclamationTriangle className="text-lg" />
              <span>{error}</span>
            </div>
          </div>
        ) : cases.length === 0 ? (
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-8 shadow-lg text-center">
            <FaFileAlt className="text-6xl text-zinc-300 dark:text-zinc-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              {searchTerm || selectedCategory !== null
                ? "پرونده‌ای یافت نشد"
                : "هنوز پرونده‌ای ثبت نکرده‌اید"}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              {searchTerm || selectedCategory !== null
                ? "لطفاً فیلترهای جستجو را تغییر دهید"
                : "برای شروع، اولین پرونده خود را ثبت کنید"}
            </p>
            {!searchTerm && selectedCategory === null && (
              <button
                onClick={() => setShowRegistration(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
              >
                <FaPlus className="text-lg" />
                ثبت اولین پرونده
              </button>
            )}
          </div>
        ) : (
          cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {caseItem.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {caseItem.category}
                    </span>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
                    {caseItem.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center gap-1">
                      <CiCalendar className="text-lg" />
                      <span>تاریخ ثبت</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CiFileOn className="text-lg" />
                      <span>{caseItem.attachments.length} فایل</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                    <CiEdit className="text-xl" />
                  </button>
                  <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                    <CiTrash className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
