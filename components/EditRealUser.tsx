"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateUserInfo, UserInfo } from "@/store/authThunks";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import LoadingSpinner from "./LoadingSpinner";
import LoadingButton from "./LoadingButton";

interface EditRealUserProps {
  onClose: () => void;
}

export default function EditRealUser({ onClose }: EditRealUserProps) {
  const dispatch = useAppDispatch();
  const { userInfo, userInfoLoading, userInfoError } = useSelector(
    (state: RootState) => state.auth
  );
  const [formData, setFormData] = useState<Partial<UserInfo>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (userInfo) {
      setFormData({
        first_name: userInfo.first_name || "",
        last_name: userInfo.last_name || "",
      });
    }
  }, [userInfo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await dispatch(updateUserInfo(formData)).unwrap();
      onClose(); // بستن صفحه بعد از موفقیت
    } catch (error) {
      console.error("خطا در به‌روزرسانی:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (userInfoLoading) {
    return <LoadingSpinner size="md" text="در حال بارگذاری..." />;
  }

  if (userInfoError) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {userInfoError}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="bg-white/5 dark:bg-zinc-800/5 backdrop-blur-sm rounded-lg shadow-lg p-8 min-h-[400px] flex flex-col justify-center border border-white/10 dark:border-zinc-700/20">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            ویرایش اطلاعات کاربر حقیقی
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                نام
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name || ""}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/10 dark:bg-zinc-700/20 border border-white/20 dark:border-zinc-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                نام خانوادگی
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name || ""}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/10 dark:bg-zinc-700/20 border border-white/20 dark:border-zinc-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <LoadingButton
              type="submit"
              loading={isSubmitting}
              loadingText="در حال ذخیره..."
              className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              ذخیره تغییرات
            </LoadingButton>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              لغو
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
