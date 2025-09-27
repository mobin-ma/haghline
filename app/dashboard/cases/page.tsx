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
import { getCases, getCategories } from "@/store/caseThunks";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import CaseAlert from "@/components/CaseAlert";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Cases() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error">("success");

  const dispatch = useAppDispatch();
  const { cases, categories, loading, success, error } = useSelector(
    (state: RootState) => state.cases
  );

  //   بارگذاری پرونده‌ها و دسته‌بندی‌ها هنگام mount
  useEffect(() => {
    dispatch(getCases());
    dispatch(getCategories());
  }, [dispatch]);

  // نمایش Alert برای success/error
  useEffect(() => {
    if (success) {
      setAlertType("success");
      setAlertMessage("پرونده‌ها با موفقیت بارگذاری شدند");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    }
    if (error) {
      setAlertType("error");
      setAlertMessage(error);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    }
  }, [success, error]);

  // گزینه‌های دسته‌بندی از Redux
  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
    color: "text-amber-500",
    bgColor: "bg-amber-100 dark:bg-amber-900/20",
  }));

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

        <CaseRegistration setShowRegistration={setShowRegistration} />
      </div>
    );
  }

  return (
    <div className="w-1/2 md:w-2/3 lg:w-full md:mx-auto space-y-6">
      {/* Case Alert */}
      <CaseAlert
        type={alertType}
        message={alertMessage}
        show={showAlert}
        onClose={() => setShowAlert(false)}
      />
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-4 md:p-6 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaFileAlt className="text-xl md:text-2xl" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-xl md:text-2xl font-bold truncate">
                پرونده‌های من
              </h1>
              <p className="text-amber-100 text-sm md:text-base">
                مدیریت و پیگیری پرونده‌های حقوقی
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowRegistration(true)}
            className="flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white text-amber-600 rounded-xl hover:bg-amber-50 transition-colors font-medium text-sm md:text-base w-full sm:w-auto"
          >
            <FaPlus className="text-base md:text-lg" />
            <span className="hidden sm:inline">ثبت پرونده جدید</span>
            <span className="sm:hidden">ثبت جدید</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mb-1 truncate">
                کل پرونده‌ها
              </p>
              <p className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                X
              </p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaFileAlt className="text-white text-lg md:text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mb-1 truncate">
                در انتظار
              </p>
              <p className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                X
              </p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaClock className="text-white text-lg md:text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mb-1 truncate">
                در جریان
              </p>
              <p className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                X
              </p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaGavel className="text-white text-lg md:text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mb-1 truncate">
                تمام شده
              </p>
              <p className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                X
              </p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaCheckCircle className="text-white text-lg md:text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
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
          <div className="w-full sm:w-auto sm:min-w-48">
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
          <LoadingSpinner
            size="sm"
            text="در حال بارگذاری پرونده‌ها..."
            fullScreen={false}
          />
        ) : cases.length === 0 ? (
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 md:p-8 shadow-lg text-center">
            <FaFileAlt className="text-4xl md:text-6xl text-zinc-300 dark:text-zinc-600 mx-auto mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white mb-2">
              {searchTerm || selectedCategory !== null
                ? "پرونده‌ای یافت نشد"
                : "هنوز پرونده‌ای ثبت نکرده‌اید"}
            </h3>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mb-4 md:mb-6">
              {searchTerm || selectedCategory !== null
                ? "لطفاً فیلترهای جستجو را تغییر دهید"
                : "برای شروع، اولین پرونده خود را ثبت کنید"}
            </p>
            {!searchTerm && selectedCategory === null && (
              <button
                onClick={() => setShowRegistration(true)}
                className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                <FaPlus className="text-base md:text-lg" />
                ثبت اولین پرونده
              </button>
            )}
          </div>
        ) : (
          cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white truncate">
                      {caseItem.title}
                    </h3>
                    <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 w-fit">
                      {caseItem.category}
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
                    {caseItem.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center gap-1">
                      <CiCalendar className="text-base md:text-lg" />
                      <span>تاریخ ثبت</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CiFileOn className="text-base md:text-lg" />
                      <span>{caseItem.attachments.length} فایل</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-start">
                  <button className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                    <CiEdit className="text-lg md:text-xl" />
                  </button>
                  <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                    <CiTrash className="text-lg md:text-xl" />
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
