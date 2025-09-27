import React from "react";
import { FaCheckCircle, FaExclamationTriangle, FaTimes } from "react-icons/fa";

interface CaseAlertProps {
  type: "success" | "error";
  message: string;
  onClose?: () => void;
  show?: boolean;
}

export default function CaseAlert({
  type,
  message,
  onClose,
  show = true,
}: CaseAlertProps) {
  if (!show) return null;

  const getAlertStyles = () => {
    switch (type) {
      case "success":
        return {
          container:
            "bg-green-100 dark:bg-green-900/80 backdrop-blur border-green-300 dark:border-green-600",
          text: "text-green-700 dark:text-green-400",
          icon: "text-green-500",
          IconComponent: FaCheckCircle,
        };
      case "error":
        return {
          container:
            "bg-red-100 dark:bg-red-900/80 backdrop-blur border-red-300 dark:border-red-600",
          text: "text-red-700 dark:text-red-400",
          icon: "text-red-500",
          IconComponent: FaExclamationTriangle,
        };
      default:
        return {
          container:
            "bg-gray-100 dark:bg-gray-900/20 border-gray-300 dark:border-gray-600",
          text: "text-gray-700 dark:text-gray-400",
          icon: "text-gray-500",
          IconComponent: FaExclamationTriangle,
        };
    }
  };

  const styles = getAlertStyles();
  const { IconComponent } = styles;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-md w-full mx-4 animate-in slide-in-from-right duration-300">
      <div className={`rounded-xl border-2 p-4 shadow-lg ${styles.container}`}>
        <div className="flex items-start gap-3">
          <IconComponent className={`text-lg mt-0.5 ${styles.icon}`} />
          <div className="flex-1">
            <p className={`font-medium ${styles.text}`}>{message}</p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className={`p-1 rounded-lg hover:bg-black/10 transition-colors ${styles.text}`}
            >
              <FaTimes className="text-sm" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
