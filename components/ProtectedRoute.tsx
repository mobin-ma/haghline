"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const token = useSelector((state: RootState) => state.auth.token);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !token) {
      router.push("/authpage");
    }
  }, [token, router, isClient]);

  // Show loading during hydration
  if (!isClient) {
    return <LoadingSpinner size="lg" text="در حال بارگذاری..." fullScreen={true} />;
  }

  if (!token) return null;

  return <>{children}</>;
}
