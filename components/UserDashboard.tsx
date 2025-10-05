"use client";

import React, { useState, useEffect } from "react";
import CaseRegistration from "@/components/CaseRegistration";

import {
  CiFileOn,
  CiEdit,
  CiTrash,
  CiCalendar,
  CiSearch,
  CiUser,
} from "react-icons/ci";
import {
  FaFileAlt,
  FaPlus,
  FaGavel,
  FaCheckCircle,
  FaClock,
  FaArrowLeft,
} from "react-icons/fa";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getCases, getCategories, getCaseById } from "@/store/caseThunks";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import CaseAlert from "@/components/CaseAlert";
import LoadingSpinner from "@/components/LoadingSpinner";
import { IoMdSend } from "react-icons/io";
import { BsPaperclip } from "react-icons/bs";

export default function Cases() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showCaseId, setShowCaseId] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error">("success");

  const dispatch = useAppDispatch();
  const { cases, caseId, categories, loading, success, error } = useSelector(
    (state: RootState) => state.cases
  );
  const { userInfo } = useSelector((state: RootState) => state.auth);

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

  // نماش دادن هر پرونده با id مربوطه
  const handleCaseById = (caseId: number) => {
    setShowCaseId(true);
    dispatch(getCaseById(caseId));
  };

  // اگر فرم ثبت پرونده نمایش داده شود
  if (showRegistration) {
    return (
      <div className="space-y-6 mt-3">
        {/* Header با دکمه بازگشت */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl p-6 text-white shadow-xl">
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

  if (showCaseId) {
    return (
      <div className="space-y-6 mt-3">
        {/* Header با دکمه بازگشت */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 bg-white/20 rounded-xl transition-colors">
                <FaClock className="text-xl" />
              </button>
              <div>
                <h1 className="text-2xl font-bold">در انتظار</h1>
              </div>
            </div>
            <div>
              <button
                onClick={() => setShowCaseId(false)}
                className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
              >
                <FaArrowLeft className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <LoadingSpinner size="sm" text="درحال بارگذاری..." fullScreen={false} />
        ) : (
          <>
            {/* Main */}
            <div className="w-full bg-sky-100 dark:bg-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-5 p-6 rounded-2xl shadow-lg">
              <div className="w-full flex flex-col gap-2">
                <h3 className="text-xl text-sky-500">عنوان</h3>
                <p className="pr-10 text-gray-400">{caseId.title}</p>
              </div>
              <div className="w-full flex flex-col gap-2">
                <h3 className="text-xl text-sky-500">دست بندی</h3>
                <p className="pr-10 text-gray-400">{caseId.category}</p>
              </div>
              <div className="w-full flex flex-col gap-2 col-span-full">
                <h3 className="text-xl text-sky-500">توضیحات</h3>
                <p className="pr-10 text-gray-400">{caseId.description}</p>
              </div>
            </div>

            {/* Chat */}
            <div className="w-full bg-sky-100 dark:bg-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-5 shadow-lg">
              <div className="w-full overflow-auto flex flex-col items-start justify-center">
                <div className="w-1/6 rounded-3xl p-3 bg-gradient-to-l to-sky-400 from-blue-400 dark:to-sky-500 dark:from-blue-500">
                  <h3 className="text-sm text-sky-400 mb-2">کاربر</h3>
                  <p className="text-white mr-2">سلام</p>
                </div>
                <div className="w-1/6 rounded-3xl p-3 bg-gradient-to-l to-sky-400 from-blue-400 dark:to-sky-500 dark:from-blue-500 self-end">
                  <h3 className="text-sm text-sky-400 mb-2">وکیل</h3>
                  <p className="text-white mr-2">سلام</p>
                </div>
                <div className="w-1/6 rounded-3xl p-3 bg-gradient-to-l to-sky-400 from-blue-400 dark:to-sky-500 dark:from-blue-500">
                  <h3 className="text-sm text-sky-400 mb-2">کاربر</h3>
                  <p className="text-white mr-2">خوبی هستید</p>
                </div>
                <div className="w-1/6 rounded-3xl p-3 bg-gradient-to-l to-sky-400 from-blue-400 dark:to-sky-500 dark:from-blue-500 self-end">
                  <h3 className="text-sm text-sky-400 mb-2">وکیل</h3>
                  <p className="text-white mr-2">ممنون</p>
                </div>
                <div className="w-1/2 rounded-3xl p-3 bg-gradient-to-l to-sky-400 from-blue-400 dark:to-sky-500 dark:from-blue-500">
                  <h3 className="text-sm text-sky-400 mb-2">کاربر</h3>
                  <p className="w-full text-nowrap text-white mr-2">
                    این پرونده من هست، میشه بررسی کنید و به منو کمک کنید؟
                  </p>
                </div>
                <div className="w-1/3 rounded-3xl p-3 bg-gradient-to-l to-sky-400 from-blue-400 dark:to-sky-500 dark:from-blue-500 self-end">
                  <h3 className="text-sm text-sky-400 mb-2">وکیل</h3>
                  <p className="w-full text-nowrap text-white mr-2">
                    بله لطفا فایل های مربوط را ارسال کنید
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-full flex items-center justify-between">
                <button className="w-14 h-14 bg-gradient-to-bl to-sky-600 from-blue-600 rounded-full flex items-center justify-center">
                  <IoMdSend className="text-white" />
                </button>
                <form className="flex items-center flex-1 px-5">
                  <input
                    type="text"
                    className="bg-transparent flex-1"
                    placeholder="بنویسید..."
                  />
                  <BsPaperclip />
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="mx-auto space-y-6 mt-3">
      {/* Case Alert */}
      <CaseAlert
        type={alertType}
        message={alertMessage}
        show={showAlert}
        onClose={() => setShowAlert(false)}
      />
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              خوش آمدید، {userInfo?.first_name || "کاربر"} عزیز!
            </h1>
            <p className="text-sky-100">
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

      <button
        onClick={() => setShowRegistration(true)}
        className="fixed bottom-0 left-5 z-20 w-10 md:w-16 h-10 md:h-16 flex items-center justify-center bg-sky-200 text-sky-600 rounded-full hover:bg-sky-100 transition-colors font-medium text-sm md:text-base"
      >
        <FaPlus className="text-base md:text-xl" />
      </button>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-sky-200/50 dark:bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg">
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

        <div className="bg-sky-200/50 dark:bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg">
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

        <div className="bg-sky-200/50 dark:bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg">
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

        <div className="bg-sky-200/50 dark:bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg">
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
      <div className="bg-sky-200/50 dark:bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg">
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
                className="w-full pr-10 pl-4 py-3 rounded-xl border-2 border-sky-200 dark:border-zinc-600 bg-sky-200/50 dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-sky-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-sky-500 transition-colors"
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
              className="w-full px-4 py-3 rounded-xl border-2 border-sky-200 dark:border-zinc-600 bg-sky-200/50 dark:bg-zinc-700 text-zinc-900 dark:text-white focus:border-sky-500 dark:focus:border-sky-400 transition-colors"
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
          <div className="bg-sky-200/50 dark:bg-zinc-800 rounded-xl p-6 md:p-8 shadow-lg text-center">
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
                className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-xl hover:from-sky-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl text-sm md:text-base"
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
              onClick={() => handleCaseById(caseItem.id)}
              className="bg-sky-200/50 dark:bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white truncate">
                      {caseItem.title}
                    </h3>
                    <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-sky-100 dark:bg-sky-900/20 text-sky-700 dark:text-sky-400 w-fit">
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
