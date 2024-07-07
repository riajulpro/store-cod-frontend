"use client";
import { useGetAuthorQuery } from "@/redux/features/user/user.api";
import { useAppSelector } from "@/redux/hook";
import { Loader } from "lucide-react";
import React from "react";
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAppSelector((state) => state.auth);

  const { data, isSuccess, isError, isLoading } = useGetAuthorQuery(
    token || ""
  );

  if (isLoading) {
    return (
      <div className="w-[100vw] center pt-[100px]">
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthProvider;
