"useClient";

import React, { useState } from "react";
import { CaseDataPost, createCase } from "@/store/caseThunks";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  FaSave,
  FaUpload,
  FaLock,
} from "react-icons/fa";
import CaseAlert from "@/components/CaseAlert";
import LoadingSpinner from "./LoadingSpinner";
import LoadingButton from "./LoadingButton";

export default function CaseRegistration({
  setShowRegistration,
}: {
  setShowRegistration: (show: boolean) => void;
}) {
  const [formData, setFormData] = useState<CaseDataPost>({
    title: "",
    category: 1 || 0,
    description: "",
    hidden_char: [],
    files: [],
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error">("success");

  const dispatch = useAppDispatch();
  const { categories, loading } = useSelector(
    (state: RootState) => state.cases
  );
  console.log(formData);
  

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData({ ...formData, files: files.map((file) => file.name) });
  };

  const handleHiddenCharChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      hidden_char: value
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item),
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await dispatch(createCase(formData));
      if (createCase.fulfilled.match(result)) {
        setAlertType("success");
        setAlertMessage("پرونده با موفقیت ثبت شد");
        setShowAlert(true);
        // Reset form
        setFormData({
          title: "",
          category: 1 || 0,
          description: "",
          hidden_char: [],
          files: [],
        });
        // Navigate back to Cases page after 2 seconds
        setTimeout(() => {
          setShowRegistration(false);
        }, 2000);
      } else if (createCase.rejected.match(result)) {
        setAlertType("error");
        setAlertMessage((result.payload as string) || "خطا در ثبت پرونده");
        setShowAlert(true);
      }
    } catch (error) {
      setAlertType("error");
      setAlertMessage("خطای نامشخص در ثبت پرونده");
      setShowAlert(true);
    }
  };

  if (loading) {
    return <LoadingSpinner size="lg" text="در حال ثبت پرونده..." fullScreen={false} />;
  }

  return (
    <div className="space-y-6">
      {/* Case Alert */}
      <CaseAlert
        type={alertType}
        message={alertMessage}
        show={showAlert}
        onClose={() => setShowAlert(false)}
      />
      {/* Form */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              عنوان پرونده
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="عنوان پرونده خود را وارد کنید"
              className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              دسته‌بندی
            </label>
            <div className="space-y-3">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                required
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              توضیحات
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="توضیحات کامل پرونده را وارد کنید"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:border-amber-500 dark:focus:border-amber-400 transition-colors resize-none"
              required
            />
          </div>

          {/* Hidden Characters */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              <div className="flex items-center gap-2">
                <FaLock className="text-amber-500" />
                اطلاعات حساس
              </div>
            </label>
            <input
              type="text"
              name="hidden_char"
              value={formData.hidden_char.join(", ")}
              onChange={handleHiddenCharChange}
              placeholder="اطلاعات حساس را با کاما جدا کنید (اختیاری)"
              className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              <div className="flex items-center gap-2">
                <FaUpload className="text-amber-500" />
                فایل‌های ضمیمه
              </div>
            </label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:border-amber-500 dark:focus:border-amber-400 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
            />
            {formData.files.length > 0 && (
              <div className="mt-2">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  فایل‌های انتخاب شده: {formData.files.join(", ")}
                </p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <LoadingButton
              type="submit"
              loading={loading}
              loadingText="در حال ثبت پرونده..."
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl font-medium"
            >
              <FaSave className="text-lg" />
              ثبت پرونده
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
}
