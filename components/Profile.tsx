"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getUserInfo, UserInfo } from "@/store/authThunks";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import EditRealUser from "./EditRealUser";
import EditLegalUser from "./EditLegalUser";
import { FaUser, FaBuilding, FaPhone, FaEdit, FaTimes } from "react-icons/fa";

export default function Profile() {
  const dispatch = useAppDispatch();
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [showEditList, setShowEditList] = useState(false);
  const [showEditPage, setShowEditPage] = useState(false);

  useEffect(() => {
    if (!userInfo) {
      dispatch(getUserInfo());
    }
  }, [dispatch, userInfo]);

  const getInitials = (userInfo: UserInfo | undefined) => {
    if (!userInfo) return "U";

    if (userInfo.user_type === "legal" && userInfo.company_name) {
      return userInfo.company_name.charAt(0).toUpperCase();
    } else if (userInfo.first_name && userInfo.last_name) {
      return (
        userInfo.first_name.charAt(0) + userInfo.last_name.charAt(0)
      ).toUpperCase();
    } else if (userInfo.first_name) {
      return userInfo.first_name.charAt(0).toUpperCase();
    }

    return "U";
  };

  const getDisplayName = (userInfo: UserInfo | undefined) => {
    if (!userInfo) return "کاربر";

    if (userInfo.user_type === "legal" && userInfo.company_name) {
      return userInfo.company_name;
    } else if (userInfo.first_name && userInfo.last_name) {
      return `${userInfo.first_name} ${userInfo.last_name}`;
    } else if (userInfo.first_name) {
      return userInfo.first_name;
    }

    return "کاربر";
  };

  const handleEditClick = () => {
    setShowEditList(false);
    setShowEditPage(true);
  };

  const handleCloseEdit = () => {
    setShowEditPage(false);
  };

  return (
    <>
      {/* Profile Button */}
      <div className="relative">
        <motion.button
          className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-700 transition-colors"
          onClick={() => setShowEditList((prev) => !prev)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            {getInitials(userInfo)}
          </div>
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium text-slate-900 dark:text-white">
              {getDisplayName(userInfo)}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {userInfo?.user_type === "legal" ? "کاربر حقوقی" : "کاربر حقیقی"}
            </p>
          </div>
        </motion.button>

        {/* Profile Dropdown */}
        <AnimatePresence>
          {showEditList && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40"
                onClick={() => setShowEditList(false)}
              />

              {/* Dropdown */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-0 top-full mt-2 w-80 bg-white dark:bg-zinc-800 rounded-xl shadow-xl border border-slate-200 dark:border-zinc-700 z-50 overflow-hidden"
              >
                {/* Header */}
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                      {getInitials(userInfo)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        {getDisplayName(userInfo)}
                      </h3>
                      <p className="text-blue-100 text-sm">
                        {userInfo?.user_type === "legal"
                          ? "کاربر حقوقی"
                          : "کاربر حقیقی"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  {/* Phone Number */}
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-zinc-700/50 rounded-lg">
                    <FaPhone className="text-slate-500 dark:text-slate-400 text-sm" />
                    <div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        شماره تلفن
                      </p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        {userInfo?.phone_number || "نامشخص"}
                      </p>
                    </div>
                  </div>

                  {/* User Type */}
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-zinc-700/50 rounded-lg">
                    {userInfo?.user_type === "legal" ? (
                      <FaBuilding className="text-slate-500 dark:text-slate-400 text-sm" />
                    ) : (
                      <FaUser className="text-slate-500 dark:text-slate-400 text-sm" />
                    )}
                    <div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        نوع کاربر
                      </p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        {userInfo?.user_type === "legal" ? "حقوقی" : "حقیقی"}
                      </p>
                    </div>
                  </div>

                  {/* Edit Button */}
                  <motion.button
                    onClick={handleEditClick}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white rounded-lg font-medium text-sm transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaEdit className="text-sm" />
                    <span>ویرایش اطلاعات</span>
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Edit Modal */}
      <AnimatePresence>
        {showEditPage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 min-h-screen bg-black/80 backdrop-blur z-50"
              onClick={handleCloseEdit}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed left-1/2 top-4/5 -translate-x-1/2 translate-y-0 w-full max-w-2xl max-h-[90vh] bg-white dark:bg-zinc-800 rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-zinc-700 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-zinc-700 dark:to-zinc-800">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  ویرایش اطلاعات
                </h2>
                <motion.button
                  onClick={handleCloseEdit}
                  className="w-8 h-8 bg-slate-200 dark:bg-zinc-600 hover:bg-slate-300 dark:hover:bg-zinc-500 rounded-lg flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="text-slate-600 dark:text-slate-300 text-sm" />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {userInfo?.user_type === "individual" ? (
                  <EditRealUser onClose={handleCloseEdit} />
                ) : (
                  <EditLegalUser onClose={handleCloseEdit} />
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
