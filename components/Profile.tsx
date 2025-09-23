"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getUserInfo, UserInfo } from "@/store/authThunks";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import EditRealUser from "./EditRealUser";
import EditLegalUser from "./EditLegalUser";

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
      <button
        className="w-9 h-9 hover:text-5xl hover:bg-transparent hover:text-shadow-lg hover:text-shadow-black/50 transition-all bg-blue-600 text-white rounded-full flex justify-center items-center text-lg cursor-pointer font-bold"
        onClick={() => setShowEditList((prev) => !prev)}
      >
        {getInitials(userInfo)}
      </button>

      <AnimatePresence>
        {showEditList && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowEditList((prev) => !prev)}
            className="absolute left-10 -bottom-40 bg-gray-300 dark:bg-zinc-900 p-5 rounded-lg shadow-lg shadow-gray-500/50 dark:shadow-zinc-950/50 z-50 min-w-[200px]"
          >
            <div className="space-y-2">
              <div className="border-b border-gray-400 dark:border-zinc-700 pb-2">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {getDisplayName(userInfo)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {userInfo?.user_type === "legal"
                    ? "کاربر حقوقی"
                    : "کاربر حقیقی"}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  📞 {userInfo?.phone_number || "نامشخص"}
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleEditClick}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors text-sm font-medium"
                >
                  ✏️ ویرایش اطلاعات
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showEditPage && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-[260%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 z-50 overflow-y-auto shadow-lg rounded-lg"
          >
            <div className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-700 p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                ویرایش اطلاعات
              </h2>
              <button
                onClick={handleCloseEdit}
                className="w-8 h-8 bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {userInfo?.user_type === "individual" ? (
                <EditRealUser onClose={handleCloseEdit} />
              ) : (
                <EditLegalUser onClose={handleCloseEdit} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
