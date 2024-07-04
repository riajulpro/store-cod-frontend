"use client";

import { logout } from "@/redux/features/user/user.slice";
import { customerLinks } from "@/utils/profileSidebarLinks";
import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";
const ProfileSidebar = () => {
  const path = usePathname();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout(undefined));
    Cookies.remove("refreshToken");
  };

  return (
    <div className="flex flex-col gap-[15px]">
      {customerLinks.map(({ Icon, href, label }, i) => (
        <Link
          href={href}
          key={"profile" + i}
          className={`w-[240px] border-[1px] border-borderColor py-[12px] rounded-[5px] flex items-center justify-start gap-[5px] font-[500] pl-[20px] ${
            path === href
              ? "bg-primaryMat text-white"
              : "bg-white text-primaryTxt"
          }`}
        >
          <Icon /> {label}
        </Link>
      ))}
      <button
        className="w-[240px] border-[1px] border-borderColor py-[12px] rounded-[5px] flex items-center justify-start gap-[5px] font-[500] pl-[20px]"
        onClick={handleLogout}
      >
        <CiLogout /> Logout
      </button>
    </div>
  );
};

export default ProfileSidebar;
