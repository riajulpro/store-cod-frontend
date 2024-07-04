import { BsCartCheck } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { RiUserSettingsLine } from "react-icons/ri";
export const customerLinks = [
  {
    href: "/profile",
    label: "Profile",
    Icon: CiUser,
  },
  {
    href: "/settings",
    label: "Account setting",
    Icon: RiUserSettingsLine,
  },
  {
    href: "/orders",
    label: "My orders",
    Icon: FiShoppingBag,
  },
  {
    href: "/track-order",
    label: "Track my order",
    Icon: BsCartCheck,
  },
];
