"use client";

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { getUserInfo } from '@/store/authThunks';
import { useAppDispatch } from '@/hooks/useAppDispatch';

export default function RealUserDashboard() {
  const dispatch = useAppDispatch();
  const { userInfo, userInfoLoading, userInfoError } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  if (userInfoLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (userInfoError) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {userInfoError}
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            اطلاعات کاربر حقیقی
          </h1>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                شماره تلفن
              </label>
              <p className="text-lg text-gray-900 dark:text-white">{userInfo?.phone_number}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                نام
              </label>
              <p className="text-lg text-gray-900 dark:text-white">{userInfo?.first_name || 'تعریف نشده'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                نام خانوادگی
              </label>
              <p className="text-lg text-gray-900 dark:text-white">{userInfo?.last_name || 'تعریف نشده'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                نوع کاربر
              </label>
              <p className="text-lg text-gray-900 dark:text-white">حقیقی</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
