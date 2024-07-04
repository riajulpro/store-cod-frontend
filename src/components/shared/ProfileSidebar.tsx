"use client";

import { useAppSelector } from "@/redux/hook";
import { customerLinks, ownerLinks } from "@/utils/profileSidebarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileSidebar = () => {
  const path = usePathname();
  const {user} = useAppSelector(state => state.auth)
  
  return (
    <div className="flex flex-col gap-[15px]">
      {user && user.role === "customer" &&  customerLinks.map(({ Icon, href, label }, i) => (
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
      {user && user.role === "owner" &&  ownerLinks.map(({ Icon, href, label }, i) => (
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
    </div>
  );
};

export default ProfileSidebar;
