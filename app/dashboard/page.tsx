"use client";
import LegalUserDashboard from "@/components/LegalUserDashboard";
import RealUserDashboard from "@/components/RealUserDashboard";
import { RootState } from "@/store/store";
import { setUser } from "@/store/typeUserSlice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/hooks/useAppDispatch";

// 09365551122  حقوقی
// 09365551121 حقیقی
export default function Dashboard() {
  const dispatch = useAppDispatch();
  const typeUser = useSelector((state: RootState) => state.type.typeUser);
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);

  // Update typeUser based on userInfo when it's loaded
  useEffect(() => {
    if (userInfo && userInfo.user_type !== typeUser) {
      dispatch(setUser(userInfo.user_type));
    }
  }, [userInfo, typeUser, dispatch]);

  console.log("typeUser:", typeUser);
  console.log("userInfo:", userInfo);

  return (
    <div className="w-full">
      {typeUser === "individual" ? (
        <RealUserDashboard />
      ) : (
        <LegalUserDashboard />
      )}
    </div>
  );
}