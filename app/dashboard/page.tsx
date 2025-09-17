"use client";
import LegalUserDashboard from "@/components/LegalUserDashboard";
import RealUserDashboard from "@/components/RealUserDashboard";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
// 09365551122  حقوقی
// 09365551121 حقیقی
export default function Dashboard() {
  const typeUser = useSelector((state: RootState) => state.type.typeUser);
  console.log(typeUser);

  return (
    <div>
      {typeUser === "individual" ? (
        <RealUserDashboard />
      ) : (
        <LegalUserDashboard />
      )}
    </div>
  );
}