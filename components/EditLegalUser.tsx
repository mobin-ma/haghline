"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateUserInfo, UserInfo } from "@/store/authThunks";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import LoadingSpinner from "./LoadingSpinner";
import LoadingButton from "./LoadingButton";

interface EditLegalUserProps {
  onClose: () => void;
}

export default function EditLegalUser({ onClose }: EditLegalUserProps) {
  const dispatch = useAppDispatch();
  const { userInfo, userInfoLoading, userInfoError } = useSelector(
    (state: RootState) => state.auth
  );
  const [formData, setFormData] = useState<Partial<UserInfo>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (userInfo) {
      setFormData({
        company_name: userInfo.company_name || "",
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
      <div className="bg-gray-200 dark:bg-zinc-800 rounded-lg p-8 min-h-[400px] flex flex-col justify-center">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            ویرایش اطلاعات کاربر حقوقی
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              نام شرکت
            </label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name || ""}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <LoadingButton
              type="submit"
              loading={isSubmitting}
              loadingText="در حال ذخیره..."
              className="flex-1 bg-green-500 border-2 border-green-500 hover:bg-transparent hover:text-green-500 cursor-pointer text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              ذخیره تغییرات
            </LoadingButton>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-rose-500 border-2 border-rose-500 hover:bg-transparent hover:text-rose-500 cursor-pointer text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              لغو
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
