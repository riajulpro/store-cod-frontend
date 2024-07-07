"use client";
import Loading from "@/app/loading";
import { useGetAuthorQuery } from "@/redux/features/user/user.api";
import { useAppSelector } from "@/redux/hook";
import React from "react";
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAppSelector((state) => state.auth);

  const { data, isSuccess, isError, isLoading } = useGetAuthorQuery(
    token || ""
  );

  if (isLoading) {
    return (
      <div className="w-[100vw] center pt-[100px]">
        <Loading />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthProvider;
