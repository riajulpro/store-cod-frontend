import ProfileSidebar from "@/components/shared/ProfileSidebar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full min-h-screen flex items-start justify-center layout_container py-[50px]">
      <div className="min-h-[400px] overflow-auto flex items-start justify-start gap-[20px] p-[25px] rounded-[10px] shadow-md w-full">
        <ProfileSidebar />
        {children}
      </div>
    </div>
  );
};

export default layout;
